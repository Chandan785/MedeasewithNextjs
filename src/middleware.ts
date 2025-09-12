import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Public routes
  const isPublicPath = 
    path === '/' || 
    path === '/login/user' || 
    path === '/signup/user';

  const token = request.cookies.get('token')?.value || '';

  // Case 1: If user has a token and visits login/signup, redirect to userprofile
  if (token && (path === '/login/user' || path === '/signup/user')) {
    return NextResponse.redirect(new URL('/profile/userprofile', request.url));
  }

  // Case 2: If user has no token and tries to access protected routes
  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL('/login/user', request.url));
  }

  // Otherwise, allow the request
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/login/user',
    '/signup/user',
    '/userprofile',
  ]
};
