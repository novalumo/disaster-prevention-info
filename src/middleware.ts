import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/unavailable', request.url));
}

export const config = {
  matcher: '/ofunato/:path*',
};
