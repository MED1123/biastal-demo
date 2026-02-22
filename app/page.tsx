import Navbar from '../components/Navbar';
import ProductsGrid from '../components/ProductsGrid';
import ProductionSection from '../components/ProductionSection';
import FeaturesPromo from '../components/FeaturesPromo';
import Footer from '../components/Footer';
import Link from 'next/link';

const stats = [
  { value: '30+', label: 'Lat doświadczenia' },
  { value: '8', label: 'Kategorii produktów' },
  { value: '500', label: 'km zasięgu dostaw' },
];

export default function Home() {
  return (
    <div className="bg-black min-h-screen font-sans text-white flex flex-col overflow-x-hidden">
      <Navbar />

      <main className="flex-grow">

        {/* ── HERO ── */}
        <section
          className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 overflow-hidden"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-industry-orange mb-6">
              Biała Podlaska · Polska
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight mb-6">
              Stal{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #ff5a00 0%, #ff8c42 100%)' }}
              >
                na miarę
              </span>
              <br />
              Twojego projektu
            </h1>

            <p className="text-lg md:text-xl text-[#86868b] max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Solidny partner w przemyśle. Stal zbrojeniowa, profile, rury,
              blachy i nowoczesna prefabrykacja — dostawa do 500 km.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/zapytanie-ofertowe"
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #ff5a00, #ff3d00)' }}
              >
                <span className="relative z-10">Zapytanie ofertowe</span>
                <svg className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
              </Link>

              <Link
                href="/oferta"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm border border-white/20 text-white/80 hover:text-white hover:border-white/40 hover:bg-white/[0.06] transition-all duration-300"
              >
                Nasze produkty
              </Link>
            </div>
          </div>

          {/* Stats bar */}
          <div className="relative z-10 w-full max-w-3xl mx-auto mt-20">
            <div className="grid grid-cols-3 divide-x divide-white/10 border border-white/10 rounded-2xl bg-white/[0.04] backdrop-blur-sm overflow-hidden">
              {stats.map((s) => (
                <div key={s.label} className="py-6 text-center">
                  <p className="text-3xl md:text-4xl font-bold text-white">{s.value}</p>
                  <p className="text-xs text-[#86868b] mt-1 uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </section>

        <ProductsGrid />
        <ProductionSection />
        <FeaturesPromo />

      </main>

      <Footer />
    </div>
  );
}