"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus("idle");

  try {
    const response = await fetch("https://formspree.io/f/mjggrpln", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }),
    });

    if (response.ok) {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      setSubmitStatus("error");
    }
  } catch (error) {
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const inputClasses = "w-full px-5 py-4 bg-surface-tertiary border border-white/5 rounded-xl text-dark-50 placeholder:text-dark-500 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all duration-300";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <label htmlFor="name" className="block text-sm font-medium text-dark-300 mb-2">
          Ime i prezime *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Vaše ime i prezime"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <label htmlFor="email" className="block text-sm font-medium text-dark-300 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={inputClasses}
          placeholder="vas@email.com"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <label htmlFor="phone" className="block text-sm font-medium text-dark-300 mb-2">
          Telefon
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={inputClasses}
          placeholder="+387 XX XXX XXX"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <label htmlFor="message" className="block text-sm font-medium text-dark-300 mb-2">
          Poruka *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className={`${inputClasses} resize-none`}
          placeholder="Opišite šta vam treba ili postavite pitanje..."
        />
      </motion.div>

      <AnimatePresence>
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-5 py-4 rounded-xl"
          >
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <span>Hvala vam! Vaša poruka je poslana. Kontaktiraćemo vas uskoro.</span>
          </motion.div>
        )}
        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 text-red-400 px-5 py-4 rounded-xl"
          >
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span>Došlo je do greške. Molimo pokušajte ponovo ili nas kontaktirajte direktno.</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-full flex items-center justify-center gap-3 bg-accent-500 text-surface-primary px-8 py-5 rounded-xl font-semibold text-lg hover:bg-accent-400 transition-all duration-300 hover:shadow-glow-md disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-surface-primary/30 border-t-surface-primary rounded-full animate-spin" />
            Šalje se...
          </>
        ) : (
          <>
            Pošalji poruku
            <Send className="w-5 h-5" />
          </>
        )}
      </motion.button>

      <p className="text-sm text-dark-500 text-center">
        Odgovaramo u roku od 24 sata
      </p>
    </form>
  );
}
