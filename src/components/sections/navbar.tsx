"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Home, Users, Info, ArrowUpRight, Sparkles } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const links = [
  { href: "/", label: "Beranda", icon: Home },
  { href: "/tentang", label: "Tentang", icon: Info },
  { href: "/proker", label: "Proker", icon: Sparkles },
  { href: "/struktur", label: "Struktur", icon: Users },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-slate-200/60 bg-white/75 backdrop-blur-xl supports-[backdrop-filter]:bg-white/65">
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-white ring-1 ring-slate-200 shadow-sm group-hover:ring-emerald-400/50 transition">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo/logo-main.jpg" alt="HMSK UNSA" className="h-full w-full object-cover" />
          </div>
          <div className="leading-none">
            <span className="display text-[17px] font-bold tracking-tight text-[#0f1f3c]">HMSK UNSA</span>
            <p className="mono -mt-0.5 text-[10px] tracking-widest text-slate-500">SISTEM KOMPUTER</p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13px] font-medium text-slate-600 transition hover:bg-slate-900 hover:text-white"
            >
              <link.icon className="h-3.5 w-3.5 opacity-70" />
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/proker"
            className="hidden lg:inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            Lihat Proker
          </Link>
          <a
            href="https://chat.whatsapp.com/GZzZdAeNrgCG3LYiU3ULVH"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gabung WA Grup HMSK"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#0f1f3c] px-4 py-2.5 text-xs font-bold tracking-wide text-white shadow-[0_8px_20px_-8px_rgba(15,31,60,0.6)] hover:bg-[#1a2f5a] transition"
          >
            Gabung HMSK <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white md:hidden hover:bg-slate-50">
            <Menu className="h-4 w-4" />
            <span className="sr-only">Buka menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-white">
            <div className="flex items-center gap-3 pt-2 pb-4 border-b">
              <img src="/logo/logo-main.jpg" alt="HMSK" className="h-8 w-8 rounded-lg object-cover ring-1 ring-slate-200" />
              <div>
                <p className="display font-bold text-sm text-[#0f1f3c]">HMSK UNSA</p>
                <p className="mono text-[10px] tracking-widest text-slate-500">SISTEM KOMPUTER</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 pt-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-900 hover:text-white transition"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600 group-hover:bg-white/10">
                    <link.icon className="h-4 w-4" />
                  </span>
                  {link.label}
                </Link>
              ))}
              <Separator className="my-3" />
              <a
                href="https://chat.whatsapp.com/GZzZdAeNrgCG3LYiU3ULVH"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-[#0f1f3c] px-4 py-3 text-sm font-bold text-white"
              >
                Gabung HMSK <ArrowUpRight className="h-4 w-4" />
              </a>
              <p className="mono text-center text-[11px] text-slate-400 mt-2">© HMSK UNSA 2025 • Universitas Surakarta</p>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
