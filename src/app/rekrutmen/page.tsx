import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { btnEmber, btnPaper, btnInk, cardSlush } from "@/lib/slush";

export const metadata = {
  title: "Rekrutmen HMSK UNSA",
  description: "Rekrutmen HMSK UNSA — lab berkarya Sistem Komputer: Web Creation, SOCMED-X, RE-BOOT, VITE. Gabung bareng mentor.",
};

const steps = [
  { n: "01", t: "Pilih proker", d: "Web Creation, SOCMED-X, RE-BOOT, atau VITE. Boleh lebih dari satu." },
  { n: "02", t: "Masuk grup WA", d: "Scan QR atau klik tombol. Info sesi & jadwal dibagikan di sana." },
  { n: "03", t: "Mulai berkarya", d: "Belajar bareng mentor, ship karya nyata, jadikan portfolio." },
];

export default function RekrutmenPage() {
  return (
    <main className="pt-[68px]">
      {/* Marquee — padding atas agar tidak tertutup navbar */}
      <div className="overflow-hidden border-b border-border bg-foreground py-2.5">
        <div className="flex animate-[marquee_18s_linear_infinite] whitespace-nowrap label text-xs text-background">
          <span className="pr-8">REKRUTMEN HMSK {new Date().getFullYear()} • LAB BERKARYA • WEB CREATION • RE-BOOT • SOCMED-X • VITE •</span>
          <span className="pr-8" aria-hidden>REKRUTMEN HMSK {new Date().getFullYear()} • LAB BERKARYA • WEB CREATION • RE-BOOT • SOCMED-X • VITE •</span>
        </div>
      </div>

      {/* HERO — sky wash + ember. 2 warna saja. */}
      <section className="relative overflow-hidden border-b border-border surface-mist">
        <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="mx-auto max-w-[1100px] text-center">
            <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1.5 label text-[11px] text-foreground">
              HMSK UNSA • SISTEM KOMPUTER
            </span>
            <h1 className="display mt-6 text-foreground" style={{ fontSize: "clamp(48px, 12vw, 176px)" }}>
              Join HMSK
            </h1>
            <p className="mx-auto mt-6 max-w-[620px] text-[17px] sm:text-[21px] font-medium leading-snug text-foreground text-pretty">
              Lab berkarya kampus — bikin website sampai jualan, servis laptop sampai buka jasa. Dibimbing mentor yang sudah di lapangan.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="https://chat.whatsapp.com/GZzZdAeNrgCG3LYiU3ULVH" target="_blank" rel="noopener noreferrer" className={btnEmber}>
                Gabung WA Grup <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
              <Link href="/proker" className={btnPaper}>
                Lihat Proker <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <p className="mt-4 label text-[11px] text-foreground/60">4 LAB AKTIF • 50+ MAHASISWA • 1 MENTOR + TIM HMSK</p>
          </div>
        </div>
      </section>

      {/* CARA GABUNG — hitam-putih, 1 strip ember untuk CTA */}
      <section className="border-b border-border bg-background py-14 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
            <div>
              <span className="label text-[11px] text-muted-foreground">CARA GABUNG</span>
              <h2 className="display mt-3 text-[34px] text-foreground sm:text-[48px]">
                Tiga langkah,
                <br />
                <span className="text-primary-text">langsung jalan.</span>
              </h2>
              <ol className="mt-8 flex flex-col gap-5">
                {steps.map((s) => (
                  <li key={s.n} className="flex gap-4 border-t border-border pt-5">
                    <span className="display text-2xl shrink-0 text-primary-text">{s.n}</span>
                    <div>
                      <p className="font-bold text-foreground">{s.t}</p>
                      <p className="mt-0.5 text-sm leading-6 text-muted-foreground">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* QR asli — bisa discan */}
            <div className="mx-auto w-full max-w-[400px]">
              <div className={`${cardSlush} flex items-stretch gap-4 p-4`}>
                <div className="shrink-0 rounded-[14px] border border-border bg-card p-2">
                  <Image
                    src="/rekrutmen/wa-qr.png"
                    alt="QR code untuk gabung grup WhatsApp HMSK UNSA"
                    width={140}
                    height={140}
                    className="h-[140px] w-[140px]"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center gap-3">
                  <p className="label text-sm text-foreground">
                    SCAN UNTUK
                    <br />
                    MASUK GRUP WA
                  </p>
                  <a href="https://chat.whatsapp.com/GZzZdAeNrgCG3LYiU3ULVH" target="_blank" rel="noopener noreferrer" className={`${btnPaper} px-4 py-2 text-xs`}>
                    Atau klik di sini
                  </a>
                </div>
              </div>
              <p className="mt-3 text-center text-xs text-muted-foreground">QR mengarah ke grup WhatsApp resmi HMSK UNSA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROKER — kartu netral, label neo dibatasi ke ember */}
      <section className="border-b border-border bg-muted py-14 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <h2 className="display shrink-0 text-[34px] text-foreground sm:text-[54px] lg:text-[72px]" style={{ lineHeight: 0.8 }}>
              Bengkel
              <br />
              Kampus.
            </h2>
            <div className="flex-1 grid gap-4 sm:grid-cols-3">
              {[
                { label: "NEXT.JS", desc: "Deploy & jualan website UMKM" },
                { label: "RE-BOOT", desc: "Cleaning, repasta, diagnosa" },
                { label: "SOCMED", desc: "Content + ads + analytics" },
              ].map((s) => (
                <div key={s.label} className={`${cardSlush} p-5`}>
                  <span className="inline-flex rounded-full border border-border bg-primary px-3 py-1 label text-[11px] text-primary-foreground">
                    {s.label}
                  </span>
                  <p className="mt-3 text-sm font-bold text-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
            <Link href="/" className={btnInk}>
              Kembali ke Beranda
            </Link>
            <Link href="/struktur" className={btnPaper}>
              Kenalan Pengurus
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
