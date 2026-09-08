"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code2, Cpu, Server, Sparkles, Terminal, Wrench, Globe, Zap } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";

function useTyping(text: string, speed = 38, startDelay = 900) {
  const [out, setOut] = useState("");
  const shouldReduce = useReducedMotion();
  useEffect(() => {
    if (shouldReduce) { setOut(text); return; }
    let i = 0; let t: ReturnType<typeof setTimeout>;
    const start = setTimeout(() => {
      t = setInterval(() => { i += 1; setOut(text.slice(0, i)); if (i >= text.length) clearInterval(t); }, speed);
    }, startDelay);
    return () => { clearTimeout(start); clearInterval(t); };
  }, [text, speed, startDelay, shouldReduce]);
  return out;
}

function Stat({ k, l, delay }: { k: string; l: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { type: "spring", stiffness: 320, damping: 18 } }}
      className="relative overflow-hidden rounded-2xl border border-border bg-card px-2.5 sm:px-4 py-3 group/stat hover:border-primary/50 transition-colors"
    >
      <motion.div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary to-primary opacity-0 group-hover/stat:opacity-100 transition" layoutId={`stat-${l}`} />
      <p className="display text-[22px] sm:text-[26px] font-bold leading-none tracking-tight text-foreground">{k}</p>
      <p className="mono text-[10px] sm:text-[11px] tracking-widest text-muted-foreground leading-tight mt-1">{l}</p>
    </motion.div>
  );
}

export function Hero() {
  const shouldReduce = useReducedMotion();
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 400], [0, -18]);
  const yMotif = useTransform(scrollY, [0, 400], [0, 22]);
  const typing = useTyping("› proker --list", 42, 1100);

  return (
    <section className="group relative overflow-hidden bg-background">
      <div className="absolute inset-0 grid-pattern opacity-45" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
        <g stroke="currentColor" className="text-primary" strokeWidth="1" fill="none">
          <rect x="12%" y="18%" width="22%" height="42%" rx="16" />
          <circle cx="74%" cy="36%" r="78" />
          <path d="M 38 68 L 58 88 L 74 68" />
        </g>
      </svg>
      <motion.div style={{ y: shouldReduce ? 0 : yMotif }} className="pointer-events-none absolute -top-2 sm:-top-6 left-1/2 -translate-x-1/2 select-none display text-[88px] sm:text-[180px] lg:text-[220px] font-bold leading-none tracking-[-0.06em] text-foreground/[0.035] sm:text-foreground/[0.04]">{`{ }`}</motion.div>
      <motion.div style={{ y: shouldReduce ? 0 : yParallax }} className="pointer-events-none absolute -top-24 -right-24 h-[380px] w-[520px] sm:h-[560px] sm:w-[720px] rounded-full bg-gradient-to-br from-primary/12 sm:from-primary/16 via-primary/08 sm:via-primary/10 to-transparent blur-3xl impilo-pulse" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[320px] w-[400px] sm:h-[420px] sm:w-[540px] rounded-full bg-gradient-to-tr from-foreground/06 sm:from-foreground/08 to-transparent blur-3xl impilo-pulse" style={{ animationDelay: "1.1s" }} />
      <Spotlight />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 pt-[88px] pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-20">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="inline-flex max-w-full items-center gap-1.5 sm:gap-2 rounded-full border border-border bg-card px-2 sm:px-2.5 py-1 sm:py-1.5 shadow-sm">
              <span className="inline-flex h-5 shrink-0 items-center rounded-full bg-foreground px-2 text-[10px] sm:text-[11px] font-bold tracking-widest text-background">NEW</span>
              <span className="mono min-w-0 truncate text-[11px] sm:text-xs font-medium text-muted-foreground">Proker 2025 • 4 Lab Aktif</span>
              <span className="hidden sm:inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Sparkles className="h-3 w-3" />
              </span>
            </motion.div>

            <h1 className="display mt-6 sm:mt-8 text-[30px] sm:text-[42px] lg:text-[68px] font-bold leading-[0.88] tracking-[-0.05em] text-foreground">
              <span className="block overflow-hidden">
                <motion.span initial={{ y: 28, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }} className="block">Himpunan</motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span initial={{ y: 28, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }} className="word-highlight inline-block">Sistem Komputer</motion.span>
              </span>
              <span className="block overflow-hidden mt-1">
                <motion.span initial={{ y: 22, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }} className="block text-[18px] sm:text-[26px] lg:text-[38px] font-semibold tracking-tight text-muted-foreground">
                  Universitas Surakarta
                </motion.span>
              </span>
            </h1>

            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.38, ease: [0.16, 1, 0.3, 1] }} className="mt-6 sm:mt-7 max-w-xl text-[15px] sm:text-[16px] leading-7 text-muted-foreground text-balance">
              Bukan sekadar himpunan — ini <span className="font-semibold text-foreground">lab berkarya</span>. Belajar bikin website sampai jualan, servis laptop sampai buka jasa. Dibimbing langsung oleh senior.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.48, ease: [0.16, 1, 0.3, 1] }} className="mt-7 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link href="/proker" className="group/btn inline-flex w-full sm:w-auto justify-center items-center gap-2 brass-pill bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition min-h-12 sm:min-h-11">
                  Lihat Proker Aktif
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-foreground/15 group-hover/btn:bg-foreground group-hover/btn:text-background transition">
                    <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }} className="flex"><ArrowRight className="h-3.5 w-3.5" /></motion.span>
                  </span>
                </Link>
              </motion.div>
              <Link href="/struktur" className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-muted active:bg-muted min-h-12 sm:min-h-11">
                Kenalan Pengurus
              </Link>
              <div className="hidden sm:flex items-center gap-2 pl-2">
                <div className="flex -space-x-2">
                  {[
                    { ini: "De", grad: "from-foreground to-primary" },
                    { ini: "Sa", grad: "from-foreground to-primary" },
                    { ini: "Ai", grad: "from-primary to-primary" },
                    { ini: "Di", grad: "from-muted-foreground to-foreground" },
                  ].map((p, i) => (
                    <motion.div key={p.ini} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.6 + i * 0.08, type: "spring", stiffness: 320, damping: 18 }} className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br ${p.grad} text-[10px] font-bold text-background shadow-sm`}>
                      {p.ini}
                    </motion.div>
                  ))}
                </div>
                <p className="mono text-xs leading-none text-muted-foreground">
                  4 pengurus inti<br /><span className="font-semibold text-foreground">Siap membimbing</span>
                </p>
              </div>
            </motion.div>

            <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-3 sm:gap-4 max-w-xl">
              {[{ k: "50+", l: "Mahasiswa SK" }, { k: "4", l: "Proker Aktif" }, { k: "3", l: "Mentor Senior" }].map((s, i) => (
                <Stat key={s.l} k={s.k} l={s.l} delay={0.55 + i * 0.08} />
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 18, rotate: -0.6 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }} className="lg:col-span-5 motion-reduce:transform-none lg:impilo-float">
            <motion.div whileHover={shouldReduce ? undefined : { y: -6, rotate: 0.4 }} transition={{ type: "spring", stiffness: 260, damping: 18 }} className="relative rounded-[20px] sm:rounded-[24px] brass-card p-2 sm:p-3 shadow-[0_12px_32px_rgba(0,0,0,0.08)] sm:shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
              <div className="relative h-[112px] sm:h-[132px] overflow-hidden rounded-[16px] sm:rounded-[18px] border border-border">
                <Image src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop" alt="Hardware lab" fill priority sizes="(max-width: 640px) 100vw, 400px" className="object-cover grayscale contrast-125" />
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-primary/30 to-primary/20 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-transparent" />
                <div className="absolute bottom-2 left-3 flex items-center gap-1.5 mono text-[10px] tracking-widest text-white/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> LAB HMSK • UNSA
                </div>
                <img src="/logo/logo-main.jpg" alt="logo" className="absolute right-3 top-3 h-7 w-7 rounded-lg object-cover ring-1 ring-white/30 shadow" />
              </div>

              <div className="rounded-[20px] bg-[#020617] dark:bg-[#020617] overflow-hidden -mt-3 relative z-10 border border-white/10">
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.03]">
                  <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-primary" /><span className="h-2.5 w-2.5 rounded-full bg-primary" /><span className="h-2.5 w-2.5 rounded-full bg-white/20" /></div>
                  <div className="flex items-center gap-1.5 mono text-[11px] tracking-widest text-white/60"><Terminal className="h-3.5 w-3.5" /> HMSK.SYS</div>
                  <span className="mono text-[10px] tracking-widest bg-primary text-white px-2 py-1 rounded-full font-bold">LIVE</span>
                </div>

                <div className="p-5 sm:p-6 space-y-5">
                  <div className="rounded-2xl bg-white/06 border border-white/10 p-4">
                    <p className="mono text-[11px] tracking-widest text-primary">{typing}<span className="inline-block w-[7px] h-[12px] bg-primary/70 ml-1 animate-pulse align-middle" /></p>
                    <div className="mt-3 space-y-2.5 mono text-xs leading-relaxed">
                      <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.4, duration: 0.4 }} className="flex gap-2 text-white/90"><span className="text-primary">✔</span> web_creation <span className="text-white/40">— Rossi Denno Aditya Arsenal</span></motion.div>
                      <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5, duration: 0.4 }} className="flex gap-2 text-white/90"><span className="text-primary">✔</span> socmed_x <span className="text-white/40">— Tim HMSK</span></motion.div>
                      <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.6, duration: 0.4 }} className="flex gap-2 text-white/90"><span className="text-primary">✔</span> re_boot <span className="text-white/40">— Een Vandicto Satya Ady</span></motion.div>
                      <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.7, duration: 0.4 }} className="flex gap-2 text-white/40"><span className="text-white/40">◷</span> vite <span>— next meet</span></motion.div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <motion.div whileHover={{ y: -4, scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 18 }} className="rounded-2xl bg-gradient-to-br from-primary to-primary p-[1px]">
                      <div className="rounded-2xl bg-card p-3"><div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-white"><Globe className="h-4 w-4" /></div><p className="mt-2 text-xs font-bold leading-tight text-foreground">Web Creation</p><p className="mono text-[10px] text-muted-foreground">Fundamental</p><div className="mt-2 flex items-center gap-1 mono text-[10px] font-semibold text-primary"><Zap className="h-3 w-3" /> Berjalan</div></div>
                    </motion.div>
                    <motion.div whileHover={{ y: -4, scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 18 }} className="rounded-2xl bg-foreground p-[1px]">
                      <div className="rounded-2xl bg-card p-3"><div className="flex h-8 w-8 items-center justify-center rounded-xl bg-foreground text-primary"><Cpu className="h-4 w-4" /></div><p className="mt-2 text-xs font-bold leading-tight text-foreground">RE-BOOT</p><p className="mono text-[10px] text-muted-foreground">Repair & service</p><div className="mt-2 flex items-center gap-1 mono text-[10px] font-semibold text-foreground"><Wrench className="h-3 w-3" /> Berjalan</div></div>
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center justify-between rounded-xl bg-card text-foreground px-3 py-2.5 border border-border">
                      <div className="flex items-center gap-2"><div className="h-7 w-7 rounded-full bg-primary flex items-center justify-center text-white"><Sparkles className="h-3.5 w-3.5" /></div><div><p className="text-xs font-bold leading-none">SOCMED-X</p><p className="mono text-[10px] text-muted-foreground">Execution</p></div></div><span className="mono text-[10px] font-bold tracking-widest bg-primary text-white px-2 py-1 rounded-full">LIVE</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-card text-foreground px-3 py-2.5 border border-border">
                      <div className="flex items-center gap-2"><div className="h-7 w-7 rounded-full bg-foreground flex items-center justify-center text-primary"><Server className="h-3.5 w-3.5" /></div><div><p className="text-xs font-bold leading-none">VITE</p><p className="mono text-[10px] text-muted-foreground">Virtual invite</p></div></div><span className="mono text-[10px] font-bold tracking-widest bg-muted text-muted-foreground px-2 py-1 rounded-full border border-border">SOON</span>
                    </div>
                  </div>
                </div>

                <div className="px-4 pb-3 flex items-center gap-2 mono text-[10px] tracking-widest text-white/35"><Code2 className="h-3 w-3" /> NEXT.JS • TAILWIND • HARDWARE LAB</div>
              </div>

              <div className="absolute -bottom-3 -left-3 hidden sm:flex items-center gap-2 rounded-2xl bg-card border border-border px-3 py-2 shadow-xl">
                <img src="/logo/logo-navy.png" alt="logo" className="h-7 w-7 rounded-lg object-cover" /><div><p className="text-xs font-bold leading-none text-foreground">HMSK UNSA</p><p className="mono text-[10px] text-muted-foreground">Est. Sistem Komputer</p></div>
              </div>
            </motion.div>
            <p className="mono text-center text-[11px] tracking-widest text-muted-foreground mt-6">WEB CREATION • SOCMED-X • RE-BOOT • VITE</p>
          </motion.div>
        </div>
      </div>
      <div className="h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
