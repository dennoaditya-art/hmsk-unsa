import Link from "next/link";
import { Bowlby_One_SC, Inter } from "next/font/google";

const bowlby = Bowlby_One_SC({ subsets: ["latin"], weight: ["400"], variable: "--font-lateral" });
const inter = Inter({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-aeonik" });

export const metadata = { title: "Rekrutmen HMSK UNSA — Slush" };

function Sticker({ color, label, rotate }: { color: string; label: string; rotate: string }) {
  return (
    <div
      className="absolute flex items-center justify-center rounded-[20px] border border-[#000] px-3 py-2 text-xs font-bold tracking-widest text-[#000] shadow-none"
      style={{ background: color, transform: rotate }}
    >
      {label}
    </div>
  );
}

export default function RekrutmenPage() {
  return (
    <div className={`${bowlby.variable} ${inter.variable} slush`}>
      {/* Marquee Slush — #000 bg */}
      <div className="bg-[#000] py-2 overflow-hidden border-y border-[#000]">
        <div className="flex animate-[marquee_18s_linear_infinite] whitespace-nowrap text-xs font-bold tracking-[0.32em] text-white uppercase" style={{ fontFamily: "var(--font-aeonik)" }}>
          <span className="pr-8">HMSK REKRUTMEN 2025 • LAB BERKARYA • WEB CREATION • RE-BOOT • SOCMED-X • VITE •</span>
          <span className="pr-8" aria-hidden>HMSK REKRUTMEN 2025 • LAB BERKARYA • WEB CREATION • RE-BOOT • SOCMED-X • VITE •</span>
        </div>
        <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
      </div>

      {/* HERO — Sky Wash #dceeff */}
      <section className="relative overflow-hidden bg-[#dceeff] border-b border-[#000]">
        {/* Electric Blue ribbon — grainy inflatable */}
        <div className="pointer-events-none absolute -top-10 -right-10 h-[520px] w-[680px] rounded-full bg-[#4da2ff] opacity-90 blur-none" style={{ borderRadius: "60% 40% 50% 30% / 40% 60% 40% 60%", filter: "url(#grain)" }} />
        <svg width="0" height="0"><filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.9" /><feColorMatrix type="saturate" values="0" /></filter></svg>

        {/* stickers */}
        <Sticker color="#fb4903" label="🚀 JOIN" rotate="rotate(-8deg)" />
        <div className="pointer-events-none absolute left-[8%] top-[18%]">
          <Sticker color="#ffd731" label="COIN" rotate="rotate(12deg)" />
        </div>
        <div className="absolute right-[6%] top-[22%] hidden sm:block">
          <Sticker color="#5c4ade" label="WALLET" rotate="rotate(-6deg)" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-8 py-16 lg:py-20">
          <div className="mx-auto max-w-[1100px] text-center">
            <p className="mx-auto inline-flex rounded-full border border-[#000] bg-white px-3 py-1 text-xs font-bold tracking-[0.32em] uppercase" style={{ fontFamily: "var(--font-aeonik)" }}>
              HMSK UNSA • SISTEM KOMPUTER
            </p>
            <h1
              className="mt-6 text-[#000] font-extrabold leading-[0.80] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-lateral)", fontSize: "clamp(56px, 14vw, 200px)", lineHeight: 0.8 }}
            >
              JOIN HMSK
            </h1>
            <p className="mx-auto mt-6 max-w-[720px] text-[18px] sm:text-[24px] font-medium leading-tight text-[#000]" style={{ fontFamily: "var(--font-aeonik)", letterSpacing: "-0.01em" }}>
              Lab berkarya kampus — bikin website sampai jualan, servis laptop sampai buka jasa. Dibimbing mentor.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="https://chat.whatsapp.com/GZzZdAeNrgCG3LYiU3ULVH"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#000] bg-[#000] px-6 py-3 text-sm font-bold text-white hover:bg-[#111] transition"
                style={{ fontFamily: "var(--font-aeonik)", letterSpacing: "0.032em", borderRadius: "1600px" }}
              >
                Gabung WA Grup
              </a>
              <Link
                href="/proker"
                className="rounded-full border border-[#000] bg-white px-6 py-3 text-sm font-bold text-[#000] hover:bg-[#e9e9e9] transition"
                style={{ fontFamily: "var(--font-aeonik)", letterSpacing: "0.032em", borderRadius: "1600px" }}
              >
                Lihat Proker
              </Link>
            </div>
            <p className="mt-3 text-xs tracking-[0.18em] text-[#000]/60" style={{ fontFamily: "var(--font-aeonik)" }}>4 LAB AKTIF • 50+ MAHASISWA • 3 MENTOR</p>
          </div>
        </div>
      </section>

      {/* BAND 2 — Paper White + QR Download Card slush */}
      <section className="bg-white border-b border-[#000] py-14 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <h2
                className="text-[#000] leading-[0.80] font-extrabold"
                style={{ fontFamily: "var(--font-lateral)", fontSize: "clamp(40px, 8vw, 110px)" }}
              >
                ALL THINGS
                <br />
                HMSK
              </h2>
              <p className="mt-6 max-w-[520px] text-sm leading-6 text-[#000]" style={{ fontFamily: "var(--font-aeonik)" }}>
                Belajar yang langsung dipakai: website, sosmed growth, hardware RE-BOOT. Bukan hafalan — langsung jualan & buka jasa.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-[#000] bg-[#e9ccff] px-4 py-2 text-xs font-bold" style={{ fontFamily: "var(--font-aeonik)" }}>Web Creation</span>
                <span className="rounded-full border border-[#000] bg-[#55db9c] px-4 py-2 text-xs font-bold" style={{ fontFamily: "var(--font-aeonik)" }}>RE-BOOT Hardware</span>
                <span className="rounded-full border border-[#000] bg-[#ffd731] px-4 py-2 text-xs font-bold" style={{ fontFamily: "var(--font-aeonik)" }}>SOCMED-X Live</span>
              </div>
            </div>

            {/* QR Card — Voltage Violet */}
            <div className="mx-auto w-full max-w-[380px] rounded-[20px] border border-[#000] bg-[#5c4ade] p-4 flex gap-4 items-stretch">
              <div className="flex-1 rounded-[16px] border border-[#000] bg-white p-3 flex items-center justify-center">
                <div className="h-[140px] w-[140px] bg-[repeating-linear-gradient(0deg,#000_0_4px,transparent_4px_8px)] border border-[#000] flex items-center justify-center text-[11px] font-bold tracking-widest text-center" style={{ fontFamily: "var(--font-aeonik)" }}>
                  QR
                  <br />
                  HMSK
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center gap-3">
                <p className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-aeonik)", letterSpacing: "0.032em" }}>
                  DOWNLOAD
                  <br />
                  INFO REKRUTMEN
                </p>
                <a
                  href="https://chat.whatsapp.com/GZzZdAeNrgCG3LYiU3ULVH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-4 py-2 text-center text-xs font-bold text-[#000] border border-[#000]"
                  style={{ borderRadius: "1600px" }}
                >
                  Scan WA Grup
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BAND 3 — Concrete Gray #cccccc */}
      <section className="bg-[#cccccc] py-14 lg:py-16 border-b border-[#000]">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <h3 className="shrink-0 text-[#000] font-extrabold leading-[0.76]" style={{ fontFamily: "var(--font-lateral)", fontSize: "clamp(36px, 7vw, 96px)" }}>
              BENGKEL
              <br />
              KAMPUS
            </h3>
            <div className="flex-1 grid gap-4 sm:grid-cols-3">
              {[
                { bg: "#4da2ff", label: "NEXT.JS", desc: "Deploy & jualan website UMKM" },
                { bg: "#55db9c", label: "RE-BOOT", desc: "Cleaning, repasta, diagnosa" },
                { bg: "#ffd731", label: "SOCMED", desc: "Content + ads + analytics" },
              ].map((s) => (
                <div key={s.label} className="rounded-[20px] border border-[#000] bg-white p-5">
                  <span className="inline-flex rounded-full border border-[#000] px-3 py-1 text-xs font-bold text-[#000]" style={{ background: s.bg, fontFamily: "var(--font-aeonik)", letterSpacing: "0.032em", borderRadius: "1600px" }}>
                    {s.label}
                  </span>
                  <p className="mt-3 text-sm font-bold text-[#000]" style={{ fontFamily: "var(--font-aeonik)" }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
            <Link href="/" className="rounded-full border border-[#000] bg-[#000] px-6 py-3 text-sm font-bold text-white" style={{ borderRadius: "1600px", fontFamily: "var(--font-aeonik)" }}>
              Kembali ke Beranda
            </Link>
            <Link href="/struktur" className="rounded-full border border-[#000] bg-white px-6 py-3 text-sm font-bold text-[#000]" style={{ borderRadius: "1600px", fontFamily: "var(--font-aeonik)" }}>
              Kenalan Pengurus
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
