import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://novawebstudio.ba';

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Pogledajte naše uspješne projekte - web sajtovi, e-commerce shopovi i redizajni za lokalne biznise u Bosni i Hercegovini.",
  keywords: [
    "portfolio web dizajn",
    "primjeri web sajtova",
    "reference web dizajn",
    "uspješni projekti",
    "web sajtovi BiH",
    "e-commerce primjeri",
  ],
  openGraph: {
    title: "Portfolio | Nova Web Studio",
    description: "Pogledajte naše uspješne projekte - web sajtovi, e-commerce shopovi i redizajni za lokalne biznise.",
    url: `${baseUrl}/portfolio`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Nova Web Studio",
    description: "Pogledajte naše uspješne projekte - web sajtovi, e-commerce shopovi i redizajni.",
  },
  alternates: {
    canonical: `${baseUrl}/portfolio`,
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
