import 'server-only' // 确保只在服务端被用
import { createInstance, type i18n, type TFunction } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { cache } from 'react'
import { LocaleEnum, LocaleList } from './constants'

async function initI18next(lng: string) {
  const i18nInstance = createInstance()
  i18nInstance.use(
    resourcesToBackend((lang: string) => import(`@/locales/${lang}.json`)),
  )

  await i18nInstance.init({
    fallbackLng: LocaleEnum.EN,
    supportedLngs: LocaleList,
    lng,
    interpolation: { escapeValue: false },
  })

  return i18nInstance
}

// 用 cache 包一下，防止同一请求里重复 init
export const getServerTranslation = cache(
  async (lng: string): Promise<{ t: TFunction; i18nInstance: i18n }> => {
    const i18nInstance = await initI18next(lng)

    return {
      i18nInstance,
      t: i18nInstance.getFixedT(lng, 'translation'),
    }
  },
)
