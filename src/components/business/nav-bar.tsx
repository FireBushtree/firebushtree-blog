'use client'

import { Languages } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { LocaleEnum } from '@/lib/i18n/constants'

type NavBarProps = {
  locale: LocaleEnum
}

export default function NavBar({ locale }: NavBarProps) {
  const pathname = usePathname()
  const isZhLocale = locale === LocaleEnum.ZH
  const zhPrefix = `/${LocaleEnum.ZH}`

  const langLink = useMemo(() => {
    if (isZhLocale) {
      const path = pathname.replace(zhPrefix, '') || '/'
      return path
    }

    return `${zhPrefix}${pathname}`
  }, [pathname, zhPrefix, isZhLocale])

  return (
    <header className="sticky top-0 z-10 bg-background backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href={`/${isZhLocale ? LocaleEnum.ZH : ''}`}
          className="text-base font-semibold tracking-[0.28em]"
        >
          FIREBUSHTREE
        </Link>
        <Button
          asChild
          variant="ghost"
          size="icon"
          aria-label="Switch language"
        >
          <Link href={langLink}>
            <Languages className="size-5" />
          </Link>
        </Button>
      </div>
    </header>
  )
}
