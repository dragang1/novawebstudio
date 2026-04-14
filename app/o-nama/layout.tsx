import type { Metadata } from "next";
import { baseUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "O Nama",
  description: "Upoznajte Nova Web Studio - tim stručnjaka za izradu modernih web sajtova u Bosni i Hercegovini. Specijalizovani za lokalne biznise i e-commerce.",
  keywords: [
    "Nova Web Studio",
    "web agencija BiH",
    "web dizajn tim",
    "o nama",
    "web development agencija",
    "Bosna i Hercegovina",
  ],
  openGraph: {
    title: "O Nama | Nova Web Studio",
    description: "Upoznajte Nova Web Studio - tim stručnjaka za izradu modernih web sajtova u Bosni i Hercegovini.",
    url: `${baseUrl}/o-nama`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "O Nama | Nova Web Studio",
    description: "Upoznajte Nova Web Studio - tim stručnjaka za izradu modernih web sajtova u Bosni i Hercegovini.",
  },
  alternates: {
    canonical: `${baseUrl}/o-nama`,
  },
};

export default function ONamaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
