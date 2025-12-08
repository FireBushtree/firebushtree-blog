'use client'

import { Languages } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

import { Button } from '@/components/ui/button'
import { LocaleEnum } from '@/lib/i18n/constants'

type LocaleToggleProps = {
  locale: LocaleEnum
}

export default function LocaleToggle({ locale }: LocaleToggleProps) {
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
    <Button asChild size="icon" variant="outline" aria-label="Switch language">
      <Link href={langLink}>
        <Languages />
      </Link>
    </Button>
  )
}
