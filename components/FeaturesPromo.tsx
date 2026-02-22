import Link from 'next/link';

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: 'Transport lub odbiór własny',
    desc: 'Dostawa bezpośrednio na budowę lub odbiór w siedzibie firmy w Białej Podlaskiej.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Nowoczesny tabor 4×4',
    desc: 'Flota samochodów z napędem na 4 koła — pewna dostawa w każdych warunkach drogowych.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'Profesjonalne zaplecze',
    desc: 'Nowoczesne hale produkcyjno-handlowe i magazyny z pełnym wyposażeniem.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    title: 'Cięcie stali w cenie',
    desc: 'Bezpłatne cięcie na wymiar wliczone w cenę zamówienia — bez ukrytych kosztów.',
  },
];

export default function FeaturesPromo() {
  return (
    <section className="py-28 bg-black">
      <div className="max-w-[1400px] mx-auto px-5">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          {/* LEFT: Oferujemy */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-industry-orange mb-3">
              Dlaczego my
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
              Oferujemy
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((f, idx) => (
                <div
                  key={idx}
                  className="group p-6 rounded-2xl bg-[#1d1d1f] border border-white/[0.06] hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-industry-orange/10 text-industry-orange flex items-center justify-center mb-4 group-hover:bg-industry-orange/20 transition-colors">
                    {f.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-[15px]">{f.title}</h3>
                  <p className="text-[#86868b] text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Kalkulator */}
          <div className="lg:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-industry-orange mb-3">
              Narzędzie
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Kalkulator<br />wag
            </h2>

            <div className="rounded-2xl border border-white/[0.08] bg-[#1d1d1f] p-8 text-center">
              <div
                className="w-32 h-32 mx-auto rounded-2xl bg-cover bg-center mb-6 opacity-80 border border-white/10"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=400')" }}
              />
              <p className="text-white font-medium mb-1">Sprawdź ile będzie ważyć</p>
              <p className="text-[#86868b] text-sm mb-8">Twoje zamówienie stalowe</p>

              <Link
                href="/kalkulator-wag"
                className="group w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold text-sm transition-all duration-300 overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #ff5a00, #ff3d00)' }}
              >
                Otwórz kalkulator
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}