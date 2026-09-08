"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Home, Users, Info, ArrowUpRight, Sparkles, MapPin } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const links = [
  { href: "/", label: "Beranda", icon: Home },
  { href: "/presensi", label: "Presensi", icon: MapPin },
  { href: "/tentang", label: "Tentang", icon: Info },
  { href: "/proker", label: "Proker", icon: Sparkles },
  { href: "/struktur", label: "Struktur", icon: Users },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70 pt-[env(safe-area-inset-top)]">
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-card ring-1 ring-border shadow-sm group-hover:ring-primary/30 transition">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo/logo-main.jpg" alt="HMSK UNSA" className="h-full w-full object-cover" />
          </div>
          <div className="leading-none">
            <span className="display text-[17px] font-bold tracking-tight text-foreground">HMSK UNSA</span>
            <p className="mono -mt-0.5 text-[10px] tracking-widest text-muted-foreground">SISTEM KOMPUTER</p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13px] font-medium text-muted-foreground transition hover:bg-primary hover:text-primary-foreground"
            >
              <link.icon className="h-3.5 w-3.5 opacity-70" />
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/proker"
            className="hidden lg:inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground hover:bg-accent transition"
          >
            Lihat Proker
          </Link>
          <a
            href="https://chat.whatsapp.com/GZzZdAeNrgCG3LYiU3ULVH"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gabung WA Grup HMSK"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-xs font-bold tracking-wide text-primary-foreground shadow-[0_8px_20px_-8px_rgba(0,0,0,0.18)] hover:bg-primary/90 transition"
          >
            Gabung HMSK <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card md:hidden hover:bg-accent active:scale-95 transition" aria-label="Buka menu">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Buka menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-[88vw] max-w-[320px] sm:w-[340px] bg-card overflow-y-auto">
            <div className="flex items-center gap-3 pt-2 pb-4 border-b border-border">
              <img src="/logo/logo-main.jpg" alt="HMSK" className="h-8 w-8 rounded-lg object-cover ring-1 ring-border" />
              <div>
                <p className="display font-bold text-sm text-foreground">HMSK UNSA</p>
                <p className="mono text-[10px] tracking-widest text-muted-foreground">SISTEM KOMPUTER</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 pt-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-3.5 text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition min-h-11"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-card border border-border text-muted-foreground shrink-0">
                    <link.icon className="h-4 w-4" />
                  </span>
                  {link.label}
                </Link>
              ))}
              <Separator className="my-3 bg-border" />
              <a
                href="https://chat.whatsapp.com/GZzZdAeNrgCG3LYiU3ULVH"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3.5 text-sm font-bold text-primary-foreground min-h-11 hover:bg-primary/90"
              >
                Gabung HMSK <ArrowUpRight className="h-4 w-4" />
              </a>
              <p className="mono text-center text-[11px] text-muted-foreground mt-2">© HMSK UNSA 2025 • Universitas Surakarta</p>
            </div>
          </SheetContent>
        </Sheet>
        </div>
      </nav>
    </header>
  );
}
