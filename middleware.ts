import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Allow public routes
  const publicRoutes = ['/', '/login', '/unauthorized'];
  const isPublicRoute = publicRoutes.some(route => request.nextUrl.pathname === route);

  if (isPublicRoute) {
    return NextResponse.next();
  }

  // For dashboard routes, let the client-side ProtectedRoute handle authentication
  // This middleware can be extended for server-side checks if needed
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

