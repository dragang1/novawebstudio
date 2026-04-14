import { baseUrl } from "./site";

export function generateBreadcrumbSchema(
  breadcrumbs: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export const homeBreadcrumbs = [
  { name: "Nova Web Studio", url: baseUrl },
];

export const uslugieBreadcrumbs = [
  { name: "Nova Web Studio", url: baseUrl },
  { name: "Usluge", url: `${baseUrl}/usluge` },
];

export const portfolioBreadcrumbs = [
  { name: "Nova Web Studio", url: baseUrl },
  { name: "Portfolio", url: `${baseUrl}/portfolio` },
];

export const aboutBreadcrumbs = [
  { name: "Nova Web Studio", url: baseUrl },
  { name: "O Nama", url: `${baseUrl}/o-nama` },
];

export const contactBreadcrumbs = [
  { name: "Nova Web Studio", url: baseUrl },
  { name: "Kontakt", url: `${baseUrl}/kontakt` },
];

export function getProjectBreadcrumbs(projectTitle: string, projectSlug: string) {
  return [
    { name: "Nova Web Studio", url: baseUrl },
    { name: "Portfolio", url: `${baseUrl}/portfolio` },
    { name: projectTitle, url: `${baseUrl}/portfolio/${projectSlug}` },
  ];
}
