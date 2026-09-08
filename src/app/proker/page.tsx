import Link from "next/link";
import { ArrowRight, ArrowLeft, Sparkles, Clock3, Zap, Users, Wrench, Globe, Server, Share2 } from "lucide-react";
import { prokers } from "@/data/proker";
import { Card, CardContent } from "@/components/ui/card";

// brass editorial — icons unified to ink/brass, status brass vs stone
const iconMap: Record<string, React.ReactNode> = {
  code: <Globe className="h-6 w-6" />,
  cpu: <Wrench className="h-6 w-6" />,
  server: <Server className="h-6 w-6" />,
  share: <Share2 className="h-6 w-6" />,
};

export const metadata = {
  title: "Proker HMSK UNSA | Web Creation, SOCMED-X, RE-BOOT, VITE",
  description: "Empat proker unggulan HMSK UNSA: Web Creation & Fundamental Training, SOCMED-X, RE-BOOT, VITE. Semua hands-on dengan mentor.",
};

export default function ProkerPage() {
  return (
    <main className="pt-[72px]">
      <section className="relative overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 grid-pattern-dark opacity-20" />
        <div className="absolute -right-20 -top-20 h-[400px] w-[600px] rounded-full bg-gradient-to-br from-primary/14 to-primary/06 blur-3xl" />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <Link href="/" className="inline-flex items-center gap-1.5 mono text-xs tracking-widest text-background/55 hover:text-background">
            <ArrowLeft className="h-3.5 w-3.5" /> KEMBALI KE BERANDA
          </Link>
          <div className="mt-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-background/08 border border-background/12 px-3 py-1 mono text-[11px] tracking-widest">
                <Sparkles className="h-3 w-3 text-primary" /> PROKER UNGGULAN 2025
              </div>
              <h1 className="display mt-4 text-[32px] font-bold leading-[0.9] tracking-[-0.03em] sm:text-[44px]">
                Proker HMSK UNSA
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-background/65">
                Setiap proker punya halaman sendiri — klik untuk detail, mentor, dan cara gabung. {prokers.filter((p) => p.status === "berjalan").length} berjalan, {prokers.filter((p) => p.status === "segera").length} segera.
              </p>
            </div>
            <div className="rounded-2xl bg-card text-foreground px-5 py-4 lg:text-right border border-border">
              <p className="mono text-[11px] tracking-widest text-muted-foreground">TOTAL PROKER</p>
              <p className="display text-2xl font-bold">{prokers.length} Program</p>
              <p className="mono text-xs text-muted-foreground">{prokers.filter((p) => p.status === "berjalan").length} berjalan • {prokers.filter((p) => p.status === "segera").length} segera • Dibina mentor</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-background">
        <div className="grid gap-8 md:grid-cols-2">
          {prokers.map((p) => (
            <Card key={p.id} className="group border-border bg-card hover:border-primary/35 hover:shadow-lg transition will-change-transform hover:[transform:translateY(-4px)] overflow-hidden">
              <CardContent className="p-7 sm:p-8 flex flex-col h-full">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-primary border border-border shadow">
                    {iconMap[p.icon] ?? <Sparkles className="h-6 w-6" />}
                  </div>
                  <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 mono text-[11px] font-bold tracking-widest ${p.status === "berjalan" ? "bg-primary text-primary-foreground" : p.status === "segera" ? "bg-muted text-muted-foreground border border-border" : "bg-muted text-background"}`}>
                    {p.status === "berjalan" ? <><Zap className="h-3 w-3" /> BERJALAN</> : p.status === "segera" ? <><Clock3 className="h-3 w-3" /> SEGERA</> : "SELESAI"}
                  </span>
                </div>
                <h2 className="display mt-4 text-lg font-bold tracking-tight text-foreground">{p.shortTitle}</h2>
                <p className="mono text-xs font-semibold tracking-widest text-muted-foreground line-clamp-1">{p.title}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground line-clamp-3">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {p.highlights.map((h) => (
                    <span key={h} className="rounded-full bg-background border border-border px-2.5 py-1 mono text-[11px] text-muted-foreground">{h}</span>
                  ))}
                </div>
                <div className="mt-5 rounded-xl bg-background border border-border px-4 py-3 flex items-center gap-3">
                  <div className="h-7 w-7 rounded-full bg-foreground flex items-center justify-center mono text-xs font-bold text-primary">{p.mentor.charAt(0)}</div>
                  <div>
                    <p className="text-xs font-bold leading-none text-foreground">{p.mentor}</p>
                    <p className="mono text-[11px] text-muted-foreground">{p.mentorRole}</p>
                  </div>
                </div>
                <Link href={`/proker/${p.id}`} className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-full bg-foreground px-4 py-2.5 text-xs font-bold text-background hover:bg-foreground transition">
                  Buka halaman <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="mono text-xs text-muted-foreground">
            <span className="font-bold text-foreground">Mau ikut lebih dari 1?</span> Bisa — jadwal tidak bentrok. Hubungi mentor.
          </p>
          <a href="https://chat.whatsapp.com/GZzZdAeNrgCG3LYiU3ULVH" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-bold text-foreground hover:bg-primary">
            Gabung WA Grup <Users className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>
    </main>
  );
}
