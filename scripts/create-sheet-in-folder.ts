/**
 * Buat Spreadsheet HMSK langsung di folder GDrive kamu
 * Folder: https://drive.google.com/drive/folders/1QdC9LJ_j7GTLKR8TbT4cXLuWXjeJ-QX9
 * 
 * Jalankan setelah set env:
 *  GOOGLE_SERVICE_ACCOUNT_JSON + GOOGLE_DRIVE_FOLDER_ID (atau default 1QdC9LJ...)
 * 
 * Usage: npx tsx scripts/create-sheet-in-folder.ts
 * Output: GOOGLE_SHEET_ID baru + URL, lalu auto-run seed
 */
try { process.loadEnvFile(".env.local"); } catch {}
try { process.loadEnvFile(".env"); } catch {}
import { createSpreadsheetInFolder, getDriveFolderId } from "../src/lib/gdrive";

async function main() {
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID || getDriveFolderId();
  const title = process.env.GOOGLE_SHEET_TITLE || "HMSK-Presensi-DB";
  console.log("[create] folderId:", folderId);
  console.log("[create] title:", title);
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
    console.error("Set GOOGLE_SERVICE_ACCOUNT_JSON dulu. Lihat .env.example");
    console.error("Cara: https://console.cloud.google.com -> IAM -> Service Accounts -> Keys -> JSON");
    console.error("Lalu share folder ke client_email service account sebagai Editor");
    process.exit(1);
  }
  const id = await createSpreadsheetInFolder(title, folderId);
  console.log("\n[create] SUCCESS");
  console.log("GOOGLE_SHEET_ID=" + id);
  console.log("URL=https://docs.google.com/spreadsheets/d/" + id);
  console.log("\nLanjut: set GOOGLE_SHEET_ID di .env.local & Vercel, lalu npm run seed:gdrive");
  // update .env.local otomatis jika ada
  try {
    const fs = await import("fs");
    const path = await import("path");
    const envPath = path.join(process.cwd(), ".env.local");
    let content = "";
    if (fs.existsSync(envPath)) content = fs.readFileSync(envPath, "utf-8");
    if (!content.includes("GOOGLE_SHEET_ID")) {
      fs.appendFileSync(envPath, `\nGOOGLE_SHEET_ID=${id}\nGOOGLE_DRIVE_FOLDER_ID=${folderId}\n`);
      console.log("[create] .env.local updated");
    } else {
      console.log("[create] GOOGLE_SHEET_ID sudah ada di .env.local, update manual jika perlu");
    }
  } catch {}
}

main().catch((e) => {
  console.error("[create] failed:", e.message || e);
  if (String(e.message).includes("403") || String(e.message).includes("404")) {
    console.error("\nPastikan folder https://drive.google.com/drive/folders/" + getDriveFolderId() + " di-share ke service account email sebagai Editor (bukan hanya Anyone with link).");
    console.error("Link saja tidak cukup untuk write via API.");
  }
  process.exit(1);
});
