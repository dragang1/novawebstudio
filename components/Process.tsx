"use client";

import { motion } from "framer-motion";
import { MessageSquare, Palette, Rocket } from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Razgovor i ciljevi",
      description: "Razgovaramo o vašem biznisu, ciljevima i tome šta želite postići sa web sajtom.",
      icon: MessageSquare,
      gradient: "from-accent-500 to-pink-500",
      bgColor: "bg-accent-500/10",
      textColor: "text-accent-500",
    },
    {
      number: "02",
      title: "Dizajn i izrada",
      description: "Kreiramo dizajn, izrađujemo sajt i testiramo na svim uređajima i pretraživačima.",
      icon: Palette,
      gradient: "from-emerald-500 to-blue-500",
      bgColor: "bg-emerald-500/10",
      textColor: "text-emerald-500",
    },
    {
      number: "03",
      title: "Objava i podrška",
      description: "Objavljujemo sajt, pružamo podršku i kontinuirano optimizujemo performanse.",
      icon: Rocket,
      gradient: "from-blue-500 to-purple-500",
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-500",
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background - SIMPLIFIED */}
      <div className="absolute inset-0 bg-surface-secondary" />
      <div className="absolute inset-0 mesh-gradient-cool" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-emerald-500 text-sm font-medium tracking-wider uppercase mb-4">
            Proces
          </span>
          <h2 className="font-heading text-display mb-6">
            <span className="text-dark-50">Kako </span>
            <span className="gradient-text-cool">radimo</span>
          </h2>
          <p className="text-xl text-dark-400 max-w-2xl mx-auto">
            Jednostavan proces u tri koraka od ideje do objavljenog web sajta
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+4rem)] right-0 h-px">
                  <div className={`h-full bg-gradient-to-r ${step.gradient} opacity-30`} />
                </div>
              )}

              {/* Card */}
              <div className="relative bg-surface-card rounded-2xl p-8 border border-white/5 group-hover:border-white/10 transition-colors duration-300">
                {/* Step number */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-xl ${step.bgColor} border border-white/5 flex items-center justify-center transition-colors duration-300`}>
                    <step.icon className={`w-6 h-6 ${step.textColor}`} />
                  </div>
                  <span className={`text-5xl font-heading font-bold bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-300`}>
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold text-dark-50 mb-3">
                  {step.title}
                </h3>
                <p className="text-dark-400 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
