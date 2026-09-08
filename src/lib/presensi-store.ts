import fs from "fs";
import path from "path";

export type Lokasi = { id: string; name: string; lat: number; lng: number; radiusMeters: number };
export type Kegiatan = { id: string; title: string; lokasiId: string; jamMulai: string; jamSelesai: string; isActive: boolean };
export type Presensi = {
  id: string;
  nim: string;
  nama: string;
  kegiatanId: string;
  lat: number;
  lng: number;
  accuracy: number;
  jarakMeter: number;
  status: "HADIR" | "TERLAMBAT" | "DITOLAK";
  alasan?: string;
  createdAt: string;
  ip?: string;
};

// ponytail: file-store ephemereal (Vercel FS hilang saat redeploy), upgrade path -> Turso/libsql + Prisma saat >500 rows/bulan
const dataDir = path.join(process.cwd(), "data");

function ensureFile(file: string, defaultData: unknown) {
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  const p = path.join(dataDir, file);
  if (!fs.existsSync(p)) fs.writeFileSync(p, JSON.stringify(defaultData, null, 2));
  return p;
}

const LOKASI_DEFAULT: Lokasi[] = [
  { id: "unsa-pusat", name: "Kampus UNSA Surakarta", lat: -7.56555, lng: 110.8645, radiusMeters: 100 },
];

const KEGIATAN_DEFAULT: Kegiatan[] = [
  {
    id: "kgt-001",
    title: "Rapat Rutin HMSK",
    lokasiId: "unsa-pusat",
    jamMulai: new Date(new Date().setHours(8, 0, 0, 0)).toISOString(),
    jamSelesai: new Date(new Date().setHours(17, 0, 0, 0)).toISOString(),
    isActive: true,
  },
];

export function getLokasi(): Lokasi[] {
  const p = ensureFile("lokasi.json", LOKASI_DEFAULT);
  return JSON.parse(fs.readFileSync(p, "utf-8"));
}
export function saveLokasi(data: Lokasi[]) {
  const p = ensureFile("lokasi.json", LOKASI_DEFAULT);
  fs.writeFileSync(p, JSON.stringify(data, null, 2));
}
export function getKegiatan(): Kegiatan[] {
  const p = ensureFile("kegiatan.json", KEGIATAN_DEFAULT);
  return JSON.parse(fs.readFileSync(p, "utf-8"));
}
export function saveKegiatan(data: Kegiatan[]) {
  const p = ensureFile("kegiatan.json", KEGIATAN_DEFAULT);
  fs.writeFileSync(p, JSON.stringify(data, null, 2));
}
export function getPresensi(): Presensi[] {
  const p = ensureFile("presensi.json", []);
  return JSON.parse(fs.readFileSync(p, "utf-8"));
}
export function savePresensi(data: Presensi[]) {
  const p = ensureFile("presensi.json", []);
  fs.writeFileSync(p, JSON.stringify(data, null, 2));
}
export function addPresensi(row: Presensi) {
  const all = getPresensi();
  all.unshift(row);
  savePresensi(all);
}

export function getLokasiById(id: string) {
  return getLokasi().find((l) => l.id === id);
}
