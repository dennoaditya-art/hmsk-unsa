import { NextResponse } from "next/server";
import { getKegiatan, saveKegiatan } from "@/lib/presensi-store";
import { cookies } from "next/headers";

async function requireAdmin() {
  const c = await cookies();
  return c.get("admin_pin")?.value === "ok";
}

export async function GET() {
  return NextResponse.json(getKegiatan());
}

export async function POST(req: Request) {
  if (!(await requireAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  const all = getKegiatan();
  const id = body.id || `kgt-${Date.now()}`;
  const idx = all.findIndex((k) => k.id === id);
  const row = {
    id,
    title: body.title || "Kegiatan Baru",
    lokasiId: body.lokasiId || all[0]?.id || "unsa-pusat",
    jamMulai: body.jamMulai ? new Date(body.jamMulai).toISOString() : new Date().toISOString(),
    jamSelesai: body.jamSelesai ? new Date(body.jamSelesai).toISOString() : new Date(Date.now() + 4 * 3600000).toISOString(),
    isActive: body.isActive ?? true,
  };
  if (idx >= 0) all[idx] = row;
  else all.unshift(row);
  saveKegiatan(all);
  return NextResponse.json(row);
}

export async function DELETE(req: Request) {
  if (!(await requireAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });
  const all = getKegiatan().filter((k) => k.id !== id);
  saveKegiatan(all);
  return NextResponse.json({ ok: true });
}
