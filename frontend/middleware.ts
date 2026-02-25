import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define the exact paths that require authentication
const protectedRoutes = [
    "/dashboard",
    "/profile",
    "/business",
    "/email-preferences",
    "/setup",
    "/verify"
];

// Define paths that authenticated users shouldn't access (like login/signup)
const authRoutes = ["/login", "/signup"];

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Read auth state either from the cross-domain frontend cookie or the backend HttpOnly cookie if they share domains
    const hasAuthCookie = request.cookies.has("isAuth") || request.cookies.has("refreshToken");

    // Check if the current route is protected
    const isProtectedRoute = protectedRoutes.some(
        (route) => pathname === route || pathname.startsWith(`${route}/`)
    );

    // Check if the current route is an auth route
    const isAuthRoute = authRoutes.some((route) => pathname === route);

    // Redirect unauthenticated users navigating to protected routes to /login
    if (isProtectedRoute && !hasAuthCookie) {
        const url = request.nextUrl.clone();
        url.pathname = "/login";
        return NextResponse.redirect(url);
    }

    // Redirect authenticated users navigating to auth routes to /dashboard
    if (isAuthRoute && hasAuthCookie) {
        const url = request.nextUrl.clone();
        url.pathname = "/dashboard";
        return NextResponse.redirect(url);
    }

    // Allow the request to proceed otherwise
    return NextResponse.next();
}

// Config to run the middleware on specific paths, avoiding static files and API routes
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};
