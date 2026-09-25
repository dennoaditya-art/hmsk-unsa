// Simple cookie auth untuk presensi - tanpa DB user untuk MVP
// Cookie hmsk_nim berisi token HMAC (lihat member-session.ts) supaya tidak bisa dipalsukan

import { cookies } from "next/headers";
import { createMemberToken, verifyMemberToken } from "./member-session";

const COOKIE_NIM = "hmsk_nim";
const COOKIE_NAMA = "hmsk_nama";

export async function getSession() {
  const c = await cookies();
  const nim = verifyMemberToken(c.get(COOKIE_NIM)?.value);
  const nama = c.get(COOKIE_NAMA)?.value || null;
  if (!nim) return null;
  return { nim, nama: nama || nim };
}

export async function setSession(nim: string, nama: string) {
  const c = await cookies();
  c.set(COOKIE_NIM, createMemberToken(nim), { httpOnly: true, sameSite: "lax", path: "/", maxAge: 60 * 60 * 12 });
  c.set(COOKIE_NAMA, nama, { httpOnly: false, sameSite: "lax", path: "/", maxAge: 60 * 60 * 12 });
}

export async function clearSession() {
  const c = await cookies();
  c.delete(COOKIE_NIM);
  c.delete(COOKIE_NAMA);
}
