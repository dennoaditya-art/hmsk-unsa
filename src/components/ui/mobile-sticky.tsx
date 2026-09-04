"use client";
import Link from "next/link";

export function MobileSticky() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/85 px-3 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] sm:hidden">
      <div className="flex gap-2">
        <Link href="/proker" className="flex-1 inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-3 text-xs font-bold text-slate-700 min-h-11">
          Lihat Proker
        </Link>
        <a href="https://chat.whatsapp.com/GZzZdAeNrgCG3LYiU3ULVH" target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center rounded-full bg-[#0f1f3c] px-4 py-3 text-xs font-bold text-white min-h-11">
          Gabung WA
        </a>
      </div>
    </div>
  );
}
