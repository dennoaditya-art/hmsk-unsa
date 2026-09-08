"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Clock3, Wrench, Globe, Zap, Users, Server, Share2 } from "lucide-react";
import Link from "next/link";
import { prokers } from "@/data/proker";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/motion";

const iconMap: Record<string, React.ReactNode> = {
  code: <Globe className="h-5 w-5" />,
  cpu: <Wrench className="h-5 w-5" />,
  server: <Server className="h-5 w-5" />,
  share: <Share2 className="h-5 w-5" />,
};

function StatusBadge({ status }: { status: string }) {
  if (status === "berjalan") return <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 mono text-[11px] font-bold tracking-widest text-primary-foreground"><Zap className="h-3 w-3" /> BERJALAN</span>;
  if (status === "segera") return <span className="inline-flex items-center gap-1.5 rounded-full bg-muted border border-border px-3 py-1 mono text-[11px] font-bold tracking-widest text-muted-foreground"><Clock3 className="h-3 w-3" /> SEGERA</span>;
  return <span className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1 mono text-[11px] font-bold">SELESAI</span>;
}

export function Proker() {
  const shouldReduce = useReducedMotion();
  const berjalan = prokers.filter((p) => p.status === "berjalan").length;
  const segera = prokers.filter((p) => p.status === "segera").length;
  return (
    <section id="proker" className="bg-background overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={staggerContainer} className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12">
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
            <p className="text-sm leading-6 text-muted-foreground">Empat proker inti yang sudah berjalan & akan datang. Semua hands-on, ada mentor, dan output-nya bisa kamu jual atau buka jasa sendiri.</p>
            <div className="mt-3 flex gap-2 mono text-[11px]">
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 border border-border px-2.5 py-1 font-semibold text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> {berjalan} Berjalan
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-muted border border-border px-2.5 py-1 font-semibold text-muted-foreground">
                <Clock3 className="h-3 w-3" /> {segera} Segera
              </span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={staggerContainer} className="mt-10 sm:mt-14 grid gap-6 sm:gap-8 md:grid-cols-2">
          {prokers.map((p) => (
            <motion.div key={p.id} variants={scaleIn} whileHover={shouldReduce ? undefined : { y: -6, scale: 1.01 }} transition={{ type: "spring", stiffness: 280, damping: 20 }} className="group relative overflow-hidden rounded-[22px] sm:rounded-[28px] border border-border bg-card p-[1px] hover:border-primary/40 flex flex-col">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-primary/08 via-transparent to-primary/06" />
              <div className="relative rounded-[21px] sm:rounded-[27px] bg-gradient-to-b from-card to-background/60 p-6 sm:p-7 lg:p-8 h-full flex flex-col">
                <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-60" />
                <div className="flex items-start justify-between">
                  <motion.div whileHover={{ rotate: 8, scale: 1.08 }} transition={{ type: "spring", stiffness: 300 }} className="flex h-11 w-11 items-center justify-center rounded-2xl bg-foreground text-primary border border-border">
                    {iconMap[p.icon] ?? <Globe className="h-5 w-5" />}
                  </motion.div>
                  <StatusBadge status={p.status} />
                </div>
                <h3 className="display mt-4 text-xl font-bold tracking-tight text-foreground">{p.shortTitle}</h3>
                <p className="mono text-xs font-semibold tracking-widest text-primary line-clamp-1">{p.title}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground flex-1">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {p.highlights.map((h) => (
                    <span key={h} className="rounded-full bg-background border border-border px-3 py-1 mono text-[11px] font-medium text-muted-foreground">
                      {h}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between rounded-2xl bg-[#020617] px-4 py-3 text-white">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center mono text-xs font-bold text-white">{p.mentor.charAt(0)}</div>
                    <div><p className="text-xs font-bold leading-none">{p.mentor}</p><p className="mono text-[11px] text-white/55">{p.mentorRole}</p></div>
                  </div>
                  <Link href={`/proker/${p.id}`} className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-foreground hover:bg-primary hover:text-white transition">
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mono text-center text-[11px] tracking-widest text-muted-foreground mt-8">{prokers.length} PROKER • {berjalan} AKTIF • {segera} SEGERA • DIBIMBING MENTOR SENIOR</motion.p>
      </div>
    </section>
  );
}
