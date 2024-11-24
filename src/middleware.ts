import { NextRequest, NextResponse } from 'next/server'

const isLogged = false

export default function middleware(request: NextRequest) {
  if (
    (request.nextUrl.pathname.startsWith('/sign-in') ||
      request.nextUrl.pathname.startsWith('/sign-up')) &&
    isLogged
  ) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (request.nextUrl.pathname === '/' && !isLogged) {
    return NextResponse.redirect(new URL('/sign-in', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/sign-in', '/sign-up']
}
