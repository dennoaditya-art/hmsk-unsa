"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });
  return <motion.div style={{ scaleX }} className="fixed top-0 inset-x-0 z-[60] h-[2.5px] origin-left bg-gradient-to-r from-primary via-indigo-500 to-violet-500 shadow-[0_1px_8px_hsl(var(--primary)/0.4)]" />;
}
