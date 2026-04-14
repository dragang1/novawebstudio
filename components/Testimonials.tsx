"use client";

import { testimonials } from "@/data/testimonials";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import AnimatedContainer from "./AnimatedContainer";

export default function Testimonials() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface-secondary" />
      <div className="absolute inset-0 dot-pattern-accent opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-emerald-500 text-sm font-medium tracking-wider uppercase mb-4">
            Šta kažu naši klijenti
          </span>
          <h2 className="font-heading text-display mb-6">
            <span className="text-dark-50">Povjerenje koje </span>
            <span className="gradient-text-emerald">zaslužujemo</span>
          </h2>
          <p className="text-xl text-dark-400 max-w-2xl mx-auto">
            Zadovoljni klijenti su naša najbolja preporuka. Pročitajte šta kažu o našoj saradnji.
          </p>
        </motion.div>

        <AnimatedContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-surface-card rounded-2xl p-8 border border-white/5 hover:border-emerald-500/30 transition-all duration-300 group shadow-card hover:shadow-glow-emerald/20"
            >
              {/* Floating quote icon */}
              <motion.div
                className="mb-6"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Quote className="w-8 h-8 text-emerald-500/30 group-hover:text-emerald-500 transition-colors duration-300" />
              </motion.div>

              {/* Animated rating */}
              <motion.div
                className="flex items-center gap-1 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 + i * 0.05, type: "spring" }}
                  >
                    <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Content with fade in */}
              <motion.blockquote
                className="text-dark-400 mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                "{testimonial.content}"
              </motion.blockquote>

              {/* Author with slide in */}
              <motion.div
                className="flex items-center gap-4"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center text-white font-semibold text-sm"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {testimonial.name.charAt(0)}
                </motion.div>
                <div>
                  <div className="font-semibold text-dark-50">{testimonial.name}</div>
                  <div className="text-sm text-dark-400">
                    {testimonial.role}, {testimonial.company}
                  </div>
                  {testimonial.project && (
                    <motion.div
                      className="text-xs text-emerald-500 mt-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      Projekat: {testimonial.project}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatedContainer>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-dark-400 mb-6">
            Pridružite se našim zadovoljnim klijentima
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-surface-primary px-8 py-4 rounded-full font-semibold hover:shadow-glow-emerald transition-shadow duration-300"
          >
            Započnite svoj projekat
          </a>
        </motion.div>
      </div>
    </section>
  );
}