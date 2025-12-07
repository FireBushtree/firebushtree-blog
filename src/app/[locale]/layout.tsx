import NavBar from '@/components/business/nav-bar'
import type { LocaleEnum } from '@/lib/i18n/constants'
import I18nProvider from '@/providers/i18n-provider'
import '../globals.css'
import { ThemeProvider } from '@/providers/theme-provider'

export default async function RootLayout(props: {
  params: { locale: LocaleEnum }
  children: React.ReactNode
}) {
  const { locale } = await props.params

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider locale={locale}>
            <NavBar locale={locale} />
            {props.children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
