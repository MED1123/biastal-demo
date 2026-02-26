'use client';
import { useState, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getFileIcon(file: File): string {
  const t = file.type;
  if (t.startsWith('image/')) return '🖼️';
  if (t === 'application/pdf') return '📄';
  if (t.includes('word') || t.includes('document')) return '📝';
  if (t.includes('excel') || t.includes('spreadsheet') || t.includes('csv')) return '📊';
  if (t.includes('zip') || t.includes('compressed')) return '🗃️';
  return '📎';
}

interface AttachedFile {
  file: File;
  previewUrl: string | null;
}

export default function KontaktPage() {
  const [attachedFiles, setAttachedFiles] = useState<AttachedFile[]>([]);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const processFiles = (fileList: FileList | null) => {
    if (!fileList) return;
    const newFiles: AttachedFile[] = Array.from(fileList).map(file => ({
      file,
      previewUrl: file.type.startsWith('image/') ? URL.createObjectURL(file) : null,
    }));
    setAttachedFiles(prev => [...prev, ...newFiles]);
  };

  const removeFile = (index: number) => {
    setAttachedFiles(prev => {
      const toRemove = prev[index];
      if (toRemove.previewUrl) URL.revokeObjectURL(toRemove.previewUrl);
      return prev.filter((_, i) => i !== index);
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    processFiles(e.dataTransfer.files);
  };
  return (
    <div className="bg-black min-h-screen font-sans flex flex-col text-white">
      <Navbar />

      <main className="flex-grow">
        {/* Page header */}
        <section className="pt-20 pb-12 px-5 border-b border-white/[0.06]">
          <div className="max-w-[1400px] mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-industry-orange mb-3">Biastal</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Kontakt</h1>
          </div>
        </section>

        <section className="py-16 px-5">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* LEFT: dane + godziny */}
            <div className="space-y-6">

              <div className="rounded-2xl bg-[#1d1d1f] border border-white/[0.06] p-7">
                <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-industry-orange mb-5">Dane kontaktowe</h2>
                <p className="text-xl font-bold text-white mb-1">BIASTAL</p>
                <p className="text-[#86868b] text-sm mb-5">ul. Sidorska 117<br />21-500 Biała Podlaska</p>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center border-b border-white/[0.06] pb-3">
                    <span className="text-[#86868b]">Telefon / fax</span>
                    <a href="tel:833443170" className="text-white font-semibold hover:text-industry-orange transition-colors">83 344 31 70</a>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#86868b]">E-mail</span>
                    <a href="mailto:biuro@biastal.pl" className="text-industry-orange font-semibold hover:underline">biuro@biastal.pl</a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-[#1d1d1f] border border-white/[0.06] p-7">
                <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-industry-orange mb-5">Godziny otwarcia</h2>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-[#ff8c42] font-semibold mb-1">Okres letni</p>
                    <p className="text-[#86868b]">Pn – Pt: <span className="text-white">07:00 – 17:00</span></p>
                    <p className="text-[#86868b]">Sobota: <span className="text-white">07:00 – 14:00</span></p>
                  </div>
                  <div className="border-t border-white/[0.06] pt-4">
                    <p className="text-blue-400 font-semibold mb-1">Okres zimowy</p>
                    <p className="text-[#86868b]">Pn – Pt: <span className="text-white">07:00 – 16:00</span></p>
                    <p className="text-[#86868b]">Sobota: <span className="text-white">07:00 – 14:00</span></p>
                  </div>
                </div>
              </div>

              {/* Specjaliści */}
              {[500, 501].map((seed) => (
                <div key={seed} className="group rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/20 transition-all duration-300 relative aspect-[4/3]">
                  <div
                    className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"
                    style={{ backgroundImage: `url('https://picsum.photos/400/300?random=${seed}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-white font-semibold text-sm">Specjalista d/s sprzedaży</p>
                    <a href="mailto:biuro@biastal.pl" className="text-industry-orange text-sm hover:underline">biuro@biastal.pl</a>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT: formularz + mapa */}
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-2xl bg-[#1d1d1f] border border-white/[0.06] p-8">
                <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-industry-orange mb-6">Wyślij wiadomość</h2>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-5">
                      {[
                        { label: 'Imię i nazwisko lub nazwa firmy*', type: 'text' },
                        { label: 'Adres email*', type: 'email' },
                        { label: 'Numer telefonu*', type: 'tel' },
                      ].map((f) => (
                        <div key={f.label}>
                          <label className="block text-xs text-[#86868b] mb-2 uppercase tracking-wider">{f.label}</label>
                          <input
                            type={f.type}
                            required
                            className="w-full bg-black border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm placeholder:text-[#3d3d3f] focus:border-industry-orange focus:outline-none transition-colors"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col">
                      <label className="block text-xs text-[#86868b] mb-2 uppercase tracking-wider">Treść*</label>
                      <textarea
                        required
                        className="flex-1 min-h-[180px] bg-black border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm placeholder:text-[#3d3d3f] focus:border-industry-orange focus:outline-none transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Strefa załączników */}
                  <div>
                    <label className="block text-xs text-[#86868b] mb-2 uppercase tracking-wider">
                      Załączniki <span className="normal-case text-[#3d3d3f]">(opcjonalnie — PDF, rysunki, zdjęcia)</span>
                    </label>
                    <div
                      className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-colors ${dragging
                          ? 'border-industry-orange bg-industry-orange/10'
                          : 'border-white/[0.1] hover:border-industry-orange/50 hover:bg-white/[0.02]'
                        }`}
                      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                      onDragLeave={() => setDragging(false)}
                      onDrop={handleDrop}
                      onClick={() => inputRef.current?.click()}
                    >
                      <input ref={inputRef} type="file" multiple className="hidden" onChange={(e) => processFiles(e.target.files)} />
                      <div className="text-2xl mb-1">📎</div>
                      <p className="text-sm text-[#86868b]">
                        <span className="text-industry-orange font-semibold">Kliknij</span> lub przeciągnij pliki tutaj
                      </p>
                      <p className="text-xs text-[#3d3d3f] mt-1">PDF, JPG, PNG, DWG, XLSX i inne</p>
                    </div>

                    {attachedFiles.length > 0 && (
                      <ul className="mt-3 space-y-2">
                        {attachedFiles.map((af, index) => (
                          <li key={index} className="flex items-center gap-3 bg-black border border-white/[0.08] rounded-xl p-3">
                            {af.previewUrl ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img src={af.previewUrl} alt={af.file.name} className="w-10 h-10 object-cover rounded-lg border border-white/10 flex-shrink-0" />
                            ) : (
                              <span className="text-xl w-10 text-center flex-shrink-0">{getFileIcon(af.file)}</span>
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="text-sm text-white font-medium truncate">{af.file.name}</p>
                              <p className="text-xs text-[#86868b]">{formatBytes(af.file.size)}</p>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="text-[#86868b] hover:text-red-400 transition-colors text-lg leading-none flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/5"
                              title="Usuń załącznik"
                            >
                              ×
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-white/[0.06]">
                    <span className="text-xs text-[#3d3d3f]">* – pola wymagane</span>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-all duration-300"
                      style={{ background: 'linear-gradient(135deg, #ff5a00, #ff3d00)' }}
                    >
                      Wyślij wiadomość
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/[0.06] h-[380px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2454.7645100067645!2d23.1444983!3d52.0284953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472190ba3bbdb3bd%3A0x868d407fcf8ab846!2sul.%20Sidorska%20117%2C%2021-500%20Bia%C5%82a%20Podlaska!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(95%)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa dojazdu Biastal"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}