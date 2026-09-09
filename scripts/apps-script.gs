/**
 * HMSK Presensi - Apps Script Webhook (paste di Extensions → Apps Script)
 * Deploy: Deploy → New deployment → Web app → Execute as Me, Who has access: Anyone
 * Copy Web app URL → set APPS_SCRIPT_URL di .env.local & Vercel
 * Sheet ID: 1XtVR4WImdUc8rr0Qxqho9Br9dzSRiPIOFaKclMAKVEI (atau ganti di SHEET_ID)
 */
const SHEET_ID = "1XtVR4WImdUc8rr0Qxqho9Br9dzSRiPIOFaKclMAKVEI";
const HEADERS = {
  lokasi: ["id","name","lat","lng","radiusMeters"],
  kegiatan: ["id","title","lokasiId","jamMulai","jamSelesai","isActive"],
  presensi: ["id","nim","nama","kegiatanId","lat","lng","accuracy","jarakMeter","status","alasan","createdAt","ip"],
  presensi_ditolak: ["id","nim","nama","kegiatanId","lat","lng","accuracy","jarakMeter","status","alasan","createdAt","ip"],
  anggota: ["nim","nama","role"]
};
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.openById(SHEET_ID);
    let sheet = ss.getSheetByName(data.sheet);
    if (!sheet) {
      sheet = ss.insertSheet(data.sheet);
      sheet.appendRow(HEADERS[data.sheet] || []);
    }
    if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS[data.sheet] || []);
    if (data.action === "append" && data.row) sheet.appendRow(data.row.map(String));
    if (data.action === "write" && data.rows) {
      sheet.clear();
      sheet.getRange(1, 1, data.rows.length, data.rows[0].length).setValues(data.rows.map(r => r.map(String)));
    }
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) })).setMimeType(ContentService.MimeType.JSON);
  }
}
function doGet() {
  return ContentService.createTextOutput(JSON.stringify({ ok: true, sheet: SHEET_ID })).setMimeType(ContentService.MimeType.JSON);
}
