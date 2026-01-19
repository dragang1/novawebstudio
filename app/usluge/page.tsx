"use client";

import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedContainer from "@/components/AnimatedContainer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function UslugePage() {
  return (
    <div className="bg-surface-primary min-h-screen pt-24">
      {/* Hero */}
      <AnimatedSection className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-warm" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-accent-500 text-sm font-medium tracking-wider uppercase mb-4">
              Usluge
            </span>
            <h1 className="font-heading text-display mb-6">
              <span className="text-dark-50">Šta </span>
              <span className="gradient-text-warm">radimo za vas</span>
            </h1>
            <p className="text-xl text-dark-400 leading-relaxed">
              Sveobuhvatne usluge za vaš online biznis - od ideje do objavljenog sajta i kontinuirane podrške
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Services Grid */}
      <AnimatedSection className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern-multi opacity-20" />

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={service.id} id={service.id}>
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </AnimatedContainer>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-surface-secondary" />
        <div className="absolute inset-0 gradient-bg" />
        
        {/* Simple static glows */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-accent-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-emerald-500/8 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-display mb-6"
          >
            <span className="text-dark-50">Imate pitanja ili </span>
            <span className="gradient-text">želite ponudu</span>
            <span className="text-dark-50">?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-dark-400 mb-12 max-w-2xl mx-auto"
          >
            Kontaktirajte nas i razgovarajmo o vašem projektu. Besplatna konsultacija 15 minuta bez obaveza.
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
                className="inline-flex items-center gap-3 bg-gradient-to-r from-accent-500 to-pink-500 text-surface-primary px-10 py-5 rounded-full font-semibold text-lg transition-shadow duration-300 hover:shadow-glow-multi cursor-pointer"
              >
                Kontaktirajte nas
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}
