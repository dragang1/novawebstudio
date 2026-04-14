"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/usluge", label: "Usluge" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/o-nama", label: "O nama" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-surface-primary/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-2xl font-heading font-bold cursor-pointer tracking-tight"
          >
            <span className="text-dark-50">Nova</span>
            <span className="bg-gradient-to-r from-accent-500 to-pink-500 bg-clip-text text-transparent">.</span>
          </motion.div>
        </Link>

        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link, index) => (
            <Link key={link.href} href={link.href}>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-dark-400 hover:text-dark-50 transition-colors duration-300 relative group cursor-pointer text-sm font-medium tracking-wide"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-accent-500 to-pink-500 group-hover:w-full transition-all duration-300" />
              </motion.div>
            </Link>
          ))}
          <Link href="/kontakt">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-2 bg-gradient-to-r from-accent-500 to-pink-500 text-surface-primary px-6 py-3 rounded-full font-semibold text-sm hover:shadow-glow-coral transition-all duration-300 cursor-pointer"
            >
              Kontakt
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.div>
          </Link>
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-dark-50 p-2"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </motion.button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute inset-x-0 top-full bg-gradient-to-b from-accent-600 via-fuchsia-600 to-slate-950 border-t border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.5)] z-40"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="text-surface-primary hover:text-white transition-colors py-2 text-lg font-medium">
                      {link.label}
                    </div>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Link href="/kontakt" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="flex items-center justify-center gap-2 bg-white/10 text-surface-primary px-6 py-4 rounded-full font-semibold text-center transition-all hover:bg-white/20">
                    Kontaktiraj nas
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
