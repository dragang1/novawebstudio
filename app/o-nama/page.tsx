"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Zap, Target, HeartHandshake, Check, ArrowRight } from "lucide-react";

export default function ONamaPage() {
  const features = [
    { 
      icon: Zap, 
      title: "Brzi sajtovi", 
      desc: "Optimizovani za brzinu i performanse",
      color: "text-accent-500",
      bgColor: "bg-accent-500/10",
    },
    { 
      icon: Target, 
      title: "Fokus na rezultate", 
      desc: "Sajtovi koji donose klijente i prodaju",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    { 
      icon: HeartHandshake, 
      title: "Dugoročna podrška", 
      desc: "Tu smo i nakon objave sajta",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
  ];

  const philosophy = [
    "Fokus na rezultate, ne samo na lijep dizajn",
    "Brzi i optimizovani sajtovi",
    "Jasna komunikacija i transparentnost",
    "Dugoročna podrška i održavanje"
  ];

 

  return (
    <div className="bg-surface-primary min-h-screen pt-24">
      {/* Hero */}
      <AnimatedSection className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-cool" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-emerald-500 text-sm font-medium tracking-wider uppercase mb-4">
              O nama
            </span>
            <h1 className="font-heading text-display mb-6">
              <span className="gradient-text-cool">Upoznajte</span>
              <span className="text-dark-50"> nas</span>
            </h1>
            <p className="text-xl text-dark-400 leading-relaxed">
              Specijalizovani za izradu web sajtova koji donose rezultate
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Content */}
      <AnimatedSection className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern-emerald opacity-15" />

        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          {/* Who we are */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-surface-card rounded-2xl p-10 md:p-16 mb-12 border border-white/5"
          >
            <h2 className="font-heading text-title mb-8">
              <span className="text-dark-50">Ko smo </span>
              <span className="gradient-text-cool">mi</span>
              <span className="text-dark-50">?</span>
            </h2>
            <div className="space-y-6 text-dark-400 leading-relaxed">
              <p className="text-lg">
                Nova Web Studio je tim stručnjaka posvećen izradi modernih web sajtova koji donose rezultate. 
                Specijalizovani smo za rad sa lokalnim biznisima i e-commerce projektima.
              </p>
              <p className="text-lg">
                Naša misija je pomoći biznisima da izgledaju profesionalno online, budu brzi na Google-u 
                i pretvaraju posjete u upite i prodaju. Verujemo da svaki biznis zaslužuje kvalitetan web sajt 
                koji radi za njih 24/7.
              </p>
            </div>
          </motion.div>

          {/* Two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-surface-card rounded-2xl p-8 border border-white/5 hover:border-accent-500/15 transition-colors duration-300"
            >
              <h3 className="font-heading text-xl font-semibold text-dark-50 mb-6">Naša filozofija</h3>
              <ul className="space-y-4">
                {philosophy.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-dark-400">
                    <Check className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            
           
          </div>

          {/* Why choose us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-surface-card rounded-2xl p-10 md:p-16 border border-white/5"
          >
            <h2 className="font-heading text-title text-center mb-12">
              <span className="text-dark-50">Zašto </span>
              <span className="gradient-text-multi">odabrati nas</span>
              <span className="text-dark-50">?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-xl ${feature.bgColor} border border-white/5 flex items-center justify-center`}>
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-dark-50 mb-2">{feature.title}</h3>
                  <p className="text-dark-400 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-surface-secondary" />
        <div className="absolute inset-0 gradient-bg" />
        
        {/* Simple static glows */}
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-emerald-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-blue-500/8 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-display mb-6"
          >
            <span className="text-dark-50">Spremni da </span>
            <span className="gradient-text-cool">radimo zajedno</span>
            <span className="text-dark-50">?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-dark-400 mb-12 max-w-2xl mx-auto"
          >
            Kontaktirajte nas danas i razgovarajmo o vašem projektu. Besplatna konsultacija 15 minuta bez obaveza.
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
                className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-surface-primary px-10 py-5 rounded-full font-semibold text-lg transition-shadow duration-300 hover:shadow-glow-emerald cursor-pointer"
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
