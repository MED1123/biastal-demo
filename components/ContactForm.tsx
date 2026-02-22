export default function ContactForm() {
    return (
      <form className="bg-steel-dark p-8 border border-gray-800 text-white max-w-2xl mx-auto">
        <h3 className="text-xl font-bold mb-6 border-b border-gray-700 pb-4">Formularz zapytania ofertowego</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm mb-2 text-steel-light">Imię i nazwisko *</label>
            <input type="text" className="w-full bg-steel-gray border border-gray-600 p-3 focus:border-industry-orange outline-none transition-colors" required />
          </div>
          <div>
            <label className="block text-sm mb-2 text-steel-light">Nazwa firmy</label>
            <input type="text" className="w-full bg-steel-gray border border-gray-600 p-3 focus:border-industry-orange outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm mb-2 text-steel-light">Adres e-mail *</label>
            <input type="email" className="w-full bg-steel-gray border border-gray-600 p-3 focus:border-industry-orange outline-none transition-colors" required />
          </div>
          <div>
            <label className="block text-sm mb-2 text-steel-light">Telefon kontaktowy *</label>
            <input type="tel" className="w-full bg-steel-gray border border-gray-600 p-3 focus:border-industry-orange outline-none transition-colors" required />
          </div>
        </div>
  
        <div className="mb-6">
          <label className="block text-sm mb-2 text-steel-light">Treść zapytania (asortyment, ilości, gatunek materiału) *</label>
          <textarea rows={5} className="w-full bg-steel-gray border border-gray-600 p-3 focus:border-industry-orange outline-none transition-colors resize-none" required></textarea>
        </div>
  
        <div className="mb-8">
          <label className="block text-sm mb-2 text-steel-light">Załącznik (np. zestawienie w PDF, rysunek techniczny)</label>
          <input type="file" className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-industry-orange file:text-white hover:file:bg-orange-600 cursor-pointer" />
        </div>
  
        <button type="submit" className="w-full bg-industry-orange hover:bg-orange-600 text-white font-bold py-4 uppercase tracking-widest transition-colors duration-300">
          Wyślij zapytanie
        </button>
      </form>
    );
  }