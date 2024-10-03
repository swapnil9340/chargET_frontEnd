import { NextResponse } from 'next/server';

export function middleware(request) {
  const tokenString = request.cookies.get('ChargeET_UserToken');
  const { pathname } = request.nextUrl;

  const loginPath = '/login';
  const signupPath = '/signup';

  // Check if the user is on login or signup pages
  if ([loginPath, signupPath].includes(pathname)) {
    // If the token exists, redirect authenticated users away from login/signup pages
    if (tokenString) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    // Allow unauthenticated users to proceed to login/signup
    return NextResponse.next();
  }

  // If no token exists, redirect to the login page
  if (!tokenString) {
    return NextResponse.redirect(new URL(loginPath, request.url));
  }

  // Allow access to all other routes if authenticated
  return NextResponse.next();
}

export const config = {
  matcher: ['/'], // Apply the middleware to all paths
};
