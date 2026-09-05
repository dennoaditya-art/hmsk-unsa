"use client";
import { motion, useReducedMotion } from "framer-motion";
import { leaders } from "@/data/leaders";
import { LeaderCard } from "./leader-card";
import { ArrowRight, Users, Crown } from "lucide-react";
import Link from "next/link";
import { fadeUp, staggerContainer, scaleIn, lineDraw } from "@/lib/motion";

export function StructureOverview() {
  const ketua = leaders[0];
  const pengurus = leaders.slice(1);
  const shouldReduce = useReducedMotion();
  return (
    <section id="struktur" className="relative bg-background border-t border-border overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={staggerContainer} className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2 mono text-[11px] tracking-[0.18em] text-muted-foreground">
              <span className="h-px w-6 bg-border" /> STRUKTUR PENGURUS
            </div>
            <h2 className="display mt-3 text-[32px] font-bold leading-[0.9] tracking-[-0.03em] text-foreground sm:text-[42px]">
              Dipimpin yang<br /><span className="text-muted-foreground">Ngerti Lapangan.</span>
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="max-w-md text-sm leading-6 text-muted-foreground">Bukan jabatan formalitas — tiap pengurus pegang proker nyata. Ketua coding, hardware, sampai keuangan jelas penanggung jawabnya.</motion.p>
        </motion.div>

        <div className="mt-10">
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="mx-auto max-w-[420px]">
            <div className="flex justify-center items-center gap-2 mono text-[11px] tracking-widest text-primary mb-3">
              <motion.span animate={shouldReduce ? {} : { rotate: [0, 8, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="flex"><Crown className="h-3.5 w-3.5" /></motion.span> KETUA UMUM
            </div>
            <LeaderCard leader={ketua} variant="ketua" />
            <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} style={{ originY: 0 }} className="flex justify-center mt-4">
              <div className="h-6 w-[2px] bg-foreground/10 rounded-full" />
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={lineDraw} className="hidden lg:block h-[2px] bg-foreground/10 w-full max-w-[880px] mx-auto rounded-full origin-left" />

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={staggerContainer} className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {pengurus.map((leader) => (
              <motion.div key={leader.name} variants={scaleIn} className="relative">
                <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.4 }} style={{ originY: 0 }} className="hidden lg:block absolute -top-6 left-1/2 h-6 w-[2px] bg-foreground/10 -translate-x-1/2 rounded-full" />
                <LeaderCard leader={leader} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3">
          <Link href="/struktur" className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-bold text-background hover:bg-foreground/90 active:scale-[0.98] transition min-h-12 sm:min-h-0">
            Lihat detail semua pengurus <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/tentang" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-muted active:bg-muted min-h-12 sm:min-h-0">
            <Users className="h-4 w-4" /> Tentang HMSK
          </Link>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mono text-center text-[11px] tracking-widest text-muted-foreground mt-6">5 PENGURUS INTI • 3 PROKER AKTIF • 1 VISI</motion.p>
      </div>
    </section>
  );
}
