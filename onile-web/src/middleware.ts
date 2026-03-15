import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // Placeholder middleware — implement auth checks here.
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|static).*)'],
};
