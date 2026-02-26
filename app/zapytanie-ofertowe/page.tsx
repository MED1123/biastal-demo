'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
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

export default function ZapytanieOfertowePage() {
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

                {/* Strefa załączników */}
                <div>
                  <label className="block text-xs text-[#86868b] mb-2 uppercase tracking-wider">
                    Załączniki <span className="normal-case text-[#3d3d3f]">(opcjonalnie — PDF, rysunki, zdjęcia, zestawienia)</span>
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