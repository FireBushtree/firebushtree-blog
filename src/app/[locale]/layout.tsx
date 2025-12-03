import I18nProvider from '@/lib/i18n/provider'
import '../globals.css'

export default async function RootLayout(props: {
  params: Promise<{ locale: string }>
  children: React.ReactNode
}) {
  const { locale } = await props.params

  return (
    <html lang="en">
      <body>
        <I18nProvider locale={locale}>{props.children}</I18nProvider>
      </body>
    </html>
  )
}
