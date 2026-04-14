import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BreadcrumbsSchema } from "@/components/BreadcrumbsSchema";
import {
  baseUrl,
  companyName,
  companyEmail,
  companyPhone,
  companyDescription,
  companyAddress,
  companyServiceTypes,
  socialProfiles,
} from "@/lib/site";
import { generateBreadcrumbSchema, homeBreadcrumbs } from "@/lib/schema";

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

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Nova Web Studio | Izrada Premium Web Sajtova",
    template: "%s | Nova Web Studio",
  },
  description: companyDescription,
  keywords: [
    "izrada web sajtova",
    "web dizajn",
    "web shop",
    "e-commerce",
    "redizajn sajta",
    "SEO optimizacija",
    "Bosna i Hercegovina",
    "web development",
    "responsive dizajn",
    "online prodaja",
    "lokalni biznis",
    "digitalni marketing",
    "website Banjaluka",
    "web dizajn BiH",
    "e-commerce Sarajevo",
    "web shop Mostar",
    "izrada sajta Tuzla",
    "web agencija Banjaluka",
    "web agency Bosnia",
    "izrada web stranica",
  ],
  authors: [{ name: companyName }],
  creator: companyName,
  publisher: companyName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "sr_BA",
    url: baseUrl,
    siteName: companyName,
    title: "Nova Web Studio | Izrada Premium Web Sajtova",
    description: companyDescription,
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Nova Web Studio - Izrada Premium Web Sajtova",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Web Studio | Izrada Premium Web Sajtova",
    description: companyDescription,
    images: [`${baseUrl}/og-image.jpg`],
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
  verification: {},
  alternates: {
    canonical: baseUrl,
  },
};

// JSON-LD za breadcrumbs
const breadcrumbSchema = generateBreadcrumbSchema(homeBreadcrumbs);

// JSON-LD strukturirani podaci za organizaciju
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: companyName,
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  description: companyDescription,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: companyPhone,
    email: companyEmail,
    availableLanguage: ["Bosnian", "Croatian", "Serbian"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: companyAddress.streetAddress,
    addressCountry: companyAddress.addressCountry,
    addressRegion: companyAddress.addressRegion,
  },
  sameAs: socialProfiles,
};

// JSON-LD za LocalBusiness
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: companyName,
  url: baseUrl,
  description: companyDescription,
  priceRange: "$$",
  telephone: companyPhone,
  address: {
    "@type": "PostalAddress",
    streetAddress: companyAddress.streetAddress,
    addressCountry: companyAddress.addressCountry,
    addressRegion: companyAddress.addressRegion,
  },
  areaServed: {
    "@type": "Country",
    name: "Bosnia and Herzegovina",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  serviceType: companyServiceTypes,
  sameAs: socialProfiles,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: companyPhone,
    email: companyEmail,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className="scroll-smooth">
      <head>
        <BreadcrumbsSchema />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body
        className={`${syne.variable} ${outfit.variable} font-body antialiased bg-surface-primary text-dark-50`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
