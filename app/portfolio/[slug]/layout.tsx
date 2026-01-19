import { Metadata } from "next";
import { projects } from "@/data/projects";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://novawebstudio.co';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Projekat nije pronađen",
      description: "Traženi projekat ne postoji.",
    };
  }

  const categoryLabels = {
    website: "Web sajt",
    ecommerce: "E-commerce",
    redesign: "Redizajn",
  };

  return {
    title: project.title,
    description: project.summary,
    keywords: [
      project.title,
      categoryLabels[project.category],
      ...project.services,
      "portfolio",
      "web dizajn",
      "Nova Web Studio",
    ],
    openGraph: {
      title: `${project.title} | Nova Web Studio Portfolio`,
      description: project.summary,
      url: `${baseUrl}/portfolio/${project.slug}`,
      type: "article",
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Nova Web Studio`,
      description: project.summary,
      images: [project.coverImage],
    },
    alternates: {
      canonical: `${baseUrl}/portfolio/${project.slug}`,
    },
  };
}

// Generisanje statičkih parametara za build
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
