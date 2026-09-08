import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Crown, Sparkles } from "lucide-react";
import { Leader } from "@/data/leaders";
import { cn } from "@/lib/utils";

export function LeaderCard({ leader, variant = "default" }: { leader: Leader; variant?: "ketua" | "default" }) {
  const isKetua = variant === "ketua";
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduce ? undefined : { y: -6, rotate: isKetua ? 0.3 : -0.3 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "group relative overflow-hidden rounded-[24px] sm:rounded-[28px] border bg-card transition-colors",
        isKetua ? "border-primary/30 shadow-[0_16px_32px_-12px_hsl(var(--primary)/0.22)]" : "border-border hover:border-primary/30"
      )}
    >
      {isKetua && (
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary to-primary" />
      )}
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-2">
          <div className={cn("relative flex items-center justify-center rounded-2xl overflow-hidden shadow-md shrink-0", isKetua ? "h-14 w-14" : "h-12 w-12", !leader.image && `bg-gradient-to-br ${leader.color} text-background font-bold text-[13px]` )}>
            {leader.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={leader.image} alt={leader.name} className="h-full w-full object-cover" />
            ) : (
              leader.name.slice(0, 2).toUpperCase()
            )}
            <span className={cn("absolute -bottom-1 -right-1 flex items-center justify-center rounded-full border-2 border-background text-[10px]", isKetua ? "h-6 w-6 bg-primary text-primary-foreground" : "h-5 w-5 bg-foreground text-primary")}>
              {isKetua ? <Crown className="h-3 w-3" /> : "●"}
            </span>
          </div>
          <span className={cn("mono text-[10px] font-bold tracking-widest px-2 py-1 rounded-full border shrink-0 max-w-[110px] text-center leading-tight", isKetua ? "bg-primary/15 border-border text-primary" : "bg-background border-border text-muted-foreground")}>
            {leader.shortRole.toUpperCase()}
          </span>
        </div>

        <div className="mt-4">
          <h3 className={cn("font-bold tracking-tight text-foreground leading-tight break-words", isKetua ? (leader.name.length > 24 ? "text-[16px]" : "text-[20px]") : leader.name.length > 28 ? "text-[13px]" : leader.name.length > 22 ? "text-[14px]" : "text-[16px]")}>{leader.name}</h3>
          <p className="mono text-[11px] tracking-widest text-muted-foreground">{leader.role}</p>
          {leader.nim && (
            <p className="mono text-[10px] font-bold tracking-[0.12em] text-foreground/60 mt-0.5">NIM {leader.nim}</p>
          )}
          {leader.proker && (
            <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-primary/12 border border-border px-2 py-1 mono text-[10px] font-semibold text-primary">
              <Sparkles className="h-3 w-3" /> {leader.proker}
            </span>
          )}
        </div>

        <p className="mt-3 text-xs leading-5 text-muted-foreground line-clamp-3">{leader.description}</p>

        <Link
          href="/struktur"
          className={cn(
            "mt-4 inline-flex items-center gap-1 mono text-xs font-bold tracking-wide",
            isKetua ? "text-primary hover:text-foreground" : "text-foreground hover:text-primary"
          )}
        >
          Lihat profil <ArrowUpRight className="h-3 w-3" />
        </Link>
      </div>
    </motion.div>
  );
}
