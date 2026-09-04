import { ArrowUpRight, Clock3, Wrench, Globe, Zap, Users, Server } from "lucide-react";
import Link from "next/link";
import { prokers } from "@/data/proker";

export function Proker() {
  return (
    <section id="proker" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mono text-[11px] tracking-[0.18em] text-slate-500">
              <span className="h-px w-6 bg-slate-300" /> PROKER UNGGULAN
              <span className="rounded-full bg-emerald-50 text-emerald-700 px-2 py-0.5 font-bold tracking-widest">SEMESTER INI</span>
            </div>
            <h2 className="display mt-3 text-[32px] font-bold leading-[0.9] tracking-[-0.03em] text-[#0f1f3c] sm:text-[42px]">
              Belajar yang
              <br />
              <span className="gradient-text">Menghasilkan.</span>
            </h2>
          </div>
          <div className="max-w-[460px]">
            <p className="text-sm leading-6 text-slate-600">Tiga proker inti yang sudah berjalan & akan datang. Semua hands-on, ada mentor, dan output-nya bisa kamu jual atau buka jasa sendiri.</p>
            <div className="mt-3 flex gap-2 mono text-[11px]">
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 font-semibold text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> 2 Berjalan
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 font-semibold text-amber-700">
                <Clock3 className="h-3 w-3" /> 1 Segera
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          <div className="lg:col-span-7 group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-[1px] hover:border-emerald-200 transition will-change-transform hover:[transform:translateY(-2px)]">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10" />
            <div className="relative rounded-[27px] bg-gradient-to-b from-white to-slate-50/60 p-6 sm:p-7 h-full">
              <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent opacity-60" />
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-[0_10px_20px_-10px_rgba(14,166,107,0.7)]">
                  <Globe className="h-5 w-5" />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-3 py-1 mono text-[11px] font-bold tracking-widest text-white">
                  <Zap className="h-3 w-3" /> BERJALAN
                </span>
              </div>
              <h3 className="display mt-4 text-xl font-bold tracking-tight text-[#0f1f3c]">{prokers[0].shortTitle}</h3>
              <p className="mono text-xs font-semibold tracking-widest text-emerald-600">{prokers[0].title}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{prokers[0].description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {prokers[0].highlights.map((h) => (
                  <span key={h} className="rounded-full bg-white border border-slate-200 px-3 py-1 mono text-[11px] font-medium text-slate-600">
                    {h}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between rounded-2xl bg-[#0f1f3c] px-4 py-3 text-white">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-white/15 flex items-center justify-center mono text-xs font-bold">D</div>
                  <div>
                    <p className="text-xs font-bold leading-none">Dibina {prokers[0].mentor}</p>
                    <p className="mono text-[11px] text-white/60">{prokers[0].mentorRole}</p>
                  </div>
                </div>
                <Link href="/struktur" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0f1f3c]">
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-[1px] hover:border-violet-200 transition will-change-transform hover:[transform:translateY(-2px)]">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-violet-500/10 to-indigo-500/10" />
            <div className="relative rounded-[27px] bg-gradient-to-b from-white to-violet-50/40 p-6 sm:p-7 h-full">
              <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-violet-300/60 to-transparent opacity-60" />
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-[0_10px_20px_-10px_rgba(124,58,237,0.6)]">
                  <Wrench className="h-5 w-5" />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-600 px-3 py-1 mono text-[11px] font-bold tracking-widest text-white">
                  <Users className="h-3 w-3" /> LAB AKTIF
                </span>
              </div>
              <h3 className="display mt-4 text-xl font-bold tracking-tight text-[#0f1f3c]">{prokers[1].shortTitle}</h3>
              <p className="mono text-xs font-semibold tracking-widest text-violet-600">{prokers[1].title}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{prokers[1].description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {prokers[1].highlights.map((h) => (
                  <span key={h} className="rounded-full bg-white border border-violet-100 px-3 py-1 mono text-[11px] font-medium text-slate-600">
                    {h}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between rounded-2xl bg-white border border-slate-200 px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-violet-600 flex items-center justify-center mono text-xs font-bold text-white">D</div>
                  <div>
                    <p className="text-xs font-bold leading-none text-[#0f1f3c]">Dibina {prokers[1].mentor}</p>
                    <p className="mono text-[11px] text-slate-500">{prokers[1].mentorRole}</p>
                  </div>
                </div>
                <span className="mono text-[11px] font-bold text-violet-600">Hands-on →</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-12 rounded-[28px] border border-dashed border-amber-200 bg-amber-50/40 p-1">
            <div className="rounded-[22px] bg-white border border-amber-100 p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white">
                <Server className="h-6 w-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="display text-lg font-bold tracking-tight text-[#0f1f3c]">{prokers[2].shortTitle}</h3>
                  <span className="mono text-[11px] font-bold tracking-widest bg-amber-100 text-amber-700 px-2 py-1 rounded-full">PERTEMUAN SELANJUTNYA</span>
                </div>
                <p className="mono text-xs font-semibold tracking-widest text-amber-600">{prokers[2].title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600 max-w-3xl">{prokers[2].description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {prokers[2].highlights.map((h) => (
                    <span key={h} className="inline-flex items-center gap-1 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 mono text-[11px] font-medium text-amber-800">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
              <div className="shrink-0 flex flex-col items-start lg:items-end gap-2">
                <span className="inline-flex items-center gap-1.5 mono text-xs font-bold tracking-widest text-slate-500">
                  <Clock3 className="h-3.5 w-3.5" /> SEGERA DIUMUMKAN
                </span>
                <Link href="/tentang" className="inline-flex items-center gap-1.5 rounded-full bg-[#0f1f3c] px-4 py-2 text-xs font-bold text-white hover:bg-[#1a2f5a]">
                  Lihat detail <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <p className="mono text-[11px] tracking-widest text-slate-400">3 PROKER • 2 AKTIF • 1 SEGERA • DIBIMBING MENTOR SENIOR</p>
        </div>
      </div>
    </section>
  );
}
