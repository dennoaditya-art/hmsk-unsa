import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const PIN = process.env.ADMIN_PIN || "hmsk2025";

export async function POST(req: Request) {
  const { pin } = await req.json();
  if (pin !== PIN) return NextResponse.json({ error: "PIN salah" }, { status: 401 });
  const c = await cookies();
  const secure = process.env.NODE_ENV === "production";
  c.set("admin_pin", "ok", { httpOnly: true, sameSite: "lax", path: "/", maxAge: 60 * 60 * 8, secure });
  return NextResponse.json({ ok: true });
}
export async function DELETE() {
  const c = await cookies();
  c.delete("admin_pin");
  return NextResponse.json({ ok: true });
}
