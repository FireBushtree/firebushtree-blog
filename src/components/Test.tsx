import { getServerTranslation } from '@/lib/i18n/server'

export default async function Test() {
  const { t } = await getServerTranslation('en')

  return <div>{t('welcome')}</div>
}
