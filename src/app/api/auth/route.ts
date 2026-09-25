import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { findAnggota } from "@/data/anggota";
import { getAnggotaByNim } from "@/lib/presensi-store";
import { verifyPassword } from "@/lib/password";
import { createMemberToken, verifyMemberToken, isSessionConfigured } from "@/lib/member-session";

const COOKIE_NIM = "hmsk_nim";
const COOKIE_NAMA = "hmsk_nama";

export async function POST(req: Request) {
  const { nim, password } = await req.json();
  const nimTrim = (nim || "").trim();
  const pw = (password || "").trim();
  if (!nimTrim || nimTrim.length < 3) return NextResponse.json({ error: "NIM wajib" }, { status: 400 });
  if (!pw) return NextResponse.json({ error: "Password wajib" }, { status: 400 });

  if (!isSessionConfigured()) {
    return NextResponse.json({ error: "Server belum dikonfigurasi (SESSION_SECRET/ADMIN_PIN kosong)" }, { status: 500 });
  }

  const row = await getAnggotaByNim(nimTrim);
  const fallback = findAnggota(nimTrim);
  const hash = row?.passwordHash;
  const nama = row?.nama || fallback?.nama || "";

  if (!nama) return NextResponse.json({ error: "NIM tidak terdaftar (hubungi admin HMSK)" }, { status: 403 });
  if (!hash) {
    return NextResponse.json({ error: "Password belum di-set. Hubungi admin HMSK untuk aktivasi." }, { status: 403 });
  }
  if (!verifyPassword(pw, hash)) return NextResponse.json({ error: "Password salah" }, { status: 401 });

  const c = await cookies();
  const secure = process.env.NODE_ENV === "production";
  c.set(COOKIE_NIM, createMemberToken(nimTrim), { httpOnly: true, sameSite: "lax", path: "/", maxAge: 60 * 60 * 12, secure });
  c.set(COOKIE_NAMA, nama, { httpOnly: true, sameSite: "lax", path: "/", maxAge: 60 * 60 * 12, secure });
  return NextResponse.json({ ok: true, nim: nimTrim, nama });
}

export async function DELETE() {
  const c = await cookies();
  c.delete(COOKIE_NIM);
  c.delete(COOKIE_NAMA);
  return NextResponse.json({ ok: true });
}

export async function GET() {
  const c = await cookies();
  const nim = verifyMemberToken(c.get(COOKIE_NIM)?.value);
  const nama = c.get(COOKIE_NAMA)?.value || null;
  return NextResponse.json({ nim, nama: nim ? nama : null });
}
