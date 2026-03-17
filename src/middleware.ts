import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(
  process.env.ADMIN_JWT_SECRET ?? "scotty-super-secret-change-in-production"
);

const TOKEN_COOKIE = "scotty_admin_token";

// Protected dashboard routes (login page is excluded intentionally)
const PROTECTED = ["/dashboard"];
const PUBLIC_DASHBOARD = ["/dashboard/login"];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isDashboard = PROTECTED.some((p) => pathname.startsWith(p));
  const isLoginPage = PUBLIC_DASHBOARD.some((p) => pathname === p);

  if (!isDashboard || isLoginPage) return NextResponse.next();

  const token = req.cookies.get(TOKEN_COOKIE)?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/dashboard/login", req.url));
  }

  try {
    await jwtVerify(token, SECRET);
    return NextResponse.next();
  } catch {
    const res = NextResponse.redirect(new URL("/dashboard/login", req.url));
    res.cookies.set(TOKEN_COOKIE, "", { maxAge: 0, path: "/" });
    return res;
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
