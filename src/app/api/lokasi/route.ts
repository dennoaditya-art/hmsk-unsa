import { NextResponse } from "next/server";
import { getLokasi, saveLokasi } from "@/lib/presensi-store";
import { cookies } from "next/headers";

async function requireAdmin() {
  const c = await cookies();
  return c.get("admin_pin")?.value === "ok";
}

export async function GET() {
  return NextResponse.json(await getLokasi());
}

export async function POST(req: Request) {
  if (!(await requireAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  const lat = Number(body.lat), lng = Number(body.lng), radius = Number(body.radiusMeters) || 150;
  if (Number.isNaN(lat) || Number.isNaN(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180)
    return NextResponse.json({ error: "Koordinat tidak valid" }, { status: 400 });
  if (radius < 20 || radius > 500) return NextResponse.json({ error: "Radius 20-500m" }, { status: 400 });
  const all = await getLokasi();
  const id = body.id || `lok-${Date.now()}`;
  const idx = all.findIndex((l) => l.id === id);
  const row = { id, name: body.name || "Lokasi Baru", lat, lng, radiusMeters: radius };
  if (idx >= 0) all[idx] = row;
  else all.push(row);
  await saveLokasi(all);
  return NextResponse.json(row);
}
