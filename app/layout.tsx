import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ── Dane firmy ──────────────────────────────────────────────────────────────
const SITE_URL = "https://www.biastal.pl/pl";
const COMPANY_NAME = "Biastal – Wyroby Hutnicze";
const COMPANY_DESCRIPTION =
  "Biastal — dystrybutor wyrobów hutniczych z Białej Podlaskiej. Stal zbrojeniowa, profile, rury, blachy, prefabrykacja. Dostawa do 500 km od 1994 roku.";

// ── Viewport ─────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  themeColor: "#ff5a00",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

// ── Metadane globalne ─────────────────────────────────────────────────────────
export const metadata: Metadata = {
  // Podstawowe
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY_NAME} | Hurtownia stali Biała Podlaska`,
    template: `%s | Biastal`,
  },
  description: COMPANY_DESCRIPTION,
  keywords: [
    "stal zbrojeniowa",
    "wyroby hutnicze",
    "hurtownia stali",
    "Biała Podlaska",
    "profile stalowe",
    "rury stalowe",
    "blachy stalowe",
    "pręty żebrowane",
    "Biastal",
    "kątowniki",
    "ceowniki",
    "dwuteowniki",
    "prefabrykacja stali",
    "skład hutniczy",
    "stal konstrukcyjna",
  ],
  authors: [{ name: "Biastal", url: SITE_URL }],
  creator: "Biastal",
  publisher: "Biastal",
  category: "Przemysł / Wyroby hutnicze",

  // Canonical i alternates
  alternates: {
    canonical: "/",
    languages: { "pl-PL": "/" },
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: SITE_URL,
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} | Hurtownia stali Biała Podlaska`,
    description: COMPANY_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Biastal – Wyroby Hutnicze, Biała Podlaska",
      },
    ],
  },

  // Twitter / X Card
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} | Hurtownia stali`,
    description: COMPANY_DESCRIPTION,
    images: ["/og-image.jpg"],
  },

  // Weryfikacja Search Console / Bing
  // verification: {
  //   google: "TWÓJ_KOD_GOOGLE",
  //   other: { "msvalidate.01": ["TWÓJ_KOD_BING"] },
  // },

  // Inne
  applicationName: "Biastal",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// ── JSON-LD: LocalBusiness ────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: "Biastal",
  legalName: "Biastal",
  description: COMPANY_DESCRIPTION,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.jpg`,
  telephone: "+48833443170",
  email: "biuro@biastal.pl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Sidorska 117",
    addressLocality: "Biała Podlaska",
    postalCode: "21-500",
    addressRegion: "Lubelskie",
    addressCountry: "PL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.0284953,
    longitude: 23.1444983,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "07:00",
      closes: "14:00",
    },
  ],
  sameAs: [SITE_URL],
  priceRange: "$$",
};

// ── Layout ────────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" dir="ltr">
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect dla zewnętrznych zasobów */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        {/* Favicony */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
