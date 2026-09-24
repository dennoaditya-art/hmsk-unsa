import type { Metadata } from "next";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { MobileSticky } from "@/components/ui/mobile-sticky";
import { Bowlby_One_SC, Inter, JetBrains_Mono } from "next/font/google";

const bowlby = Bowlby_One_SC({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "HMSK UNSA | Himpunan Mahasiswa Sistem Komputer Universitas Surakarta",
    template: "%s | HMSK UNSA",
  },
  description: "Profil dan struktur pengurus Himpunan Mahasiswa Sistem Komputer Universitas Surakarta — lab berkarya web, socmed, hardware & event, 4 proker aktif dibina mentor.",
  metadataBase: new URL("https://hmsk-unsa.ac.id"),
  openGraph: {
    title: "HMSK UNSA | Lab Berkarya Sistem Komputer UNSA",
    description: "Bukan sekadar himpunan — lab berkarya Web Creation, SOCMED-X, RE-BOOT, VITE. Dibina mentor, output bisa dijual.",
    url: "https://hmsk-unsa.ac.id",
    siteName: "HMSK UNSA",
    locale: "id_ID",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "HMSK UNSA", description: "Lab berkarya Sistem Komputer UNSA" },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${bowlby.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="antialiased pb-[96px] sm:pb-0">
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:border focus:border-black focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold"
        >
          Lompat ke konten
        </a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <TooltipProvider>
            <ScrollProgress />
            <Navbar />
            <div id="konten">{children}</div>
            <Footer />
            <MobileSticky />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}