import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const token = url.searchParams.get('join')

  if (token) {
    const cookie = cookies()
    cookie.set('join_token', token, { maxAge: 5 * 60 * 1000 })
  }

  const redirectUrl = new URL('/rooms', url.origin)

  return NextResponse.redirect(redirectUrl)
}
