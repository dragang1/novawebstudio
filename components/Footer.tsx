"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, Heart, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "/usluge", label: "Usluge" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/o-nama", label: "O nama" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  const serviceLinks = [
    { href: "/usluge#web-sajtovi", label: "Web sajtovi" },
    { href: "/usluge#web-shop", label: "E-commerce" },
    { href: "/usluge#redizajn", label: "Redizajn" },
    { href: "/usluge#odrzavanje", label: "Održavanje" },
  ];

  const contactInfo = [
    { icon: Mail, text: "info@novawebstudio.co", color: "text-accent-500",href: "mailto:info@novawebstudio.co",},
    { icon: Phone, text: "+387 66 745 772", color: "text-emerald-500",href: "tel:+38766745772", },
    { icon: Instagram, text: "@novawebstudio.co",
    color: "text-blue-500",
    href: "https://instagram.com/novawebstudio.co",},
  ];

  return (
    <footer className="relative bg-surface-secondary border-t border-white/5">
      {/* Colorful background accent */}
      <div className="absolute inset-0 mesh-gradient-multi opacity-20" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/">
              <h3 className="text-2xl font-heading font-bold mb-4 cursor-pointer">
                <span className="text-dark-50">Nova</span>
                <span className="bg-gradient-to-r from-accent-500 to-pink-500 bg-clip-text text-transparent">.</span>
              </h3>
            </Link>
            <p className="text-dark-500 text-sm leading-relaxed mb-6">
              Izrada modernih web sajtova koji donose klijente. Specijalizovani za lokalne biznise i e-commerce.
            </p>
            <Link href="/kontakt">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-500 to-pink-500 text-surface-primary px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-glow-coral transition-all duration-300 cursor-pointer"
              >
                Započni projekat
                <ArrowUpRight className="w-4 h-4" />
              </motion.div>
            </Link>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-dark-50 font-semibold mb-6 text-sm uppercase tracking-wider">
              Navigacija
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-dark-500 hover:text-accent-500 transition-colors duration-300 text-sm cursor-pointer"
                    >
                      {link.label}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-dark-50 font-semibold mb-6 text-sm uppercase tracking-wider">
              Usluge
            </h4>
            <ul className="space-y-4">
              {serviceLinks.map((link, index) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-dark-500 hover:text-emerald-500 transition-colors duration-300 text-sm cursor-pointer"
                    >
                      {link.label}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact with colored icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-dark-50 font-semibold mb-6 text-sm uppercase tracking-wider">
              Kontakt
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, idx) => (
                <Link href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} key={idx} className="flex items-center gap-3 text-dark-500 text-sm">
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                  <span>{item.text}</span>
                </Link>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Gradient divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent mb-8" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-dark-600 text-sm">
            © {currentYear} Nova Web Studio. Sva prava zadržana.
          </p>
        
        </motion.div>
      </div>
    </footer>
  );
}
