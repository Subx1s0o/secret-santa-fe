import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
  const url = new URL(request.url)
  const token = url.searchParams.get('join')
  const session = cookies().get('session')?.value

  if (token) {
    return NextResponse.redirect(new URL('/api/set-cookie?join=' + token, url))
  }

  if (
    request.nextUrl.pathname.startsWith('/santas/status') &&
    !cookies().get('join_token')?.value
  ) {
    return NextResponse.redirect(new URL('/santas', request.url))
  }

  if (request.nextUrl.pathname === '/rules' && !session) {
    return NextResponse.redirect(new URL('/sign-in', request.url))
  }

  if (request.nextUrl.pathname.startsWith('/santas') && !session) {
    return NextResponse.redirect(new URL('/sign-in', request.url))
  }

  if (
    (request.nextUrl.pathname === '/sign-in' ||
      request.nextUrl.pathname === '/sign-up') &&
    session
  ) {
    return NextResponse.redirect(new URL('/santas', request.url))
  }

  if (request.nextUrl.pathname === '/' && !session) {
    return NextResponse.redirect(new URL('/sign-in', request.url))
  }

  if (request.nextUrl.pathname === '/' && session) {
    return NextResponse.redirect(new URL('/santas', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/sign-in', '/sign-up', '/santas', '/santas/:path*', '/rules']
}
