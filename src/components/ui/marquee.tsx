export function Marquee({ text = "HMSK • WEBCRAFT • LAPTOPCARE • HOST & INVITE • UNSA • SISTEM KOMPUTER •" }: { text?: string }) {
  const items = Array.from({ length: 8 }, () => text).join("  ");
  return (
    <div className="relative overflow-hidden border-y border-slate-200 bg-[#0f1f3c] py-2.5">
      <div className="flex animate-[marquee_22s_linear_infinite] whitespace-nowrap mono text-xs tracking-[0.18em] text-white/85">
        <span className="pr-8">{items}</span>
        <span className="pr-8" aria-hidden>{items}</span>
      </div>
      <style>{`@keyframes marquee { 0% { transform: translateX(0)} 100% { transform: translateX(-50%)}}`}</style>
    </div>
  );
}
