"use client";
import { motion } from "framer-motion";
export function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div style={{ willChange: "transform, opacity" }} className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay }}>
      {children}
    </motion.div>
  );
}
