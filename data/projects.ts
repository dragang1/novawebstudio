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
    title: "Web sajt za lokalni servis",
    client: "Primjer Klijenta",
    year: 2025,
    category: "website",
    services: ["Dizajn", "Izrada", "SEO osnove"],
    summary: "Brz i moderan web sajt sa jasnim pozivom na akciju i kontakt formom. Optimizovan za mobilne uređaje i pretraživače.",
    results: [
      "Brže učitavanje stranice",
      "Više upita preko kontakt forme",
      "Poboljšan SEO ranking"
    ],
    url: "https://ledtehnika.com",
    coverImage: "/portfolio/primjer-1/logowhite.png"
  },
  {
    slug: "primjer-projekta-2",
    title: "E-commerce sajt za online prodaju",
    client: "Primjer Klijenta 2",
    year: 2024,
    category: "ecommerce",
    services: ["Web shop", "Naplata", "Integracije"],
    summary: "Potpuno funkcionalan web shop sa katalogom proizvoda, korpom za kupovinu i integracijom sistema za plaćanje.",
    results: [
      "Povećana online prodaja",
      "Lako upravljanje proizvodima",
      "Sigurna naplata"
    ],
    url: "https://electon-app.vercel.app/",
    coverImage: "/portfolio/primjer-2/electon.PNG"
  },
  {
    slug: "primjer-projekta-3",
    title: "Redizajn postojećeg sajta",
    client: "Primjer Klijenta 3",
    year: 2024,
    category: "redesign",
    services: ["Redizajn", "Optimizacija brzine", "Mobilna verzija"],
    summary: "Moderan redizajn sa poboljšanom brzinom učitavanja i boljim korisničkim iskustvom na svim uređajima.",
    results: [
      "50% brže učitavanje",
      "Bolje korisničko iskustvo",
      "Više konverzija"
    ],
    url: "https://novawebstudio.co",
    coverImage: "/portfolio/primjer-3/nova.png"
  }
];
