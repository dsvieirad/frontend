import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const singInUrl = new URL("/login", request.url);
  const homeUrl = new URL("/home", request.url);

  if (!token) {
    if (request.nextUrl.pathname === "/login") {
      return NextResponse.next();
    }
    return NextResponse.redirect(singInUrl);
  }

  if (request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(homeUrl);
  }
}

export const config = {
  matcher: ["/login"],
};
