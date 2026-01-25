"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  immediate?: boolean; // animate on mount instead of scroll
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  immediate = false,
}: FadeInProps) {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { y: 0, x: 30 },
    right: { y: 0, x: -30 },
    none: { y: 0, x: 0 },
  };

  const animationProps = immediate
    ? {
        initial: { opacity: 0, ...directions[direction] },
        animate: { opacity: 1, y: 0, x: 0 },
      }
    : {
        initial: { opacity: 0, ...directions[direction] },
        whileInView: { opacity: 1, y: 0, x: 0 },
        viewport: { once: true, margin: "-50px" },
      };

  return (
    <motion.div
      {...animationProps}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
