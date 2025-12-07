import NavBar from '@/components/business/nav-bar'
import type { LocaleEnum } from '@/lib/i18n/constants'
import I18nProvider from '@/providers/i18nProvider'
import '../globals.css'

export default async function RootLayout(props: {
  params: { locale: LocaleEnum }
  children: React.ReactNode
}) {
  const { locale } = await props.params

  return (
    <html lang={locale}>
      <body>
        <I18nProvider locale={locale}>
          <NavBar locale={locale} />
          {props.children}
        </I18nProvider>
      </body>
    </html>
  )
}
