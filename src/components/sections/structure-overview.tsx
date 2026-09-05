import { leaders } from "@/data/leaders";
import { LeaderCard } from "./leader-card";
import { ArrowRight, Users, Crown } from "lucide-react";
import Link from "next/link";

export function StructureOverview() {
  const ketua = leaders[0];
  const pengurus = leaders.slice(1);

  return (
    <section id="struktur" className="relative bg-background border-t border-border">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mono text-[11px] tracking-[0.18em] text-muted-foreground">
              <span className="h-px w-6 bg-border" /> STRUKTUR PENGURUS
            </div>
            <h2 className="display mt-3 text-[32px] font-bold leading-[0.9] tracking-[-0.03em] text-foreground sm:text-[42px]">
              Dipimpin yang
              <br />
              <span className="text-muted-foreground">Ngerti Lapangan.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm leading-6 text-muted-foreground">Bukan jabatan formalitas — tiap pengurus pegang proker nyata. Ketua coding, hardware, sampai keuangan jelas penanggung jawabnya.</p>
          </div>
        </div>

        <div className="mt-10">
          <div className="mx-auto max-w-[420px]">
            <div className="flex justify-center items-center gap-2 mono text-[11px] tracking-widest text-primary mb-3">
              <Crown className="h-3.5 w-3.5" /> KETUA UMUM
            </div>
            <LeaderCard leader={ketua} variant="ketua" />
            <div className="flex justify-center mt-4">
              <div className="h-6 w-[2px] bg-foreground/10 rounded-full" />
            </div>
          </div>

          {/* horizontal connector — hidden on mobile */}
          <div className="hidden lg:block h-[2px] bg-foreground/10 w-full max-w-[880px] mx-auto rounded-full" />

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {pengurus.map((leader) => (
              <div key={leader.name} className="relative">
                <div className="hidden lg:block absolute -top-6 left-1/2 h-6 w-[2px] bg-foreground/10 -translate-x-1/2 rounded-full" />
                <LeaderCard leader={leader} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3">
          <Link href="/struktur" className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-bold text-background hover:bg-foreground/90 active:scale-[0.98] transition min-h-12 sm:min-h-0">
            Lihat detail semua pengurus <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/tentang" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-muted active:bg-muted min-h-12 sm:min-h-0">
            <Users className="h-4 w-4" /> Tentang HMSK
          </Link>
        </div>

        <p className="mono text-center text-[11px] tracking-widest text-muted-foreground mt-6">5 PENGURUS INTI • 3 PROKER AKTIF • 1 VISI</p>
      </div>
    </section>
  );
}
