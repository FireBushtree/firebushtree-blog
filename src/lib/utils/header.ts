import { headers } from 'next/headers'
import { LocaleEnum } from '../i18n/constants'

export async function getLocale() {
  const h = await headers()
  return h.get('LOCAL_COOKIE_KEY') ?? LocaleEnum.EN
}
