"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  /** Margin used for whileInView trigger. Negative pushes trigger up. */
  margin?: string;
};

/** Editorial-restraint reveal: subtle fade + lift on scroll-into-view, with prefers-reduced-motion fallback. */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.8,
  className = "",
  margin = "-10%",
}: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
