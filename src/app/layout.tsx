import type { Metadata } from "next";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { MobileSticky } from "@/components/ui/mobile-sticky";
import { Geist, Oswald, JetBrains_Mono } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-geist",
});
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "HMSK UNSA | Himpunan Mahasiswa Sistem Komputer Universitas Surakarta",
  description: "Profil dan struktur pengurus Himpunan Mahasiswa Sistem Komputer Universitas Surakarta",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${geist.variable} ${oswald.variable} ${mono.variable}`}>
      <body className="antialiased pb-[72px] sm:pb-0">
        <TooltipProvider>
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
          <MobileSticky />
        </TooltipProvider>
      </body>
    </html>
  );
}