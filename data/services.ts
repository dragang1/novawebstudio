export type ServiceColor = "coral" | "emerald" | "blue" | "purple" | "pink" | "amber";

export type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: "globe" | "shopping-cart" | "sparkles" | "wrench" | "trending-up";
  color: ServiceColor;
};

export const services: Service[] = [
  {
    id: "web-sajtovi",
    title: "Izrada web sajtova",
    description: "Moderan i brz web sajt koji predstavlja vaš biznis profesionalno i donosi nove klijente.",
    features: [
      "Responsive dizajn (mobilni, tablet, desktop)",
      "Optimizacija za pretraživače (SEO)",
      "Brzo učitavanje stranica",
      "Kontakt forme i integracije",
      "Lako upravljanje sadržajem"
    ],
    icon: "globe",
    color: "blue"
  },
  {
    id: "web-shop",
    title: "E-commerce / Web shop",
    description: "Potpuno funkcionalan online shop sa katalogom proizvoda, korpom za kupovinu i sistemom za naplatu.",
    features: [
      "Katalog proizvoda sa slikama",
      "Korpa za kupovinu",
      "Integracija sistema za plaćanje",
      "Upravljanje narudžbama",
      "Integracija sa dostavom"
    ],
    icon: "shopping-cart",
    color: "emerald"
  },
  {
    id: "redizajn",
    title: "Redizajn i optimizacija",
    description: "Osvježite postojeći sajt modernim dizajnom i poboljšajte brzinu i korisničko iskustvo.",
    features: [
      "Moderan redizajn",
      "Optimizacija brzine učitavanja",
      "Poboljšanje SEO-a",
      "Mobilna optimizacija",
      "A/B testiranje"
    ],
    icon: "sparkles",
    color: "pink"
  },
  {
    id: "odrzavanje",
    title: "Održavanje i podrška",
    description: "Redovno održavanje, sigurnosna ažuriranja i tehnička podrška za vaš web sajt.",
    features: [
      "Sigurnosna ažuriranja",
      "Backup podataka",
      "Tehnička podrška",
      "Dodavanje novih funkcionalnosti",
      "Monitoring performansi"
    ],
    icon: "wrench",
    color: "amber"
  },
  {
    id: "seo",
    title: "SEO osnove",
    description: "Optimizacija vašeg sajta za pretraživače kako biste bili vidljiviji potencijalnim klijentima.",
    features: [
      "Optimizacija meta tagova",
      "Struktura stranice (schema markup)",
      "Optimizacija slika",
      "Lokalni SEO",
      "Analitika i izvještaji"
    ],
    icon: "trending-up",
    color: "purple"
  }
];
