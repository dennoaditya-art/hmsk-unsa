"use client";
import Link from "next/link";
import { btnInk, btnEmber } from "@/lib/slush";

export function MobileSticky() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background px-3 pt-3 pb-[calc(10px+env(safe-area-inset-bottom))] sm:hidden">
      <div className="flex gap-2.5">
        <Link href="/proker" className={`${btnInk} flex-1 min-h-12`}>
          Lihat Proker
        </Link>
        <a href="https://chat.whatsapp.com/GZzZdAeNrgCG3LYiU3ULVH" target="_blank" rel="noopener noreferrer" className={`${btnEmber} flex-1 min-h-12`}>
          Gabung WA
        </a>
      </div>
    </div>
  );
}
