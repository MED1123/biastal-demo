const productions = [
  {
    img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1000',
    title: 'Elementy zbrojeń prefabrykowanych',
    sub: 'Produkcja na wymiar według projektu',
    span: '',
  },
  {
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000',
    title: 'Haki, spirale, strzemiona',
    sub: 'Figury otwarte i zamknięte',
    span: '',
  },
  {
    img: 'https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?q=80&w=1600',
    title: 'Słupki ogrodzeniowe & panele',
    sub: 'Produkcja własna · Adaptacja gotowych elementów',
    span: 'md:col-span-2',
  },
];

export default function ProductionSection() {
  return (
    <section className="py-28 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-5">

        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-industry-orange mb-3">
            Możliwości
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Produkcja
          </h2>
          <p className="text-[#86868b] mt-4 max-w-xl mx-auto text-lg font-light">
            Własne zaplecze produkcyjne z nowoczesnymi maszynami — prefabrykacja na każdą skalę.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {productions.map((item, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-2xl bg-[#1d1d1f] border border-white/[0.06] hover:border-white/20 transition-all duration-500 ${item.span} ${idx < 2 ? 'h-72' : 'h-64'}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-50 group-hover:opacity-70"
                style={{ backgroundImage: `url('${item.img}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-lg md:text-xl leading-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-industry-orange text-sm font-medium">{item.sub}</p>
              </div>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-industry-orange group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}