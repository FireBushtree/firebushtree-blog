'use client'

import Link from 'next/link'

import LocaleToggle from '@/components/business/nav-bar/locale-toggle'
import ThemeToggle from '@/components/business/nav-bar/theme-toggle'
import { LocaleEnum } from '@/lib/i18n/constants'

type NavBarProps = {
  locale: LocaleEnum
}

export default function NavBar({ locale }: NavBarProps) {
  const isZhLocale = locale === LocaleEnum.ZH

  return (
    <header className="fixed inset-x-0 top-0 z-10 bg-background/80 backdrop-blur shadow-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href={`/${isZhLocale ? LocaleEnum.ZH : ''}`}
          className="text-base font-semibold tracking-[0.28em]"
        >
          FIREBUSHTREE
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LocaleToggle locale={locale} />
        </div>
      </div>
    </header>
  )
}
