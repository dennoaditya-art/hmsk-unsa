import fs from "fs";
import path from "path";
import { isGDriveEnabled } from "./gdrive";
import { isWebhookEnabled } from "./gdrive-webhook";

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

// ponytail: GDrive Sheets as primary DB (persist), fs fallback for dev/offline. Sheets cache 30s.
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

// ---- fs impl (dev fallback) ----
function getLokasiFs(): Lokasi[] {
  const p = ensureFile("lokasi.json", LOKASI_DEFAULT);
  return JSON.parse(fs.readFileSync(p, "utf-8"));
}
function saveLokasiFs(data: Lokasi[]) {
  const p = ensureFile("lokasi.json", LOKASI_DEFAULT);
  fs.writeFileSync(p, JSON.stringify(data, null, 2));
}
function getKegiatanFs(): Kegiatan[] {
  const p = ensureFile("kegiatan.json", KEGIATAN_DEFAULT);
  return JSON.parse(fs.readFileSync(p, "utf-8"));
}
function saveKegiatanFs(data: Kegiatan[]) {
  const p = ensureFile("kegiatan.json", KEGIATAN_DEFAULT);
  fs.writeFileSync(p, JSON.stringify(data, null, 2));
}
function getPresensiFs(): Presensi[] {
  const p = ensureFile("presensi.json", []);
  return JSON.parse(fs.readFileSync(p, "utf-8"));
}
function savePresensiFs(data: Presensi[]) {
  const p = ensureFile("presensi.json", []);
  fs.writeFileSync(p, JSON.stringify(data, null, 2));
}
function addPresensiFs(row: Presensi) {
  const all = getPresensiFs();
  all.unshift(row);
  savePresensiFs(all);
}
function getLokasiByIdFs(id: string) {
  return getLokasiFs().find((l) => l.id === id);
}

// ---- unified async API (works with Sheets or fs) ----
export async function getLokasi(): Promise<Lokasi[]> {
  if (isGDriveEnabled()) {
    const m = await import("./presensi-store.sheets");
    return m.getLokasi();
  }
  return getLokasiFs();
}
export async function saveLokasi(data: Lokasi[]) {
  if (isGDriveEnabled()) {
    const m = await import("./presensi-store.sheets");
    return m.saveLokasi(data);
  }
  return saveLokasiFs(data);
}
export async function getKegiatan(): Promise<Kegiatan[]> {
  if (isGDriveEnabled()) {
    const m = await import("./presensi-store.sheets");
    return m.getKegiatan();
  }
  return getKegiatanFs();
}
export async function saveKegiatan(data: Kegiatan[]) {
  if (isGDriveEnabled()) {
    const m = await import("./presensi-store.sheets");
    return m.saveKegiatan(data);
  }
  return saveKegiatanFs(data);
}
export async function getPresensi(): Promise<Presensi[]> {
  if (isGDriveEnabled()) {
    const m = await import("./presensi-store.sheets");
    return m.getPresensi();
  }
  return getPresensiFs();
}
export async function savePresensi(data: Presensi[]) {
  if (isGDriveEnabled()) {
    const m = await import("./presensi-store.sheets");
    return m.savePresensi(data);
  }
  return savePresensiFs(data);
}
export async function addPresensi(row: Presensi) {
  if (isGDriveEnabled() || isWebhookEnabled()) {
    const m = await import("./presensi-store.sheets");
    return m.addPresensi(row);
  }
  return addPresensiFs(row);
}
export async function getLokasiById(id: string) {
  if (isGDriveEnabled()) {
    const m = await import("./presensi-store.sheets");
    return m.getLokasiById(id);
  }
  return getLokasiByIdFs(id);
}
export async function addPresensiDitolak(row: Presensi) {
  if (isGDriveEnabled() || isWebhookEnabled()) {
    const m = await import("./presensi-store.sheets");
    return m.addPresensiDitolak(row);
  }
  // fs fallback: append to data/presensi-ditolak.json
  const p = path.join(dataDir, "presensi-ditolak.json");
  let arr: Presensi[] = [];
  try { if (fs.existsSync(p)) arr = JSON.parse(fs.readFileSync(p, "utf-8")); } catch {}
  arr.unshift(row);
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  fs.writeFileSync(p, JSON.stringify(arr, null, 2));
}
export async function getPresensiDitolak(): Promise<Presensi[]> {
  if (isGDriveEnabled()) {
    const m = await import("./presensi-store.sheets");
    return m.getPresensiDitolak();
  }
  const p = path.join(dataDir, "presensi-ditolak.json");
  try { if (fs.existsSync(p)) return JSON.parse(fs.readFileSync(p, "utf-8")); } catch {}
  return [];
}

// sync aliases for backward compat (if someone still calls without await)
export { LOKASI_DEFAULT, KEGIATAN_DEFAULT };
