'use client'

import i18n from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next'
import { LocaleList } from './constants'

export function initI18next(lng: string) {
  i18n
    .use(initReactI18next)
    .use(resourcesToBackend((lang: string) => import(`@/locales/${lang}.json`)))
    .init({
      supportedLngs: LocaleList,
      lng,
      interpolation: { escapeValue: false },
    })

  return i18n
}

export default i18n
