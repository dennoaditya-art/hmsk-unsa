"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code2, Cpu, Server, Sparkles, Terminal, Wrench, Globe, Zap } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";

export function Hero() {
  return (
    <section className="group relative overflow-hidden bg-white">
      {/* grid + grain */}
      <div className="absolute inset-0 grid-pattern opacity-55" />
      <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      {/* massive motif */}
      <div className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 select-none display text-[140px] sm:text-[180px] lg:text-[220px] font-bold leading-none tracking-[-0.06em] text-[#0f1f3c]/[0.04]">{`{ }`}</div>
      {/* glows */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-[560px] w-[720px] rounded-full bg-gradient-to-br from-emerald-200/35 via-cyan-200/22 to-violet-200/18 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[420px] w-[540px] rounded-full bg-gradient-to-tr from-slate-200/60 to-transparent blur-3xl" />
      <Spotlight />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 pt-24 pb-10 sm:pt-28 lg:pt-36 lg:pb-12">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-8">
          {/* LEFT */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2.5 py-1.5 shadow-sm">
              <span className="inline-flex h-5 items-center rounded-full bg-[#0f1f3c] px-2 text-[11px] font-bold tracking-widest text-white">NEW</span>
              <span className="mono text-xs font-medium text-slate-600">Proker 2025 • Web + Hardware Lab aktif</span>
              <span className="hidden sm:inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <Sparkles className="h-3 w-3" />
              </span>
            </div>

            <h1 className="display mt-6 text-[34px] font-bold leading-[0.88] tracking-[-0.05em] text-[#0f1f3c] sm:text-[42px] lg:text-[68px]">
              <span className="block">Himpunan</span>
              <span className="gradient-text block">Sistem Komputer</span>
              <span className="text-[20px] sm:text-[26px] lg:text-[38px] font-semibold tracking-tight text-slate-500 block">Universitas Surakarta</span>
            </h1>

            <p className="mt-5 max-w-xl text-[16px] leading-7 text-slate-600 text-balance">
              Bukan sekadar himpunan — ini <span className="font-semibold text-[#0f1f3c]">lab berkarya</span>. Belajar bikin website sampai jualan, servis laptop sampai buka jasa. Dibimbing langsung oleh senior.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/proker"
                className="group/btn inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-[#0f1f3c] px-6 py-3.5 text-sm font-bold text-white shadow-[0_16px_30px_-14px_rgba(15,31,60,0.7)] hover:bg-[#1a2f5a] transition will-change-transform hover:[transform:translateY(-1px)] min-h-11"
              >
                Lihat Proker Aktif
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 group-hover/btn:bg-white group-hover/btn:text-[#0f1f3c] transition">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
              <Link href="/struktur" className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 min-h-11">
                Kenalan Pengurus
              </Link>
              <div className="hidden sm:flex items-center gap-2 pl-2">
                <div className="flex -space-x-2">
                  {[
                    { ini: "De", grad: "from-slate-800 to-emerald-600" },
                    { ini: "Sa", grad: "from-blue-600 to-cyan-600" },
                    { ini: "Ai", grad: "from-emerald-600 to-teal-600" },
                    { ini: "Di", grad: "from-violet-600 to-indigo-600" },
                  ].map((p) => (
                    <div key={p.ini} className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br ${p.grad} text-[10px] font-bold text-white shadow-sm`}>
                      {p.ini}
                    </div>
                  ))}
                </div>
                <p className="mono text-xs leading-none text-slate-500">
                  4 pengurus inti
                  <br />
                  <span className="font-semibold text-slate-700">Siap membimbing</span>
                </p>
              </div>
            </div>

            {/* stats brutalist */}
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-xl">
              {[
                { k: "50+", l: "Mahasiswa SK" },
                { k: "3", l: "Proker Aktif" },
                { k: "2", l: "Mentor Senior" },
              ].map((s) => (
                <div key={s.l} className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 group/stat hover:border-[#0f1f3c] transition">
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover/stat:opacity-100 transition" />
                  <p className="display text-[26px] font-bold leading-none tracking-tight text-[#0f1f3c]">{s.k}</p>
                  <p className="mono text-[11px] tracking-widest text-slate-500">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - duotone + terminal */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[28px] border border-slate-200 bg-white p-2 shadow-[0_24px_60px_-20px_rgba(15,31,60,0.25)] hover:[transform:rotate(-0.3deg)] transition duration-500">
              {/* duotone photo bleed top */}
              <div className="relative h-[132px] overflow-hidden rounded-[18px] border border-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop"
                  alt="Hardware lab"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, 400px"
                  className="object-cover grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0f1f3c]/80 via-emerald-600/45 to-cyan-500/30 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f3c] via-transparent to-transparent" />
                <div className="absolute bottom-2 left-3 flex items-center gap-1.5 mono text-[10px] tracking-widest text-white/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> LAB HMSK • UNSA
                </div>
                <img src="/logo/logo-main.jpg" alt="logo" className="absolute right-3 top-3 h-7 w-7 rounded-lg object-cover ring-1 ring-white/30 shadow" />
              </div>

              <div className="rounded-[20px] bg-[#0f1f3c] overflow-hidden -mt-3 relative z-10 border border-white/10">
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.03]">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex items-center gap-1.5 mono text-[11px] tracking-widest text-white/60">
                    <Terminal className="h-3.5 w-3.5" /> HMSK.SYS
                  </div>
                  <span className="mono text-[10px] tracking-widest bg-emerald-500 text-white px-2 py-1 rounded-full">LIVE</span>
                </div>

                <div className="p-4 sm:p-5 space-y-4">
                  <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-4">
                    <p className="mono text-[11px] tracking-widest text-emerald-300">› proker --list</p>
                    <div className="mt-3 space-y-2.5 mono text-xs leading-relaxed">
                      <div className="flex gap-2 text-white/90">
                        <span className="text-emerald-400">✔</span> webcraft_studio <span className="text-white/40">— by Mas Denno</span>
                      </div>
                      <div className="flex gap-2 text-white/90">
                        <span className="text-cyan-400">✔</span> laptopcare_lab <span className="text-white/40">— by Dicto</span>
                      </div>
                      <div className="flex gap-2 text-white/40">
                        <span className="text-amber-400">◷</span> host_invite <span>— next meet</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 p-[1px] hover:brightness-110 transition">
                      <div className="rounded-2xl bg-white p-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white">
                          <Globe className="h-4 w-4" />
                        </div>
                        <p className="mt-2 text-xs font-bold leading-tight text-slate-900">Bikin Website</p>
                        <p className="mono text-[10px] text-slate-500">Jual ke UMKM</p>
                        <div className="mt-2 flex items-center gap-1 mono text-[10px] font-semibold text-emerald-600">
                          <Zap className="h-3 w-3" /> Berjalan
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 p-[1px] hover:brightness-110 transition">
                      <div className="rounded-2xl bg-white p-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white">
                          <Cpu className="h-4 w-4" />
                        </div>
                        <p className="mt-2 text-xs font-bold leading-tight text-slate-900">Service Laptop</p>
                        <p className="mono text-[10px] text-slate-500">Cleaning & jasa</p>
                        <div className="mt-2 flex items-center gap-1 mono text-[10px] font-semibold text-violet-600">
                          <Wrench className="h-3 w-3" /> Hands-on
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-white text-slate-900 px-3 py-2.5">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-full bg-slate-900 flex items-center justify-center text-white">
                        <Server className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold leading-none">Hosting & Undangan Online</p>
                        <p className="mono text-[10px] text-slate-500">Pertemuan selanjutnya</p>
                      </div>
                    </div>
                    <span className="mono text-[10px] font-bold tracking-widest bg-amber-100 text-amber-700 px-2 py-1 rounded-full">SOON</span>
                  </div>
                </div>

                <div className="px-4 pb-3 flex items-center gap-2 mono text-[10px] tracking-widest text-white/40">
                  <Code2 className="h-3 w-3" /> NEXT.JS • TAILWIND • HARDWARE LAB
                </div>
              </div>

              <div className="absolute -bottom-3 -left-3 hidden sm:flex items-center gap-2 rounded-2xl bg-white border border-slate-200 px-3 py-2 shadow-xl">
                <img src="/logo/logo-navy.png" alt="logo" className="h-7 w-7 rounded-lg object-cover" />
                <div>
                  <p className="text-xs font-bold leading-none text-slate-900">HMSK UNSA</p>
                  <p className="mono text-[10px] text-slate-500">Est. Sistem Komputer</p>
                </div>
              </div>
            </div>

            <p className="mono text-center text-[11px] tracking-widest text-slate-400 mt-6">DIBINA • MAS DENNO • DICTO • TIM HMSK</p>
          </div>
        </div>
      </div>

      <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  );
}
