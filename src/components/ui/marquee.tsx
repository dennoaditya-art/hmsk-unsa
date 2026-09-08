export function Marquee({ text = "HMSK • WEB CREATION • SOCMED-X • RE-BOOT • VITE • UNSA • SISTEM KOMPUTER •" }: { text?: string }) {
  const items = Array.from({ length: 8 }, () => text).join("  ");
  return (
    <div className="group relative overflow-hidden border-y border-border bg-[#020617] py-2.5">
      <div className="flex animate-[marquee_22s_linear_infinite] group-hover:[animation-play-state:paused] whitespace-nowrap mono text-xs tracking-[0.18em] text-white/85 will-change-transform">
        <span className="pr-8">{items}</span>
        <span className="pr-8" aria-hidden>{items}</span>
      </div>
      <style>{`@keyframes marquee { 0% { transform: translateX(0)} 100% { transform: translateX(-50%)}} @media (prefers-reduced-motion: reduce) { div[class*="animate-[marquee"] { animation: none !important } }`}</style>
    </div>
  );
}
