import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kontakt',
    description:
        'Skontaktuj się z Biastal – wyroby hutnicze. ul. Sidorska 117, 21-500 Biała Podlaska. Tel: 83 344 31 70, e-mail: biuro@biastal.pl. Godziny otwarcia: Pn–Pt 7:00–17:00, Sb 7:00–14:00.',
    keywords: [
        'Biastal kontakt',
        'hurtownia stali Biała Podlaska',
        'wyroby hutnicze kontakt',
        'ul. Sidorska 117',
    ],
    alternates: { canonical: '/kontakt' },
    openGraph: {
        title: 'Kontakt – Biastal Wyroby Hutnicze',
        description: 'Dane kontaktowe Biastal. Biała Podlaska, ul. Sidorska 117. Tel: 83 344 31 70.',
        url: 'https://biastal.pl/kontakt',
    },
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
    return children;
}
