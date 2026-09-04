import Link from "next/link";
import { Home, SearchX, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute -top-24 -right-24 h-[380px] w-[500px] rounded-full bg-gradient-to-br from-emerald-100 to-transparent blur-3xl" />
      <div className="relative mx-auto max-w-md text-center px-6 py-10 rounded-[32px] border border-slate-200 bg-white shadow-xl">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
          <SearchX className="h-6 w-6" />
        </div>
        <h1 className="display mt-4 text-6xl font-bold tracking-tight gradient-text">404</h1>
        <h2 className="mt-2 text-xl font-bold tracking-tight text-[#0f1f3c]">Halaman Tidak Ditemukan</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">Maaf, halaman yang kamu cari tidak ada atau sudah dipindah. Balik ke beranda HMSK aja.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-2 justify-center">
          <Link href="/" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0f1f3c] px-6 py-3 text-sm font-bold text-white hover:bg-[#1a2f5a]">
            <Home className="h-4 w-4" /> Kembali ke Beranda
          </Link>
          <Link href="/proker" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
            <ArrowLeft className="h-4 w-4" /> Lihat Proker
          </Link>
        </div>
        <p className="mono mt-6 text-[11px] tracking-widest text-slate-400">ERROR • HMSK.SYS • 404</p>
      </div>
    </main>
  );
}
