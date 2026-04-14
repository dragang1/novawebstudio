export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
  project?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Stefan",
    company: "LED Tehnika",
    role: "Direktor",
    content:
      "Izuzetna saradnja sa timom. Napravili su nam e-commerce platformu koja radi savršeno. Prodaja se povećala za 60% u prvih 6 mjeseci. Preporučujem svima!",
    rating: 5,
    project: "E-commerce sajt za online prodaju",
  },
  {
    id: "2",
    name: "Maja",
    company: "Maja Beauty Room",
    role: "Vlasnica",
    content:
      "Nova Web Studio je transformisala naše online prisustvo. Od kada imamo novi sajt, broj zakazanih termina se povećao za 40%. Profesionalan pristup i brza komunikacija.",
    rating: 5,
    project: "Beauty salon web sajt",
  },
  {
    id: "3",
    name: "Sara",
    company: "Caffe Central",
    role: "Menadžer",
    content:
      "Redizajn našeg sajta je bio hit. Moderniji izgled i bolja funkcionalnost. Sada imamo mnogo više online rezervacija. Hvala Nova Web Studio!",
    rating: 5,
    project: "Redizajn postojećeg sajta",
  },
  {
    id: "4",
    name: "Goran",
    company: "Auto Servis Plus",
    role: "Vlasnik",
    content:
      "Profesionalni tim koji zna svoj posao. Sajt je brz, mobilno optimizovan i lako se ažurira. Vidljivost na Google-u se značajno poboljšala.",
    rating: 5,
  },
];
