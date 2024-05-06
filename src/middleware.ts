import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/chows"];

export default function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value || "";

  if (!token.length && protectedRoutes.includes(req.nextUrl.pathname)) {
    return Response.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
