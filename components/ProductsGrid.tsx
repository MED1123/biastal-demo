import Link from 'next/link';

const products = [
  { name: 'Stal zbrojeniowa', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800' },
  { name: 'Pręty', img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=800' },
  { name: 'Kształtowniki zimnowalcowane', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800' },
  { name: 'Siatki ogrodzeniowe', img: 'https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?q=80&w=800' },
  { name: 'Kształtowniki gorącowalcowane', img: 'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?q=80&w=800' },
  { name: 'Rury', img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800' },
  { name: 'Blachy', img: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=800' },
  { name: 'Ogrodzenia / panele', img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800' },
];

export default function ProductsGrid() {
  return (
    <section className="py-28 bg-black">
      <div className="max-w-[1400px] mx-auto px-5">

        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-industry-orange mb-3">
            Asortyment
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Oferowane produkty
          </h2>
          <p className="text-[#86868b] mt-4 max-w-xl mx-auto text-lg font-light">
            Pełen asortyment wyrobów hutniczych — od blachy po gotowe ogrodzenia.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product, idx) => (
            <Link
              key={idx}
              href="/oferta"
              className="group relative h-64 rounded-2xl overflow-hidden bg-[#1d1d1f] border border-white/[0.06] hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60"
            >
              {/* Photo */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
                style={{ backgroundImage: `url('${product.img}')` }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <h3 className="text-white font-semibold text-sm tracking-wide uppercase leading-tight">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mt-2 text-industry-orange text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span>Zobacz ofertę</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Orange accent line on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-industry-orange group-hover:w-full transition-all duration-500" />
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/oferta"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-white/20 text-[#86868b] hover:text-white hover:border-white/40 hover:bg-white/[0.06] transition-all duration-300"
          >
            Pełna oferta produktów
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}