"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedContainerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
}

export default function AnimatedContainer({ children, className = "", stagger = 0.1 }: AnimatedContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: stagger
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
