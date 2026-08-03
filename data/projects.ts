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
    slug: "eco-arcadia",
    title: "Eco Arcadia Wedding & Event Resort",
    client: "Eco Arcadia",
    year: 2026,
    category: "website",
    services: ["Web dizajn", "Galerija", "Kontakt forma", "SEO"],
    summary:
      "Elegantan web sajt za wedding & event resort u Gradišci — prirodna atmosfera, galerija lokacije i jednostavno zakazivanje ponude.",
    results: [
      "Profesionalan online nastup",
      "Jasna prezentacija lokacije i kapaciteta",
      "Više upita za vjenčanja i događaje",
    ],
    url: "https://ecoarcadiaresort.com",
    coverImage: "/portfolio/primjer-3/eco-arcadia-cover.jpg",
  },
  {
    slug: "pod-fenjerom",
    title: "Pod fenjerom — restoran Nova Topola",
    client: "Pod fenjerom",
    year: 2026,
    category: "website",
    services: ["Web dizajn", "Jelovnik", "Galerija", "SEO"],
    summary:
      "Web sajt za restoran Pod fenjerom u Novoj Topoli — tradicija od 1974, digitalni jelovnik, galerija i jasna prezentacija lokacije.",
    results: [
      "Profesionalan online nastup",
      "Pregledan digitalni jelovnik",
      "Jača lokalna vidljivost",
    ],
    url: "https://www.podfenjerom.com/",
    coverImage: "/portfolio/pod-fenjerom/cover.jpg",
  },
  {
    slug: "ledtehnika",
    title: "LED Tehnika — web shop rasvjete",
    client: "LED Tehnika",
    year: 2025,
    category: "ecommerce",
    services: ["Web shop", "Naplata", "Integracije"],
    summary:
      "E-commerce sajt za LED Tehniku sa katalogom rasvjete, korpom za kupovinu i sistemom za preuzimanje narudžbi.",
    results: [
      "Povećana online prodaja",
      "Lako upravljanje proizvodima",
      "Sigurna naplata",
    ],
    url: "https://ledtehnika.com",
    coverImage: "/portfolio/primjer-1/logowhite.png",
  },
  {
    slug: "maja-beauty-room",
    title: "Maja Beauty Room — beauty salon",
    client: "Maja Beauty Room",
    year: 2026,
    category: "website",
    services: ["Web dizajn", "Kontakt forma", "SEO"],
    summary:
      "Web sajt za beauty salon Maja Beauty Room sa kontakt formom, prezentacijom usluga i optimizacijom za lokalnu pretragu.",
    results: [
      "Povećana vidljivost na internetu",
      "Više zakazanih termina",
      "Profesionalan online nastup",
    ],
    url: "https://majabeautyroom.com",
    coverImage: "/portfolio/primjer-2/logo.png",
  },
  {
    slug: "electon",
    title: "Electon — e-commerce platforma",
    client: "Electon",
    year: 2024,
    category: "ecommerce",
    services: ["Web shop", "Naplata", "Integracije"],
    summary:
      "Moderna e-commerce platforma Electon sa katalogom proizvoda, korpom i integracijama za online narudžbe.",
    results: [
      "Povećana online prodaja",
      "Lako upravljanje proizvodima",
      "Sigurna naplata",
    ],
    url: "https://electon-app.vercel.app/",
    coverImage: "/portfolio/primjer-4/electon.png",
  },
];
