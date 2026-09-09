// ponytail: 10 baris Apps Script = GDrive tanpa Service Account (user paste script, kita POST ke webhook)
export function isWebhookEnabled(): boolean {
  return !!process.env.APPS_SCRIPT_URL;
}
export function getWebhookUrl(): string {
  return process.env.APPS_SCRIPT_URL || "";
}
// payload untuk Apps Script doPost
export type WebhookRow = {
  sheet: "lokasi" | "kegiatan" | "presensi" | "presensi_ditolak" | "anggota";
  action: "append" | "write";
  rows?: (string | number)[][];
  row?: (string | number)[];
};

export async function postToWebhook(payload: WebhookRow): Promise<boolean> {
  const url = getWebhookUrl();
  if (!url) return false;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return res.ok;
  } catch {
    return false;
  }
}
