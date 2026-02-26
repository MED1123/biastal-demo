import Link from 'next/link';
import Image from 'next/image';
import logoImg from '../public/logo_firmy.jpeg';
import banerImg from '../public/baner_regionalny.jpeg';

const LINKEDIN_URL = 'https://www.linkedin.com/in/norbert-pietrzak-490245239/';

const navLinks = [
  { label: 'Strona główna', href: '/' },
  { label: 'Oferta', href: '/oferta' },
  { label: 'Kalkulator wag', href: '/kalkulator-wag' },
  { label: 'Zapytanie ofertowe', href: '/zapytanie-ofertowe' },
  { label: 'O firmie', href: '/o-firmie' },
  { label: 'Kontakt', href: '/kontakt' },
  { label: 'Program Regionalny', href: '/program-regionalny' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a]">

      {/* ── Akcentowa linia top ── */}
      <div className="h-[3px]" style={{ background: 'linear-gradient(90deg, #ff5a00 0%, #ff5a0044 60%, transparent 100%)' }} />

      {/* ── Nagłówek statusu ── */}
      <div className="border-b border-white/[0.05]">
        <div className="max-w-[1400px] mx-auto px-6 h-9 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="block w-1.5 h-1.5 rounded-full bg-industry-orange opacity-80" />
            <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#444]">
              Biastal · Wyroby Hutnicze · Biała Podlaska
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#2a2a2a] tracking-widest hidden sm:block">EST. 30+ LAT</span>
        </div>
      </div>

      {/* ── Główna siatka ── */}
      <div className="max-w-[1400px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">

        {/* Col 1 – Brand */}
        <div className="border-r border-white/[0.05] pr-10 pb-12 xl:pb-0">
          <Image src={logoImg} alt="Logo Biastal" height={44} className="h-11 w-auto object-contain mb-6 opacity-90" unoptimized />
          <p className="text-sm text-[#555] leading-relaxed mb-7">
            Solidny partner w przemyśle hutniczym. Pełny asortyment wyrobów stalowych z dostawą do 500 km.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {['STAL', 'RURY', 'BLACHY', 'ZBROJENIA'].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-[9px] font-mono font-bold tracking-[0.2em] border border-white/[0.08] text-[#444]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Col 2 – Kontakt */}
        <div className="xl:border-r border-white/[0.05] px-10 pt-12 xl:pt-0 pb-12 xl:pb-0">
          <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-industry-orange mb-6">
            ── Kontakt
          </p>
          <ul className="space-y-5">
            {[
              { label: 'ADR.', content: <span className="text-[#666]">ul. Sidorska 117<br />21-500 Biała Podlaska</span> },
              { label: 'TEL.', content: <a href="tel:833443170" className="text-white hover:text-industry-orange transition-colors duration-200">83 344 31 70</a> },
              { label: 'MAIL', content: <a href="mailto:biuro@biastal.pl" className="text-industry-orange hover:opacity-70 transition-opacity">biuro@biastal.pl</a> },
            ].map(({ label, content }) => (
              <li key={label} className="flex gap-4 items-start">
                <span className="text-[9px] font-mono text-[#333] tracking-widest mt-[2px] w-8 shrink-0">{label}</span>
                <span className="text-sm">{content}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 – Godziny */}
        <div className="xl:border-r border-white/[0.05] px-10 pt-12 xl:pt-0 pb-12 xl:pb-0">
          <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-industry-orange mb-6">
            ── Godziny pracy
          </p>
          <div className="space-y-6">
            {[
              { season: 'LETNI', color: 'text-[#ff8c42]', dot: 'bg-[#ff8c42]', pt: '07–17', sob: '07–14' },
              { season: 'ZIMOWY', color: 'text-blue-400', dot: 'bg-blue-500', pt: '07–16', sob: '07–14' },
            ].map(({ season, color, dot, pt, sob }) => (
              <div key={season}>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`block w-1.5 h-1.5 ${dot}`} />
                  <span className={`text-[9px] font-mono font-bold tracking-[0.3em] ${color}`}>{season}</span>
                </div>
                <div className="pl-4 space-y-1 font-mono text-xs">
                  <div className="flex gap-3 text-[#444]">
                    <span className="w-14">Pn – Pt</span>
                    <span className="text-white">{pt}:00</span>
                  </div>
                  <div className="flex gap-3 text-[#444]">
                    <span className="w-14">Sob</span>
                    <span className="text-white">{sob}:00</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Col 4 – Nawigacja */}
        <div className="pl-10 pt-12 xl:pt-0">
          <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-industry-orange mb-6">
            ── Nawigacja
          </p>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-[#555] hover:text-white transition-colors duration-200"
                >
                  <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-200 text-industry-orange text-xs leading-none">›</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Divider – gradient stalowy ── */}
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="h-[1px]" style={{ background: 'linear-gradient(90deg, #ff5a00 0%, rgba(255,90,0,0.15) 30%, rgba(255,255,255,0.04) 100%)' }} />
      </div>

      {/* ── Copyright ── */}
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#333]">
          © {new Date().getFullYear()} · Wszelkie prawa zastrzeżone · <span className="text-industry-orange">BIASTAL</span>
        </span>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] font-mono text-[#333] tracking-widest hover:text-industry-orange transition-colors hidden sm:block"
        >
          DESIGN: PIETRZAK NORBERT ↗
        </a>
      </div>

      {/* ── Baner regionalny – pełna szerokość, klikalny ── */}
      <div className="border-t border-white/[0.04] bg-black">
        <Link
          href="/program-regionalny"
          title="Program Regionalny – Województwo Lubelskie"
          className="group block w-full"
        >
          <Image
            src={banerImg}
            alt="Baner Programu Regionalnego Województwa Lubelskiego"
            width={1400}
            height={200}
            className="w-full max-h-24 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
            unoptimized
          />
        </Link>
      </div>
    </footer>
  );
}