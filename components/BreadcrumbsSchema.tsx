"use client";

import { usePathname } from "next/navigation";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { baseUrl } from "@/lib/site";
import { projects } from "@/data/projects";

export function BreadcrumbsSchema() {
  const pathname = usePathname();

  let breadcrumbs = [{ name: "Nova Web Studio", url: baseUrl }];

  // Determine breadcrumbs based on pathname
  if (pathname === "/usluge") {
    breadcrumbs = [
      { name: "Nova Web Studio", url: baseUrl },
      { name: "Usluge", url: `${baseUrl}/usluge` },
    ];
  } else if (pathname === "/portfolio") {
    breadcrumbs = [
      { name: "Nova Web Studio", url: baseUrl },
      { name: "Portfolio", url: `${baseUrl}/portfolio` },
    ];
  } else if (pathname.startsWith("/portfolio/")) {
    const slug = pathname.split("/")[2];
    const project = projects.find((p) => p.slug === slug);
    breadcrumbs = [
      { name: "Nova Web Studio", url: baseUrl },
      { name: "Portfolio", url: `${baseUrl}/portfolio` },
    ];
    if (project) {
      breadcrumbs.push({
        name: project.title,
        url: `${baseUrl}/portfolio/${slug}`,
      });
    }
  } else if (pathname === "/o-nama") {
    breadcrumbs = [
      { name: "Nova Web Studio", url: baseUrl },
      { name: "O Nama", url: `${baseUrl}/o-nama` },
    ];
  } else if (pathname === "/kontakt") {
    breadcrumbs = [
      { name: "Nova Web Studio", url: baseUrl },
      { name: "Kontakt", url: `${baseUrl}/kontakt` },
    ];
  }

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      suppressHydrationWarning
    />
  );
}
