import { NextRequest, NextResponse } from "next/server"

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // 🟩 1. استثناء صفحات auth
  if (
    pathname.startsWith("/login") ||
    pathname.startsWith("/register")
  ) {
    return NextResponse.next()
  }

  // 🟩 2. استثناء الصفحة الرئيسية (اختياري)
  if (pathname === "/") {
    return NextResponse.next()
  }

  const token = req.cookies.get("token")

  // 🟥 3. إذا ما في توكن → redirect
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  return NextResponse.next()
}
export const config = {
  matcher: ["/student/:path*", "/admin/:path*"],
}