import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Oferta – Wyroby Hutnicze',
    description:
        'Pełna oferta Biastal: pręty żebrowane, okrągłe, kwadratowe, płaskie, blachy, rury okrągłe, profile zamknięte, ceowniki, kątowniki, dwuteowniki, siatki, ogrodzenia i produkcja zbrojeń. Biała Podlaska.',
    keywords: [
        'oferta wyrobów hutniczych',
        'pręty żebrowane',
        'blachy stalowe',
        'rury okrągłe',
        'kątowniki',
        'ceowniki',
        'dwuteowniki',
        'siatki ogrodzeniowe',
        'Biastal',
    ],
    alternates: { canonical: '/oferta' },
    openGraph: {
        title: 'Oferta – Biastal Wyroby Hutnicze',
        description: 'Pełna oferta wyrobów hutniczych Biastal – profile, rury, blachy, pręty, siatki.',
        url: 'https://biastal.pl/oferta',
    },
};

export default function OfertaLayout({ children }: { children: React.ReactNode }) {
    return children;
}
