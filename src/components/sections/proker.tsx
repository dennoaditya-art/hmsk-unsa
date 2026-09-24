"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Clock3, Wrench, Globe, Zap, Users, Server, Share2 } from "lucide-react";
import Link from "next/link";
import { prokers } from "@/data/proker";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/motion";

const iconMap: Record<string, React.ReactNode> = {
  code: <Globe className="h-5 w-5" aria-hidden />,
  cpu: <Wrench className="h-5 w-5" aria-hidden />,
  server: <Server className="h-5 w-5" aria-hidden />,
  share: <Share2 className="h-5 w-5" aria-hidden />,
};

function StatusBadge({ status }: { status: string }) {
  if (status === "berjalan")
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-primary px-3 py-1 label text-[11px] text-primary-foreground">
        <Zap className="h-3 w-3" aria-hidden /> BERJALAN
      </span>
    );
  if (status === "segera")
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 label text-[11px] text-muted-foreground">
        <Clock3 className="h-3 w-3" aria-hidden /> SEGERA
      </span>
    );
  return <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 label text-[11px] text-muted-foreground">SELESAI</span>;
}

export function Proker() {
  const shouldReduce = useReducedMotion();
  const berjalan = prokers.filter((p) => p.status === "berjalan").length;
  const segera = prokers.filter((p) => p.status === "segera").length;
  return (
    <section id="proker" className="bg-background border-b border-border">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={staggerContainer} className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12">
          <motion.div variants={fadeUp}>
            <span className="label text-[11px] text-muted-foreground">PROKER UNGGULAN</span>
            <h2 className="display mt-3 text-[30px] text-foreground sm:text-[42px]">
              Belajar yang
              <br />
              <span className="text-primary-text">Menghasilkan.</span>
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} className="max-w-[460px]">
            <p className="text-sm leading-6 text-muted-foreground">Empat proker inti yang sudah berjalan & akan datang. Semua hands-on, ada mentor, dan output-nya bisa kamu jual atau buka jasa sendiri.</p>
            <div className="mt-3 flex gap-2 label text-[11px]">
              <span className="inline-flex items-center gap-1 rounded-full border border-border bg-primary px-2.5 py-1 text-primary-foreground">
                {berjalan} Berjalan
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-1 text-muted-foreground">
                {segera} Segera
              </span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={staggerContainer} className="mt-10 sm:mt-14 grid gap-6 sm:gap-8 md:grid-cols-2">
          {prokers.map((p) => (
            <motion.div key={p.id} variants={scaleIn} whileHover={shouldReduce ? undefined : { y: -4 }} transition={{ type: "spring", stiffness: 280, damping: 20 }} className="group relative overflow-hidden rounded-[20px] border border-border bg-card p-6 sm:p-7 lg:p-8 flex flex-col">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-foreground text-background">
                  {iconMap[p.icon] ?? <Globe className="h-5 w-5" aria-hidden />}
                </div>
                <StatusBadge status={p.status} />
              </div>
              <h3 className="display mt-4 text-xl text-foreground">{p.shortTitle}</h3>
              <p className="label text-[11px] text-muted-foreground line-clamp-1">{p.title}</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground flex-1">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {p.highlights.map((h) => (
                  <span key={h} className="rounded-full border border-border bg-muted px-3 py-1 text-[11px] font-medium text-foreground">
                    {h}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between rounded-2xl border border-border bg-foreground px-4 py-3 text-background">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground">{p.mentor.charAt(0)}</div>
                  <div>
                    <p className="text-xs font-bold leading-none">{p.mentor}</p>
                    <p className="text-[11px] text-background/60">{p.mentorRole}</p>
                  </div>
                </div>
                <Link href={`/proker/${p.id}`} className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-background bg-background text-foreground transition hover:bg-primary" aria-label={`Detail ${p.shortTitle}`}>
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="label text-center text-[11px] text-muted-foreground mt-8">
          {prokers.length} PROKER • {berjalan} AKTIF • {segera} SEGERA • DIBIMBING MENTOR SENIOR
        </motion.p>
      </div>
    </section>
  );
}
