"use client";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedContainer from "@/components/AnimatedContainer";

export default function PortfolioPage() {
  const [filter, setFilter] = useState<"all" | "website" | "ecommerce" | "redesign">("all");

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const categories = [
    { id: "all" as const, label: "Svi projekti", color: "from-accent-500 to-pink-500" },
    { id: "website" as const, label: "Web sajtovi", color: "from-blue-500 to-purple-500" },
    { id: "ecommerce" as const, label: "E-commerce", color: "from-emerald-500 to-blue-500" },
    { id: "redesign" as const, label: "Redizajn", color: "from-pink-500 to-accent-500" }
  ];

  return (
    <div className="bg-surface-primary min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-multi" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-pink-500 text-sm font-medium tracking-wider uppercase mb-4">
              Portfolio
            </span>
            <h1 className="font-heading text-display mb-6">
              <span className="text-dark-50">Naši </span>
              <span className="gradient-text-multi">radovi</span>
            </h1>
            <p className="text-xl text-dark-400 leading-relaxed">
              Pogledajte neke od naših uspješnih projekata za lokalne biznise i e-commerce
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern-multi opacity-15" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Filter buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                  filter === category.id
                    ? `bg-gradient-to-r ${category.color} text-surface-primary shadow-glow-sm`
                    : "bg-surface-card border border-white/5 text-dark-400 hover:text-dark-50 hover:border-white/10"
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Projects grid */}
          {filteredProjects.length > 0 ? (
            <AnimatedContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </AnimatedContainer>
          ) : (
            <div className="text-center py-20">
              <p className="text-dark-400 text-xl">Nema projekata u ovoj kategoriji.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
