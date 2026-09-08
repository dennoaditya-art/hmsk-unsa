import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { nim, nama } = await req.json();
  if (!nim || nim.trim().length < 3) return NextResponse.json({ error: "NIM wajib" }, { status: 400 });
  const c = await cookies();
  const secure = process.env.NODE_ENV === "production";
  c.set("hmsk_nim", nim.trim(), { httpOnly: true, sameSite: "lax", path: "/", maxAge: 60 * 60 * 12, secure });
  c.set("hmsk_nama", (nama || nim).trim(), { httpOnly: true, sameSite: "lax", path: "/", maxAge: 60 * 60 * 12, secure });
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
