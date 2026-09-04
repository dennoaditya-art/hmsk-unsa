import { leaders } from "@/data/leaders";
import { LeaderCard } from "./leader-card";
import { ArrowRight, Users, Crown } from "lucide-react";
import Link from "next/link";

export function StructureOverview() {
  const ketua = leaders[0];
  const pengurus = leaders.slice(1);

  return (
    <section id="struktur" className="relative bg-[#f8fafc] border-t border-slate-200">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mono text-[11px] tracking-[0.18em] text-slate-500">
              <span className="h-px w-6 bg-slate-300" /> STRUKTUR PENGURUS
            </div>
            <h2 className="display mt-3 text-[32px] font-bold leading-[0.9] tracking-[-0.03em] text-[#0f1f3c] sm:text-[42px]">
              Dipimpin yang
              <br />
              <span className="text-slate-400">Ngerti Lapangan.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm leading-6 text-slate-600">Bukan jabatan formalitas — tiap pengurus pegang proker nyata. Ketua coding, hardware, sampai keuangan jelas penanggung jawabnya.</p>
          </div>
        </div>

        <div className="mt-10">
          <div className="mx-auto max-w-[420px]">
            <div className="flex justify-center items-center gap-2 mono text-[11px] tracking-widest text-amber-600 mb-3">
              <Crown className="h-3.5 w-3.5" /> KETUA UMUM
            </div>
            <LeaderCard leader={ketua} variant="ketua" />
            <div className="flex justify-center mt-4">
              <div className="h-6 w-[2px] bg-[#0f1f3c]/15 rounded-full" />
            </div>
          </div>

          {/* horizontal connector — hidden on mobile, spans 4 card centers */}
          <div className="hidden lg:block h-[2px] bg-[#0f1f3c]/15 w-full max-w-[880px] mx-auto rounded-full" />

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {pengurus.map((leader) => (
              <div key={leader.name} className="relative">
                <div className="hidden lg:block absolute -top-6 left-1/2 h-6 w-[2px] bg-[#0f1f3c]/15 -translate-x-1/2 rounded-full" />
                <LeaderCard leader={leader} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/struktur" className="inline-flex items-center gap-2 rounded-full bg-[#0f1f3c] px-6 py-3 text-sm font-bold text-white hover:bg-[#1a2f5a] transition">
            Lihat detail semua pengurus <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/tentang" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
            <Users className="h-4 w-4" /> Tentang HMSK
          </Link>
        </div>

        <p className="mono text-center text-[11px] tracking-widest text-slate-400 mt-6">5 PENGURUS INTI • 3 PROKER AKTIF • 1 VISI</p>
      </div>
    </section>
  );
}
