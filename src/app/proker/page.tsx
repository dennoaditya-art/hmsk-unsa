import Link from "next/link";
import { ArrowRight, ArrowLeft, Sparkles, Clock3, Zap, Users, Wrench, Globe, Server, Share2 } from "lucide-react";
import { prokers } from "@/data/proker";
import { btnEmber, btnInk, cardSlush } from "@/lib/slush";

const iconMap: Record<string, React.ReactNode> = {
  code: <Globe className="h-6 w-6" aria-hidden />,
  cpu: <Wrench className="h-6 w-6" aria-hidden />,
  server: <Server className="h-6 w-6" aria-hidden />,
  share: <Share2 className="h-6 w-6" aria-hidden />,
};

export const metadata = {
  title: "Proker HMSK UNSA | Web Creation, SOCMED-X, RE-BOOT, VITE",
  description: "Empat proker unggulan HMSK UNSA: Web Creation & Fundamental Training, SOCMED-X, RE-BOOT, VITE. Semua hands-on dengan mentor.",
};

export default function ProkerPage() {
  const berjalan = prokers.filter((p) => p.status === "berjalan").length;
  const segera = prokers.filter((p) => p.status === "segera").length;

  return (
    <main className="pt-[72px]">
      <section className="relative overflow-hidden border-b border-border surface-mist">
        <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <Link href="/" className="inline-flex items-center gap-1.5 label text-xs text-foreground/60 hover:text-foreground">
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden /> KEMBALI KE BERANDA
          </Link>
          <div className="mt-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 label text-[11px] text-foreground">
                <Sparkles className="h-3 w-3 text-primary-text" aria-hidden /> PROKER UNGGULAN
              </span>
              <h1 className="display mt-4 text-[32px] text-foreground sm:text-[46px]">
                Proker HMSK UNSA
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-foreground/75">
                Setiap proker punya halaman sendiri — klik untuk detail, mentor, dan cara gabung. {berjalan} berjalan, {segera} segera.
              </p>
            </div>
            <div className={`${cardSlush} px-5 py-4 lg:text-right`}>
              <p className="label text-[11px] text-muted-foreground">TOTAL PROKER</p>
              <p className="display text-2xl text-foreground">{prokers.length} Program</p>
              <p className="text-xs text-muted-foreground">{berjalan} berjalan • {segera} segera • Dibina mentor</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-background">
        <div className="grid gap-8 md:grid-cols-2">
          {prokers.map((p) => (
            <article key={p.id} className={`${cardSlush} group flex flex-col p-7 sm:p-8 transition hover:[transform:translateY(-4px)]`}>
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-foreground text-background">
                  {iconMap[p.icon] ?? <Sparkles className="h-6 w-6" aria-hidden />}
                </div>
                <span className={`inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 label text-[11px] ${p.status === "berjalan" ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground"}`}>
                  {p.status === "berjalan" ? <><Zap className="h-3 w-3" aria-hidden /> BERJALAN</> : p.status === "segera" ? <><Clock3 className="h-3 w-3" aria-hidden /> SEGERA</> : "SELESAI"}
                </span>
              </div>
              <h2 className="display mt-4 text-lg text-foreground">{p.shortTitle}</h2>
              <p className="label text-[11px] text-muted-foreground line-clamp-1">{p.title}</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground line-clamp-3 flex-1">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {p.highlights.map((h) => (
                  <span key={h} className="rounded-full border border-border bg-muted px-2.5 py-1 text-[11px] font-medium text-foreground">{h}</span>
                ))}
              </div>
              <div className="mt-5 rounded-xl border border-border bg-muted px-4 py-3 flex items-center gap-3">
                <div className="h-7 w-7 rounded-full bg-foreground flex items-center justify-center text-xs font-bold text-background">{p.mentor.charAt(0)}</div>
                <div>
                  <p className="text-xs font-bold leading-none text-foreground">{p.mentor}</p>
                  <p className="text-[11px] text-muted-foreground">{p.mentorRole}</p>
                </div>
              </div>
              <Link href={`/proker/${p.id}`} className={`${btnInk} mt-5 w-full`}>
                Buka halaman <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </article>
          ))}
        </div>

        <div className={`${cardSlush} mt-8 px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3`}>
          <p className="text-xs text-muted-foreground">
            <span className="font-bold text-foreground">Mau ikut lebih dari 1?</span> Bisa — jadwal tidak bentrok. Hubungi mentor.
          </p>
          <a href="https://chat.whatsapp.com/GZzZdAeNrgCG3LYiU3ULVH" target="_blank" rel="noopener noreferrer" className={btnEmber}>
            Gabung WA Grup <Users className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </section>
    </main>
  );
}
