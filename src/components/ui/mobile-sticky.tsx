"use client";
import Link from "next/link";

export function MobileSticky() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/85 px-3 pt-3 pb-[calc(10px+env(safe-area-inset-bottom))] sm:hidden shadow-[0_-8px_24px_rgba(0,0,0,0.06)]">
      <div className="flex gap-2.5">
        <Link href="/proker" className="flex-1 inline-flex items-center justify-center rounded-full border border-border bg-card px-4 py-3.5 text-xs font-bold text-foreground min-h-12 active:scale-[0.98] transition">
          Lihat Proker
        </Link>
        <a href="https://chat.whatsapp.com/GZzZdAeNrgCG3LYiU3ULVH" target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center rounded-full bg-primary px-4 py-3.5 text-xs font-bold text-primary-foreground shadow-[0_4px_16px_hsl(var(--primary)/0.25)] min-h-12 active:scale-[0.98] transition">
          Gabung WA
        </a>
      </div>
    </div>
  );
}
