"use client";
import { useState, useEffect, useRef } from 'react';

interface PositionItem {
  id: number;
  name: string;
  length: number;
  weight: number;
}

interface AttachedFile {
  file: File;
  previewUrl: string | null; // null dla nie-obrazkowych plików
}

interface ContactFormProps {
  positions?: PositionItem[];
}

function buildMessageFromPositions(positions: PositionItem[]): string {
  if (positions.length === 0) return '';
  const header = 'Lista pozycji z kalkulatora wag:\n';
  const rows = positions
    .map((p, i) => `${i + 1}. ${p.name} – dł. ${p.length} m – masa ${p.weight.toFixed(2)} kg`)
    .join('\n');
  const total = positions.reduce((s, p) => s + p.weight, 0);
  return `${header}${rows}\n\nSuma masy: ${total.toFixed(2)} kg`;
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getFileIcon(file: File): string {
  const type = file.type;
  if (type.startsWith('image/')) return '🖼️';
  if (type === 'application/pdf') return '📄';
  if (type.includes('word') || type.includes('document')) return '📝';
  if (type.includes('excel') || type.includes('spreadsheet') || type.includes('csv')) return '📊';
  if (type.includes('zip') || type.includes('compressed') || type.includes('archive')) return '🗜️';
  return '📎';
}

export default function ContactForm({ positions = [] }: ContactFormProps) {
  const [message, setMessage] = useState('');
  const [attachedFiles, setAttachedFiles] = useState<AttachedFile[]>([]);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMessage(buildMessageFromPositions(positions));
  }, [positions]);

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
    <form className="bg-steel-dark p-8 border border-gray-800 text-white max-w-2xl mx-auto">
      <h3 className="text-xl font-bold mb-6 border-b border-gray-700 pb-4">Formularz zapytania ofertowego</h3>

      {positions.length > 0 && (
        <div className="mb-6 p-4 border border-industry-orange/40 bg-industry-orange/5 text-sm text-steel-light">
          <span className="text-industry-orange font-bold">✓ Lista pozycji dołączona automatycznie</span>
          <span className="ml-2">({positions.length} {positions.length === 1 ? 'pozycja' : positions.length < 5 ? 'pozycje' : 'pozycji'})</span>
          <p className="mt-1 text-xs text-gray-500">Treść zapytania poniżej jest wypełniana automatycznie. Możesz ją edytować przed wysłaniem.</p>
        </div>
      )}

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
        <label className="block text-sm mb-2 text-steel-light">
          Treść zapytania (asortyment, ilości, gatunek materiału) *
        </label>
        <textarea
          rows={positions.length > 0 ? positions.length + 4 : 5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full bg-steel-gray border border-gray-600 p-3 focus:border-industry-orange outline-none transition-colors resize-none font-mono text-sm"
          required
        />
      </div>

      {/* Strefa załączników */}
      <div className="mb-8">
        <label className="block text-sm mb-2 text-steel-light">
          Załączniki <span className="text-gray-500 text-xs">(PDF, rysunki, zdjęcia, zestawienia — dowolna liczba plików)</span>
        </label>

        {/* Drag & drop strefa */}
        <div
          className={`relative border-2 border-dashed p-6 text-center cursor-pointer transition-colors ${dragging
            ? 'border-industry-orange bg-industry-orange/10'
            : 'border-gray-600 hover:border-industry-orange/60 hover:bg-white/5'
            }`}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
        >
          <input
            ref={inputRef}
            type="file"
            multiple
            className="hidden"
            onChange={(e) => processFiles(e.target.files)}
          />
          <div className="text-3xl mb-2">📎</div>
          <p className="text-sm text-steel-light">
            <span className="text-industry-orange font-semibold">Kliknij aby wybrać</span> lub przeciągnij i upuść pliki tutaj
          </p>
          <p className="text-xs text-gray-500 mt-1">Obsługiwane formaty: PDF, JPG, PNG, DWG, XLSX, ZIP i inne</p>
        </div>

        {/* Lista załączonych plików */}
        {attachedFiles.length > 0 && (
          <ul className="mt-3 space-y-2">
            {attachedFiles.map((af, index) => (
              <li key={index} className="flex items-center gap-3 bg-steel-gray border border-gray-700 p-3">
                {/* Podgląd lub ikona */}
                {af.previewUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={af.previewUrl}
                    alt={af.file.name}
                    className="w-12 h-12 object-cover border border-gray-600 flex-shrink-0"
                  />
                ) : (
                  <span className="text-2xl flex-shrink-0 w-12 text-center">{getFileIcon(af.file)}</span>
                )}

                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white font-medium truncate">{af.file.name}</p>
                  <p className="text-xs text-gray-500">{formatBytes(af.file.size)}</p>
                </div>

                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="text-gray-500 hover:text-red-400 transition-colors text-lg leading-none flex-shrink-0"
                  title="Usuń załącznik"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button type="submit" className="w-full bg-industry-orange hover:bg-orange-600 text-white font-bold py-4 uppercase tracking-widest transition-colors duration-300">
        Wyślij zapytanie
      </button>
    </form>
  );
}