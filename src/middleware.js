import { NextResponse } from "next/server";

export function middleware(request) {
  const userId = request.cookies.get("userId");

  if (!userId) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
   
    "/blogs/:path*",
  ],
};