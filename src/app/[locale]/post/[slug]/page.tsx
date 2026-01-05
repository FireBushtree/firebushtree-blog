import { notFound } from 'next/navigation'

import type { LocaleEnum } from '@/lib/i18n/constants'

import DetailBody from './_components/detail-body'
import DetailHero from './_components/detail-hero'
import DetailMeta from './_components/detail-meta'
import { getPostDetail } from './_lib/detail-utils'

export default async function PostDetailPage(props: {
  params: { locale: LocaleEnum; slug: string }
}) {
  const { locale, slug } = await props.params
  const post = getPostDetail(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <DetailHero image={post.heroImage} />
      <DetailMeta
        category={post.category}
        readTime={post.readTime}
        title={post.title}
        date={post.date}
        author={post.author}
      />
      <DetailBody
        lead={post.lead}
        paragraphs={post.paragraphs}
        quote={post.quote}
        inlineImage={post.inlineImage}
      />
    </div>
  )
}
