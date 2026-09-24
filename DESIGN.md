# DESIGN.md — HMSK UNSA (Slush)

> Sistem desain global: **Slush** (carbon/paper + neon sticker).
> Sebelumnya hybrid kampus×Slush — sekarang Slush dipakai seragam di semua halaman publik.
> Pengecualian: `/presensi` & `/admin/*` tetap netral/fungsional (token ikut, tapi tanpa neon/sticker dekoratif).

## Register

brand — situs profil himpunan. Desain adalah produknya.

## Strategi warna

**Committed, bukan Drenched.** Base hitam-putih, aksen ember membawa suara.
Neon sticker dipakai **1-2 warna per halaman**, tidak pernah semua sekaligus.

Aturan lama "6 sticker warna bebas" dihapus — itu penyebab halaman terasa ramai.

## Tokens

### Base (global)
```
--background: #ffffff              // paper
--foreground: #000000              // carbon
--card: #ffffff
--primary: #fb4903                 // ember (aksen utama)
--primary-foreground: #000000      // HITAM di atas ember — kontras 6.05:1
--accent: #5c4ade                  // voltage violet
--muted: #e9e9e9
--muted-foreground: #5b5b5b        // kontras 6.4:1 di putih
--border: #000000                  // tanda tangan Slush: border 1px solid #000
--ring: #fb4903
```

**Jangan pakai putih di atas ember** — kontras hanya 3.28:1 (gagal WCAG AA untuk teks normal).
Ember butuh teks hitam. Aturan ini berlaku di semua tombol ember.

### Palet sticker (Tailwind: `bg-sun`, `bg-mint`, `bg-electric`, `bg-lavender`, `bg-voltage`, `bg-sky`, `bg-concrete`, `bg-mist`)
```
--slush-ember:    #fb4903
--slush-sun:      #ffd731
--slush-mint:     #55db9c
--slush-blue:     #4da2ff
--slush-lavender: #e9ccff
--slush-violet:   #5c4ade
--slush-sky:      #dceeff
--slush-concrete: #cccccc
--slush-mist:     #e9e9e9
```

### Dark mode
Base jadi carbon. **Permukaan terang di-invers** agar teks tetap terbaca:
`--slush-sky: #0f1b2e`, `--slush-mist: #1a1a1a`, `--slush-sun: #3d3400`, dst.
Tanpa ini, `bg-sky` + `text-foreground` = putih di atas biru muda (kontras 1.4:1, tidak terbaca).

### Tipografi
- **Display**: Bowlby One SC 400 — hanya untuk heading pendek & besar. Hanya punya weight 400; `.display` memaksa `font-weight: 400` supaya browser tidak mensintesis bold palsu.
- **Body/UI**: Inter 400-800 (variable `--font-body`)
- **Mono**: JetBrains Mono — hanya untuk data teknis (NIM, timestamp), bukan label marketing.
- **`.label`**: caps + tracking 0.18em, Inter 700 — pengganti mono untuk teks marketing.

### Radius, border, shadow
- Pill: 1600px (`rounded-full`)
- Kartu: 20px
- **Border: 1px solid #000** di semua elemen interaktif
- **Shadow: tidak ada.** Flat + outline adalah tanda tangan Slush.

### Layout
- Max width: 1440px
- Section padding: `py-14 sm:py-20 lg:py-24`

## Aturan

- Neon **1-2 warna per halaman**. Ember selalu boleh (aksen). Warna kedua pilih satu dari palet sticker.
- Semua interaktif: border 1px hitam + radius pill.
- Tanpa gradient dekoratif, tanpa box-shadow, tanpa glassmorphism.
- Kontras teks ≥ 4.5:1. Ember → teks hitam.
- `prefers-reduced-motion` wajib untuk marquee & animasi.
- Presensi & admin: token ikut, tapi jangan tambah sticker/neon dekoratif.

## Helper class

`src/lib/slush.ts` — `btnInk`, `btnPaper`, `btnEmber`, `cardSlush`, `chipBase`.
Pakai ini daripada menulis ulang `rounded-full border border-border px-6 py-3 ...` di setiap file.
