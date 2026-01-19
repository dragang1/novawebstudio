"use client";

import { Service, ServiceColor } from "@/data/services";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, ShoppingCart, Sparkles, Wrench, TrendingUp, ArrowRight, Check } from "lucide-react";

const iconMap = {
  "globe": Globe,
  "shopping-cart": ShoppingCart,
  "sparkles": Sparkles,
  "wrench": Wrench,
  "trending-up": TrendingUp,
};

const colorMap: Record<ServiceColor, {
  bg: string;
  text: string;
  border: string;
  gradient: string;
  check: string;
}> = {
  coral: {
    bg: "bg-accent-500/10",
    text: "text-accent-500",
    border: "group-hover:border-accent-500/20",
    gradient: "from-accent-500 to-pink-500",
    check: "text-accent-500",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-500",
    border: "group-hover:border-emerald-500/20",
    gradient: "from-emerald-500 to-blue-500",
    check: "text-emerald-500",
  },
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-500",
    border: "group-hover:border-blue-500/20",
    gradient: "from-blue-500 to-purple-500",
    check: "text-blue-500",
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-500",
    border: "group-hover:border-purple-500/20",
    gradient: "from-purple-500 to-pink-500",
    check: "text-purple-500",
  },
  pink: {
    bg: "bg-pink-500/10",
    text: "text-pink-500",
    border: "group-hover:border-pink-500/20",
    gradient: "from-pink-500 to-accent-500",
    check: "text-pink-500",
  },
  amber: {
    bg: "bg-amber-500/10",
    text: "text-amber-500",
    border: "group-hover:border-amber-500/20",
    gradient: "from-amber-500 to-accent-500",
    check: "text-amber-500",
  },
};

export default function ServiceCard({ service, index }: { service: Service; index?: number }) {
  const IconComponent = iconMap[service.icon];
  const colors = colorMap[service.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index || 0) * 0.1 }}
      className="group h-full"
    >
      <div className={`relative h-full bg-surface-card rounded-2xl p-8 border border-white/5 ${colors.border} transition-colors duration-300 overflow-hidden`}>
        {/* Content */}
        <div className="relative z-10">
          {/* Icon with color */}
          <div className={`w-14 h-14 rounded-xl ${colors.bg} border border-white/5 flex items-center justify-center mb-6 transition-colors duration-300`}>
            <IconComponent className={`w-6 h-6 ${colors.text}`} />
          </div>

          {/* Title */}
          <h3 className="text-xl font-heading font-semibold text-dark-50 mb-3">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-dark-400 mb-6 leading-relaxed text-sm">
            {service.description}
          </p>

          {/* Features with colored checks */}
          <ul className="space-y-3 mb-8">
            {service.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm text-dark-400"
              >
                <Check className={`w-4 h-4 ${colors.check} mt-0.5 flex-shrink-0`} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link href="/kontakt">
            <div className={`inline-flex items-center gap-2 text-dark-300 hover:${colors.text} transition-colors duration-300 text-sm font-medium cursor-pointer`}>
              <span>Zatraži ponudu</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        {/* Corner accent - static, no animation */}
        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${colors.gradient} rounded-bl-full opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
      </div>
    </motion.div>
  );
}
