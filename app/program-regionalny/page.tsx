import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import banerImg from '../../public/baner_regionalny.jpeg';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Program Regionalny – Dofinansowanie UE',
    description:
        'Wzrost konkurencyjności oraz potencjału technologicznego firmy Biastal Rafał Sadowski poprzez realizację innowacyjnego projektu. Regionalny Program Operacyjny Województwa Lubelskiego 2007–2013.',
    keywords: ['program regionalny Biastal', 'dofinansowanie UE stal', 'RPO Lubelskie 2007-2013'],
    alternates: { canonical: '/program-regionalny' },
    openGraph: {
        title: 'Program Regionalny – Biastal',
        description: 'Realizacja innowacyjnego projektu w ramach RPO Województwa Lubelskiego 2007–2013.',
        url: 'https://biastal.pl/program-regionalny',
    },
};

const institutions = [
    {
        name: 'Urząd Marszałkowski Województwa Lubelskiego',
        links: [
            { label: 'www.lubelskie.pl', href: 'http://www.lubelskie.pl' },
            { label: 'www.funduszelubelskie.pl', href: 'http://www.funduszelubelskie.pl' },
            { label: 'www.rpo.lubelskie.pl', href: 'http://www.rpo.lubelskie.pl' },
        ],
    },
    {
        name: 'Lubelska Agencja Wspierania Przedsiębiorczości',
        links: [{ label: 'www.lawp.lubelskie.pl', href: 'http://www.lawp.lubelskie.pl' }],
    },
    {
        name: 'Ministerstwo Rozwoju Regionalnego',
        links: [{ label: 'www.mrr.gov.pl', href: 'http://www.mrr.gov.pl' }],
    },
    {
        name: 'Departament Strategii i Rozwoju Regionalnego UMWL',
        details: [
            'Punkt Informacyjny i Naboru Wniosków',
            'ul. Stefczyka 3b, 20-151 Lublin, pok. 0.18',
            'tel. 081 44 16 750',
            '0 800 888 776 (bezpłatna)',
            'rpo@lubelskie.pl',
            'drr@lubelskie.pl',
        ],
    },
    {
        name: 'Lubelska Agencja Wspierania Przedsiębiorczości w Lublinie',
        details: [
            'ul. Graniczna 4, 20-010 Lublin',
            'tel. 081 46 23 800',
            'fax: 081 46 23 840',
            'punkt informacyjny: 081 46 23 831',
            'lawp@lubelskie.pl',
        ],
    },
];

const factoryPhotos = [
    'https://picsum.photos/seed/factory1/400/300',
    'https://picsum.photos/seed/factory2/400/300',
    'https://picsum.photos/seed/factory3/400/300',
    'https://picsum.photos/seed/factory4/400/300',
    'https://picsum.photos/seed/factory5/400/300',
];

export default function ProgramRegionalny() {
    return (
        <div className="bg-steel-dark min-h-screen font-sans text-white flex flex-col overflow-x-hidden">
            <Navbar />

            <main className="flex-grow">
                {/* HERO */}
                <section className="relative flex items-center justify-center overflow-hidden border-b border-gray-800" style={{ minHeight: '38vh' }}>
                    <Image
                        src={banerImg}
                        alt="Baner Programu Regionalnego"
                        fill
                        priority
                        unoptimized
                        className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/70" />
                    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                        <p className="text-xs font-bold uppercase tracking-[0.35em] text-industry-orange mb-3">
                            Regionalny Program Operacyjny · Województwo Lubelskie · 2007–2013
                        </p>
                        <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight">
                            Wzrost konkurencyjności oraz{' '}
                            <span className="text-industry-orange">potencjału technologicznego</span>{' '}
                            firmy Biastal Rafał Sadowski
                        </h1>
                    </div>
                </section>

                {/* LAYOUT: sidebar + treść */}
                <div className="max-w-[1400px] mx-auto px-4 py-14 flex flex-col lg:flex-row gap-10">

                    {/* ── SIDEBAR ── */}
                    <aside className="lg:w-72 shrink-0 space-y-6">
                        {institutions.map((inst) => (
                            <div
                                key={inst.name}
                                className="bg-[#111] border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-colors"
                            >
                                <p className="text-sm font-semibold text-white mb-3 leading-snug">{inst.name}</p>
                                {inst.links && (
                                    <ul className="space-y-1">
                                        {inst.links.map((l) => (
                                            <li key={l.href}>
                                                <a
                                                    href={l.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-xs text-industry-orange hover:underline break-all"
                                                >
                                                    {l.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {inst.details && (
                                    <ul className="space-y-0.5 mt-1">
                                        {inst.details.map((d) => (
                                            <li key={d} className="text-xs text-gray-400 leading-relaxed">
                                                {d}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </aside>

                    {/* ── GŁÓWNA TREŚĆ ── */}
                    <div className="flex-1 min-w-0 space-y-10">

                        {/* Intro */}
                        <p className="text-steel-light text-base leading-relaxed">
                            Wzrost konkurencyjności oraz potencjału technologicznego firmy Biastal Rafał Sadowski
                            poprzez realizację innowacyjnego projektu. Regionalny Program Operacyjny Województwa
                            Lubelskiego na lata 2007–2013 (priorytet 1. Przedsiębiorczość i Innowacje, Regionalny
                            Program Operacyjny Województwa Lubelskiego na lata 2007–2013, Działanie 1.2. Dotacje
                            inwestycyjne dla mikroprzedsiębiorstw).
                        </p>

                        {/* KARTA PROJEKTU */}
                        <div className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                            {/* Nagłówek */}
                            <div className="bg-industry-orange/10 border-b border-gray-800 px-6 py-4 text-center">
                                <p className="text-xs font-bold uppercase tracking-widest text-industry-orange mb-1">
                                    Twój pomysł, europejskie pieniądze
                                </p>
                                <p className="text-sm font-bold text-white uppercase">
                                    Regionalny Program Operacyjny Województwa Lubelskiego na lata 2007–2013
                                </p>
                            </div>

                            {/* Wiersze */}
                            <table className="w-full text-sm">
                                <tbody>
                                    <tr className="border-b border-gray-800 hover:bg-white/[0.02] transition-colors">
                                        <td className="px-6 py-5 text-gray-500 font-medium w-36 align-top whitespace-nowrap">
                                            Tytuł projektu
                                        </td>
                                        <td className="px-6 py-5 text-white font-semibold leading-relaxed">
                                            „Wzrost konkurencyjności oraz potencjału technologicznego firmy Biastal Rafał
                                            Sadowski poprzez realizację innowacyjnego projektu"
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-white/[0.02] transition-colors">
                                        <td className="px-6 py-5 text-gray-500 font-medium align-top whitespace-nowrap">
                                            Beneficjent
                                        </td>
                                        <td className="px-6 py-5 text-white">
                                            <p className="font-semibold">Biastal Rafał Sadowski</p>
                                            <p className="text-gray-400 mt-0.5">ul. Sidorska 117, 21-500 Biała Podlaska</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* OPIS PROJEKTU */}
                        <div className="space-y-4 text-steel-light leading-relaxed text-base">
                            <p>
                                Głównym celem projektu jest wzrost konkurencyjności firmy poprzez zakup nowoczesnych i
                                innowacyjnych środków trwałych tj. suwnicy jednodźwigarowej, giętarki do prętów oraz
                                automatycznej giętarki do strzemion oraz budowę zaplecza produkcyjno-administracyjnego.
                            </p>
                            <p>
                                Realizacja projektu przyczyniła się do rozszerzenia naszej oferty o nowe produkty i
                                usługi tj. produkcję elementów zbrojenia prefabrykowanego{' '}
                                <span className="text-white font-medium">(strzemiona)</span> oraz wykonawstwo{' '}
                                <span className="text-white font-medium">(wykonawców)</span>.
                            </p>
                            <p>
                                Wszelkich informacji na temat projektu i dofinansowania udziela Pan Rafał Sadowski –
                                właściciel, Tel{' '}
                                <a href="tel:833443170" className="text-industry-orange hover:underline">
                                    (83) 344 31 70
                                </a>
                                ,{' '}
                                <a href="tel:795117117" className="text-industry-orange hover:underline">
                                    795 117 117
                                </a>
                            </p>
                        </div>

                        {/* GALERIA */}
                        <div>
                            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">
                                Realizacja projektu
                            </h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                                {factoryPhotos.map((src, i) => (
                                    <div
                                        key={i}
                                        className="overflow-hidden rounded-lg border border-gray-800 aspect-[4/3] relative group"
                                    >
                                        <img
                                            src={src}
                                            alt={`Zdjęcie realizacji ${i + 1}`}
                                            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* DISCLAIMER */}
                        <div className="bg-[#0d0d0d] border border-gray-800 rounded-xl px-6 py-5 text-xs text-gray-500 leading-loose text-center">
                            Projekt współfinansowany ze środków{' '}
                            <span className="text-gray-400">Europejskiego Funduszu Rozwoju Regionalnego</span> w
                            ramach <span className="text-gray-400">Regionalnego Programu Operacyjnego Województwa
                                Lubelskiego</span> na lata 2007–2013.
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
