import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kalkulator Wag – Wyroby Hutnicze',
    description:
        'Kalkulator wag wyrobów hutniczych online. Oblicz masę prętów, blach, rur, profili i kątowników ze stali węglowej, nierdzewnej lub aluminium. Zapisz listę pozycji i wyślij zapytanie ofertowe.',
    keywords: [
        'kalkulator wag stali',
        'masa stali kalkulator',
        'waga prętów stalowych',
        'kalkulator hutniczy',
        'Biastal kalkulator',
    ],
    alternates: { canonical: '/kalkulator-wag' },
    openGraph: {
        title: 'Kalkulator Wag – Biastal',
        description: 'Oblicz wagę wyrobów hutniczych online. Pręty, blachy, rury, profile — masa w kg.',
        url: 'https://biastal.pl/kalkulator-wag',
    },
};

export default function KalkulatorLayout({ children }: { children: React.ReactNode }) {
    return children;
}
