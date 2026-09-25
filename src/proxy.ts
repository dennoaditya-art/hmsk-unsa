import { NextResponse, type NextRequest } from "next/server";
import { verifyToken } from "@/lib/admin-session";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const ok = verifyToken(req.cookies.get("admin_pin")?.value);
  if (!ok && pathname !== "/admin/login") {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }
  return NextResponse.next();
}

export const config = { matcher: ["/admin/:path*"] };
