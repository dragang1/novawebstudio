# Nova Web Studio - Web Sajt

Moderan web sajt za Nova Web Studio - studio za izradu web sajtova, e-commerce i digitalne marketing rješenja.

## Tehnologije

- **Next.js 16** - React framework sa App Router
- **TypeScript** - Tipizirani JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React 19** - Najnovija verzija React-a

## Struktura projekta

```
novawebstudio/
├── app/                    # Next.js App Router stranice
│   ├── layout.tsx         # Glavni layout sa Header i Footer
│   ├── page.tsx           # Početna stranica
│   ├── usluge/            # Stranica sa uslugama
│   ├── portfolio/         # Portfolio stranica
│   ├── o-nama/            # O nama stranica
│   └── kontakt/           # Kontakt stranica
├── components/            # React komponente
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── ProjectCard.tsx
│   ├── Process.tsx
│   └── ContactForm.tsx
├── data/                  # Podaci (portfolio, usluge)
│   ├── projects.ts
│   └── services.ts
└── public/                # Statički fajlovi (slike, itd.)
```

## Kako pokrenuti

1. Instaliraj dependencies:
```bash
npm install
```

2. Pokreni development server:
```bash
npm run dev
```

3. Otvori [http://localhost:3000](http://localhost:3000) u browseru

## Kako mijenjati portfolio

Portfolio projekti se nalaze u `data/projects.ts`. Da dodate novi projekat:

1. Otvori `data/projects.ts`
2. Dodaj novi objekat u `projects` array:

```typescript
{
  slug: "naziv-projekta",
  title: "Naziv projekta",
  client: "Ime klijenta",
  year: 2024,
  category: "website" | "ecommerce" | "redesign",
  services: ["Dizajn", "Izrada", "SEO"],
  summary: "Kratak opis projekta...",
  results: ["Rezultat 1", "Rezultat 2"],
  url: "https://example.com", // opciono
  coverImage: "/portfolio/naziv-projekta/cover.webp"
}
```

3. Dodaj sliku projekta u `public/portfolio/naziv-projekta/cover.webp`

## Kako mijenjati usluge

Usluge se nalaze u `data/services.ts`. Format je sličan kao za portfolio.

## Kako mijenjati kontakt informacije

Kontakt informacije se nalaze u:
- `components/Footer.tsx` - footer sekcija
- `app/kontakt/page.tsx` - kontakt stranica

## Build za produkciju

```bash
npm run build
npm start
```

## Deployment

Sajt je spreman za deployment na:
- **Vercel** (preporučeno) - automatski build i deploy
- **Netlify** - takođe podržava Next.js
- **Cloudflare Pages** - brz i besplatan

## Napomene

- Portfolio slike trebaju biti u formatu WebP za najbolje performanse
- Kontakt forma trenutno simulira slanje - treba dodati API endpoint ili email servis
- Sajt je optimizovan za SEO sa meta tagovima i strukturom

## Jezik

Sajt je na **srpskom ijekavica** jeziku, optimizovan za tržište u Bosni i Hercegovini.
