export const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-bold transition active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:opacity-50 disabled:pointer-events-none";

export const btnInk = `${btnBase} bg-foreground text-background hover:opacity-90`;

export const btnPaper = `${btnBase} bg-card text-foreground hover:bg-muted`;

export const btnEmber = `${btnBase} bg-primary text-primary-foreground hover:brightness-95`;

export const cardSlush = "rounded-[20px] border border-border bg-card";

export const chipBase =
  "inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-[11px] font-bold";
