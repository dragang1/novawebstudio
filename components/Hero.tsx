"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, BadgeCheck, Sparkles, Zap, Shield } from "lucide-react";

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
    {
      icon: BadgeCheck,
      number: "7+",
      label: "Godina",
      bgColor: "bg-fuchsia-500/15",
      iconColor: "text-fuchsia-500",
    },
  ];

  // Animation variants for staggered stats
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  // Floating animation for decorative elements
  const floatingVariants: Variants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-surface-primary" />
      <div className="absolute inset-0 mesh-gradient-warm" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Animated accent blobs */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-emerald-500/8 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.08, 0.15, 0.08]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          {/* Badge with pulse animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-card border border-white/10 text-sm text-dark-400"
              animate={{ boxShadow: ["0 0 0 rgba(168, 85, 247, 0)", "0 0 20px rgba(168, 85, 247, 0.3)", "0 0 0 rgba(168, 85, 247, 0)"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-500 to-emerald-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              Web Development Studio
            </motion.span>
          </motion.div>

          {/* Main heading with enhanced gradient animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-hero text-dark-50 mb-8 text-balance"
          >
            Kreiramo digitalna iskustva koja{" "}
            <motion.span
              className="gradient-text-multi"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              pretvaraju posjetioce
            </motion.span> u
            klijente
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-2xl text-dark-400 mb-12 max-w-2xl leading-relaxed"
          >
            Dizajniramo i izrađujemo moderne web sajtove za ambiciozne biznise
            koji žele da se istaknu u digitalnom svijetu.
          </motion.p>

          {/* CTA Buttons - Enhanced with magnetic effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link href="/kontakt">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-accent-500 to-pink-500 text-surface-primary px-6 sm:px-8 py-4 sm:py-5 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-shadow duration-300 hover:shadow-glow-multi cursor-pointer"
              >
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Započni projekat
                </motion.div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.div>
            </Link>
            <Link href="/portfolio">
              <motion.div
                whileHover={{ scale: 1.05, backgroundColor: "rgba(16, 185, 129, 0.1)", borderColor: "rgba(16, 185, 129, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 bg-transparent border border-white/10 text-dark-50 px-6 sm:px-8 py-4 sm:py-5 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300 cursor-pointer"
              >
                Pogledaj radove
              </motion.div>
            </Link>
          </motion.div>

          {/* Colorful Stats - Enhanced animations */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 lg:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="group flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-4 bg-surface-card/50 backdrop-blur-sm border border-white/5 rounded-2xl px-3 md:px-5 py-3 md:py-4 transition-colors duration-300 hover:border-white/10 cursor-pointer"
              >
                <motion.div
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${stat.bgColor} flex items-center justify-center flex-shrink-0`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className={`w-4 h-4 md:w-5 md:h-5 ${stat.iconColor}`} />
                </motion.div>
                <div className="text-center md:text-left">
                  <motion.div
                    className="text-base sm:text-lg md:text-2xl font-heading font-bold text-dark-50"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-2xs sm:text-xs md:text-sm text-dark-500">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Decorative elements - Enhanced with floating animations */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block">
          <div className="relative">
{/* Floating cards with enhanced effects */}
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="w-72 h-48 rounded-2xl bg-surface-card border border-white/10 p-6 shadow-card"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-500 to-pink-500 flex items-center justify-center mb-4"
                animate={{ boxShadow: ["0 0 0 rgba(168, 85, 247, 0)", "0 0 20px rgba(168, 85, 247, 0.5)", "0 0 0 rgba(168, 85, 247, 0)"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Zap className="w-5 h-5 text-white" />
              </motion.div>
              <div className="h-3 w-3/4 bg-gradient-to-r from-accent-500/30 to-pink-500/30 rounded mb-2" />
              <div className="h-3 w-1/2 bg-white/10 rounded" />
            </motion.div>
            
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="absolute -bottom-20 -left-16 w-56 h-36 rounded-2xl bg-surface-tertiary border border-white/10 p-5 shadow-card"
              style={{ animationDelay: "1s" }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="flex items-center gap-3 mb-3"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500" />
                <div className="h-2 w-20 bg-emerald-500/30 rounded" />
              </motion.div>
              <div className="h-2 w-full bg-white/5 rounded mb-2" />
              <div className="h-2 w-4/5 bg-white/5 rounded" />
            </motion.div>

            {/* Animated accent circles */}
            <motion.div
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full border-2 border-accent-500/20"
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-5 right-20 w-20 h-20 rounded-full border-2 border-emerald-500/20"
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-primary to-transparent" />
    </section>
  );
}
