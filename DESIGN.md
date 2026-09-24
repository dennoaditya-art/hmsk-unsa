# DESIGN.md — HMSK UNSA

> Sistem desain: **mono + satu aksen** (carbon/paper + ember).
> Sebelumnya "Slush" dengan 6 neon — dibuang karena tidak harmonis (lihat bagian Sejarah).

## Register

brand — situs profil himpunan. Desain adalah produknya.

## Strategi warna

**Restrained.** Hitam-putih membawa seluruh struktur; ember adalah satu-satunya suara.
Tidak ada warna kedua. Ritme dibentuk oleh permukaan netral (putih → mist → hitam), bukan hue.

## Tokens

### Base
```
--background: #ffffff          // paper
--foreground: #000000          // carbon
--card: #ffffff
--muted: #e9e9e9
--muted-foreground: #5b5b5b    // 6.79:1 di putih
--accent: #e9e9e9              // netral (hover state)
--border: #000000              // tanda tangan: border 1px solid #000
```

### Aksen — DUA token, satu warna
```
--primary: #fb4903             // FILL. Tombol/badge. Teks di atasnya HITAM (6.06:1)
--primary-foreground: #000000
--primary-text: #d14300        // aksen sbg TEKS di putih (4.65:1)
```

**Kenapa dua token.** Satu warna tidak bisa memenuhi dua peran sekaligus:
- Ember asli `#fb4903` sebagai teks di putih = **3.47:1** → gagal AA untuk teks kecil.
- Ember digelapkan `#d14300` di putih = **4.65:1** → lolos. Tapi kalau dipakai sebagai fill, teks hitam di atasnya jatuh ke 4.51:1 (masih lolos, tipis).

Jadi: **fill pakai ember asli, teks pakai ember gelap.**

| Peran | Class | Kontras |
|---|---|---|
| Tombol/badge (teks hitam di atas ember) | `bg-primary text-primary-foreground` | 6.06:1 |
| Teks kecil (label, NIM, ikon) | `text-primary-text` | 4.65:1 |
| Teks besar (display ≥24px) | `text-primary-text` (aman) atau `text-primary` | 3.47:1+ |
| Ember di dark mode | `text-primary` / `bg-primary` | 6.06:1 |

**Jangan pernah** `text-primary` untuk teks kecil di latar putih — itu 3.47:1, gagal AA.

### Permukaan netral
```
.surface-mist     → --slush-mist      (#e9e9e9 light / #1a1a1a dark)
.surface-concrete → --slush-concrete  (#cccccc light / #1a1a1a dark)
```
Pengganti `bg-sky` dan neon lain yang sudah dibuang.

### Dark mode
Base jadi carbon. Ember tetap (6.06:1 di hitam). Permukaan netral di-invers.

### Tipografi
- **Display**: Bowlby One SC 400 — heading pendek & besar saja. Hanya punya weight 400; `.display` memaksa `font-weight: 400` agar browser tidak mensintesis bold palsu.
- **Body/UI**: Inter 400-800 (`--font-body`)
- **Mono**: JetBrains Mono — data teknis saja (NIM, timestamp), bukan label marketing.
- **`.label`**: caps + tracking 0.18em, Inter 700.

### Radius, border, shadow
- Pill: 1600px · Kartu: 20px
- **Border: 1px solid #000** di semua elemen interaktif
- **Shadow: tidak ada.** Flat + outline adalah tanda tangannya.

### Layout
- Max width: 1440px
- Section padding: `py-14 sm:py-20 lg:py-24`

## Aturan

1. **Satu aksen saja.** Tidak ada warna kedua. Kalau butuh pembeda, pakai berat/ukuran/permukaan.
2. Kontras teks ≥ 4.5:1. Ember fill → teks hitam.
3. `text-primary` hanya untuk teks besar; `text-primary-text` untuk teks kecil.
4. Semua interaktif: border 1px hitam + radius pill.
5. Tanpa gradient dekoratif, tanpa box-shadow, tanpa glassmorphism.
6. `prefers-reduced-motion` wajib untuk marquee & animasi.
7. Presensi & admin: token ikut, tanpa dekorasi.

## Sejarah — kenapa 6 neon dibuang

Palet lama (Slush sticker: ember, sun, mint, electric, lavender, voltage) diukur dan gagal:

| Masalah | Data |
|---|---|
| Hero ember di atas sky | 2.93:1 — gagal WCAG |
| Primary vs accent nyaris identik | ember↔voltage 1.74, ember↔electric 1.31 |
| Chroma tidak seragam | 0.075 (lavender) → 0.223 (ember), beda 3× |
| Lightness menumpuk | 5 dari 6 aksen di L 0.65–0.89 |
| Buta warna | 5-6 pasangan tak bisa dibedakan di deuteranopia |

Akar masalah: palet sticker dirancang untuk ditempel **terpisah** di atas hitam/putih, bukan untuk hidup berdampingan sebagai peran UI.

## Helper class

`src/lib/slush.ts` — `btnInk`, `btnPaper`, `btnEmber`, `cardSlush`, `chipBase`.
