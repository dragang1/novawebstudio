"use client";

import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export default function KontaktPage() {
  const contactInfo = [
    { 
      icon: Mail, 
      label: "Email", 
      value: "novawebbih@gmail.com", 
      href: "mailto:novawebbih@gmail.com",
      color: "text-accent-500",
      bgColor: "bg-accent-500/10",
    },
    { 
      icon: Phone, 
      label: "Telefon", 
      value: "+387 66 745 772", 
      href: "tel:+38766745772",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    
  ];

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
              Kontakt
            </span>
            <h1 className="font-heading text-display mb-6">
              <span className="text-dark-50">Hajde da </span>
              <span className="gradient-text-warm">razgovaramo</span>
            </h1>
            <p className="text-xl text-dark-400 leading-relaxed">
              Imate pitanje ili želite ponudu? Kontaktirajte nas - odgovaramo u roku od 24 sata
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Content */}
      <AnimatedSection className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern-coral opacity-15" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-title mb-8">
                <span className="text-dark-50">Pošaljite nam </span>
                <span className="gradient-text">poruku</span>
              </h2>
              <ContactForm />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-title mb-8">
                <span className="text-dark-50">Kontakt </span>
                <span className="gradient-text-cool">informacije</span>
              </h2>
              
              {/* Contact cards */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group bg-surface-card rounded-xl p-6 border border-white/5 hover:border-white/10 transition-colors duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl ${item.bgColor} border border-white/5 flex items-center justify-center`}>
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-dark-400 mb-1">
                          {item.label}
                        </h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-dark-50 hover:text-accent-500 transition-colors text-lg font-medium"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-dark-50 text-lg font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Working hours */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-surface-card rounded-xl p-6 border border-white/5 mb-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-white/5 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-dark-400 mb-1">
                      Radno vrijeme
                    </h3>
                    <p className="text-dark-50 font-medium">
                      Ponedjeljak - Petak: 9:00 - 17:00
                    </p>
                    <p className="text-dark-400 text-sm">
                      Subota - Nedjelja: Po dogovoru
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="bg-gradient-to-br from-accent-500/10 via-pink-500/5 to-purple-500/5 rounded-xl p-6 border border-accent-500/20"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-500/15 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-accent-500" />
                  </div>
                  <div>
                    <h3 className="text-dark-50 font-semibold mb-2">
                      Besplatna konsultacija
                    </h3>
                    <p className="text-dark-400 text-sm leading-relaxed">
                      Nudimo besplatan razgovor od 15 minuta bez obaveza. 
                      Razgovarajmo o vašem projektu i kako možemo pomoći vašem biznisu da raste online.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
