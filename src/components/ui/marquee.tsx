export function Marquee({ text = "WEB CREATION • SOCMED-X • RE-BOOT • VITE • UNSA • SISTEM KOMPUTER •" }: { text?: string }) {
  const items = Array.from({ length: 8 }, () => text).join("  ");
  return (
    <div className="group relative overflow-hidden border-y border-border bg-foreground py-2.5">
      <div className="flex animate-[marquee_22s_linear_infinite] group-hover:[animation-play-state:paused] whitespace-nowrap label text-xs text-background will-change-transform">
        <span className="pr-8">{items}</span>
        <span className="pr-8" aria-hidden>{items}</span>
      </div>
    </div>
  );
}
