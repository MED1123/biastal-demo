import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WeightCalculator from '../../components/WeightCalculator';
import ContactForm from '../../components/ContactForm';

export default function KalkulatorPage() {
  return (
    <div className="bg-steel-dark min-h-screen font-sans text-white flex flex-col">
      <Navbar />

      <main className="flex-grow py-12 px-4 bg-[#141618]">
        <div className="max-w-5xl mx-auto">

          {/* Nagłówek strony */}
          <div className="mb-10 border-l-4 border-industry-orange pl-6">
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
              Kalkulator <span className="text-industry-orange">Wag</span>
            </h1>
            <p className="text-steel-light text-base max-w-3xl">
              Skorzystaj z naszego narzędzia, aby szybko i precyzyjnie oszacować wagę zamawianych materiałów hutniczych.
              Wybierz odpowiedni profil z listy po lewej stronie, podaj wymiary w milimetrach, a system automatycznie przeliczy ciężar.
            </p>
          </div>

          {/* Sekcja Kalkulatora */}
          <div className="mb-12">
            <WeightCalculator />
          </div>

          {/* Sekcja Zapytania Ofertowego powiązana z kalkulatorem */}
          <div className="border-t border-gray-800 pt-12">
            <div className="mb-8 text-center md:text-left">
              <h2 className="text-2xl font-bold uppercase tracking-wider mb-2">Wyślij zapytanie na wyliczony materiał</h2>
              <p className="text-steel-light text-sm">
                Produkty, które wyliczyłeś powyżej, możesz opisać w treści poniższego zapytania, aby uzyskać szybką wycenę od naszego działu handlowego.
              </p>
            </div>

            {/* Wykorzystujemy ten sam gotowy komponent ContactForm, który stworzyliśmy wcześniej */}
            <ContactForm />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}