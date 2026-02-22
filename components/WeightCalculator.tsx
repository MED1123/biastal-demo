"use client";
import { useState } from 'react';

export default function WeightCalculator() {
  const [material, setMaterial] = useState('carbon_steel');
  const [shape, setShape] = useState('round_bar');
  const [dimensions, setDimensions] = useState({ 
    length: 1000, width: 100, thickness: 5, diameter: 20, wall: 2, sideA: 50, sideB: 30, quantity: 1 
  });

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
      // Objętość zewnętrzna minus objętość "dziury" w środku
      const innerA = Math.max(0, outerA - 2 * w);
      const innerB = Math.max(0, outerB - 2 * w);
      volume = (outerA * outerB - innerA * innerB) * l;
    }

    const weight = (volume * density) / 1000; // w kg
    return (weight * quantity).toFixed(2);
  };

  return (
    <div className="bg-steel-gray p-8 rounded-none border-l-4 border-industry-orange text-white w-full shadow-2xl">
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

      <div className="bg-steel-dark p-6 border border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-steel-light uppercase text-sm tracking-widest text-center md:text-left">
          Szacowana Waga Całkowita:<br/>
          <span className="text-xs text-gray-500 normal-case">(wartość teoretyczna, nie uwzględnia tolerancji hutniczej)</span>
        </span>
        <span className="text-4xl font-mono font-bold text-industry-orange whitespace-nowrap">
          {calculateWeight()} <span className="text-xl text-white">kg</span>
        </span>
      </div>
    </div>
  );
}