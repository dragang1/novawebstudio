"use client";

import { Project } from "@/data/projects";
import Link from "next/link";
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index || 0) * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group h-full"
    >
      <div className="relative h-full bg-surface-card rounded-2xl overflow-hidden border border-white/5 group-hover:border-white/10 transition-colors duration-300 flex flex-col">
        {/* Image container */}
        <div className="relative h-56 bg-surface-tertiary overflow-hidden">
          {!imageError ? (
            <div className="relative w-full h-full">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className={`object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={() => setImageError(true)}
              />
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
            <span className={`px-3 py-1.5 rounded-full ${config.bgColor} backdrop-blur-sm border border-white/10 ${config.textColor} text-xs font-medium`}>
              {config.label}
            </span>
          </div>

          {/* Hover overlay with CTA */}
         {project.url && (
  <div
    className={`absolute inset-0 bg-gradient-to-t ${config.gradient}
      opacity-0 md:group-hover:opacity-70 md:flex
      flex items-center justify-center transition-opacity duration-200`}
  >
    <Link href={project.url} target="_blank" rel="noopener noreferrer">
      <div className="flex items-center gap-2 bg-white text-surface-primary px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:scale-105 transition-transform duration-200">
        Pogledaj sajt
        <ExternalLink className="w-4 h-4" />
      </div>
    </Link>
  </div>
)}

        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-lg font-heading font-semibold text-dark-50 mb-2">
            {project.title}
          </h3>
          
          <p className="text-dark-400 mb-5 text-sm leading-relaxed flex-1">
            {project.summary}
          </p>
          
          {/* Services tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.services.slice(0, 3).map((service, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-full bg-surface-tertiary border border-white/5 text-dark-400 text-xs"
              >
                {service}
              </span>
            ))}
          </div>

          {/* Results */}
          {project.results && project.results.length > 0 && (
            <div className="pt-4 border-t border-white/5">
              <ul className="space-y-2">
                {project.results.slice(0, 2).map((result, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs text-dark-400"
                  >
                    <Check className={`w-3.5 h-3.5 ${config.textColor} mt-0.5 flex-shrink-0`} />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Bottom gradient accent */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${config.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      </div>
    </motion.div>
  );
}
