"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code2, Cpu, Server, Sparkles, Terminal, Wrench, Globe, Zap } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";

export function Hero() {
  return (
    <section className="group relative overflow-hidden bg-background">
      {/* grid + grain — paper */}
      <div className="absolute inset-0 grid-pattern opacity-45" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      {/* faint brass wireframe */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
        <g stroke="primary" strokeWidth="1" fill="none">
          <rect x="12%" y="18%" width="22%" height="42%" rx="16" />
          <circle cx="74%" cy="36%" r="78" />
          <path d="M 38 68 L 58 88 L 74 68" />
        </g>
      </svg>
      {/* massive motif — smaller on mobile */}
      <div className="pointer-events-none absolute -top-2 sm:-top-6 left-1/2 -translate-x-1/2 select-none display text-[88px] sm:text-[180px] lg:text-[220px] font-bold leading-none tracking-[-0.06em] text-foreground/[0.035] sm:text-foreground/[0.04]">{`{ }`}</div>
      {/* glows — brass warm */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-[380px] w-[520px] sm:h-[560px] sm:w-[720px] rounded-full bg-gradient-to-br from-primary/12 sm:from-primary/16 via-primary/08 sm:via-primary/10 to-transparent blur-3xl impilo-pulse" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[320px] w-[400px] sm:h-[420px] sm:w-[540px] rounded-full bg-gradient-to-tr from-foreground/06 sm:from-foreground/08 to-transparent blur-3xl impilo-pulse" style={{ animationDelay: "1.1s" }} />
      <Spotlight />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 pt-[88px] pb-8 sm:pt-28 sm:pb-10 lg:pt-36 lg:pb-12">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-8">
          {/* LEFT */}
          <div className="lg:col-span-7">
            <div className="inline-flex max-w-full items-center gap-1.5 sm:gap-2 rounded-full border border-border bg-card px-2 sm:px-2.5 py-1 sm:py-1.5 shadow-sm">
              <span className="inline-flex h-5 shrink-0 items-center rounded-full bg-foreground px-2 text-[10px] sm:text-[11px] font-bold tracking-widest text-background">NEW</span>
              <span className="mono min-w-0 truncate text-[11px] sm:text-xs font-medium text-muted-foreground">Proker 2025 • Web + Hardware Lab aktif</span>
              <span className="hidden sm:inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Sparkles className="h-3 w-3" />
              </span>
            </div>

            <h1 className="display mt-5 sm:mt-6 text-[30px] sm:text-[42px] lg:text-[68px] font-bold leading-[0.88] tracking-[-0.05em] text-foreground">
              <span className="block overflow-hidden">
                <span className="block animate-[reveal_0.7s_cubic-bezier(0.16,1,0.3,1)_0.08s_both]">Himpunan</span>
              </span>
              <span className="block overflow-hidden">
                <span className="word-highlight inline-block animate-[reveal_0.7s_cubic-bezier(0.16,1,0.3,1)_0.18s_both]">Sistem Komputer</span>
              </span>
              <span className="block overflow-hidden mt-1">
                <span className="block text-[18px] sm:text-[26px] lg:text-[38px] font-semibold tracking-tight text-muted-foreground animate-[reveal_0.6s_cubic-bezier(0.16,1,0.3,1)_0.28s_both]">
                  Universitas Surakarta
                </span>
              </span>
            </h1>

            <p className="mt-4 sm:mt-5 max-w-xl text-[15px] sm:text-[16px] leading-7 text-muted-foreground text-balance animate-[reveal_0.6s_cubic-bezier(0.16,1,0.3,1)_0.38s_both]">
              Bukan sekadar himpunan — ini <span className="font-semibold text-foreground">lab berkarya</span>. Belajar bikin website sampai jualan, servis laptop sampai buka jasa. Dibimbing langsung oleh senior.
            </p>

            <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 animate-[reveal_0.6s_cubic-bezier(0.16,1,0.3,1)_0.48s_both]">
              <Link
                href="/proker"
                className="group/btn inline-flex w-full sm:w-auto justify-center items-center gap-2 brass-pill bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground hover:bg-primary/90 active:scale-[0.98] transition min-h-12 sm:min-h-11"
              >
                Lihat Proker Aktif
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-foreground/15 group-hover/btn:bg-foreground group-hover/btn:text-background transition">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
              <Link href="/struktur" className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-muted active:bg-muted min-h-12 sm:min-h-11">
                Kenalan Pengurus
              </Link>
              <div className="hidden sm:flex items-center gap-2 pl-2">
                <div className="flex -space-x-2">
                  {[
                    { ini: "De", grad: "from-foreground to-primary" },
                    { ini: "Sa", grad: "from-foreground to-primary" },
                    { ini: "Ai", grad: "from-primary to-primary" },
                    { ini: "Di", grad: "from-[#6B7280] to-foreground" },
                  ].map((p) => (
                    <div key={p.ini} className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br ${p.grad} text-[10px] font-bold text-background shadow-sm`}>
                      {p.ini}
                    </div>
                  ))}
                </div>
                <p className="mono text-xs leading-none text-muted-foreground">
                  4 pengurus inti
                  <br />
                  <span className="font-semibold text-foreground">Siap membimbing</span>
                </p>
              </div>
            </div>

            {/* stats — compact on mobile */}
            <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-3 max-w-xl">
              {[
                { k: "50+", l: "Mahasiswa SK" },
                { k: "3", l: "Proker Aktif" },
                { k: "2", l: "Mentor Senior" },
              ].map((s) => (
                <div key={s.l} className="relative overflow-hidden rounded-2xl border border-border bg-card px-2.5 sm:px-4 py-3 group/stat hover:border-primary/50 transition">
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary to-primary opacity-0 group-hover/stat:opacity-100 transition" />
                  <p className="display text-[22px] sm:text-[26px] font-bold leading-none tracking-tight text-foreground">{s.k}</p>
                  <p className="mono text-[10px] sm:text-[11px] tracking-widest text-muted-foreground leading-tight mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — brass paper card — no float on mobile for perf */}
          <div className="lg:col-span-5 motion-reduce:transform-none lg:impilo-float">
            <div className="relative rounded-[20px] sm:rounded-[24px] brass-card p-1.5 sm:p-2 shadow-[0_12px_32px_rgba(0,0,0,0.08)] sm:shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
              {/* duotone photo — shorter on mobile */}
              <div className="relative h-[112px] sm:h-[132px] overflow-hidden rounded-[16px] sm:rounded-[18px] border border-border">
                <Image
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop"
                  alt="Hardware lab"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, 400px"
                  className="object-cover grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-primary/30 to-primary/20 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-transparent" />
                <div className="absolute bottom-2 left-3 flex items-center gap-1.5 mono text-[10px] tracking-widest text-background/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> LAB HMSK • UNSA
                </div>
                <img src="/logo/logo-main.jpg" alt="logo" className="absolute right-3 top-3 h-7 w-7 rounded-lg object-cover ring-1 ring-white/30 shadow" />
              </div>

              <div className="rounded-[20px] bg-[#020617] dark:bg-[#020617] overflow-hidden -mt-3 relative z-10 border border-white/10">
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.03]">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                    <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                    <span className="h-2.5 w-2.5 rounded-full bg-muted" />
                  </div>
                  <div className="flex items-center gap-1.5 mono text-[11px] tracking-widest text-white/60">
                    <Terminal className="h-3.5 w-3.5" /> HMSK.SYS
                  </div>
                  <span className="mono text-[10px] tracking-widest bg-primary text-white px-2 py-1 rounded-full font-bold">LIVE</span>
                </div>

                <div className="p-4 sm:p-5 space-y-4">
                  <div className="rounded-2xl bg-white/06 border border-white/10 p-4">
                    <p className="mono text-[11px] tracking-widest text-primary">› proker --list</p>
                    <div className="mt-3 space-y-2.5 mono text-xs leading-relaxed">
                      <div className="flex gap-2 text-white/90">
                        <span className="text-primary">✔</span> webcraft_studio <span className="text-white/40">— by Mas Denno</span>
                      </div>
                      <div className="flex gap-2 text-white/90">
                        <span className="text-primary">✔</span> laptopcare_lab <span className="text-white/40">— by Dicto</span>
                      </div>
                      <div className="flex gap-2 text-white/40">
                        <span className="text-white/40">◷</span> host_invite <span>— next meet</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-gradient-to-br from-primary to-primary p-[1px]">
                      <div className="rounded-2xl bg-card p-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary text-background">
                          <Globe className="h-4 w-4" />
                        </div>
                        <p className="mt-2 text-xs font-bold leading-tight text-foreground">Bikin Website</p>
                        <p className="mono text-[10px] text-muted-foreground">Jual ke UMKM</p>
                        <div className="mt-2 flex items-center gap-1 mono text-[10px] font-semibold text-primary">
                          <Zap className="h-3 w-3" /> Berjalan
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-br from-foreground to-foreground p-[1px]">
                      <div className="rounded-2xl bg-card p-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-foreground text-primary">
                          <Cpu className="h-4 w-4" />
                        </div>
                        <p className="mt-2 text-xs font-bold leading-tight text-foreground">Service Laptop</p>
                        <p className="mono text-[10px] text-muted-foreground">Cleaning & jasa</p>
                        <div className="mt-2 flex items-center gap-1 mono text-[10px] font-semibold text-foreground">
                          <Wrench className="h-3 w-3" /> Hands-on
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-card text-foreground px-3 py-2.5 border border-border">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-full bg-foreground flex items-center justify-center text-primary">
                        <Server className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold leading-none">Hosting & Undangan Online</p>
                        <p className="mono text-[10px] text-muted-foreground">Pertemuan selanjutnya</p>
                      </div>
                    </div>
                    <span className="mono text-[10px] font-bold tracking-widest bg-muted text-muted-foreground px-2 py-1 rounded-full border border-border">SOON</span>
                  </div>
                </div>

                <div className="px-4 pb-3 flex items-center gap-2 mono text-[10px] tracking-widest text-white/35">
                  <Code2 className="h-3 w-3" /> NEXT.JS • TAILWIND • HARDWARE LAB
                </div>
              </div>

              <div className="absolute -bottom-3 -left-3 hidden sm:flex items-center gap-2 rounded-2xl bg-card border border-border px-3 py-2 shadow-xl">
                <img src="/logo/logo-navy.png" alt="logo" className="h-7 w-7 rounded-lg object-cover" />
                <div>
                  <p className="text-xs font-bold leading-none text-foreground">HMSK UNSA</p>
                  <p className="mono text-[10px] text-muted-foreground">Est. Sistem Komputer</p>
                </div>
              </div>
            </div>

            <p className="mono text-center text-[11px] tracking-widest text-muted-foreground mt-6">DIBINA • MAS DENNO • DICTO • TIM HMSK</p>
          </div>
        </div>
      </div>

      <div className="h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
