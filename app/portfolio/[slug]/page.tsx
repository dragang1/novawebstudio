"use client";

import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Check, ArrowRight } from "lucide-react";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const [imageError, setImageError] = useState(false);
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const categoryConfig = {
    website: {
      label: "Web sajt",
      gradient: "from-blue-500 to-purple-500",
      color: "text-blue-500",
      checkColor: "text-blue-500",
    },
    ecommerce: {
      label: "E-commerce",
      gradient: "from-emerald-500 to-blue-500",
      color: "text-emerald-500",
      checkColor: "text-emerald-500",
    },
    redesign: {
      label: "Redizajn",
      gradient: "from-pink-500 to-accent-500",
      color: "text-pink-500",
      checkColor: "text-pink-500",
    }
  };

  const config = categoryConfig[project.category];

  return (
    <div className="bg-surface-primary min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-multi" />

        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/portfolio">
              <div className="inline-flex items-center gap-2 text-dark-400 hover:text-accent-500 mb-8 transition-colors text-sm font-medium">
                <ArrowLeft className="w-4 h-4" />
                Nazad na portfolio
              </div>
            </Link>
            
            <span className={`inline-block ${project.slug === 'primjer-projekta-2' ? 'text-purple-500' : config.color} text-sm font-medium tracking-wider uppercase mb-4`}>
              {project.client} • {project.year}
            </span>
            
            <h1 className="font-heading text-display text-dark-50 mb-6">{project.title}</h1>
            <p className="text-xl text-dark-400 max-w-2xl">{project.summary}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern-multi opacity-15" />

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          {/* Cover Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-surface-card rounded-2xl overflow-hidden mb-12 border border-white/5"
          >
            <div className="relative h-96 md:h-[500px] bg-surface-tertiary flex items-center justify-center">
              {!imageError ? (
                <>
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className={`object-cover ${project.slug === 'primjer-projekta-2' || project.slug === 'primjer-projekta-3' ? 'brightness-75' : ''}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    onError={() => setImageError(true)}
                  />
                  {project.slug === 'primjer-projekta-2' && (
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-indigo-900/30 to-transparent" />
                  )}
                  {project.slug === 'primjer-projekta-3' && (
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-blue-900/30 to-transparent" />
                  )}
                </>
              ) : (
                <div className={`text-9xl font-heading font-bold bg-gradient-to-br ${config.gradient} bg-clip-text text-transparent opacity-30`}>
                  {project.title.charAt(0)}
                </div>
              )}
              {/* Gradient accent at bottom */}
              <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${project.slug === 'primjer-projekta-2' ? 'from-purple-500 to-indigo-500' : config.gradient}`} />
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-surface-card rounded-2xl p-10 md:p-16 mb-12 border border-white/5"
          >
            <h2 className="font-heading text-title mb-6">
              <span className="text-dark-50">O </span>
              <span className={`bg-gradient-to-r ${project.slug === 'primjer-projekta-2' ? 'from-purple-500 to-indigo-500' : config.gradient} bg-clip-text text-transparent`}>projektu</span>
            </h2>
            <p className="text-dark-400 text-lg leading-relaxed mb-10">{project.summary}</p>

            {/* Services */}
            <div className="mb-10">
              <h3 className="text-lg font-heading font-semibold text-dark-50 mb-4">Usluge</h3>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-surface-tertiary border border-white/5 text-dark-300 text-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Results */}
            {project.results && project.results.length > 0 && (
              <div className="mb-10">
                <h3 className="text-lg font-heading font-semibold text-dark-50 mb-4">Rezultati</h3>
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3 text-dark-400">
                      <Check className={`w-5 h-5 ${project.slug === 'primjer-projekta-2' ? 'text-purple-500' : config.checkColor} mt-0.5 flex-shrink-0`} />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Visit site button */}
            {project.url && (
              <div className="pt-8 border-t border-white/5">
                <Link href={project.url} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`inline-flex items-center gap-3 bg-gradient-to-r ${project.slug === 'primjer-projekta-2' ? 'from-purple-500 to-indigo-500' : config.gradient} text-surface-primary px-8 py-4 rounded-full font-semibold transition-shadow duration-300 hover:shadow-glow-multi cursor-pointer`}
                  >
                    Pogledaj sajt
                    <ExternalLink className="w-5 h-5" />
                  </motion.div>
                </Link>
              </div>
            )}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Link href="/kontakt">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 bg-transparent border border-white/10 text-dark-50 px-10 py-5 rounded-full font-semibold text-lg hover:border-accent-500/50 hover:bg-accent-500/5 transition-all duration-300 cursor-pointer"
              >
                Zatraži sličan projekat
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
