import { NextResponse } from "next/server";
import { isGDriveEnabled, getSheetId, readSheetRaw } from "@/lib/gdrive";
import { cookies } from "next/headers";

export async function GET() {
  const c = await cookies();
  if (c.get("admin_pin")?.value !== "ok") return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const enabled = isGDriveEnabled();
  if (!enabled) {
    return NextResponse.json({
      enabled: false,
      sheetId: null,
      message: "Set GOOGLE_SHEET_ID + GOOGLE_SERVICE_ACCOUNT_JSON di Vercel Env / .env.local. Fallback fs aktif (dev).",
      docs: "https://github.com/googleapis/google-api-nodejs-client",
    });
  }
  try {
    const sheetId = getSheetId();
    const lokasi = await readSheetRaw("lokasi");
    const kegiatan = await readSheetRaw("kegiatan");
    const presensi = await readSheetRaw("presensi");
    const anggota = await readSheetRaw("anggota");
    return NextResponse.json({
      enabled: true,
      sheetId,
      url: `https://docs.google.com/spreadsheets/d/${sheetId}`,
      counts: {
        lokasi: Math.max(0, lokasi.length - 1),
        kegiatan: Math.max(0, kegiatan.length - 1),
        presensi: Math.max(0, presensi.length - 1),
        anggota: Math.max(0, anggota.length - 1),
      },
      ok: true,
    });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ enabled: true, error: msg }, { status: 500 });
  }
}
