"use client";

import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedContainer from "@/components/AnimatedContainer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <Hero />
      
      {/* Usluge sekcija */}
      <AnimatedSection className="py-32 relative overflow-hidden">
        {/* Background - SIMPLIFIED */}
        <div className="absolute inset-0 bg-surface-primary" />
        <div className="absolute inset-0 mesh-gradient-warm" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <span className="inline-block text-accent-500 text-sm font-medium tracking-wider uppercase mb-4">
              Usluge
            </span>
            <h2 className="font-heading text-display mb-6">
              <span className="text-dark-50">Šta </span>
              <span className="gradient-text-warm">radimo</span>
            </h2>
            <p className="text-xl text-dark-400 max-w-2xl mx-auto">
              Sve što vam treba za uspješno online prisustvo
            </p>
          </motion.div>
          <AnimatedContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </AnimatedContainer>
        </div>
      </AnimatedSection>

      {/* Proces rada */}
      <Process />

      {/* Portfolio sekcija */}
      <AnimatedSection className="py-32 relative overflow-hidden">
        {/* Background - SIMPLIFIED */}
        <div className="absolute inset-0 bg-surface-primary" />
        <div className="absolute inset-0 dot-pattern-coral opacity-20" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <span className="inline-block text-pink-500 text-sm font-medium tracking-wider uppercase mb-4">
              Portfolio
            </span>
            <h2 className="font-heading text-display mb-6">
              <span className="text-dark-50">Naši </span>
              <span className="gradient-text-multi">radovi</span>
            </h2>
            <p className="text-xl text-dark-400 max-w-2xl mx-auto">
              Pogledajte neke od naših uspješnih projekata
            </p>
          </motion.div>
          <AnimatedContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </AnimatedContainer>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Link href="/portfolio">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 bg-transparent border border-white/10 text-dark-50 px-8 py-4 rounded-full font-semibold hover:border-pink-500/50 hover:bg-pink-500/5 transition-all duration-300 cursor-pointer"
              >
                Pogledaj sve projekte
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA sekcija */}
      <AnimatedSection className="py-32 relative overflow-hidden">
        {/* Background - SIMPLIFIED */}
        <div className="absolute inset-0 bg-surface-secondary" />
        <div className="absolute inset-0 gradient-bg" />
        
        {/* Simple static glows - no animation, reduced blur */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-emerald-500 text-sm font-medium tracking-wider uppercase mb-4">
              Započnite danas
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-heading text-display mb-6"
            >
              <span className="text-dark-50">Spremni da </span>
              <span className="gradient-text">započnete</span>
              <span className="text-dark-50">?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-dark-400 mb-12 leading-relaxed"
            >
              Kontaktirajte nas danas i dobijte besplatnu konsultaciju o vašem projektu. 
              Zajedno ćemo stvoriti nešto izvanredno.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/kontakt">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-accent-500 via-pink-500 to-purple-500 text-surface-primary px-10 py-5 rounded-full font-semibold text-lg transition-shadow duration-300 hover:shadow-glow-multi cursor-pointer"
                >
                  Zatraži ponudu
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
