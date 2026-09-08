export interface Leader {
  name: string;
  fullName?: string;
  nim?: string;
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
    name: "Rossi Denno Aditya Arsenal",
    fullName: "Rossi Denno Aditya Arsenal",
    nim: "202023009",
    role: "Ketua HMSK",
    shortRole: "Ketua",
    description: "Memimpin seluruh kegiatan organisasi, menjadi perwakilan utama HMSK di forum kampus & eksternal. Pembina Web Creation & Fundamental Training.",
    color: "from-primary via-indigo-600 to-primary",
    accent: "primary",
    proker: "Web Creation",
    image: "/ketua.jpg",
  },
  {
    name: "Sandha Anugrah Panorama",
    fullName: "Sandha Anugrah Panorama",
    nim: "202323008",
    role: "Sekretaris",
    shortRole: "Sekretaris",
    description: "Mengelola administrasi, notulensi rapat, dan koordinasi komunikasi internal antar pengurus & divisi.",
    color: "from-primary via-indigo-500 to-primary",
    accent: "primary",
    proker: "Administrasi",
  },
  {
    name: "'Aisyah Lu'lu'ul Rohmani",
    fullName: "'Aisyah Lu'lu'ul Rohmani",
    nim: "202323001",
    role: "Bendahara",
    shortRole: "Bendahara",
    description: "Mengelola keuangan, transparansi kas, dan pelaporan anggaran untuk seluruh proker HMSK.",
    color: "from-primary via-indigo-600 to-primary",
    accent: "primary",
    proker: "Keuangan",
  },
  {
    name: "Een Vandicto Satya Ady",
    fullName: "Een Vandicto Satya Ady",
    nim: "202423004",
    role: "Perhubungan",
    shortRole: "Perhubungan",
    description: "Menjalin kerja sama eksternal, publikasi & branding HMSK UNSA, serta pembina RE-BOOT — repair, optimize & overhaul training.",
    color: "from-primary via-violet-600 to-primary",
    accent: "primary",
    proker: "RE-BOOT",
  },
  {
    name: "Petrus Guiseppie Muji Pierantoni Foel",
    fullName: "Petrus Guiseppie Muji Pierantoni Foel",
    nim: "202323007",
    role: "Divisi Rumah Tangga",
    shortRole: "Rumah Tangga",
    description: "Mengelola inventaris, logistik, dan kebutuhan rumah tangga HMSK — kebersihan, konsumsi, dan perlengkapan kegiatan.",
    color: "from-muted-foreground via-foreground to-muted-foreground",
    accent: "muted",
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
