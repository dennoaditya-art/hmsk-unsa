export interface Proker {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  mentor: string;
  mentorRole: string;
  status: "berjalan" | "segera" | "selesai";
  icon: string;
  color: string;
  highlights: string[];
  cta: string;
}

export const prokers: Proker[] = [
  {
    id: "web-creation",
    title: "Web Creation & Fundamental Training",
    shortTitle: "Web Creation",
    description: "Vibe coding: bangun website dengan bantuan AI — prompt yang benar, review kode, ship cepat. Dari fundamental web sampai deploy & jual ke klien nyata.",
    mentor: "Rossi Denno Aditya Arsenal",
    mentorRole: "Pembina Web Development",
    status: "berjalan",
    icon: "code",
    color: "from-primary to-indigo-600",
    highlights: ["Vibe coding + AI", "Prompt & review kode", "Ship website klien"],
    cta: "Ikut Pelatihan",
  },
  {
    id: "socmed-x",
    title: "SOCMED-X — Social Media Execution & Optimization",
    shortTitle: "SOCMED-X",
    description: "Eksekusi & optimasi sosmed end-to-end: strategi konten, copywriting, desain, ads, dan analitik untuk growth brand & UMKM.",
    mentor: "Tim HMSK",
    mentorRole: "Pembina Digital Marketing",
    status: "berjalan",
    icon: "share",
    color: "from-primary to-violet-600",
    highlights: ["Content strategy", "Meta Ads & growth", "Analytics & reporting"],
    cta: "Gabung SOCMED-X",
  },
  {
    id: "re-boot",
    title: "RE-BOOT — Repair, Optimize, & Overhaul Training",
    shortTitle: "RE-BOOT",
    description: "Pelatihan hardware hands-on: repair, optimasi performa, dan overhaul laptop/PC — bongkar, cleaning, repasta, diagnosa, sampai buka jasa.",
    mentor: "Tim HMSK",
    mentorRole: "Pembina Hardware & Service",
    status: "berjalan",
    icon: "cpu",
    color: "from-primary to-violet-600",
    highlights: ["Cleaning & repasta", "Diagnosa hardware", "Buka jasa service"],
    cta: "Daftar RE-BOOT",
  },
  {
    id: "vite",
    title: "VITE — Virtual Invitation Tech & Event",
    shortTitle: "VITE",
    description: "Bangun undangan digital & tech event: domain, hosting, deploy Next.js, RSVP online, dan manajemen tamu berbasis link.",
    mentor: "Tim HMSK",
    mentorRole: "Pembina Event Tech",
    status: "segera",
    icon: "server",
    color: "from-muted-foreground to-foreground",
    highlights: ["cPanel & domain", "Deploy Next.js", "Undangan link + RSVP"],
    cta: "Tunggu Update",
  },
];
