import { NextResponse } from 'next/server';

export function middleware(req) {
  // Get the token from cookies
  const token = req.cookies.get('ChargeET_UserToken');

  // Define paths
  const loginPath = '/login';
  const signupPath = '/signup';
  const homePath = '/';
  const requestedPage = req.nextUrl.pathname; 
  const queryValue = req.nextUrl.searchParams.get('layout'); // Get the query parameter

  // Check if token exists
  if (Boolean(token?.value) && token?.value !== 'undefined' && token) {
    // If the user tries to access login or signup, redirect to the home page
    if (requestedPage === loginPath || requestedPage === signupPath) {
      return NextResponse.redirect(new URL(homePath, req.url));
    }
  } else {
    // If no token and the user tries to access a protected page, redirect to login
    if (requestedPage !== loginPath && requestedPage !== signupPath) {
      return NextResponse.redirect(new URL(loginPath, req.url));
    }
  }

  // Check for `campaign/creationscreen` URL with the required query parameter
  if (requestedPage === '/campaign/creationscreen' && !queryValue) {
    // Redirect to the same page with a default query parameter if missing
    const url = req.nextUrl.clone();
    url.searchParams.set('layout', 'singlezone1'); // Set a default value
    return NextResponse.redirect(url);
  }

  // Allow request to continue if no redirection is needed
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
