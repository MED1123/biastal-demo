"use client";
import { useState, useRef, useCallback } from 'react';

export interface PositionItem {
  id: number;
  name: string;
  length: number; // w metrach (do wyświetlenia)
  weight: number; // w kg
}

interface WeightCalculatorProps {
  onPositionsChange?: (positions: PositionItem[]) => void;
}

export default function WeightCalculator({ onPositionsChange }: WeightCalculatorProps = {}) {
  const [material, setMaterial] = useState('carbon_steel');
  const [shape, setShape] = useState('round_bar');
  const [dimensions, setDimensions] = useState({
    length: 1000, width: 100, thickness: 5, diameter: 20, wall: 2, sideA: 50, sideB: 30, quantity: 1
  });

  // Lista pozycji (pamięć podręczna)
  const [positions, setPositions] = useState<PositionItem[]>([]);
  const [nextId, setNextId] = useState(1);

  // System bezpieczeństwa – rate limiting
  const clickLog = useRef<Record<string, number[]>>({}); // sygnatura -> tablica timestampów
  const [blocked, setBlocked] = useState(false);

  // Gęstość w g/cm3 dla różnych materiałów
  const getDensity = () => {
    if (material === 'stainless') return 7.9;
    if (material === 'aluminum') return 2.7;
    return 7.85; // Domślnie stal czarna (węglowa)
  };

  const density = getDensity();

  const handleInputChange = (e: any) => {
    setDimensions({ ...dimensions, [e.target.name]: parseFloat(e.target.value) || 0 });
  };

  const getShapeName = () => {
    const shapeNames: Record<string, string> = {
      ribbed_bar: 'Pręt żebrowany',
      round_bar: 'Pręt okrągły gładki',
      square_bar: 'Pręt kwadratowy',
      flat_bar: 'Pręt płaski',
      sheet: 'Blacha',
      tube: 'Rura okrągła',
      rectangular_tube: 'Profil zamknięty',
    };
    return shapeNames[shape] || shape;
  };

  const getDimensionSuffix = () => {
    const { diameter, sideA, sideB, width, thickness, wall } = dimensions;
    if (shape === 'round_bar' || shape === 'ribbed_bar') return ` Ø${diameter}`;
    if (shape === 'square_bar') return ` ${sideA}x${sideA}`;
    if (shape === 'flat_bar') return ` ${width}x${thickness}`;
    if (shape === 'sheet') return ` ${width}x${thickness}`;
    if (shape === 'tube') return ` Ø${diameter}x${wall}`;
    if (shape === 'rectangular_tube') return ` ${sideA}x${sideB}x${wall}`;
    return '';
  };

  const calculateWeight = () => {
    let volume = 0; // Objętość w cm3
    const { length, width, thickness, diameter, wall, sideA, sideB, quantity } = dimensions;
    const l = length / 10; // mm -> cm

    if (shape === 'sheet') {
      volume = l * (width / 10) * (thickness / 10);
    } else if (shape === 'round_bar' || shape === 'ribbed_bar') {
      const r = (diameter / 10) / 2;
      volume = Math.PI * Math.pow(r, 2) * l;
    } else if (shape === 'tube') {
      const outerR = (diameter / 10) / 2;
      const innerR = outerR - (wall / 10);
      volume = Math.PI * (Math.pow(outerR, 2) - Math.pow(innerR, 2)) * l;
    } else if (shape === 'square_bar') {
      const a = sideA / 10;
      volume = a * a * l;
    } else if (shape === 'flat_bar') {
      volume = (width / 10) * (thickness / 10) * l;
    } else if (shape === 'rectangular_tube') {
      const outerA = sideA / 10;
      const outerB = sideB / 10;
      const w = wall / 10;
      const innerA = Math.max(0, outerA - 2 * w);
      const innerB = Math.max(0, outerB - 2 * w);
      volume = (outerA * outerB - innerA * innerB) * l;
    }

    const weight = (volume * density) / 1000; // w kg
    return (weight * quantity);
  };

  const calculatedWeight = calculateWeight();

  const getSignature = useCallback(() => {
    return `${shape}|${dimensions.length}|${dimensions.diameter}|${dimensions.sideA}|${dimensions.sideB}|${dimensions.width}|${dimensions.thickness}|${dimensions.wall}|${dimensions.quantity}`;
  }, [shape, dimensions]);

  const addToList = () => {
    const sig = getSignature();
    const now = Date.now();
    const WINDOW_MS = 60_000;
    const MAX_CLICKS = 20;

    // Odfiltruj kliknięcia starsze niż 60 s
    const recent = (clickLog.current[sig] ?? []).filter(t => now - t < WINDOW_MS);
    recent.push(now);
    clickLog.current[sig] = recent;

    if (recent.length > MAX_CLICKS) {
      setBlocked(true);
      return;
    }

    const name = `${getShapeName()}${getDimensionSuffix()}`;
    const newItem: PositionItem = {
      id: nextId,
      name,
      length: parseFloat((dimensions.length / 1000).toFixed(3)), // mm -> m
      weight: parseFloat(calculatedWeight.toFixed(2)),
    };
    const updated = [...positions, newItem];
    setPositions(updated);
    onPositionsChange?.(updated);
    setNextId(prev => prev + 1);
  };

  const removePosition = (id: number) => {
    const updated = positions.filter(p => p.id !== id);
    setPositions(updated);
    onPositionsChange?.(updated);
  };

  const clearList = () => {
    setPositions([]);
    onPositionsChange?.([]);
    setNextId(1);
  };

  const totalWeight = positions.reduce((sum, p) => sum + p.weight, 0);

  return (
    <div className="bg-steel-gray p-8 rounded-none border-l-4 border-industry-orange text-white w-full shadow-2xl">

      {/* Popup blokady */}
      {blocked && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-steel-dark border-2 border-industry-orange max-w-sm w-full mx-4 p-8 text-center shadow-2xl">
            <div className="text-4xl mb-4">⚠️</div>
            <h3 className="text-xl font-bold text-industry-orange uppercase tracking-wider mb-3">
              Zbyt szybkie dodawanie
            </h3>
            <p className="text-steel-light text-sm mb-6 leading-relaxed">
              Wykryto ponad 20 prób dodania tej samej pozycji w ciągu minuty.
              Poczekaj chwilę przed kolejnym dodaniem.
            </p>
            <button
              onClick={() => setBlocked(false)}
              className="bg-industry-orange hover:bg-orange-600 text-white font-bold py-2 px-8 uppercase tracking-wider transition-colors duration-200"
            >
              Rozumiem
            </button>
          </div>
        </div>
      )}

      <h2 className="text-2xl font-bold mb-6 tracking-wider uppercase">Parametry materiału</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm text-steel-light mb-2">Rodzaj stopu</label>
          <select
            className="w-full bg-steel-dark border border-gray-600 p-3 text-white focus:border-industry-orange outline-none"
            value={material} onChange={(e) => setMaterial(e.target.value)}
          >
            <option value="carbon_steel">Stal czarna / konstrukcyjna (7.85 g/cm³)</option>
            <option value="stainless">Stal Nierdzewna (7.9 g/cm³)</option>
            <option value="aluminum">Aluminium (2.7 g/cm³)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-steel-light mb-2">Asortyment / Kształt</label>
          <select
            className="w-full bg-steel-dark border border-gray-600 p-3 text-white focus:border-industry-orange outline-none"
            value={shape} onChange={(e) => setShape(e.target.value)}
          >
            <option value="ribbed_bar">Pręt żebrowany</option>
            <option value="round_bar">Pręt okrągły gładki</option>
            <option value="square_bar">Pręt kwadratowy</option>
            <option value="flat_bar">Pręt płaski</option>
            <option value="sheet">Blacha</option>
            <option value="tube">Rura okrągła</option>
            <option value="rectangular_tube">Profil zamknięty (prostokątny)</option>
          </select>
        </div>
      </div>

      {/* Dynamiczne pola wymiarów w zależności od wybranego kształtu */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-[#1f2327] p-6 border border-gray-700">
        <div className="flex flex-col">
          <label className="text-xs text-steel-light mb-1">Długość całkowita (mm)</label>
          <input type="number" name="length" value={dimensions.length} onChange={handleInputChange} className="bg-steel-dark border border-gray-600 p-2 text-white outline-none focus:border-industry-orange" />
        </div>

        {shape === 'sheet' && (
          <>
            <div className="flex flex-col">
              <label className="text-xs text-steel-light mb-1">Szerokość blachy (mm)</label>
              <input type="number" name="width" value={dimensions.width} onChange={handleInputChange} className="bg-steel-dark border border-gray-600 p-2 text-white outline-none focus:border-industry-orange" />
            </div>
            <div className="flex flex-col">
              <label className="text-xs text-steel-light mb-1">Grubość blachy (mm)</label>
              <input type="number" name="thickness" value={dimensions.thickness} onChange={handleInputChange} className="bg-steel-dark border border-gray-600 p-2 text-white outline-none focus:border-industry-orange" />
            </div>
          </>
        )}

        {shape === 'flat_bar' && (
          <>
            <div className="flex flex-col">
              <label className="text-xs text-steel-light mb-1">Szerokość płaskownika (mm)</label>
              <input type="number" name="width" value={dimensions.width} onChange={handleInputChange} className="bg-steel-dark border border-gray-600 p-2 text-white outline-none focus:border-industry-orange" />
            </div>
            <div className="flex flex-col">
              <label className="text-xs text-steel-light mb-1">Grubość płaskownika (mm)</label>
              <input type="number" name="thickness" value={dimensions.thickness} onChange={handleInputChange} className="bg-steel-dark border border-gray-600 p-2 text-white outline-none focus:border-industry-orange" />
            </div>
          </>
        )}

        {(shape === 'round_bar' || shape === 'ribbed_bar' || shape === 'tube') && (
          <div className="flex flex-col">
            <label className="text-xs text-steel-light mb-1">Średnica zewnętrzna (mm)</label>
            <input type="number" name="diameter" value={dimensions.diameter} onChange={handleInputChange} className="bg-steel-dark border border-gray-600 p-2 text-white outline-none focus:border-industry-orange" />
          </div>
        )}

        {shape === 'square_bar' && (
          <div className="flex flex-col">
            <label className="text-xs text-steel-light mb-1">Bok pręta (mm)</label>
            <input type="number" name="sideA" value={dimensions.sideA} onChange={handleInputChange} className="bg-steel-dark border border-gray-600 p-2 text-white outline-none focus:border-industry-orange" />
          </div>
        )}

        {shape === 'rectangular_tube' && (
          <>
            <div className="flex flex-col">
              <label className="text-xs text-steel-light mb-1">Bok A (mm)</label>
              <input type="number" name="sideA" value={dimensions.sideA} onChange={handleInputChange} className="bg-steel-dark border border-gray-600 p-2 text-white outline-none focus:border-industry-orange" />
            </div>
            <div className="flex flex-col">
              <label className="text-xs text-steel-light mb-1">Bok B (mm)</label>
              <input type="number" name="sideB" value={dimensions.sideB} onChange={handleInputChange} className="bg-steel-dark border border-gray-600 p-2 text-white outline-none focus:border-industry-orange" />
            </div>
          </>
        )}

        {(shape === 'tube' || shape === 'rectangular_tube') && (
          <div className="flex flex-col">
            <label className="text-xs text-steel-light mb-1">Grubość ścianki (mm)</label>
            <input type="number" name="wall" value={dimensions.wall} onChange={handleInputChange} className="bg-steel-dark border border-gray-600 p-2 text-white outline-none focus:border-industry-orange" />
          </div>
        )}

        <div className="flex flex-col">
          <label className="text-xs text-industry-orange font-bold mb-1">Ilość sztuk</label>
          <input type="number" name="quantity" value={dimensions.quantity} onChange={handleInputChange} className="bg-steel-dark border border-industry-orange p-2 text-white outline-none focus:bg-black" />
        </div>
      </div>

      {/* Wynik i przycisk dodaj do listy */}
      <div className="bg-steel-dark p-6 border border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <span className="text-steel-light uppercase text-sm tracking-widest text-center md:text-left">
          Szacowana Waga Całkowita:<br />
          <span className="text-xs text-gray-500 normal-case">(wartość teoretyczna, nie uwzględnia tolerancji hutniczej)</span>
        </span>
        <span className="text-4xl font-mono font-bold text-industry-orange whitespace-nowrap">
          {calculatedWeight.toFixed(2)} <span className="text-xl text-white">kg</span>
        </span>
        <button
          onClick={addToList}
          className="bg-industry-orange hover:bg-orange-600 text-white font-bold py-3 px-6 uppercase tracking-wider transition-colors duration-200 whitespace-nowrap"
        >
          + Dodaj do listy
        </button>
      </div>

      {/* Lista pozycji */}
      {positions.length > 0 && (
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-4 tracking-wider uppercase border-b border-gray-700 pb-3">
            Lista pozycji
          </h3>

          {/* ── Widok kart (mobile) ── */}
          <div className="md:hidden space-y-2">
            {positions.map((pos, index) => (
              <div key={pos.id} className="bg-[#1f2327] border border-gray-800 p-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-gray-500 text-xs">{index + 1}.</span>
                  <button
                    onClick={() => removePosition(pos.id)}
                    className="text-industry-orange hover:text-orange-400 text-xs uppercase tracking-wide transition-colors"
                  >
                    usuń »
                  </button>
                </div>
                <p className="text-white text-sm font-medium mb-2 leading-snug">{pos.name}</p>
                <div className="flex gap-4 text-xs text-gray-400">
                  <span>Dł.: <span className="text-gray-200">{pos.length} m</span></span>
                  <span>Masa: <span className="text-industry-orange font-mono font-bold">{pos.weight.toFixed(2)} kg</span></span>
                </div>
              </div>
            ))}
            <div className="bg-[#1f2327] border border-gray-800 p-4 flex justify-between items-center">
              <span className="text-steel-light text-sm uppercase tracking-wider font-bold">Suma</span>
              <div className="flex items-center gap-4">
                <span className="font-mono font-bold text-industry-orange text-lg">{totalWeight.toFixed(2)} kg</span>
                <button onClick={clearList} className="text-industry-orange hover:text-orange-400 text-xs uppercase tracking-wide transition-colors">
                  wyczyść »
                </button>
              </div>
            </div>
          </div>

          {/* ── Widok tabeli (tablet / desktop) ── */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1f2327] text-steel-light uppercase text-xs tracking-wider">
                  <th className="text-left py-3 px-4 border-b border-gray-700 w-10">Lp</th>
                  <th className="text-left py-3 px-4 border-b border-gray-700">Nazwa</th>
                  <th className="text-right py-3 px-4 border-b border-gray-700">Długość&nbsp;[m]</th>
                  <th className="text-right py-3 px-4 border-b border-gray-700">Masa&nbsp;[kg]</th>
                  <th className="text-right py-3 px-4 border-b border-gray-700">Opcje</th>
                </tr>
              </thead>
              <tbody>
                {positions.map((pos, index) => (
                  <tr key={pos.id} className="border-b border-gray-800 hover:bg-[#1a1e21] transition-colors">
                    <td className="py-3 px-4 text-gray-400">{index + 1}</td>
                    <td className="py-3 px-4 text-white">{pos.name}</td>
                    <td className="py-3 px-4 text-right text-gray-300">{pos.length}</td>
                    <td className="py-3 px-4 text-right font-mono font-semibold text-white">{pos.weight.toFixed(2)}</td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => removePosition(pos.id)}
                        className="text-industry-orange hover:text-orange-400 text-xs uppercase tracking-wide transition-colors"
                      >
                        usuń »
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-[#1f2327]">
                  <td colSpan={3} className="py-3 px-4 text-right font-bold uppercase tracking-wider text-steel-light">Suma</td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-industry-orange text-lg">{totalWeight.toFixed(2)}</td>
                  <td className="py-3 px-4 text-right">
                    <button onClick={clearList} className="text-industry-orange hover:text-orange-400 text-xs uppercase tracking-wide transition-colors">
                      wyczyść listę »
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}