import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { isValidAnggota, findAnggota } from "@/data/anggota";

export async function POST(req: Request) {
  const { nim, nama } = await req.json();
  const nimTrim = (nim || "").trim();
  const namaTrim = (nama || "").trim();
  if (!nimTrim || nimTrim.length < 3) return NextResponse.json({ error: "NIM wajib" }, { status: 400 });
  if (!namaTrim || namaTrim.length < 3) return NextResponse.json({ error: "Nama wajib (min 3 huruf)" }, { status: 400 });
  if (namaTrim.toLowerCase() === nimTrim.toLowerCase()) return NextResponse.json({ error: "Nama tidak boleh sama dengan NIM" }, { status: 400 });
  const anggota = findAnggota(nimTrim);
  if (!anggota) return NextResponse.json({ error: "NIM tidak terdaftar (hubungi admin HMSK)" }, { status: 403 });
  if (!isValidAnggota(nimTrim, namaTrim)) return NextResponse.json({ error: `Nama tidak cocok dengan NIM ${nimTrim} (cek allowlist)` }, { status: 403 });
  const c = await cookies();
  const secure = process.env.NODE_ENV === "production";
  c.set("hmsk_nim", nimTrim, { httpOnly: true, sameSite: "lax", path: "/", maxAge: 60 * 60 * 12, secure });
  c.set("hmsk_nama", namaTrim, { httpOnly: true, sameSite: "lax", path: "/", maxAge: 60 * 60 * 12, secure });
  return NextResponse.json({ ok: true });
}

export async function DELETE() {
  const c = await cookies();
  c.delete("hmsk_nim");
  c.delete("hmsk_nama");
  return NextResponse.json({ ok: true });
}

export async function GET() {
  const c = await cookies();
  const nim = c.get("hmsk_nim")?.value || null;
  const nama = c.get("hmsk_nama")?.value || null;
  return NextResponse.json({ nim, nama });
}
