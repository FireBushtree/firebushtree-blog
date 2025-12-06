import { type NextRequest, NextResponse } from 'next/server'
import { LocaleList } from '@/lib/i18n/constants'
import { getLocale } from '@/lib/utils'

export async function proxy(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = LocaleList.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = await getLocale()
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.rewrite(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}
