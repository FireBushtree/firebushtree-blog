import NavBar from '@/components/business/nav-bar'
import type { LocaleEnum } from '@/lib/i18n/constants'

import PostList from './_components/post-list'
import { postItems } from './_lib/post-data'

export default async function PostPage(props: {
  params: { locale: LocaleEnum }
}) {
  const { locale } = await props.params

  return (
    <div>
      <NavBar locale={locale} />
      <main className="min-h-screen bg-background text-foreground">
        <section className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 pb-16 pt-24 md:px-6">
          <PostList items={postItems} />
        </section>
      </main>
    </div>
  )
}
