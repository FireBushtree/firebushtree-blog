import Image from 'next/image'
import NavBar from '@/components/business/nav-bar'
import type { LocaleEnum } from '@/lib/i18n/constants'
import { getServerTranslation } from '@/lib/i18n/server'

export default async function Home(props: { params: { locale: LocaleEnum } }) {
  const { locale } = await props.params
  const { t } = await getServerTranslation(locale)

  const posts = [
    {
      slug: 'demo-post-1',
      title: t('home.post1.title'),
      description: t('home.post1.description'),
      updatedAt: '2025-12-01',
    },
    {
      slug: 'demo-post-2',
      title: t('home.post2.title'),
      description: t('home.post2.description'),
      updatedAt: '2025-11-20',
    },
    {
      slug: 'demo-post-3',
      title: t('home.post3.title'),
      description: t('home.post3.description'),
      updatedAt: '2025-11-05',
    },
  ]

  return (
    <div>
      <NavBar locale={locale} />
      <main className="pt-16 min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">
        <section className="mx-auto max-w-5xl px-6 pb-16 pt-10 sm:pt-16">
          <header className="mb-8 space-y-2">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-500">
              {t('home.badge')}
            </p>
            <h1 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-2xl">
              {t('home.title')}
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {t('home.subtitle')}
            </p>
          </header>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="relative h-28 bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src="/window.svg"
                    alt={post.title}
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 768px) 30vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {post.description}
                  </p>
                  <span className="mt-4 text-[11px] text-zinc-400 dark:text-zinc-500">
                    {t('home.updatedAtLabel')} {post.updatedAt}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
