import type { PostAuthor } from '../_lib/detail-types'

type DetailMetaProps = {
  category: string
  readTime: string
  title: string
  date: string
  author: PostAuthor
}

export default function DetailMeta({
  category,
  readTime,
  title,
  date,
  author,
}: DetailMetaProps) {
  const avatarStyle = author.avatarUrl
    ? { backgroundImage: `url(${author.avatarUrl})` }
    : undefined

  return (
    <section className="px-4 pb-2 pt-4">
      <div className="mb-3 flex items-center gap-2">
        <span className="typo-t12 rounded-full bg-primary/10 px-2 py-1 text-primary">
          {category}
        </span>
        <span className="typo-c12 text-text-secondary">{readTime}</span>
      </div>
      <h1 className="typo-h40 text-foreground">{title}</h1>
      <div className="mt-4 flex items-center gap-3 border-b border-border pb-6">
        <div
          className="h-10 w-10 rounded-full bg-muted bg-cover bg-center ring-2 ring-background"
          style={avatarStyle}
          role="img"
          aria-label={author.name}
        />
        <div className="flex flex-col">
          <span className="typo-b14 text-foreground">owen</span>
          <span className="typo-c12 text-text-secondary">{date}</span>
        </div>
      </div>
    </section>
  )
}
