import Link from "next/link";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { btnEmber } from "@/lib/slush";

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3">
              <img src="/logo/logo-main.jpg" alt="HMSK UNSA" className="h-10 w-10 rounded-[10px] object-cover border border-background" />
              <span>
                <span className="display block text-lg text-background">HMSK UNSA</span>
                <span className="label block text-[9px] text-background/60">SISTEM KOMPUTER</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-background/70">
              Himpunan Mahasiswa Sistem Komputer Universitas Surakarta — lab berkarya: bikin website sampai jualan, service laptop sampai buka jasa.
            </p>
            <a
              href="https://chat.whatsapp.com/GZzZdAeNrgCG3LYiU3ULVH"
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnEmber} mt-6`}
            >
              Gabung WA Grup <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>

          <div className="md:col-span-3">
            <h2 className="label text-[11px] text-background/50">KONTAK</h2>
            <div className="mt-5 flex flex-col gap-4">
              <a href="mailto:hmskunsa@gmail.com" className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition">
                <Mail className="h-4 w-4" aria-hidden /> hmskunsa@gmail.com
              </a>
              <div className="flex items-start gap-2 text-sm text-background/70">
                <MapPin className="h-4 w-4 mt-0.5" aria-hidden />
                <span>Universitas Surakarta, Jawa Tengah</span>
              </div>
            </div>
          </div>

          <nav className="md:col-span-2" aria-label="Navigasi footer">
            <h2 className="label text-[11px] text-background/50">NAVIGASI</h2>
            <div className="mt-4 flex flex-col gap-2.5">
              <Link href="/" className="text-sm text-background/70 hover:text-background">Beranda</Link>
              <Link href="/proker" className="text-sm text-background/70 hover:text-background">Proker</Link>
              <Link href="/struktur" className="text-sm text-background/70 hover:text-background">Struktur Pengurus</Link>
              <Link href="/tentang" className="text-sm text-background/70 hover:text-background">Tentang Kami</Link>
            </div>
          </nav>

          <div className="md:col-span-2">
            <h2 className="label text-[11px] text-background/50">PROKER</h2>
            <div className="mt-4 flex flex-col gap-2.5 text-sm text-background/70">
              <span>Web Creation</span>
              <span>SOCMED-X</span>
              <span>RE-BOOT</span>
              <span className="text-background/50">VITE (Segera)</span>
            </div>
            <Link href="/proker" className="mt-4 inline-flex items-center gap-1 label text-xs text-primary hover:text-background">
              LIHAT SEMUA <ArrowUpRight className="h-3 w-3" aria-hidden />
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-background/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/50">© {new Date().getFullYear()} HMSK UNSA — Sistem Komputer UNSA.</p>
          <p className="label text-[11px] text-background/50">UNIVERSITAS SURAKARTA</p>
        </div>
      </div>
    </footer>
  );
}
