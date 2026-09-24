"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Home, Users, Info, ArrowUpRight, Sparkles, MapPin } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { btnEmber } from "@/lib/slush";

const links = [
  { href: "/", label: "Beranda", icon: Home },
  { href: "/rekrutmen", label: "Rekrutmen", icon: Sparkles },
  { href: "/presensi", label: "Presensi", icon: MapPin },
  { href: "/tentang", label: "Tentang", icon: Info },
  { href: "/proker", label: "Proker", icon: Sparkles },
  { href: "/struktur", label: "Struktur", icon: Users },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background pt-[env(safe-area-inset-top)]">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-[10px] border border-border bg-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo/logo-main.jpg" alt="HMSK UNSA" className="h-full w-full object-cover" />
          </span>
          <span className="leading-none">
            <span className="display block text-[15px] tracking-tight text-foreground">HMSK UNSA</span>
            <span className="label block text-[9px] text-muted-foreground">SISTEM KOMPUTER</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13px] font-semibold text-foreground transition hover:bg-foreground hover:text-background"
            >
              <link.icon className="h-3.5 w-3.5" aria-hidden />
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <a
            href="https://chat.whatsapp.com/GZzZdAeNrgCG3LYiU3ULVH"
            target="_blank"
            rel="noopener noreferrer"
            className={btnEmber}
          >
            Gabung HMSK <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card hover:bg-muted active:scale-95 transition" aria-label="Buka menu">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Buka menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-[340px] bg-background overflow-y-auto border-l border-border">
              <div className="flex items-center gap-3 pt-2 pb-4 border-b border-border">
                <img src="/logo/logo-main.jpg" alt="HMSK" className="h-9 w-9 rounded-[10px] object-cover border border-border" />
                <div>
                  <p className="display text-sm text-foreground">HMSK UNSA</p>
                  <p className="label text-[9px] text-muted-foreground">SISTEM KOMPUTER</p>
                </div>
              </div>
              <div className="flex flex-col gap-1 pt-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-3 py-3.5 text-sm font-semibold text-foreground hover:bg-foreground hover:text-background transition min-h-11"
                  >
                    <link.icon className="h-4 w-4" aria-hidden />
                    {link.label}
                  </Link>
                ))}
                <Separator className="my-3 bg-border" />
                <a
                  href="https://chat.whatsapp.com/GZzZdAeNrgCG3LYiU3ULVH"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className={`${btnEmber} w-full`}
                >
                  Gabung HMSK <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
