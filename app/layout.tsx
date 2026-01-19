import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://novawebstudio.co';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Nova Web Studio | Izrada Premium Web Sajtova",
    template: "%s | Nova Web Studio",
  },
  description: "Izrada modernih web sajtova koji donose klijente. Specijalizovani za lokalne biznise i e-commerce. Besplatna konsultacija!",
  keywords: [
    "izrada web sajtova",
    "web dizajn",
    "web shop",
    "e-commerce",
    "redizajn sajta",
    "SEO optimizacija",
    "Bosna i Hercegovina",
    "Website banjaluka",
    "web development",
    "responsive dizajn",
    "online prodaja",
  ],
  authors: [{ name: "Nova Web Studio" }],
  creator: "Nova Web Studio",
  publisher: "Nova Web Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "sr_BA",
    url: baseUrl,
    siteName: "Nova Web Studio",
    title: "Nova Web Studio | Izrada Premium Web Sajtova",
    description: "Izrada modernih web sajtova koji donose klijente. Specijalizovani za lokalne biznise i e-commerce.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nova Web Studio - Izrada Premium Web Sajtova",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Web Studio | Izrada Premium Web Sajtova",
    description: "Izrada modernih web sajtova koji donose klijente. Specijalizovani za lokalne biznise i e-commerce.",
    images: ["/og-image.jpg"],
    creator: "@novawebstudio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Dodaj svoje verification kodove kada ih dobiješ
    // google: "google-site-verification-code",
    // yandex: "yandex-verification-code",
  },
  alternates: {
    canonical: baseUrl,
  },
};

// JSON-LD strukturirani podaci za organizaciju
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nova Web Studio",
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  description: "Izrada modernih web sajtova koji donose klijente. Specijalizovani za lokalne biznise i e-commerce.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BA",
    addressRegion: "Bosna i Hercegovina",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "info@novawebstudio.co",
    availableLanguage: ["Bosnian", "Croatian", "Serbian"],
  },
  sameAs: [
    // Dodaj svoje socijalne mreže ovdje
    // "https://www.facebook.com/novawebstudio",
    // "https://www.instagram.com/novawebstudio",
    // "https://www.linkedin.com/company/novawebstudio",
  ],
};

// JSON-LD za LocalBusiness
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Nova Web Studio",
  url: baseUrl,
  description: "Izrada modernih web sajtova koji donose klijente.",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BA",
  },
  geo: {
    "@type": "GeoCoordinates",
    // Dodaj koordinate kada budeš imao tačnu lokaciju
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  serviceType: [
    "Web Design",
    "Web Development",
    "E-commerce Development",
    "SEO Optimization",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className={`${syne.variable} ${outfit.variable} font-body antialiased bg-surface-primary text-dark-50`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
