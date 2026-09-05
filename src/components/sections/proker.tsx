"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Clock3, Wrench, Globe, Zap, Users, Server } from "lucide-react";
import Link from "next/link";
import { prokers } from "@/data/proker";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/motion";

export function Proker() {
  const shouldReduce = useReducedMotion();
  return (
    <section id="proker" className="bg-background overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={staggerContainer} className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2 mono text-[11px] tracking-[0.18em] text-muted-foreground">
              <span className="h-px w-6 bg-border" /> PROKER UNGGULAN
              <span className="rounded-full bg-primary/10 text-primary border border-border px-2 py-0.5 font-bold tracking-widest">SEMESTER INI</span>
            </div>
            <h2 className="display mt-3 text-[32px] font-bold leading-[0.9] tracking-[-0.03em] text-foreground sm:text-[42px]">
              Belajar yang<br /><span className="gradient-text">Menghasilkan.</span>
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} className="max-w-[460px]">
            <p className="text-sm leading-6 text-muted-foreground">Tiga proker inti yang sudah berjalan & akan datang. Semua hands-on, ada mentor, dan output-nya bisa kamu jual atau buka jasa sendiri.</p>
            <div className="mt-3 flex gap-2 mono text-[11px]">
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 border border-border px-2.5 py-1 font-semibold text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> 2 Berjalan
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-muted border border-border px-2.5 py-1 font-semibold text-muted-foreground">
                <Clock3 className="h-3 w-3" /> 1 Segera
              </span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={staggerContainer} className="mt-8 sm:mt-10 grid gap-4 sm:gap-5 lg:grid-cols-12">
          <motion.div variants={scaleIn} whileHover={shouldReduce ? undefined : { y: -6, scale: 1.01 }} transition={{ type: "spring", stiffness: 280, damping: 20 }} className="lg:col-span-7 group relative overflow-hidden rounded-[22px] sm:rounded-[28px] border border-border bg-card p-[1px] hover:border-primary/40">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-primary/08 via-transparent to-primary/06" />
            <div className="relative rounded-[21px] sm:rounded-[27px] bg-gradient-to-b from-card to-background/60 p-5 sm:p-6 lg:p-7 h-full">
              <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-60" />
              <div className="flex items-start justify-between">
                <motion.div whileHover={{ rotate: 8, scale: 1.08 }} transition={{ type: "spring", stiffness: 300 }} className="flex h-11 w-11 items-center justify-center rounded-2xl bg-foreground text-primary border border-border">
                  <Globe className="h-5 w-5" />
                </motion.div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 mono text-[11px] font-bold tracking-widest text-primary-foreground">
                  <Zap className="h-3 w-3" /> BERJALAN
                </span>
              </div>
              <h3 className="display mt-4 text-xl font-bold tracking-tight text-foreground">{prokers[0].shortTitle}</h3>
              <p className="mono text-xs font-semibold tracking-widest text-primary">{prokers[0].title}</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{prokers[0].description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {prokers[0].highlights.map((h) => (
                  <span key={h} className="rounded-full bg-background border border-border px-3 py-1 mono text-[11px] font-medium text-muted-foreground">
                    {h}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between rounded-2xl bg-[#020617] px-4 py-3 text-white">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center mono text-xs font-bold text-white">D</div>
                  <div><p className="text-xs font-bold leading-none">Dibina {prokers[0].mentor}</p><p className="mono text-[11px] text-white/55">{prokers[0].mentorRole}</p></div>
                </div>
                <Link href="/struktur" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-foreground hover:bg-primary hover:text-white transition">
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div variants={scaleIn} whileHover={shouldReduce ? undefined : { y: -6, scale: 1.01 }} transition={{ type: "spring", stiffness: 280, damping: 20 }} className="lg:col-span-5 group relative overflow-hidden rounded-[22px] sm:rounded-[28px] border border-border bg-card p-[1px] hover:border-primary/40">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-primary/06 to-primary/06" />
            <div className="relative rounded-[21px] sm:rounded-[27px] bg-gradient-to-b from-card to-background/50 p-5 sm:p-6 lg:p-7 h-full">
              <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-60" />
              <div className="flex items-start justify-between">
                <motion.div whileHover={{ rotate: -8, scale: 1.08 }} className="flex h-11 w-11 items-center justify-center rounded-2xl bg-foreground text-primary border border-border">
                  <Wrench className="h-5 w-5" />
                </motion.div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground border border-primary/30 px-3 py-1 mono text-[11px] font-bold tracking-widest text-primary">
                  <Users className="h-3 w-3" /> LAB AKTIF
                </span>
              </div>
              <h3 className="display mt-4 text-xl font-bold tracking-tight text-foreground">{prokers[1].shortTitle}</h3>
              <p className="mono text-xs font-semibold tracking-widest text-primary">{prokers[1].title}</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{prokers[1].description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {prokers[1].highlights.map((h) => (
                  <span key={h} className="rounded-full bg-card border border-border px-3 py-1 mono text-[11px] font-medium text-muted-foreground">
                    {h}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between rounded-2xl bg-card border border-border px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-foreground flex items-center justify-center mono text-xs font-bold text-primary">D</div>
                  <div><p className="text-xs font-bold leading-none text-foreground">Dibina {prokers[1].mentor}</p><p className="mono text-[11px] text-muted-foreground">{prokers[1].mentorRole}</p></div>
                </div>
                <span className="mono text-[11px] font-bold text-primary">Hands-on →</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-12 rounded-[22px] sm:rounded-[28px] border border-dashed border-primary/30 sm:border-primary/40 bg-primary/[0.04] sm:bg-primary/06 p-1">
            <div className="rounded-[18px] sm:rounded-[22px] bg-card border border-border p-4 sm:p-5 lg:p-6 flex flex-col lg:flex-row lg:items-center gap-4 sm:gap-5">
              <motion.div whileHover={{ rotate: 6 }} className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-foreground text-primary border border-border">
                <Server className="h-6 w-6" />
              </motion.div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="display text-lg font-bold tracking-tight text-foreground">{prokers[2].shortTitle}</h3>
                  <span className="mono text-[11px] font-bold tracking-widest bg-muted border border-border text-muted-foreground px-2 py-1 rounded-full">PERTEMUAN SELANJUTNYA</span>
                </div>
                <p className="mono text-xs font-semibold tracking-widest text-primary">{prokers[2].title}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground max-w-3xl">{prokers[2].description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {prokers[2].highlights.map((h) => (
                    <span key={h} className="inline-flex items-center gap-1 rounded-full bg-background border border-border px-3 py-1 mono text-[11px] font-medium text-muted-foreground">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
              <div className="shrink-0 flex flex-col items-start lg:items-end gap-2">
                <span className="inline-flex items-center gap-1.5 mono text-xs font-bold tracking-widest text-muted-foreground">
                  <Clock3 className="h-3.5 w-3.5" /> SEGERA DIUMUMKAN
                </span>
                <Link href="/tentang" className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-bold text-background hover:bg-foreground/90">
                  Lihat detail <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mono text-center text-[11px] tracking-widest text-muted-foreground mt-6">3 PROKER • 2 AKTIF • 1 SEGERA • DIBIMBING MENTOR SENIOR</motion.p>
      </div>
    </section>
  );
}
