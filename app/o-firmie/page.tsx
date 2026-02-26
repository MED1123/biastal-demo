import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const galleryImages = [
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=600',
  'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=600',
  'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=600',
  'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?q=80&w=600',
  'https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?q=80&w=600',
];

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O firmie',
  description:
    'Poznaj historię i wartości firmy Biastal – solidnego dostawcy wyrobów hutniczych z Białej Podlaskiej od 1994 roku. Magazyn, produkcja i dostawa do 500 km.',
  keywords: ['Biastal o firmie', 'hurtownia stali historia', 'wyroby hutnicze Biała Podlaska'],
  alternates: { canonical: '/o-firmie' },
  openGraph: {
    title: 'O firmie – Biastal Wyroby Hutnicze',
    description: 'Solidny dostawca wyrobów hutniczych od 1994 roku. Poznań historię Biastal.',
    url: 'https://biastal.pl/o-firmie',
  },
};

export default function OFirmiePage() {
  return (
    <div className="bg-black min-h-screen font-sans flex flex-col text-white">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section
          className="relative flex items-center justify-center text-center px-5 overflow-hidden border-b border-white/[0.06]"
          style={{ minHeight: '40vh', backgroundImage: "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1600')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black/75" />
          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-industry-orange mb-3">Biastal</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">O firmie</h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-24 px-5">
          <div className="max-w-5xl mx-auto">

            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-industry-orange mb-3">Kim jesteśmy</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
                Biastal – zaufanie i wiarygodność
              </h2>
              <div className="space-y-5 text-[#86868b] leading-relaxed text-lg">
                <p>
                  Jesteśmy rzetelnym i profesjonalnym dostawcą wyrobów hutniczych wielu
                  znanych i sprawdzonych producentów z kraju i zagranicy. Dysponujemy
                  największym w regionie magazynem z pełną paletą asortymentową, dzięki
                  któremu zamówienia realizowane są szybko i kompleksowo.
                </p>
                <p>
                  Kierując się potrzebami klienta, dostarczamy towar bezpośrednio od
                  producenta do odbiorcy, na terenie całego kraju. Miła i wyszkolona kadra,
                  profesjonalnie zorganizowany magazyn oraz nowoczesny tabor samochodowy
                  przekłada się na wysoki poziom satysfakcji klienta.
                </p>
                <p>
                  Jesteśmy firmą stale się rozwijającą i sukcesywnie inwestujemy w nowoczesne
                  rozwiązania technologiczne. Chcąc zapewnić naszym klientom jak najwyższy
                  poziom wyrobów i usług uruchomiliśmy własną produkcję strzemion budowlanych
                  i innych elementów zbrojeń prefabrykowanych.
                </p>
              </div>
            </div>

            {/* Galeria */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-industry-orange mb-6">Galeria</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {galleryImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="aspect-square rounded-xl overflow-hidden group cursor-pointer border border-white/[0.06] hover:border-white/20 transition-all duration-300"
                  >
                    <img
                      src={img}
                      alt={`Biastal – zdjęcie ${idx + 1}`}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}