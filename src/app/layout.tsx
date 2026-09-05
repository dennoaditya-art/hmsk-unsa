import type { Metadata } from "next";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ui/theme-provider";
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
  title: {
    default: "HMSK UNSA | Himpunan Mahasiswa Sistem Komputer Universitas Surakarta",
    template: "%s | HMSK UNSA",
  },
  description: "Profil dan struktur pengurus Himpunan Mahasiswa Sistem Komputer Universitas Surakarta — lab berkarya web & hardware, 3 proker aktif dibina mentor.",
  metadataBase: new URL("https://hmsk-unsa.ac.id"),
  openGraph: {
    title: "HMSK UNSA | Lab Berkarya Sistem Komputer UNSA",
    description: "Bukan sekadar himpunan — lab berkarya WebCraft, LaptopCare, Hosting. Dibina mentor, output bisa dijual.",
    url: "https://hmsk-unsa.ac.id",
    siteName: "HMSK UNSA",
    locale: "id_ID",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "HMSK UNSA", description: "Lab berkarya Sistem Komputer UNSA" },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${geist.variable} ${oswald.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="antialiased pb-[76px] sm:pb-0">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <TooltipProvider>
            <ScrollProgress />
            <Navbar />
            {children}
            <Footer />
            <MobileSticky />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}