"use client";

import { Project } from "@/data/projects";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Check } from "lucide-react";

export default function ProjectCard({ project, index }: { project: Project; index?: number }) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const categoryConfig = {
    website: {
      label: "Web sajt",
      gradient: "from-blue-500 to-purple-500",
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-500",
    },
    ecommerce: {
      label: "E-commerce",
      gradient: "from-emerald-500 to-blue-500",
      bgColor: "bg-emerald-500/10",
      textColor: "text-emerald-500",
    },
    redesign: {
      label: "Redizajn",
      gradient: "from-pink-500 to-accent-500",
      bgColor: "bg-pink-500/10",
      textColor: "text-pink-500",
    }
  };

  const config = categoryConfig[project.category];

  // Card content that will be reused for both desktop and mobile
  const cardContent = (isDesktop: boolean) => (
    <div className={`relative h-full bg-surface-card rounded-2xl overflow-hidden border border-white/5 group-hover:border-white/10 transition-colors duration-300 flex flex-col ${isDesktop && project.url ? 'cursor-pointer' : ''}`}>
      {/* Image container */}
      <div className="relative h-56 bg-surface-tertiary overflow-hidden">
        {!imageError ? (
          <div className="relative w-full h-full">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className={`object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'} ${project.slug === 'primjer-projekta-2' || project.slug === 'primjer-projekta-3' ? 'brightness-75' : ''}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImageError(true)}
            />
            {project.slug === 'primjer-projekta-2' && (
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-indigo-900/30 to-transparent" />
            )}
            {project.slug === 'primjer-projekta-3' && (
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-blue-900/30 to-transparent" />
            )}
          </div>
        ) : (
          <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${config.gradient} opacity-20`}>
            <span className="text-5xl font-heading font-bold text-white/50">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent" />
        
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1.5 rounded-full ${project.slug === 'primjer-projekta-2' ? 'bg-purple-500/10' : config.bgColor} backdrop-blur-sm border border-white/10 ${project.slug === 'primjer-projekta-2' ? 'text-purple-500' : config.textColor} text-xs font-medium`}>
            {config.label}
          </span>
        </div>

        {/* Hover overlay - Desktop only (visual feedback) */}
        {isDesktop && project.url && (
          <div
            className={`absolute inset-0 bg-gradient-to-t ${project.slug === 'primjer-projekta-2' ? 'from-purple-500 to-indigo-500' : config.gradient}
              opacity-0 group-hover:opacity-50 flex items-center justify-center transition-opacity duration-200`}
          >
            <div className="flex items-center gap-2 bg-white text-surface-primary px-6 py-3 rounded-full font-semibold text-sm shadow-lg">
              Pogledaj sajt
              <ExternalLink className="w-4 h-4" />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <motion.h3
          className="text-lg font-heading font-semibold text-dark-50 mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + (index || 0) * 0.1 }}
        >
          {project.title}
        </motion.h3>
        
        <motion.p
          className="text-dark-400 mb-5 text-sm leading-relaxed flex-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + (index || 0) * 0.1 }}
        >
          {project.summary}
        </motion.p>
        
        {/* Services tags with stagger */}
        <motion.div
          className="flex flex-wrap gap-2 mb-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.4 + (index || 0) * 0.1,
              },
            },
          }}
        >
          {project.services.slice(0, 3).map((service, idx) => (
            <motion.span
              key={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                show: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.05 }}
              className="px-2.5 py-1 rounded-full bg-surface-tertiary border border-white/5 text-dark-400 text-xs"
            >
              {service}
            </motion.span>
          ))}
        </motion.div>

        {/* Results with stagger */}
        {project.results && project.results.length > 0 && (
          <motion.div
            className="pt-4 border-t border-white/5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + (index || 0) * 0.1 }}
          >
            <motion.ul
              className="space-y-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.6 + (index || 0) * 0.1,
                  },
                },
              }}
            >
              {project.results.slice(0, 2).map((result, idx) => (
                <motion.li
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 },
                  }}
                  className="flex items-start gap-2 text-xs text-dark-400"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Check className={`w-3.5 h-3.5 ${project.slug === 'primjer-projekta-2' ? 'text-purple-500' : config.textColor} mt-0.5 flex-shrink-0`} />
                  </motion.div>
                  <span>{result}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}

        {/* Mobile CTA button - only shown on mobile */}
        {!isDesktop && project.url && (
          <div className="mt-4 pt-4 border-t border-white/5">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 border px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 hover:scale-105 active:scale-95 ${
                project.slug === 'primjer-projekta-2' 
                  ? 'bg-purple-500/10 text-purple-500 border-purple-500/20' 
                  : `${config.bgColor} ${config.textColor} border-white/10`
              }`}
            >
              Otvori sajt
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>

      {/* Bottom gradient accent */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.slug === 'primjer-projekta-2' ? 'from-purple-500 to-indigo-500' : config.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index || 0) * 0.15, type: "spring", stiffness: 100 }}
      whileHover={{ y: -10, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group h-full"
    >
      {/* Desktop version - entire card is clickable */}
      {project.url ? (
        <a 
          href={project.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hidden md:block h-full"
        >
          {cardContent(true)}
        </a>
      ) : (
        <div className="hidden md:block h-full">
          {cardContent(true)}
        </div>
      )}

      {/* Mobile version - card is not clickable, uses button instead */}
      <div className="md:hidden h-full">
        {cardContent(false)}
      </div>
    </motion.div>
  );
}
