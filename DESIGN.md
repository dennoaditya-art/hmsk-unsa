# DESIGN.md — HMSC Hybrid Kampus × Slush

> Hybrid: kampus warm (amber/navy/white) untuk homepage, Slush sticker system untuk /rekrutmen.
> Sumber: Slush Style Reference (Refero) + palette.mjs seed 60° + system kampus.

## Tokens

### Palette — Hybrid Kampus (global)
```
--background: oklch(1 0 0)                // Paper White #ffffff
--foreground: oklch(0.165 0.04 272)        // Ink/navy
--card: oklch(0.99 0.008 70)
--primary: oklch(0.68 0.145 65)            // Amber honey (seed 60° ±10°)
--primary-foreground: oklch(1 0 0)         // white on amber (H-K)
--accent: oklch(0.54 0.09 192)             // teal
--border: oklch(0.92 0.012 272)
```

### Palette — Slush (scoped ke /rekrutmen)
```
--slush-carbon: #000000
--slush-paper: #ffffff
--slush-sky-wash: #dceeff
--slush-concrete: #cccccc
--slush-soft-mist: #e9e9e9
--slush-electric-blue: #4da2ff
--slush-mint-pop: #55db9c
--slush-lavender: #e9ccff
--slush-ember: #fb4903
--slush-sunburst: #ffd731
--slush-voltage: #5c4ade
```

### Typography
- Display: Bricolage Grotesque 700/800 (kampus homepage, menggantikan Oswald). Slush page pakai Lateral substitute Bowlby One SC 800 line-height 0.75-0.80
- Body/UI: Geist 400-700 + mono JetBrains 400/500
- Slush labels: Aeonik substitute Inter 700 tracking 0.032em

### Radius & Border
- Hybrid pill/nav/buttons: 1600px (Slush) — `rounded-full` di Tailwind
- Cards kampus: 20px (Slush) / 40px elevated
- Border: hybrid 1px oklch di kampus, **1px solid #000** di Slush cards/buttons (outline hand-cut)
- Shadow: hybrid ada shadow, Slush **no shadow** (flat + outline only)

### Layout
- Page max: kampus 1280px, Slush 1440px
- Section gap: 48px (Slush) / 56-80px (kampus)
- Hero split 50/50 `grid-cols-1 lg:grid-cols-2 min-h-[100dvh] max-w-[1400]`

## Rules
- Slush palette (6 sticker colors) hanya di /rekrutmen — jangan sebar ke homepage (hanya Lavender boleh sebagai wash kedua jika perlu)
- Slush Do's: crushed 0.75 leading, black 1px outline di semua interaktif, no gradient/box-shadow di Slush
- Kampus keep shadow + amber CTAs (white text) + grid-pattern subtle

