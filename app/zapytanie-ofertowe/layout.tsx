import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Zapytanie Ofertowe',
    description:
        'Skontaktuj się z Biastal i złóż zapytanie ofertowe na wyroby hutnicze. Szybka wycena stali, profili, blach i rur. Biała Podlaska, dostawa do 500 km.',
    keywords: [
        'zapytanie ofertowe stal',
        'wycena stali',
        'zamówienie wyrobów hutniczych',
        'Biastal oferta',
    ],
    alternates: { canonical: '/zapytanie-ofertowe' },
    openGraph: {
        title: 'Zapytanie Ofertowe – Biastal Wyroby Hutnicze',
        description: 'Złóż zapytanie ofertowe na wyroby hutnicze. Szybka wycena od Biastal.',
        url: 'https://biastal.pl/zapytanie-ofertowe',
    },
};

export default function ZapytanieLayout({ children }: { children: React.ReactNode }) {
    return children;
}
