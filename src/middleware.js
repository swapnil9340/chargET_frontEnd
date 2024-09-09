import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token');
  
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  const response = NextResponse.next();
  response.cookies.set('token', token);
  return response;
}

export const config = {
  matcher: ['/'], // Apply the middleware only to specific paths
};