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
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4">
        <Link
          href={`/${isZhLocale ? LocaleEnum.ZH : ''}`}
          className="typo-t20 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text tracking-[0.24em] text-transparent dark:from-pink-400 dark:to-purple-400"
        >
          FIREBUSHTREE
        </Link>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LocaleToggle locale={locale} />
        </div>
      </div>
    </header>
  )
}
