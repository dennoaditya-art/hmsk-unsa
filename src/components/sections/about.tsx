"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Code2, Users, Target, Sparkles, ArrowUpRight, Quote } from "lucide-react";
import { orgProfile } from "@/data/leaders";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/motion";

export function About() {
  const shouldReduce = useReducedMotion();
  return (
    <section id="tentang" className="relative bg-background border-y border-border overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer} className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12">
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-1.5 mono text-[11px] tracking-[0.18em] text-muted-foreground">
              <span className="h-px w-6 bg-border" /> TENTANG KAMI
            </div>
            <h2 className="display mt-3 text-[32px] font-bold leading-[0.9] tracking-[-0.03em] text-foreground sm:text-[42px]">
              Wadah Berkarya,<br /><span className="text-muted-foreground">Bukan Sekadar Organisasi.</span>
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="max-w-[420px] text-sm leading-6 text-muted-foreground">
            {orgProfile.vision} Kami fokus pada skill yang bisa jadi <span className="font-semibold text-foreground">penghasilan</span> — bukan cuma teori.
          </motion.p>
        </motion.div>

        <div className="mt-12 sm:mt-14 grid gap-6 lg:grid-cols-12 lg:gap-8">
          <motion.div initial={{ opacity: 0, y: 20, rotate: -0.4 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} whileHover={shouldReduce ? undefined : { y: -4 }} className="lg:col-span-7 rounded-[28px] bg-[#020617] text-white overflow-hidden relative p-7 sm:p-10">
            <div className="absolute inset-0 grid-pattern-dark opacity-20" />
            <motion.div animate={shouldReduce ? {} : { scale: [1, 1.08, 1], opacity: [0.14, 0.2, 0.14] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-16 -top-16 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/20 to-primary/06 blur-2xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/08 border border-white/10 px-3 py-1.5 mono text-[11px] tracking-widest">
                <Sparkles className="h-3 w-3 text-primary" /> VISI KAMI
              </div>
              <div className="mt-6 flex gap-3">
                <Quote className="h-7 w-7 text-primary shrink-0" />
                <p className="text-[17px] sm:text-[19px] leading-7 font-medium text-balance">&ldquo;{orgProfile.vision}&rdquo;</p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <img src="/logo/logo-main.jpg" alt="HMSK" className="h-8 w-8 rounded-xl object-cover ring-1 ring-white/15" />
                <div><p className="text-xs font-bold tracking-widest">HMSK UNSA</p><p className="mono text-[11px] text-white/55">Sistem Komputer • Universitas Surakarta</p></div>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="lg:col-span-5 grid gap-5">
            {[
              { icon: Code2, title: "Teknologi Terapan", desc: "Belajar yang langsung dipakai: website, sosmed, hardware, hingga undangan digital — bukan hafalan." },
              { icon: Users, title: "Mentoring Senior", desc: "Dibimbing Mas Denno (Web Creation), Dicto (RE-BOOT) & Tim HMSK (SOCMED-X/VITE) — belajar bareng, praktek bareng." },
              { icon: Target, title: "Berorientasi Hasil", desc: "Output nyata: website terjual, sosmed growth, jasa service jalan, undangan VITE live." },
            ].map((v) => (
              <motion.div key={v.title} variants={scaleIn} whileHover={shouldReduce ? undefined : { y: -4, scale: 1.015 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="rounded-[24px] border border-border bg-card p-6 flex gap-5 hover:border-primary/40 hover:shadow-md transition-shadow">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-border shrink-0">
                  <v.icon className="h-5 w-5" />
                </div>
                <div><h3 className="text-sm font-bold text-foreground">{v.title}</h3><p className="mt-1 text-xs leading-5 text-muted-foreground">{v.desc}</p></div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }} className="lg:col-span-12 rounded-[28px] border border-border bg-card p-7 sm:p-10">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
              <div className="lg:w-[320px] shrink-0">
                <h3 className="display text-xl font-bold tracking-tight text-foreground">Misi Kami</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">Empat pilar yang jadi kompas setiap proker HMSK. Dieksekusi, bukan ditempel di dinding.</p>
                <a href="/tentang" className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-primary hover:text-foreground group">
                  SELENGKAPNYA <motion.span className="inline-flex" whileHover={{ x: 3 }}><ArrowUpRight className="h-3 w-3" /></motion.span>
                </a>
              </div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid gap-4 sm:grid-cols-2 flex-1">
                {orgProfile.mission.map((m, i) => (
                  <motion.div key={i} variants={fadeUp} whileHover={shouldReduce ? undefined : { y: -2 }} className="group flex gap-4 rounded-2xl bg-muted/50 border border-border p-5 hover:bg-card hover:border-primary/30 hover:shadow-sm transition">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-card border border-border mono text-xs font-bold text-foreground group-hover:bg-foreground group-hover:text-background transition">
                      0{i + 1}
                    </span>
                    <p className="text-xs leading-5 font-medium text-muted-foreground pt-1">{m}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
