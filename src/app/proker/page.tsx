import Link from "next/link";
import { ArrowRight, ArrowLeft, Sparkles, Clock3, Zap, Users, Wrench, Globe, Server } from "lucide-react";
import { prokers } from "@/data/proker";
import { Card, CardContent } from "@/components/ui/card";

const iconMap: Record<string, React.ReactNode> = {
  code: <Globe className="h-6 w-6" />,
  cpu: <Wrench className="h-6 w-6" />,
  server: <Server className="h-6 w-6" />,
};

export const metadata = {
  title: "Proker HMSK UNSA | WebCraft, LaptopCare, Host Invite",
  description: "Tiga proker unggulan HMSK UNSA: WebCraft Studio, LaptopCare Lab, Hosting & Undangan Online. Semua hands-on dengan mentor.",
};

export default function ProkerPage() {
  return (
    <main className="pt-[72px]">
      <section className="relative overflow-hidden bg-[#0f1f3c] text-white">
        <div className="absolute inset-0 grid-pattern-dark opacity-30" />
        <div className="absolute -right-20 -top-20 h-[400px] w-[600px] rounded-full bg-gradient-to-br from-emerald-500/15 to-cyan-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <Link href="/" className="inline-flex items-center gap-1.5 mono text-xs tracking-widest text-white/60 hover:text-white">
            <ArrowLeft className="h-3.5 w-3.5" /> KEMBALI KE BERANDA
          </Link>
          <div className="mt-6 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 mono text-[11px] tracking-widest">
                <Sparkles className="h-3 w-3 text-emerald-300" /> PROKER UNGGULAN 2025
              </div>
              <h1 className="display mt-4 text-[32px] font-bold leading-[0.9] tracking-[-0.03em] sm:text-[44px]">
                Proker HMSK UNSA
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/70">
                Setiap icon punya halaman sendiri — klik untuk detail, mentor, dan cara gabung. 2 berjalan, 1 segera.
              </p>
            </div>
            <div className="rounded-2xl bg-white text-[#0f1f3c] px-5 py-4 lg:text-right">
              <p className="mono text-[11px] tracking-widest text-slate-500">TOTAL PROKER</p>
              <p className="display text-2xl font-bold">3 Program</p>
              <p className="mono text-xs text-slate-500">2 berjalan • 1 segera • Dibina mentor</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {prokers.map((p) => (
            <Card key={p.id} className="group border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg transition will-change-transform hover:[transform:translateY(-4px)] overflow-hidden">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-start justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${p.color} text-white shadow`}>
                    {iconMap[p.icon] ?? <Sparkles className="h-6 w-6" />}
                  </div>
                  <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 mono text-[11px] font-bold tracking-widest text-white ${p.status === "berjalan" ? "bg-emerald-500" : p.status === "segera" ? "bg-amber-500" : "bg-slate-500"}`}>
                    {p.status === "berjalan" ? <><Zap className="h-3 w-3" /> BERJALAN</> : p.status === "segera" ? <><Clock3 className="h-3 w-3" /> SEGERA</> : "SELESAI"}
                  </span>
                </div>
                <h2 className="display mt-4 text-lg font-bold tracking-tight text-[#0f1f3c]">{p.shortTitle}</h2>
                <p className="mono text-xs font-semibold tracking-widest text-slate-500">{p.title}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600 line-clamp-3">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.highlights.map((h) => (
                    <span key={h} className="rounded-full bg-slate-50 border border-slate-200 px-2.5 py-1 mono text-[11px] text-slate-600">{h}</span>
                  ))}
                </div>
                <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200 px-3 py-2 flex items-center gap-2">
                  <div className="h-7 w-7 rounded-full bg-[#0f1f3c] flex items-center justify-center mono text-xs font-bold text-white">{p.mentor.charAt(0)}</div>
                  <div>
                    <p className="text-xs font-bold leading-none text-[#0f1f3c]">{p.mentor}</p>
                    <p className="mono text-[11px] text-slate-500">{p.mentorRole}</p>
                  </div>
                </div>
                <Link href={`/proker/${p.id}`} className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-full bg-[#0f1f3c] px-4 py-2.5 text-xs font-bold text-white hover:bg-[#1a2f5a] transition">
                  Buka halaman <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="mono text-xs text-slate-600">
            <span className="font-bold text-[#0f1f3c]">Mau ikut lebih dari 1?</span> Bisa — jadwal tidak bentrok. Hubungi mentor.
          </p>
          <a href="https://chat.whatsapp.com/GZzZdAeNrgCG3LYiU3ULVH" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-400">
            Gabung WA Grup <Users className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>
    </main>
  );
}
