import type { ReactNode } from "react";
import { motion } from "motion/react";

export function FadeIn({ children, delay = 0, margin = "-60px" }: { children: ReactNode; delay?: number; margin?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
