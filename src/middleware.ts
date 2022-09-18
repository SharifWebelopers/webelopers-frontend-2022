import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  let newUrl: string = "/";
  if (req.nextUrl.pathname.startsWith("/auth")) newUrl = "/auth/login";
  return NextResponse.redirect(new URL(newUrl, req.url));
}

export const config = {
  matcher: ["/auth"],
};
