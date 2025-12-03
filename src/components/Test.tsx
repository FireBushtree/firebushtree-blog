import { getServerTranslation } from '@/lib/i18n/server'
import { Button } from './ui/button'

export default async function Test() {
  const { t } = await getServerTranslation('en')

  return (
    <div>
      {t('welcome')} <Button>123</Button>
    </div>
  )
}
