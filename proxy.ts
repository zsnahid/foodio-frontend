import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const getJwtSecret = () => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET environment variable is not set");
  }
  return new TextEncoder().encode(secret);
};

export async function proxy(request: NextRequest) {
  const tokenCookie = request.cookies.get("access_token");
  const { pathname } = request.nextUrl;

  // If logged in, redirect from auth pages to home
  if (tokenCookie && pathname === "/sign-in") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Protect admin dashboard routes
  if (pathname.startsWith("/dashboard")) {
    if (!tokenCookie?.value) {
      // Not logged in, redirect to sign-in
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    try {
      const { payload } = await jwtVerify(
        tokenCookie.value,
        await getJwtSecret()
      );
      if (payload.role?.toString().toLowerCase() !== "admin") {
        // Logged in, but not an admin, redirect to home
        return NextResponse.redirect(new URL("/", request.url));
      }
    } catch (error) {
      // Token is invalid, redirect to sign-in
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/sign-in", "/dashboard/:path*"],
};
