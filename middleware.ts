import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect only the commercial investment properties route
  if (pathname.startsWith('/properties')) {
    // Vercel provides the visitor country code in 'x-vercel-ip-country'
    const country = request.headers.get('x-vercel-ip-country') || '';

    // Block visitors accessing from Bulgaria (BG)
    if (country === 'BG') {
      const url = request.nextUrl.clone();
      url.pathname = '/'; // Redirect Bulgarian visitors to the home page
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/properties', '/properties/:path*'],
};