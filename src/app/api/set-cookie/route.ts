
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const token = url.searchParams.get('join');

  if (token) {
    const cookie = cookies();
    cookie.set('join_token', token, { httpOnly: true, path: '/' });
  }

  const redirectUrl = new URL('/', url.origin);
  
return NextResponse.redirect(redirectUrl);
}
