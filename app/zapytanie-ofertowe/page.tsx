import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Zapytanie ofertowe – Biastal Wyroby Hutnicze',
  description: 'Skontaktuj się z nami i uzyskaj wycenę wyrobów hutniczych. Biastal Biała Podlaska.',
};

export default function ZapytanieOfertowePage() {
  return (
    <div className="bg-black min-h-screen font-sans flex flex-col text-white">
      <Navbar />

      <main className="flex-grow">
        {/* Page header */}
        <section className="pt-20 pb-12 px-5 border-b border-white/[0.06]">
          <div className="max-w-[1400px] mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-industry-orange mb-3">Biastal</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Zapytanie ofertowe</h1>
          </div>
        </section>

        <section className="py-16 px-5">
          <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-10">

            {/* LEFT: zdjęcie + info */}
            <div className="lg:w-80 shrink-0 space-y-5">
              <div
                className="w-full aspect-[3/4] rounded-2xl bg-cover bg-center border border-white/[0.06] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=600')" }}
              />
              <div className="rounded-2xl bg-[#1d1d1f] border border-white/[0.06] p-6 text-sm text-[#86868b] leading-relaxed">
                <p className="text-white font-semibold mb-2">Wskazówka</p>
                <p>
                  Skorzystaj z{' '}
                  <Link href="/kalkulator-wag" className="text-industry-orange hover:underline font-medium">
                    kalkulatora wag
                  </Link>
                  , aby wyliczyć wagę i złożyć gotowe zestawienie elementów do wyceny.
                </p>
              </div>
            </div>

            {/* RIGHT: formularz */}
            <div className="flex-1 rounded-2xl bg-[#1d1d1f] border border-white/[0.06] p-8">
              <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-industry-orange mb-8">Formularz zapytania</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { label: 'Imię i nazwisko lub nazwa firmy*', type: 'text' },
                    { label: 'Adres email*', type: 'email' },
                    { label: 'Numer telefonu*', type: 'tel' },
                    { label: 'Miejscowość', type: 'text' },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="block text-xs text-[#86868b] mb-2 uppercase tracking-wider">{f.label}</label>
                      <input
                        type={f.type}
                        className="w-full bg-black border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm focus:border-industry-orange focus:outline-none transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs text-[#86868b] mb-2 uppercase tracking-wider">Treść zapytania*</label>
                  <textarea
                    required
                    rows={6}
                    className="w-full bg-black border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm focus:border-industry-orange focus:outline-none transition-colors resize-none"
                    placeholder="Opisz czego potrzebujesz – rodzaj produktu, wymiary, ilość..."
                  />
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-white/[0.06]">
                  <span className="text-xs text-[#3d3d3f]">* – pola wymagane</span>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-all duration-300"
                    style={{ background: 'linear-gradient(135deg, #ff5a00, #ff3d00)' }}
                  >
                    Wyślij zapytanie
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}