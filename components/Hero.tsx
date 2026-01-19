"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";

export default function Hero() {
  const stats = [
    { 
      icon: Sparkles, 
      number: "50+", 
      label: "Projekata",
      bgColor: "bg-accent-500/15",
      iconColor: "text-accent-500",
    },
    { 
      icon: Zap, 
      number: "100%", 
      label: "Zadovoljstvo",
      bgColor: "bg-emerald-500/15",
      iconColor: "text-emerald-500",
    },
    { 
      icon: Shield, 
      number: "24/7", 
      label: "Podrška",
      bgColor: "bg-blue-500/15",
      iconColor: "text-blue-500",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Background layers - SIMPLIFIED */}
      <div className="absolute inset-0 bg-surface-primary" />
      <div className="absolute inset-0 mesh-gradient-warm" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Simple static accent - NO blur animation */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-emerald-500/8 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-card border border-white/10 text-sm text-dark-400">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-500 to-emerald-500" />
              Web Development Studio
            </span>
          </motion.div>

          {/* Main heading with gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-hero text-dark-50 mb-8 text-balance"
          >
            Kreiramo digitalna iskustva koja{" "}
            <span className="gradient-text-multi">pretvaraju posjetioce</span>{" "}
            u klijente
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-dark-400 mb-12 max-w-2xl leading-relaxed"
          >
            Dizajniramo i izrađujemo moderne web sajtove za ambiciozne biznise 
            koji žele da se istaknu u digitalnom svijetu.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link href="/kontakt">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-accent-500 to-pink-500 text-surface-primary px-8 py-5 rounded-full font-semibold text-lg transition-shadow duration-300 hover:shadow-glow-multi cursor-pointer"
              >
                Započni projekat
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.div>
            </Link>
            <Link href="/portfolio">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 bg-transparent border border-white/10 text-dark-50 px-8 py-5 rounded-full font-semibold text-lg hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300 cursor-pointer"
              >
                Pogledaj radove
              </motion.div>
            </Link>
          </motion.div>

          {/* Colorful Stats - SIMPLIFIED animations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-6 md:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="group flex items-center gap-4 bg-surface-card/50 backdrop-blur-sm border border-white/5 rounded-2xl px-5 py-4 transition-colors duration-300 hover:border-white/10"
              >
                <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                  <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
                </div>
                <div>
                  <div className="text-2xl font-heading font-bold text-dark-50">
                    {stat.number}
                  </div>
                  <div className="text-sm text-dark-500">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Decorative elements - SIMPLIFIED, removed heavy animations */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block">
          <div className="relative">
            {/* Static floating cards */}
            <div className="w-72 h-48 rounded-2xl bg-surface-card border border-white/10 p-6 shadow-card">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-500 to-pink-500 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="h-3 w-3/4 bg-gradient-to-r from-accent-500/30 to-pink-500/30 rounded mb-2" />
              <div className="h-3 w-1/2 bg-white/10 rounded" />
            </div>
            
            <div className="absolute -bottom-20 -left-16 w-56 h-36 rounded-2xl bg-surface-tertiary border border-white/10 p-5 shadow-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500" />
                <div className="h-2 w-20 bg-emerald-500/30 rounded" />
              </div>
              <div className="h-2 w-full bg-white/5 rounded mb-2" />
              <div className="h-2 w-4/5 bg-white/5 rounded" />
            </div>

            {/* Simple accent circles - no animation */}
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full border-2 border-accent-500/20" />
            <div className="absolute -bottom-5 right-20 w-20 h-20 rounded-full border-2 border-emerald-500/20" />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-primary to-transparent" />
    </section>
  );
}
