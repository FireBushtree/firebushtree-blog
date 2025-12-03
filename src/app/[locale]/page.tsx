import Test from '@/components/Test'
import { getServerTranslation } from '@/lib/i18n/server'

export default async function Home() {
  const { t } = await getServerTranslation('zh')

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {t('welcome')}

      <Test />
    </div>
  )
}
