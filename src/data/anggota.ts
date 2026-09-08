// ponytail: allowlist 10 identitas asli HMSK - B strict (NIM+nama must match)
// 5 dari src/data/leaders.ts + 5 placeholder (ganti dengan NIM+nama asli anggota HMSK)
// Format NIM 9 digit, nama min 3 huruf, case-insensitive match

export interface Anggota { nim: string; nama: string; role?: string }

export const anggota: Anggota[] = [
  { nim: "202023009", nama: "Rossi Denno Aditya Arsenal", role: "Ketua HMSK" },
  { nim: "202323008", nama: "Sandha Anugrah Panorama", role: "Sekretaris" },
  { nim: "202323001", nama: "Aisyah Lu'lu'ul Rohmani", role: "Bendahara" },
  { nim: "202423004", nama: "Een Vandicto Satya Ady", role: "Perhubungan" },
  { nim: "202323007", nama: "Petrus Guiseppie Muji Pierantoni Foel", role: "Rumah Tangga" },
  // TODO: ganti 5 placeholder di bawah dengan NIM+nama asli anggota HMSK (hubungi sekretaris)
  { nim: "202423005", nama: "Anggota HMSK 06", role: "Anggota" },
  { nim: "202423006", nama: "Anggota HMSK 07", role: "Anggota" },
  { nim: "202423007", nama: "Anggota HMSK 08", role: "Anggota" },
  { nim: "202423008", nama: "Anggota HMSK 09", role: "Anggota" },
  { nim: "202423009", nama: "Anggota HMSK 10", role: "Anggota" },
];

export function findAnggota(nim: string) {
  return anggota.find((a) => a.nim === nim.trim());
}

export function isValidAnggota(nim: string, nama: string) {
  const a = findAnggota(nim);
  if (!a) return false;
  return a.nama.trim().toLowerCase() === nama.trim().toLowerCase();
}

// helper untuk pesan error yang tidak bocorkan daftar
export function getAnggotaNames() {
  return anggota.map((a) => a.nama);
}
