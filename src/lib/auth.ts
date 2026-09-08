// Simple cookie auth untuk presensi - tanpa DB user untuk MVP
// NIM disimpan di cookie httpOnly via API, validasi minimal

import { cookies } from "next/headers";

const COOKIE_NIM = "hmsk_nim";
const COOKIE_NAMA = "hmsk_nama";

export async function getSession() {
  const c = await cookies();
  const nim = c.get(COOKIE_NIM)?.value || null;
  const nama = c.get(COOKIE_NAMA)?.value || null;
  if (!nim) return null;
  return { nim, nama: nama || nim };
}

export async function setSession(nim: string, nama: string) {
  const c = await cookies();
  c.set(COOKIE_NIM, nim, { httpOnly: true, sameSite: "lax", path: "/", maxAge: 60 * 60 * 12 });
  c.set(COOKIE_NAMA, nama, { httpOnly: false, sameSite: "lax", path: "/", maxAge: 60 * 60 * 12 });
}

export async function clearSession() {
  const c = await cookies();
  c.delete(COOKIE_NIM);
  c.delete(COOKIE_NAMA);
}
