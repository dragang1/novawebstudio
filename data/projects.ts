export type Project = {
  slug: string;
  title: string;
  client: string;
  year: number;
  category: "website" | "ecommerce" | "redesign";
  services: string[];
  summary: string;
  results?: string[];
  url?: string;
  coverImage: string;
};

export const projects: Project[] = [
  {
    slug: "primjer-projekta-1",
    title: "E-commerce sajt za online prodaju",
    client: "Primjer Klijenta",
    year: 2025,
    category: "website",
    services: ["Web shop", "Naplata", "Integracije"],
    summary:
      "Potpuno funkcionalan web shop sa katalogom proizvoda, korpom za kupovinu i sistemom za preuzimanje narudžbi.",
    results: [
      "Povećana online prodaja",
      "Lako upravljanje proizvodima",
      "Sigurna naplata",
    ],
    url: "https://ledtehnika.com",
    coverImage: "/portfolio/primjer-1/logowhite.png",
  },
  {
    slug: "primjer-projekta-3",
    title: "Beauty salon web sajt",
    client: "Primjer Klijenta 2",
    year: 2026,
    category: "website",
    services: ["Web dizajn", "Kontakt forma", "Vidljivost na pretraživačima"],
    summary:
      "Potpuno funkcionalan web sajt za beauty salon sa kontakt formom i optimizacijom za pretraživače.",
    results: [
      "Povećana vidljivost na internetu",
      "Više zakazanih termina",
      "Profesionalan online nastup",
    ],
    url: "https://majabeautyroom.com",
    coverImage: "/portfolio/primjer-2/logo.png",
  },

  {
    slug: "primjer-projekta-4",
    title: "Redizajn postojećeg sajta",
    client: "Primjer Klijenta 3",
    year: 2024,
    category: "redesign",
    services: ["Redizajn", "Optimizacija brzine", "Mobilna verzija"],
    summary:
      "Moderan redizajn sa poboljšanom brzinom učitavanja i boljim korisničkim iskustvom na svim uređajima.",
    results: [
      "50% brže učitavanje",
      "Bolje korisničko iskustvo",
      "Više konverzija",
    ],
    url: "https://kalemprom.vercel.app/",
    coverImage: "/portfolio/primjer-3/logo-kalemprom.png",
  },
  {
    slug: "primjer-projekta-2",
    title: "E-commerce sajt za online prodaju",
    client: "Primjer Klijenta",
    year: 2024,
    category: "website",
    services: ["Web shop", "Naplata", "Integracije"],
    summary:
      "Potpuno funkcionalan web shop sa katalogom proizvoda, korpom za kupovinu i sistemom za preuzimanje narudžbi.",
    results: [
      "Povećana online prodaja",
      "Lako upravljanje proizvodima",
      "Sigurna naplata",
    ],
    url: "https://electon-app.vercel.app/",
    coverImage: "/portfolio/primjer-4/electon.png",
  },
];
