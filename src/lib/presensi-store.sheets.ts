import { readSheetRaw, appendRow, writeSheet, isGDriveEnabled } from "./gdrive";
import { isWebhookEnabled, postToWebhook } from "./gdrive-webhook";

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

const LOKASI_HEADERS = ["id", "name", "lat", "lng", "radiusMeters"];
const KEGIATAN_HEADERS = ["id", "title", "lokasiId", "jamMulai", "jamSelesai", "isActive"];
const PRESENSI_HEADERS = ["id", "nim", "nama", "kegiatanId", "lat", "lng", "accuracy", "jarakMeter", "status", "alasan", "createdAt", "ip"];
const PRESENSI_DITOLAK_HEADERS = PRESENSI_HEADERS;
const ANGGOTA_HEADERS = ["nim", "nama", "role"];

// ponytail: sheets no transaction, duplicate checked at app layer. Cache 30s via gdrive.ts.

function parseLokasi(rows: string[][]): Lokasi[] {
  if (rows.length <= 1) return [];
  return rows.slice(1).map((r) => ({
    id: r[0] || "",
    name: r[1] || "",
    lat: Number(r[2] || 0),
    lng: Number(r[3] || 0),
    radiusMeters: Number(r[4] || 100),
  })).filter((x) => x.id);
}

function parseKegiatan(rows: string[][]): Kegiatan[] {
  if (rows.length <= 1) return [];
  return rows.slice(1).map((r) => ({
    id: r[0] || "",
    title: r[1] || "",
    lokasiId: r[2] || "",
    jamMulai: r[3] || new Date().toISOString(),
    jamSelesai: r[4] || new Date().toISOString(),
    isActive: String(r[5]).toLowerCase() === "true",
  })).filter((x) => x.id);
}

function parsePresensi(rows: string[][]): Presensi[] {
  if (rows.length <= 1) return [];
  return rows.slice(1).map((r) => ({
    id: r[0] || "",
    nim: r[1] || "",
    nama: r[2] || "",
    kegiatanId: r[3] || "",
    lat: Number(r[4] || 0),
    lng: Number(r[5] || 0),
    accuracy: Number(r[6] || 0),
    jarakMeter: Number(r[7] || 0),
    status: (r[8] as Presensi["status"]) || "HADIR",
    alasan: r[9] || undefined,
    createdAt: r[10] || new Date().toISOString(),
    ip: r[11] || undefined,
  })).filter((x) => x.id);
}

function toLokasiRow(l: Lokasi): (string|number)[] { return [l.id, l.name, l.lat, l.lng, l.radiusMeters]; }
function toKegiatanRow(k: Kegiatan): (string|number)[] { return [k.id, k.title, k.lokasiId, k.jamMulai, k.jamSelesai, String(k.isActive)]; }
function toPresensiRow(p: Presensi): (string|number)[] { return [p.id, p.nim, p.nama, p.kegiatanId, p.lat, p.lng, p.accuracy, p.jarakMeter, p.status, p.alasan || "", p.createdAt, p.ip || ""]; }

export async function getLokasi(): Promise<Lokasi[]> {
  if (!isGDriveEnabled()) throw new Error("GDrive disabled");
  const rows = await readSheetRaw("lokasi");
  return parseLokasi(rows);
}
export async function saveLokasi(data: Lokasi[]) {
  await writeSheet("lokasi", [LOKASI_HEADERS, ...data.map(toLokasiRow)]);
}
export async function getKegiatan(): Promise<Kegiatan[]> {
  if (!isGDriveEnabled()) throw new Error("GDrive disabled");
  const rows = await readSheetRaw("kegiatan");
  return parseKegiatan(rows);
}
export async function saveKegiatan(data: Kegiatan[]) {
  await writeSheet("kegiatan", [KEGIATAN_HEADERS, ...data.map(toKegiatanRow)]);
}
export async function getPresensi(): Promise<Presensi[]> {
  if (!isGDriveEnabled()) throw new Error("GDrive disabled");
  const rows = await readSheetRaw("presensi");
  // sheet stored oldest first, we return newest first like fs version
  const parsed = parsePresensi(rows);
  return parsed.reverse();
}
export async function savePresensi(data: Presensi[]) {
  // data is newest first, store oldest first
  const ordered = [...data].reverse();
  await writeSheet("presensi", [PRESENSI_HEADERS, ...ordered.map(toPresensiRow)]);
}
export async function addPresensi(row: Presensi) {
  if (isWebhookEnabled()) {
    const ok = await postToWebhook({ sheet: "presensi", action: "append", row: toPresensiRow(row) });
    if (ok) return;
  }
  await appendRow("presensi", toPresensiRow(row));
}
export async function getPresensiDitolak(): Promise<Presensi[]> {
  if (!isGDriveEnabled()) throw new Error("GDrive disabled");
  const rows = await readSheetRaw("presensi_ditolak");
  return parsePresensi(rows).reverse();
}
export async function addPresensiDitolak(row: Presensi) {
  if (isWebhookEnabled()) {
    const ok = await postToWebhook({ sheet: "presensi_ditolak", action: "append", row: toPresensiRow(row) });
    if (ok) return;
  }
  await appendRow("presensi_ditolak", toPresensiRow(row));
}
export async function getLokasiById(id: string) {
  const all = await getLokasi();
  return all.find((l) => l.id === id);
}

// anggota sheet
export async function getAnggotaSheet(): Promise<{nim:string,nama:string,role?:string}[]> {
  if (!isGDriveEnabled()) return [];
  try {
    const rows = await readSheetRaw("anggota");
    if (rows.length <= 1) return [];
    return rows.slice(1).map((r) => ({ nim: r[0]||"", nama: r[1]||"", role: r[2]||"" })).filter((x)=>x.nim);
  } catch { return []; }
}

export { LOKASI_HEADERS, KEGIATAN_HEADERS, PRESENSI_HEADERS, PRESENSI_DITOLAK_HEADERS, ANGGOTA_HEADERS };
