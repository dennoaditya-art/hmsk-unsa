import { google, sheets_v4 } from "googleapis";

// ponytail: sheets as DB (GDrive). Cache 30s to avoid rate limit, upgrade -> Turso when >20 concurrent
let sheetsClient: sheets_v4.Sheets | null = null;

function getCredentials() {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON || process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  if (!raw) return null;
  try {
    // raw can be JSON string or base64
    let jsonStr = raw.trim();
    if (!jsonStr.startsWith("{")) {
      try { jsonStr = Buffer.from(jsonStr, "base64").toString("utf-8"); } catch {}
    }
    return JSON.parse(jsonStr);
  } catch {
    console.error("[gdrive] invalid GOOGLE_SERVICE_ACCOUNT_JSON");
    return null;
  }
}

export function isGDriveEnabled(): boolean {
  return !!process.env.GOOGLE_SHEET_ID && !!getCredentials();
}

export function getSheetId(): string {
  return process.env.GOOGLE_SHEET_ID || "";
}

function getAuth() {
  const creds = getCredentials();
  if (!creds) return null;
  return new google.auth.JWT({
    email: creds.client_email,
    key: creds.private_key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets", "https://www.googleapis.com/auth/drive"],
  });
}

export function getSheets(): sheets_v4.Sheets | null {
  if (sheetsClient) return sheetsClient;
  const auth = getAuth();
  if (!auth) return null;
  sheetsClient = google.sheets({ version: "v4", auth });
  return sheetsClient;
}

export function getDrive() {
  const auth = getAuth();
  if (!auth) return null;
  return google.drive({ version: "v3", auth });
}

export function getDriveFolderId(): string {
  return process.env.GOOGLE_DRIVE_FOLDER_ID || "1QdC9LJ_j7GTLKR8TbT4cXLuWXjeJ-QX9";
}

// simple in-memory cache
const cache = new Map<string, { ts: number; data: string[][] }>();
const TTL = Number(process.env.GOOGLE_SHEET_CACHE_TTL || 30) * 1000;

export async function readSheetRaw(sheetName: string): Promise<string[][]> {
  const sheets = getSheets();
  const spreadsheetId = getSheetId();
  if (!sheets || !spreadsheetId) throw new Error("GDrive not configured");
  const key = sheetName;
  const hit = cache.get(key);
  if (hit && Date.now() - hit.ts < TTL) return hit.data;
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${sheetName}!A:Z`,
  });
  const values = (res.data.values as string[][]) || [];
  cache.set(key, { ts: Date.now(), data: values });
  return values;
}

export async function appendRow(sheetName: string, row: (string | number)[]) {
  const sheets = getSheets();
  const spreadsheetId = getSheetId();
  if (!sheets || !spreadsheetId) throw new Error("GDrive not configured");
  cache.delete(sheetName); // invalidate
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:Z`,
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [row.map(String)] },
  });
}

export async function writeSheet(sheetName: string, rows: (string | number)[][]) {
  const sheets = getSheets();
  const spreadsheetId = getSheetId();
  if (!sheets || !spreadsheetId) throw new Error("GDrive not configured");
  cache.delete(sheetName);
  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: `${sheetName}!A1`,
    valueInputOption: "RAW",
    requestBody: { values: rows.map((r) => r.map(String)) },
  });
}

export async function ensureSheetExists(sheetName: string, headers: string[]) {
  const sheets = getSheets();
  const spreadsheetId = getSheetId();
  if (!sheets || !spreadsheetId) throw new Error("GDrive not configured");
  // check if sheet exists, if not create
  const meta = await sheets.spreadsheets.get({ spreadsheetId });
  const exists = meta.data.sheets?.some((s) => s.properties?.title === sheetName);
  if (!exists) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: { requests: [{ addSheet: { properties: { title: sheetName } } }] },
    });
    // write header
    await writeSheet(sheetName, [headers]);
    return;
  }
  // ensure header
  const values = await readSheetRaw(sheetName);
  if (values.length === 0) {
    await writeSheet(sheetName, [headers]);
  } else if (values[0].join("|") !== headers.join("|")) {
    // header mismatch, keep existing but log
    console.warn(`[gdrive] header mismatch ${sheetName}:`, values[0], "expected", headers);
  }
}

export async function createSpreadsheetInFolder(title: string, folderId: string): Promise<string> {
  const creds = getCredentials();
  if (!creds) throw new Error("GDrive not configured: missing GOOGLE_SERVICE_ACCOUNT_JSON");
  const drive = getDrive();
  const sheets = getSheets();
  if (!drive || !sheets) throw new Error("GDrive client init failed");
  // cek apakah sudah ada file dengan nama sama di folder
  const existing = await drive.files.list({
    q: `name='${title.replace(/'/g, "\\'")}' and '${folderId}' in parents and mimeType='application/vnd.google-apps.spreadsheet' and trashed=false`,
    fields: "files(id, name)",
    pageSize: 5,
  });
  if (existing.data.files && existing.data.files.length > 0 && existing.data.files[0].id) {
    console.log(`[gdrive] spreadsheet "${title}" sudah ada di folder ${folderId}: ${existing.data.files[0].id}`);
    return existing.data.files[0].id!;
  }
  // buat spreadsheet baru
  const created = await sheets.spreadsheets.create({
    requestBody: { properties: { title } },
  });
  const spreadsheetId = created.data.spreadsheetId!;
  // pindahkan ke folder (drive.files.update addParents)
  await drive.files.update({
    fileId: spreadsheetId,
    addParents: folderId,
    fields: "id, parents",
  });
  console.log(`[gdrive] created spreadsheet "${title}" id=${spreadsheetId} di folder ${folderId}`);
  return spreadsheetId;
}
