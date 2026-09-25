/**
 * Kelola password anggota presensi.
 *
 * Pakai:
 *   npx tsx scripts/set-password.ts                      # set password acak utk semua anggota (tampil sekali)
 *   npx tsx scripts/set-password.ts 202023009            # reset 1 NIM (password acak)
 *   npx tsx scripts/set-password.ts 202023009 rahasia123 # set password tertentu
 */
import fs from "fs";
import path from "path";
try { process.loadEnvFile(".env.local"); } catch {}
try { process.loadEnvFile(".env"); } catch {}
import { getAnggota, saveAnggota, type AnggotaRow } from "../src/lib/presensi-store";
import { anggota as hardcoded } from "../src/data/anggota";
import { hashPassword } from "../src/lib/password";
import { randomBytes } from "node:crypto";

const DATA_DIR = path.join(process.cwd(), "data");
const CHARS = "abcdefghijkmnpqrstuvwxyz23456789";

function genPassword(len = 10) {
  const bytes = randomBytes(len);
  return Array.from(bytes, (b) => CHARS[b % CHARS.length]).join("");
}

function writeFsFallback(rows: AnggotaRow[]) {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(path.join(DATA_DIR, "anggota.json"), JSON.stringify(rows, null, 2));
}

async function main() {
  const [nimArg, pwArg] = process.argv.slice(2);
  const useSheet = !!(process.env.GOOGLE_SHEET_ID && process.env.GOOGLE_SERVICE_ACCOUNT_JSON);

  let stored: AnggotaRow[] = [];
  try {
    stored = await getAnggota();
  } catch (e) {
    console.error("gagal baca store, pakai fs fallback:", e instanceof Error ? e.message : e);
  }

  const byNim = new Map(stored.map((a) => [a.nim, a]));
  const targets = nimArg ? [nimArg] : hardcoded.map((a) => a.nim);

  const results: { nim: string; nama: string; password: string }[] = [];

  for (const nim of targets) {
    const hard = hardcoded.find((a) => a.nim === nim);
    const existing = byNim.get(nim);
    const nama = existing?.nama || hard?.nama || "";
    if (!nama) {
      console.error(`skip ${nim}: tidak ada di allowlist`);
      continue;
    }
    const pw = pwArg || genPassword();
    const row: AnggotaRow = {
      nim,
      nama,
      role: existing?.role || hard?.role || "",
      passwordHash: hashPassword(pw),
    };
    if (byNim.has(nim)) {
      const i = stored.findIndex((a) => a.nim === nim);
      stored[i] = row;
    } else {
      stored.push(row);
    }
    byNim.set(nim, row);
    results.push({ nim, nama, password: pw });
  }

  if (useSheet) {
    await saveAnggota(stored);
    console.log(`✓ ${results.length} password disimpan ke Google Sheets (sheet: anggota)`);
  } else {
    writeFsFallback(stored);
    console.log(`✓ ${results.length} password disimpan ke data/anggota.json (GDrive tidak aktif)`);
  }

  console.log("\n=== PASSWORD (tampil sekali, catat sekarang) ===");
  for (const r of results) console.log(`${r.nim}  ${r.password}  ${r.nama}`);
  console.log("\nBagikan ke masing-masing anggota via DM. Minta mereka ganti setelah login pertama.");
}

main().catch((e) => {
  console.error("error:", e);
  process.exit(1);
});
