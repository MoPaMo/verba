import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

// Public routes that don't require authentication
const publicRoutes = [
  "/",
  "/auth",
  "/auth/sign-in",
  "/auth/sign-up",
  "/auth/forgot-password",
  "/about",
  "/legal",
];

// Error routes that should always be accessible
const errorRoutes = ["/error", "/not-found"];

export async function middleware(request: NextRequest) {
  console.log("middleware.ts", request.nextUrl.pathname);

  const token = await getToken({ req: request });
  const { pathname } = request.nextUrl;

  // Check if the path is public or an error route
  const isPublicRoute = publicRoutes.some((route) =>
    pathname.startsWith(route)
  );
  const isErrorRoute = errorRoutes.some((route) => pathname.startsWith(route));

  // Allow access to public and error routes regardless of authentication
  if (isPublicRoute || isErrorRoute) {
    return NextResponse.next();
  }

  // If the user is not authenticated and trying to access a protected route,
  // redirect them to the auth page
  if (!token) {
    const url = new URL("/auth", request.url);
    url.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(url);
  }

  // Allow access to protected routes for authenticated users
  return NextResponse.next();
}

// Configure which routes should be handled by the middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - public files with extensions (.svg, .jpg, etc.)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*$).*)",
  ],
};
