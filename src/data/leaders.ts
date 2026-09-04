export interface Leader {
  name: string;
  role: string;
  shortRole: string;
  description: string;
  color: string;
  accent: string;
  proker?: string;
  image?: string;
}

export const leaders: Leader[] = [
  {
    name: "Denno",
    role: "Ketua Umum",
    shortRole: "Ketua",
    description: "Memimpin seluruh kegiatan organisasi, menjadi perwakilan utama HMSK di forum kampus & eksternal. Pembina WebCraft Studio.",
    color: "from-slate-900 via-slate-800 to-emerald-700",
    accent: "emerald",
    proker: "WebCraft Studio",
    image: "/ketua.jpg",
  },
  {
    name: "Sandha",
    role: "Sekretaris",
    shortRole: "Sekretaris",
    description: "Mengelola administrasi, notulensi rapat, dan koordinasi komunikasi internal antar pengurus & divisi.",
    color: "from-blue-600 via-blue-700 to-cyan-600",
    accent: "blue",
    proker: "Administrasi",
  },
  {
    name: "Aisyah",
    role: "Bendahara",
    shortRole: "Bendahara",
    description: "Mengelola keuangan, transparansi kas, dan pelaporan anggaran untuk seluruh proker HMSK.",
    color: "from-emerald-600 via-emerald-700 to-teal-700",
    accent: "emerald",
    proker: "Keuangan",
  },
  {
    name: "Dicto",
    role: "Perhubungan",
    shortRole: "Perhubungan",
    description: "Menjalin kerja sama eksternal, publikasi & branding HMSK UNSA, serta pembina LaptopCare Lab — pelatihan hardware & service.",
    color: "from-violet-600 via-indigo-600 to-violet-800",
    accent: "violet",
    proker: "LaptopCare Lab",
  },
  {
    name: "Petrus",
    role: "Divisi Rumah Tangga",
    shortRole: "Rumah Tangga",
    description: "Mengelola inventaris, logistik, dan kebutuhan rumah tangga HMSK — kebersihan, konsumsi, dan perlengkapan kegiatan.",
    color: "from-slate-700 via-slate-800 to-slate-900",
    accent: "slate",
    proker: "Rumah Tangga",
  },
];

export const orgProfile = {
  name: "HMSK UNSA",
  fullName: "Himpunan Mahasiswa Sistem Komputer",
  university: "Universitas Surakarta",
  mission: [
    "Mendorong peningkatan kompetensi teknis dan profesional anggota secara berkelanjutan melalui pengembangan pengetahuan, keterampilan, serta pengalaman praktis yang relevan dengan kebutuhan dunia industri.",
    "Menumbuhkan jiwa kewirausahaan dan kemandirian organisasi melalui pengembangan serta implementasi produk dan layanan di bidang teknologi yang inovatif, bernilai guna, dan memiliki potensi ekonomi.",
    "Membimbing anggota dalam menghasilkan karya nyata, inovatif, dan berkualitas sebagai bentuk pengembangan portofolio profesional serta bekal dalam menghadapi dunia kerja dan pengembangan karier.",
    "Membangun budaya organisasi yang aktif, solutif, adaptif, dan berorientasi pada implementasi, serta memperkuat kolaborasi dan solidaritas antaranggota dalam mencapai tujuan bersama.",
  ],
  vision: "Menjadi himpunan mahasiswa yang unggul, adaptif, dan mandiri dalam melahirkan talenta digital serta wirausahawan berdaya saing di bidang teknologi perangkat lunak dan perangkat keras.",
};
