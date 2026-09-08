// ponytail: allowlist 5 leaders HMSK - B strict (NIM+nama must match) - siap tes 5 leaders
// Format NIM 9 digit, nama min 3 huruf, case-insensitive match
// Tambah anggota baru tinggal push 1 baris {nim, nama} di sini

export interface Anggota { nim: string; nama: string; role?: string }

export const anggota: Anggota[] = [
  { nim: "202023009", nama: "Rossi Denno Aditya Arsenal", role: "Ketua HMSK" },
  { nim: "202323008", nama: "Sandha Anugrah Panorama", role: "Sekretaris" },
  { nim: "202323001", nama: "Aisyah Lu'lu'ul Rohmani", role: "Bendahara" },
  { nim: "202423004", nama: "Een Vandicto Satya Ady", role: "Perhubungan" },
  { nim: "202323007", nama: "Petrus Guiseppie Muji Pierantoni Foel", role: "Rumah Tangga" },
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
