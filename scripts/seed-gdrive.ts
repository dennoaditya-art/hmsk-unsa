/**
 * Seed GDrive Sheets untuk HMSK Presensi dari 0
 * Jalankan: npx tsx scripts/seed-gdrive.ts
 * atau: npm run seed:gdrive
 * 
 * Butuh env:
 *  GOOGLE_SHEET_ID = spreadsheet id (dari URL)
 *  GOOGLE_SERVICE_ACCOUNT_JSON = full JSON service account (stringify atau base64)
 * 
 * Jika belum punya spreadsheet, buat baru di https://sheets.google.com,
 * share Editor ke service account email, copy ID ke env.
 */
import fs from "fs";
import path from "path";
// load .env.local for tsx standalone
try { process.loadEnvFile(".env.local"); } catch {}
try { process.loadEnvFile(".env"); } catch {}
import { isGDriveEnabled, getSheetId, getSheets, ensureSheetExists, readSheetRaw, writeSheet, appendRow } from "../src/lib/gdrive";
import { LOKASI_HEADERS, KEGIATAN_HEADERS, PRESENSI_HEADERS, PRESENSI_DITOLAK_HEADERS, ANGGOTA_HEADERS } from "../src/lib/presensi-store.sheets";
import { anggota as anggotaHardcoded } from "../src/data/anggota";

async function main() {
  if (!isGDriveEnabled()) {
    console.error("GDrive belum dikonfigurasi. Set GOOGLE_SHEET_ID + GOOGLE_SERVICE_ACCOUNT_JSON di .env.local");
    console.error("Contoh: GOOGLE_SHEET_ID=1AbC... GOOGLE_SERVICE_ACCOUNT_JSON='{\"client_email\":\"...\",\"private_key\":\"...\"}'");
    process.exit(1);
  }
  console.log("[seed] Spreadsheet:", getSheetId());

  // 1. Pastikan 5 sheet + header
  console.log("[seed] ensure sheets...");
  await ensureSheetExists("lokasi", LOKASI_HEADERS);
  await ensureSheetExists("kegiatan", KEGIATAN_HEADERS);
  await ensureSheetExists("presensi", PRESENSI_HEADERS);
  await ensureSheetExists("presensi_ditolak", PRESENSI_DITOLAK_HEADERS);
  await ensureSheetExists("anggota", ANGGOTA_HEADERS);

  // 2. Seed lokasi dari data/lokasi.json atau default
  const lokasiPath = path.join(process.cwd(), "data", "lokasi.json");
  let lokasiData: any[] = [{ id: "unsa-pusat", name: "Kampus UNSA Surakarta", lat: -7.56555, lng: 110.8645, radiusMeters: 100 }];
  try {
    if (fs.existsSync(lokasiPath)) lokasiData = JSON.parse(fs.readFileSync(lokasiPath, "utf-8"));
  } catch {}
  const lokasiRows = await readSheetRaw("lokasi");
  if (lokasiRows.length <= 1) {
    console.log("[seed] seeding lokasi:", lokasiData.length, "rows");
    await writeSheet("lokasi", [LOKASI_HEADERS, ...lokasiData.map((l: any) => [l.id, l.name, l.lat, l.lng, l.radiusMeters])]);
  } else {
    console.log("[seed] lokasi already has", lokasiRows.length - 1, "rows, skip");
  }

  // 3. Seed kegiatan — buat kegiatan aktif hari ini jika kosong/expired
  const kegiatanRows = await readSheetRaw("kegiatan");
  if (kegiatanRows.length <= 1) {
    const today = new Date();
    today.setHours(8, 0, 0, 0);
    const selesai = new Date(today);
    selesai.setHours(17, 0, 0, 0);
    const seed = [{
      id: "kgt-001",
      title: "Rapat Rutin HMSK",
      lokasiId: lokasiData[0]?.id || "unsa-pusat",
      jamMulai: today.toISOString(),
      jamSelesai: selesai.toISOString(),
      isActive: true,
    }];
    console.log("[seed] seeding kegiatan hari ini", seed[0].jamMulai, "→", seed[0].jamSelesai);
    await writeSheet("kegiatan", [KEGIATAN_HEADERS, ...seed.map((k) => [k.id, k.title, k.lokasiId, k.jamMulai, k.jamSelesai, String(k.isActive)])]);
  } else {
    console.log("[seed] kegiatan already has", kegiatanRows.length - 1, "rows, skip");
    // optional: add today's kegiatan if expired
    const parsed = kegiatanRows.slice(1).map((r) => ({ id: r[0], jamSelesai: r[4] }));
    const hasActive = parsed.some((k) => {
      try { return new Date(k.jamSelesai).getTime() > Date.now(); } catch { return false; }
    });
    if (!hasActive) {
      console.log("[seed] semua kegiatan expired, menambah kegiatan hari ini...");
      const today = new Date();
      today.setHours(8, 0, 0, 0);
      const selesai = new Date(today);
      selesai.setHours(17, 0, 0, 0);
      await appendRow("kegiatan", [`kgt-${Date.now()}`, "Rapat Rutin HMSK", lokasiData[0]?.id || "unsa-pusat", today.toISOString(), selesai.toISOString(), "true"]);
    }
  }

  // 4. Seed anggota dari hardcoded + data
  const anggotaRows = await readSheetRaw("anggota");
  if (anggotaRows.length <= 1) {
    console.log("[seed] seeding anggota:", anggotaHardcoded.length, "rows");
    await writeSheet("anggota", [ANGGOTA_HEADERS, ...anggotaHardcoded.map((a) => [a.nim, a.nama, a.role || ""])]);
  } else {
    console.log("[seed] anggota already has", anggotaRows.length - 1, "rows, skip");
  }

  // 5. Presensi kosong — cek saja
  const presensiRows = await readSheetRaw("presensi");
  console.log("[seed] presensi rows:", Math.max(0, presensiRows.length - 1));
  const ditolakRows = await readSheetRaw("presensi_ditolak");
  console.log("[seed] presensi_ditolak rows:", Math.max(0, ditolakRows.length - 1));

  // 6. Verifikasi
  const sheets = getSheets()!;
  const meta = await sheets.spreadsheets.get({ spreadsheetId: getSheetId() });
  console.log("[seed] sheets:", meta.data.sheets?.map((s) => s.properties?.title).join(", "));
  console.log("[seed] DONE. Buka https://docs.google.com/spreadsheets/d/" + getSheetId());
}

main().catch((e) => {
  console.error("[seed] failed:", e);
  process.exit(1);
});
