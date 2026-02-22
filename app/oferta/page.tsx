"use client";
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

type Category = { id: string; title: string };

const categories: Category[] = [
  { id: 'pret-zebrowany', title: 'Pręt żebrowany' },
  { id: 'pret-okragly', title: 'Pręt okrągły gładki' },
  { id: 'pret-kwadratowy', title: 'Pręt kwadratowy' },
  { id: 'pret-plaski', title: 'Pręt płaski' },
  { id: 'blacha', title: 'Blacha' },
  { id: 'rura-okragla', title: 'Rura okrągła' },
  { id: 'profil-zamkniety', title: 'Profil zamknięty' },
  { id: 'ceownik-zg', title: 'Ceownik Z/G' },
  { id: 'katownik-zg', title: 'Kątownik Z/G' },
  { id: 'dwuteownik', title: 'Dwuteownik' },
  { id: 'ceownik-gw', title: 'Ceownik G/W' },
  { id: 'katownik-gw', title: 'Kątownik G/W' },
  { id: 'siatki', title: 'Siatki ogrodzeniowe' },
  { id: 'ogrodzenia', title: 'Ogrodzenia / Panele' },
  { id: 'produkcja', title: 'Produkcja zbrojeń' },
];

// Reusable table style helpers
const TH = ({ children }: { children: React.ReactNode }) => (
  <th className="py-2.5 px-4 text-left text-[11px] font-semibold uppercase tracking-widest text-[#86868b] bg-[#111] border-b border-white/[0.06]">{children}</th>
);
const TD = ({ children, bold }: { children: React.ReactNode; bold?: boolean }) => (
  <td className={`py-2 px-4 border-b border-white/[0.04] text-sm ${bold ? 'font-semibold text-white' : 'text-[#86868b]'}`}>{children}</td>
);
const TR = ({ children }: { children: React.ReactNode }) => (
  <tr className="hover:bg-white/[0.03] transition-colors">{children}</tr>
);
const SteelNote = () => (
  <p className="mt-6 text-xs text-[#3d3d3f] border-t border-white/[0.06] pt-4">
    Gatunek S235JR wg. EN 10025 · Wagi teoretyczne, nieuwzględniające tolerancji wykonania.
  </p>
);
const ProductImg = ({ seed }: { seed: number }) => (
  <img
    src={`https://picsum.photos/400/280?random=${seed}`}
    alt="Produkt"
    className="w-full md:w-72 h-48 object-cover rounded-xl border border-white/[0.06] opacity-80"
  />
);

function renderContent(activeTab: string) {
  switch (activeTab) {
    case 'pret-zebrowany':
      return (
        <div>
          <ProductImg seed={101} />
          <p className="text-[#86868b] text-sm mt-5 mb-6">Pręty żebrowane do zbrojenia betonu w gatunkach B500SP oraz BST500S.</p>
          <div className="overflow-x-auto"><table className="min-w-[200px] rounded-xl overflow-hidden border border-white/[0.06]">
            <thead><tr><TH>Asortyment</TH><TH>kg/mb</TH></tr></thead>
            <tbody>
              {[['8', '0,400'], ['10', '0,620'], ['12', '0,890'], ['14', '1,210'], ['16', '1,580'], ['18', '2,000'], ['20', '2,470'], ['25', '3,850']].map(([s, w]) => (
                <TR key={s}><TD bold>Pręt żebr. {s}</TD><TD>{w}</TD></TR>
              ))}
            </tbody>
          </table></div>
          <SteelNote />
        </div>
      );
    case 'pret-okragly':
      return (
        <div>
          <ProductImg seed={102} />
          <p className="text-[#86868b] text-sm mt-5 mb-6">Pręty okrągłe gładkie w zakresie średnic 5–50 mm.</p>
          <div className="overflow-x-auto"><table className="min-w-[200px] rounded-xl overflow-hidden border border-white/[0.06]">
            <thead><tr><TH>Asortyment</TH><TH>kg/mb</TH></tr></thead>
            <tbody>
              {[['6', '0,220'], ['8', '0,390'], ['10', '0,620'], ['12', '0,890'], ['16', '1,580'], ['20', '2,470'], ['30', '5,550'], ['50', '15,410']].map(([s, w]) => (
                <TR key={s}><TD bold>Pręt okr. gładki {s}</TD><TD>{w}</TD></TR>
              ))}
            </tbody>
          </table></div>
          <SteelNote />
        </div>
      );
    case 'pret-kwadratowy':
      return (
        <div>
          <ProductImg seed={103} />
          <p className="text-[#86868b] text-sm mt-5 mb-6">Ciągnione pręty kwadratowe w gatunkach S235JR oraz S235JRH.</p>
          <div className="overflow-x-auto"><table className="min-w-[200px] rounded-xl overflow-hidden border border-white/[0.06]">
            <thead><tr><TH>Asortyment</TH><TH>kg/mb</TH></tr></thead>
            <tbody>
              {[['8', '0,500'], ['10', '0,790'], ['12', '1,130'], ['14', '1,540'], ['16', '2,010'], ['18', '2,540'], ['20', '3,140']].map(([s, w]) => (
                <TR key={s}><TD bold>Pręt kwadrat {s}</TD><TD>{w}</TD></TR>
              ))}
            </tbody>
          </table></div>
          <SteelNote />
        </div>
      );
    case 'pret-plaski':
      return (
        <div>
          <ProductImg seed={104} />
          <p className="text-[#86868b] text-sm mt-5 mb-6">Szeroki wachlarz prętów płaskich. Wagi [kg/mb].</p>
          <div className="overflow-x-auto"><table className="rounded-xl overflow-hidden border border-white/[0.06] text-sm">
            <thead><tr><TH>H\S</TH><TH>4</TH><TH>5</TH><TH>6</TH><TH>8</TH><TH>10</TH><TH>12</TH></tr></thead>
            <tbody>
              {[['20', '0,628', '0,785', '0,942', '1,256', '1,570', '1,884'], ['30', '0,942', '1,178', '1,413', '1,884', '2,355', '2,826'], ['40', '1,256', '1,570', '1,884', '2,512', '3,140', '3,768'], ['50', '1,570', '1,963', '2,355', '3,140', '3,925', '4,710'], ['100', '3,140', '3,925', '4,710', '6,280', '7,850', '9,420']].map(([h, ...vals]) => (
                <TR key={h}><TD bold>{h}</TD>{vals.map((v, i) => <TD key={i}>{v}</TD>)}</TR>
              ))}
            </tbody>
          </table></div>
          <SteelNote />
        </div>
      );
    case 'blacha':
      return (
        <div>
          <ProductImg seed={105} />
          <p className="text-[#86868b] text-sm mt-5 mb-2">Blachy walcowane na zimno i na gorąco. Na zamówienie: kotłowe, trudnościeralne, ryflowane.</p>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mt-6 mb-3">Blachy gładkie [kg/arkusz]</p>
          <div className="overflow-x-auto mb-6"><table className="rounded-xl overflow-hidden border border-white/[0.06] text-sm">
            <thead><tr><TH>Grub. / Format</TH><TH>1000×2000</TH><TH>1250×2500</TH><TH>1500×3000</TH></tr></thead>
            <tbody>
              {[['0,5', '7,85', '12,27', '17,66'], ['1', '15,70', '24,53', '35,33'], ['2', '31,40', '49,06', '70,65'], ['5', '78,50', '122,66', '176,63'], ['10', '157,00', '245,31', '353,25']].map(([h, ...v]) => (
                <TR key={h}><TD bold>{h}</TD>{v.map((x, i) => <TD key={i}>{x}</TD>)}</TR>
              ))}
            </tbody>
          </table></div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3">Blachy ryflowane łezkowe [kg/arkusz]</p>
          <div className="overflow-x-auto"><table className="rounded-xl overflow-hidden border border-white/[0.06] text-sm">
            <thead><tr><TH>Grub. / Format</TH><TH>1000×2000</TH><TH>1250×2500</TH><TH>1500×3000</TH></tr></thead>
            <tbody>
              {[['3', '51,60', '80,63', '116,10'], ['5', '84,00', '131,25', '189,00'], ['10', '165,20', '258,13', '371,70']].map(([h, ...v]) => (
                <TR key={h}><TD bold>{h}</TD>{v.map((x, i) => <TD key={i}>{x}</TD>)}</TR>
              ))}
            </tbody>
          </table></div>
          <SteelNote />
        </div>
      );
    case 'rura-okragla':
      return (
        <div>
          <ProductImg seed={106} />
          <p className="text-[#86868b] text-sm mt-5 mb-2">Rury czarne ze szwem, bezszwowe i ocynkowane.</p>
          <div className="overflow-x-auto mt-5"><table className="rounded-xl overflow-hidden border border-white/[0.06] text-sm">
            <thead><tr><TH>Śr. / Ścianka</TH><TH>2</TH><TH>2,3</TH><TH>2,6</TH><TH>2,9</TH><TH>3,2</TH><TH>4</TH></tr></thead>
            <tbody>
              {[['21,3', '0,95', '1,08', '1,20', '1,32', '1,43', '1,71'], ['33,7', '1,56', '1,78', '1,99', '2,20', '2,41', '2,93'], ['48,3', '2,28', '2,61', '2,93', '3,25', '3,56', '4,37'], ['60,3', '2,88', '3,29', '3,70', '4,11', '4,51', '5,55'], ['114,3', '5,54', '6,35', '7,16', '7,97', '8,77', '10,88']].map(([d, ...v]) => (
                <TR key={d}><TD bold>{d}</TD>{v.map((x, i) => <TD key={i}>{x}</TD>)}</TR>
              ))}
            </tbody>
          </table></div>
          <SteelNote />
        </div>
      );
    case 'profil-zamkniety':
      return (
        <div>
          <ProductImg seed={20} />
          <p className="text-[#86868b] text-sm mt-5 mb-5">Profile zamknięte kwadratowe i prostokątne. Wagi [kg/mb].</p>
          <div className="overflow-x-auto"><table className="rounded-xl overflow-hidden border border-white/[0.06] text-sm">
            <thead><tr><TH>Wym. / Ścianka</TH><TH>1,5</TH><TH>2</TH><TH>3</TH><TH>4</TH></tr></thead>
            <tbody>
              {[['20', '0,87', '1,13', '1,60', '–'], ['40', '1,81', '2,39', '3,49', '4,52'], ['60', '3,64', '5,37', '7,03', '8,63'], ['100', '6,15', '9,14', '12,06', '14,92']].map(([d, ...v]) => (
                <TR key={d}><TD bold>{d}</TD>{v.map((x, i) => <TD key={i}>{x}</TD>)}</TR>
              ))}
            </tbody>
          </table></div>
          <SteelNote />
        </div>
      );
    case 'ceownik-zg':
    case 'katownik-zg': {
      const titleZG = activeTab === 'ceownik-zg' ? 'Ceownik zimnogięty (Z/G)' : 'Kątownik zimnogięty (Z/G)';
      return (
        <div>
          <ProductImg seed={activeTab === 'ceownik-zg' ? 21 : 25} />
          <p className="text-[#86868b] text-sm mt-5 mb-5">{titleZG} — szeroki asortyment profili zimnogiętych. Wagi [kg/mb].</p>
          <div className="overflow-x-auto"><table className="rounded-xl overflow-hidden border border-white/[0.06] text-sm">
            <thead><tr><TH>Wymiar / Ścianka</TH><TH>2</TH><TH>3</TH><TH>4</TH><TH>5</TH></tr></thead>
            <tbody>
              {[['30×30', '1,30', '1,86', '–', '–'], ['40×40', '1,77', '2,57', '3,25', '–'], ['60×40', '3,00', '3,88', '–', '–'], ['100×50', '4,43', '5,75', '7,02', '8,25']].map(([d, ...v]) => (
                <TR key={d}><TD bold>{d}</TD>{v.map((x, i) => <TD key={i}>{x}</TD>)}</TR>
              ))}
            </tbody>
          </table></div>
          <SteelNote />
        </div>
      );
    }
    case 'dwuteownik':
      return (
        <div>
          <ProductImg seed={110} />
          <p className="text-[#86868b] text-sm mt-5 mb-5">Szerokie asortyment dwuteowników INP oraz IPE. Wagi [kg/mb].</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {[['INP', [['80 (80×42×3,9×5,9)', '5,94'], ['120 (120×58×5,1×7,7)', '11,10'], ['200 (200×90×7,5×11,3)', '26,20'], ['300 (300×125×10,8×16,2)', '54,20']]], ['IPE', [['80 (80×46×3,8×5,2)', '6,00'], ['120 (120×64×4,4×6,3)', '10,40'], ['200 (200×100×5,6×8,5)', '22,40'], ['300 (300×150×7,1×10,7)', '42,20']]]].map(([title, rows]) => (
              <div key={title as string}>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-2">Dwuteownik {title as string}</p>
                <table className="w-full rounded-xl overflow-hidden border border-white/[0.06] text-sm">
                  <thead><tr><TH>Asortyment</TH><TH>kg/mb</TH></tr></thead>
                  <tbody>{(rows as string[][]).map(([s, w]) => <TR key={s}><TD bold>{s}</TD><TD>{w}</TD></TR>)}</tbody>
                </table>
              </div>
            ))}
          </div>
          <SteelNote />
        </div>
      );
    case 'ceownik-gw':
    case 'katownik-gw': {
      const titleGW = activeTab === 'ceownik-gw' ? 'Ceownik gorącowalcowany (G/W)' : 'Kątownik gorącowalcowany (G/W)';
      return (
        <div>
          <ProductImg seed={activeTab === 'ceownik-gw' ? 111 : 22} />
          <p className="text-[#86868b] text-sm mt-5 mb-5">{titleGW}. Wagi [kg/mb].</p>
          <div className="overflow-x-auto"><table className="rounded-xl overflow-hidden border border-white/[0.06] text-sm">
            <thead><tr><TH>Wymiar / Ścianka</TH><TH>3</TH><TH>4</TH><TH>5</TH><TH>6</TH></tr></thead>
            <tbody>
              {[['30×30', '1,36', '1,78', '2,18', '–'], ['40×40', '1,84', '2,42', '2,97', '3,52'], ['50×50', '–', '3,06', '3,77', '4,47'], ['100×50', '–', '–', '6,85', '8,99']].map(([d, ...v]) => (
                <TR key={d}><TD bold>{d}</TD>{v.map((x, i) => <TD key={i}>{x}</TD>)}</TR>
              ))}
            </tbody>
          </table></div>
          <SteelNote />
        </div>
      );
    }
    case 'siatki':
      return (
        <div>
          <div className="flex gap-3">
            <ProductImg seed={112} />
            <ProductImg seed={113} />
          </div>
          <p className="text-[#86868b] text-sm mt-5 mb-2">Siatki ogrodzeniowe w wysokościach 0,5–4,0 m, ocynkowane i powlekane.</p>
          <ul className="list-disc pl-5 text-[#86868b] text-sm mb-5 space-y-1">
            <li>Siatki ogrodzeniowe ocynkowane i powlekane</li>
            <li>Słupki ogrodzeniowe (z rur i profili)</li>
            <li>Akcesoria montażowe (druty naciągowe, napinacze)</li>
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-2">Siatki ocynkowane</p>
              <table className="w-full rounded-xl overflow-hidden border border-white/[0.06] text-sm">
                <thead><tr><TH>Drut/Oczko</TH><TH>20×20</TH><TH>50×50</TH><TH>60×60</TH></tr></thead>
                <tbody>
                  {[['2,5', 'x', 'x', 'x'], ['3', '–', 'x', 'x'], ['4', '–', 'x', 'x']].map(([d, ...v]) => (
                    <TR key={d}><TD bold>{d}</TD>{v.map((x, i) => <TD key={i}>{x}</TD>)}</TR>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-2">Siatki powlekane</p>
              <table className="w-full rounded-xl overflow-hidden border border-white/[0.06] text-sm">
                <thead><tr><TH>Drut/Oczko</TH><TH>50×50</TH><TH>60×60</TH></tr></thead>
                <tbody>
                  {[['2,0/3,2', 'x', 'x'], ['2,5/3,7', 'x', 'x']].map(([d, ...v]) => (
                    <TR key={d}><TD bold>{d}</TD>{v.map((x, i) => <TD key={i}>{x}</TD>)}</TR>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    case 'ogrodzenia':
      return (
        <div>
          <div className="flex flex-wrap gap-3 mb-5">
            {[114, 115, 116].map((s) => <img key={s} src={`https://picsum.photos/300/200?random=${s}`} alt="Ogrodzenie" className="w-36 h-24 object-cover rounded-xl border border-white/[0.06] opacity-80" />)}
          </div>
          <p className="text-white font-semibold mb-3 text-sm">Systemy ogrodzeniowe z profili zamkniętych lub kątowników:</p>
          <ul className="list-disc pl-5 text-[#86868b] text-sm mb-5 space-y-1">
            <li>Bramy otwierane i przesuwne</li><li>Przęsła i Furtki</li>
            <li>Słupki ogrodzeniowe</li><li>Akcesoria bramowe</li>
            <li>Panele ocynkowane (fi 4 lub fi 5) i powlekane — wys. 120, 150, 170, 200 cm</li>
          </ul>
          <p className="text-[#86868b] text-sm mb-4">Pobierz <a href="https://www.biastal.pl/public/upload/katalog.pdf" target="_blank" rel="noopener noreferrer" className="text-industry-orange hover:underline">katalog ogrodzeń PDF</a></p>
          <div className="bg-industry-orange/10 border border-industry-orange/30 rounded-xl px-5 py-4 text-sm text-[#86868b]">
            Szczegółowych informacji udzielają nasi specjaliści, tel.{' '}
            <a href="tel:833443170" className="text-industry-orange font-semibold">(83) 344 31 70</a>
          </div>
        </div>
      );
    case 'produkcja':
      return (
        <div>
          <div className="flex flex-wrap gap-3 mb-5">
            {[117, 118, 119].map((s) => <img key={s} src={`https://picsum.photos/300/200?random=${s}`} alt="Produkcja" className="w-36 h-24 object-cover rounded-xl border border-white/[0.06] opacity-80" />)}
          </div>
          <div className="space-y-4 text-[#86868b] text-sm leading-relaxed">
            <p>Wykonujemy elementy zbrojeń prefabrykowanych zgodnie z indywidualnym zamówieniem klienta na nowoczesnych giętarkach automatycznych.</p>
            <p>Stosowana technologia umożliwia uzyskanie figur wklęsłych i wypukłych (haki, spirale, strzemiona) z prętów fi 6–32. Oferujemy pręty proste cięte na wymiar.</p>
            <div className="bg-industry-orange/10 border border-industry-orange/30 rounded-xl px-5 py-4">
              <p className="text-industry-orange font-semibold mb-1">Krótkie terminy realizacji.</p>
              <p>Kontakt: <a href="tel:833443170" className="text-white hover:underline">(83) 344 31 70</a></p>
            </div>
          </div>
        </div>
      );
    default:
      return <p className="text-[#86868b]">Wybierz kategorię z menu po lewej.</p>;
  }
}

export default function OfertaPage() {
  const [activeTab, setActiveTab] = useState('pret-zebrowany');

  return (
    <div className="bg-black min-h-screen font-sans flex flex-col text-white">
      <Navbar />

      <main className="flex-grow">
        {/* Header */}
        <section className="pt-20 pb-12 px-5 border-b border-white/[0.06]">
          <div className="max-w-[1400px] mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-industry-orange mb-3">Asortyment</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Oferta</h1>
          </div>
        </section>

        <section className="py-10 px-5">
          <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-6">

            {/* Sidebar */}
            <aside className="lg:w-64 shrink-0">
              <ul className="flex flex-row lg:flex-col flex-wrap gap-1">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setActiveTab(cat.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2
                        ${activeTab === cat.id
                          ? 'bg-industry-orange text-white'
                          : 'text-[#86868b] hover:text-white hover:bg-white/[0.06]'
                        }`}
                    >
                      {activeTab === cat.id && (
                        <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                      )}
                      {cat.title}
                    </button>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Content */}
            <div className="flex-1 min-w-0 rounded-2xl bg-[#1d1d1f] border border-white/[0.06] p-8 min-h-[500px]">
              <h2 className="text-2xl font-bold tracking-tight mb-8">
                {categories.find(c => c.id === activeTab)?.title}
              </h2>
              {renderContent(activeTab)}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}