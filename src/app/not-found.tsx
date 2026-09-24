import Link from "next/link";
import { Home, SearchX, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center surface-mist relative overflow-hidden">
      <div className="relative mx-auto max-w-md text-center px-6 py-10 rounded-[20px] border border-border bg-card">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-border bg-foreground text-background">
          <SearchX className="h-6 w-6" aria-hidden />
        </div>
        <h1 className="display mt-4 text-6xl text-primary-text">404</h1>
        <h2 className="mt-2 text-xl font-bold tracking-tight text-foreground">Halaman Tidak Ditemukan</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">Maaf, halaman yang kamu cari tidak ada atau sudah dipindah. Balik ke beranda HMSK aja.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-2 justify-center">
          <Link href="/" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-foreground px-6 py-3 text-sm font-bold text-background hover:opacity-90">
            <Home className="h-4 w-4" aria-hidden /> Kembali ke Beranda
          </Link>
          <Link href="/proker" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-bold text-foreground hover:bg-muted">
            <ArrowLeft className="h-4 w-4" aria-hidden /> Lihat Proker
          </Link>
        </div>
        <p className="label mt-6 text-[11px] text-muted-foreground">ERROR • HMSK • 404</p>
      </div>
    </main>
  );
}
