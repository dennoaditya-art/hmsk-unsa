import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/admin-session";
import { getAnggota, saveAnggota } from "@/lib/presensi-store";
import { anggota as anggotaHardcoded } from "@/data/anggota";
import { hashPassword } from "@/lib/password";
import { randomBytes } from "node:crypto";

async function requireAdmin() {
  const c = await cookies();
  return verifyToken(c.get("admin_pin")?.value);
}

function genPassword() {
  const chars = "abcdefghijkmnpqrstuvwxyz23456789";
  const bytes = randomBytes(10);
  return Array.from(bytes, (b) => chars[b % chars.length]).join("");
}

export async function GET() {
  if (!(await requireAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const stored = await getAnggota();
  const byNim = new Map(stored.map((a) => [a.nim, a]));
  // gabung hardcoded + sheet supaya anggota baru dari sheet ikut tampil
  const merged = [
    ...anggotaHardcoded.map((a) => {
      const s = byNim.get(a.nim);
      return { nim: a.nim, nama: s?.nama || a.nama, role: s?.role || a.role, hasPassword: !!s?.passwordHash };
    }),
    ...stored.filter((s) => !anggotaHardcoded.some((a) => a.nim === s.nim)).map((s) => ({ nim: s.nim, nama: s.nama, role: s.role, hasPassword: !!s.passwordHash })),
  ];
  return NextResponse.json(merged);
}

export async function POST(req: Request) {
  if (!(await requireAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  const nim = String(body.nim || "").trim();
  if (!nim) return NextResponse.json({ error: "nim wajib" }, { status: 400 });

  const stored = await getAnggota();
  const idx = stored.findIndex((a) => a.nim === nim);
  const hard = anggotaHardcoded.find((a) => a.nim === nim);
  const existing = idx >= 0 ? stored[idx] : undefined;

  // password: dari admin, atau auto-generate kalau tidak diisi
  const raw: string = body.password ? String(body.password) : genPassword();
  if (raw.length < 6) return NextResponse.json({ error: "Password minimal 6 karakter" }, { status: 400 });

  const row = {
    nim,
    nama: existing?.nama || hard?.nama || body.nama || "",
    role: existing?.role || hard?.role || "",
    passwordHash: hashPassword(raw),
  };
  if (idx >= 0) stored[idx] = row;
  else stored.push(row);
  await saveAnggota(stored);

  return NextResponse.json({ ok: true, nim, password: raw });
}
