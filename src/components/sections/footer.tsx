import { Mail, MapPin, Phone, ArrowUpRight, Sparkles } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0f1f3c] text-white border-t border-white/10">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3">
              <img src="/logo/logo-main.jpg" alt="HMSK" className="h-10 w-10 rounded-xl object-cover ring-1 ring-white/20" />
              <div>
                <p className="display text-lg font-bold tracking-tight">HMSK UNSA</p>
                <p className="mono text-[11px] tracking-[0.16em] text-white/60">SISTEM KOMPUTER • UNSA</p>
              </div>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/65">
              Himpunan Mahasiswa Sistem Komputer Universitas Surakarta — lab berkarya: bikin website sampai jualan, service laptop sampai buka jasa.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 border border-white/10 px-3 py-1 mono text-[11px] font-semibold">
                <Sparkles className="h-3 w-3 text-emerald-300" /> Proker Aktif
              </span>
              <a
                href="https://chat.whatsapp.com/GZzZdAeNrgCG3LYiU3ULVH"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-emerald-500 px-3 py-1 mono text-[11px] font-bold text-white hover:bg-emerald-400 transition"
              >
                Gabung WA Grup <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="mono text-[11px] tracking-[0.18em] text-white/50">KONTAK</h3>
            <div className="mt-4 flex flex-col gap-3">
              <a href="mailto:info@hmsk-unsa.ac.id" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition">
                <Mail className="h-4 w-4 text-emerald-400" /> info@hmsk-unsa.ac.id
              </a>
              <a href="tel:+6281234567890" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition">
                <Phone className="h-4 w-4 text-emerald-400" /> +62 812-3456-7890
              </a>
              <div className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="h-4 w-4 mt-0.5 text-emerald-400" />
                <span>Universitas Surakarta, Jawa Tengah</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="mono text-[11px] tracking-[0.18em] text-white/50">NAVIGASI</h3>
            <div className="mt-4 flex flex-col gap-2.5">
              <Link href="/" className="text-sm text-white/70 hover:text-white">Beranda</Link>
              <Link href="/#proker" className="text-sm text-white/70 hover:text-white">Proker</Link>
              <Link href="/struktur" className="text-sm text-white/70 hover:text-white">Struktur Pengurus</Link>
              <Link href="/tentang" className="text-sm text-white/70 hover:text-white">Tentang Kami</Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="mono text-[11px] tracking-[0.18em] text-white/50">PROKER</h3>
            <div className="mt-4 flex flex-col gap-2.5 text-sm">
              <span className="text-white/70">• WebCraft Studio</span>
              <span className="text-white/70">• LaptopCare Lab</span>
              <span className="text-white/60">• Hosting & Undangan (Segera)</span>
            </div>
            <Link href="/#proker" className="mt-4 inline-flex items-center gap-1 mono text-xs font-bold tracking-widest text-emerald-300 hover:text-white">
              LIHAT SEMUA <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="mono text-xs tracking-wide text-white/50">© {new Date().getFullYear()} HMSK UNSA — Sistem Komputer UNSA. Dibina dengan praktek, bukan wacana.</p>
          <div className="flex items-center gap-2 mono text-xs text-white/40">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> SYSTEM ONLINE
          </div>
        </div>
      </div>
    </footer>
  );
}
