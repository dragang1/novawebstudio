import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://novawebstudio.ba';

export const metadata: Metadata = {
  title: "Usluge",
  description: "Profesionalna izrada web sajtova, e-commerce shopova i redizajn postojećih stranica. Pogledajte sve naše usluge za vaš online biznis u BiH.",
  keywords: [
    "izrada web sajta",
    "web dizajn usluge",
    "e-commerce izrada",
    "web shop",
    "redizajn sajta",
    "SEO usluge",
    "Bosna i Hercegovina",
  ],
  openGraph: {
    title: "Naše Usluge | Nova Web Studio",
    description: "Profesionalna izrada web sajtova, e-commerce shopova i redizajn postojećih stranica.",
    url: `${baseUrl}/usluge`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naše Usluge | Nova Web Studio",
    description: "Profesionalna izrada web sajtova, e-commerce shopova i redizajn postojećih stranica.",
  },
  alternates: {
    canonical: `${baseUrl}/usluge`,
  },
};

export default function UslugeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
