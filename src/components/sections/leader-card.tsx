import Link from "next/link";
import { ArrowUpRight, Crown, Sparkles } from "lucide-react";
import { Leader } from "@/data/leaders";
import { cn } from "@/lib/utils";

export function LeaderCard({ leader, variant = "default" }: { leader: Leader; variant?: "ketua" | "default" }) {
  const isKetua = variant === "ketua";

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[28px] border bg-white transition-all card-hover",
        isKetua ? "border-amber-200 shadow-[0_20px_40px_-16px_rgba(245,158,11,0.25)]" : "border-slate-200 hover:border-slate-300"
      )}
    >
      {isKetua && (
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-emerald-400 to-cyan-400" />
      )}
      <div className="p-6">
        <div className="flex items-start justify-between gap-2">
          <div className={cn("relative flex items-center justify-center rounded-2xl text-white font-bold shadow-md shrink-0", isKetua ? "h-14 w-14 text-[15px]" : "h-12 w-12 text-[13px]", `bg-gradient-to-br ${leader.color}`)}>
            {leader.name.slice(0, 2).toUpperCase()}
            <span className={cn("absolute -bottom-1 -right-1 flex items-center justify-center rounded-full border-2 border-white text-[10px]", isKetua ? "h-6 w-6 bg-amber-400 text-white" : "h-5 w-5 bg-emerald-500 text-white")}>
              {isKetua ? <Crown className="h-3 w-3" /> : "●"}
            </span>
          </div>
          <span className={cn("mono text-[10px] font-bold tracking-widest px-2 py-1 rounded-full border shrink-0 max-w-[110px] text-center leading-tight", isKetua ? "bg-amber-50 border-amber-200 text-amber-700" : "bg-slate-50 border-slate-200 text-slate-600")}>
            {leader.shortRole.toUpperCase()}
          </span>
        </div>

        <div className="mt-4">
          <h3 className={cn("font-bold tracking-tight text-[#0f1f3c]", isKetua ? "text-[20px]" : "text-[16px]")}>{leader.name}</h3>
          <p className="mono text-[11px] tracking-widest text-slate-500">{leader.role}</p>
          {leader.proker && (
            <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-100 px-2 py-1 mono text-[10px] font-semibold text-emerald-700">
              <Sparkles className="h-3 w-3" /> {leader.proker}
            </span>
          )}
        </div>

        <p className="mt-3 text-xs leading-5 text-slate-600 line-clamp-3">{leader.description}</p>

        <Link
          href="/struktur"
          className={cn(
            "mt-4 inline-flex items-center gap-1 mono text-xs font-bold tracking-wide",
            isKetua ? "text-amber-600 hover:text-amber-700" : "text-emerald-600 hover:text-emerald-700"
          )}
        >
          Lihat profil <ArrowUpRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}
