"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Code2, Users, Target, Sparkles, ArrowUpRight, Quote } from "lucide-react";
import { orgProfile } from "@/data/leaders";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/motion";
import { cardSlush } from "@/lib/slush";

export function About() {
  const shouldReduce = useReducedMotion();
  return (
    <section id="tentang" className="relative bg-background border-y border-border">
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer} className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12">
          <motion.div variants={fadeUp}>
            <span className="label text-[11px] text-muted-foreground">TENTANG KAMI</span>
            <h2 className="display mt-3 text-[30px] text-foreground sm:text-[42px]">
              Wadah Berkarya,
              <br />
              <span className="text-muted-foreground">Bukan Sekadar Organisasi.</span>
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="max-w-[420px] text-sm leading-6 text-muted-foreground">
            {orgProfile.vision} Kami fokus pada skill yang bisa jadi <span className="font-bold text-foreground">penghasilan</span> — bukan cuma teori.
          </motion.p>
        </motion.div>

        <div className="mt-12 sm:mt-14 grid gap-6 lg:grid-cols-12 lg:gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} whileHover={shouldReduce ? undefined : { y: -4 }} className="lg:col-span-7 rounded-[20px] border border-border bg-foreground text-background overflow-hidden relative p-7 sm:p-10">
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-background/40 px-3 py-1.5 label text-[11px]">
                <Sparkles className="h-3 w-3 text-primary" aria-hidden /> VISI KAMI
              </span>
              <div className="mt-6 flex gap-3">
                <Quote className="h-7 w-7 text-primary shrink-0" aria-hidden />
                <p className="text-[17px] sm:text-[19px] leading-7 font-medium text-balance">&ldquo;{orgProfile.vision}&rdquo;</p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <img src="/logo/logo-main.jpg" alt="HMSK" className="h-9 w-9 rounded-[10px] object-cover border border-background/40" />
                <div>
                  <p className="label text-xs">HMSK UNSA</p>
                  <p className="text-[11px] text-background/60">Sistem Komputer • Universitas Surakarta</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="lg:col-span-5 grid gap-5">
            {[
              { icon: Code2, title: "Teknologi Terapan", desc: "Belajar yang langsung dipakai: website, sosmed, hardware, hingga undangan digital — bukan hafalan." },
              { icon: Users, title: "Mentoring Senior", desc: "Dibimbing Mas Denno (Web Creation), Dicto (RE-BOOT) & Tim HMSK (SOCMED-X/VITE) — belajar bareng, praktek bareng." },
              { icon: Target, title: "Berorientasi Hasil", desc: "Output nyata: website terjual, sosmed growth, jasa service jalan, undangan VITE live." },
            ].map((v) => (
              <motion.div key={v.title} variants={scaleIn} whileHover={shouldReduce ? undefined : { y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className={`${cardSlush} p-6 flex gap-5`}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-primary text-primary-foreground shrink-0">
                  <v.icon className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">{v.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }} className={`lg:col-span-12 ${cardSlush} p-7 sm:p-10`}>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
              <div className="lg:w-[320px] shrink-0">
                <h3 className="display text-xl text-foreground">Misi Kami</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">Empat pilar yang jadi kompas setiap proker HMSK. Dieksekusi, bukan ditempel di dinding.</p>
                <a href="/tentang" className="mt-5 inline-flex items-center gap-1.5 label text-xs text-primary hover:text-foreground">
                  SELENGKAPNYA <ArrowUpRight className="h-3 w-3" aria-hidden />
                </a>
              </div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid gap-4 sm:grid-cols-2 flex-1">
                {orgProfile.mission.map((m, i) => (
                  <motion.div key={i} variants={fadeUp} className="group flex gap-4 rounded-2xl border border-border bg-muted p-5 transition hover:bg-card">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-card text-xs font-bold text-foreground transition group-hover:bg-foreground group-hover:text-background">
                      {i + 1}
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
