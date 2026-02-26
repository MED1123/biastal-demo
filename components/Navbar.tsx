'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import logoImg from '../public/logo_firmy.jpeg';

const navLinks = [
  { label: 'Oferta', href: '/oferta' },
  { label: 'Zapytanie ofertowe', href: '/zapytanie-ofertowe' },
  { label: 'O firmie', href: '/o-firmie' },
  { label: 'Kontakt', href: '/kontakt' },
  { label: 'Program Regionalny', href: '/program-regionalny' },
  { label: 'Kalkulator wag', href: '/kalkulator-wag', accent: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-black/80 backdrop-blur-xl backdrop-saturate-150">
      <div className="max-w-[1400px] mx-auto px-5 h-16 flex items-center justify-between gap-4">

        {/* Logo */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="flex flex-col gap-[3px]">
            <span title="Wersja Polska" className="cursor-pointer text-base leading-none hover:opacity-80 transition-opacity">🇵🇱</span>
            <span title="English Version" className="cursor-pointer text-base leading-none opacity-30 hover:opacity-80 transition-opacity">🇬🇧</span>
          </div>
          <Link href="/" title="Strona główna – Biastal" className="transition-opacity hover:opacity-80 active:opacity-60">
            <Image
              src={logoImg}
              alt="Logo Biastal"
              height={40}
              className="h-10 w-auto object-contain"
              priority
              unoptimized
            />
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                relative px-4 py-2 text-[13px] font-medium tracking-wide rounded-lg transition-all duration-200
                ${link.accent
                  ? 'text-industry-orange hover:bg-industry-orange/10'
                  : 'text-[#86868b] hover:text-white hover:bg-white/[0.06]'
                }
                after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-industry-orange
                after:transition-all after:duration-200 hover:after:w-4/5
              `}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2 group"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-white/[0.08] bg-black/95 backdrop-blur-xl">
          <nav className="max-w-[1400px] mx-auto px-5 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors
                  ${link.accent ? 'text-industry-orange hover:bg-industry-orange/10' : 'text-[#86868b] hover:text-white hover:bg-white/[0.06]'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}