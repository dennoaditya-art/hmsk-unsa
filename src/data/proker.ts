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
    id: "webcraft",
    title: "Pelatihan Membuat & Menjual Website",
    shortTitle: "WebCraft Studio",
    description: "Belajar end-to-end: dari desain, coding, hingga jualan website ke UMKM & klien nyata. Praktek langsung dengan projek klien.",
    mentor: "Mas Denno",
    mentorRole: "Pembina Web Development",
    status: "berjalan",
    icon: "code",
    color: "from-primary to-indigo-600",
    highlights: ["HTML/CSS/Next.js", "Jualan ke klien", "Portfolio nyata"],
    cta: "Ikut Pelatihan",
  },
  {
    id: "laptopcare",
    title: "Bisnis Service & Cleaning Laptop",
    shortTitle: "LaptopCare Lab",
    description: "Bangun bisnis jasa: cleaning, repasta, diagnosa hardware. Pelatihan hardware hands-on sampai bisa buka usaha sendiri.",
    mentor: "Dicto",
    mentorRole: "Pembina Hardware & Service",
    status: "berjalan",
    icon: "cpu",
    color: "from-primary to-violet-600",
    highlights: ["Cleaning & repasta", "Diagnosa hardware", "Model bisnis jasa"],
    cta: "Daftar Lab",
  },
  {
    id: "hosting-undangan",
    title: "Hosting & Undangan Online",
    shortTitle: "Host & Invite",
    description: "Materi lanjutan: deploy hosting, domain, dan pembuatan undangan digital berbasis link — akan dibahas di pertemuan selanjutnya.",
    mentor: "Tim HMSK",
    mentorRole: "Segera diumumkan",
    status: "segera",
    icon: "server",
    color: "from-muted-foreground to-foreground",
    highlights: ["cPanel & domain", "Deploy Next.js", "Undangan link online"],
    cta: "Tunggu Update",
  },
];
