import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://novawebstudio.ba';

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktirajte Nova Web Studio za besplatnu konsultaciju o vašem web projektu. Odgovaramo u roku od 24 sata. Besplatna konsultacija 15 minuta!",
  keywords: [
    "kontakt Nova Web Studio",
    "web dizajn ponuda",
    "besplatna konsultacija",
    "izrada web sajta kontakt",
    "web agencija BiH kontakt",
  ],
  openGraph: {
    title: "Kontaktirajte Nas | Nova Web Studio",
    description: "Kontaktirajte Nova Web Studio za besplatnu konsultaciju o vašem web projektu. Odgovaramo u roku od 24 sata.",
    url: `${baseUrl}/kontakt`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontaktirajte Nas | Nova Web Studio",
    description: "Kontaktirajte Nova Web Studio za besplatnu konsultaciju o vašem web projektu.",
  },
  alternates: {
    canonical: `${baseUrl}/kontakt`,
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
