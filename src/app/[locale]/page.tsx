import Test from '@/components/Test'
import type { LocaleEnum } from '@/lib/i18n/constants'
import { getServerTranslation } from '@/lib/i18n/server'

export default async function Home(props: { params: { locale: LocaleEnum } }) {
  const { locale } = await props.params
  const { t } = await getServerTranslation(locale)

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {t('welcome')}

      <Test />
    </div>
  )
}
