import { ArrowRight, Heart, Share2 } from 'lucide-react'

import type { PostListItem } from '../_lib/post-types'
import { getPostCardContainerClasses } from '../_lib/post-utils'

type PostCardProps = {
  item: PostListItem
}

export default function PostCard({ item }: PostCardProps) {
  const containerClassName = getPostCardContainerClasses(item.variant)
  const coverStyle = item.coverImage
    ? { backgroundImage: `url(${item.coverImage.src})` }
    : undefined
  const coverAlt = item.coverImage?.alt ?? item.title
  const avatarStyle = item.author.avatarUrl
    ? { backgroundImage: `url(${item.author.avatarUrl})` }
    : undefined

  if (item.variant === 'featured') {
    return (
      <article className={containerClassName}>
        <div
          className="relative h-56 bg-cover bg-center"
          style={coverStyle}
          role="img"
          aria-label={coverAlt}
        >
          {item.badge ? (
            <div className="absolute left-4 top-4">
              <span className="typo-t12 inline-flex items-center rounded-md bg-card/90 px-2.5 py-1 text-foreground backdrop-blur-sm">
                {item.badge}
              </span>
            </div>
          ) : null}
        </div>
        <div className="p-5">
          <div className="mb-3 flex items-center gap-2">
            <span className="typo-t12 text-primary">{item.category}</span>
            <span className="typo-t12 text-text-secondary/60">•</span>
            <span className="typo-t12 text-text-secondary">{item.readTime}</span>
          </div>
          <h2 className="typo-h32 text-foreground transition-colors group-hover:text-primary">
            {item.title}
          </h2>
          <p className="typo-b14 mt-2 text-text-secondary">{item.excerpt}</p>
          <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
            <div className="flex items-center gap-2">
              <div
                className="h-8 w-8 rounded-full bg-muted bg-cover bg-center"
                style={avatarStyle}
                role="img"
                aria-label={item.author.name}
              />
              <div className="flex flex-col">
                <span className="typo-b14 text-foreground">
                  {item.author.name}
                </span>
                <span className="typo-c11 text-text-secondary">
                  {item.date}
                </span>
              </div>
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-2 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              aria-label="Open article"
            >
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </article>
    )
  }

  if (item.variant === 'row') {
    return (
      <article className={containerClassName}>
        <div className="flex h-full flex-col md:flex-row md:items-stretch">
          <div
            className="h-48 w-full shrink-0 bg-cover bg-center md:h-auto md:w-48"
            style={coverStyle}
            role="img"
            aria-label={coverAlt}
          />
          <div className="flex flex-1 flex-col justify-between p-5">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="typo-t12 text-primary">{item.category}</span>
                <span className="typo-t12 text-text-secondary/60">•</span>
                <span className="typo-t12 text-text-secondary">
                  {item.readTime}
                </span>
              </div>
              <h3 className="typo-t20 text-foreground">{item.title}</h3>
              <p className="typo-b14 mt-3 text-text-secondary line-clamp-2">
                {item.excerpt}
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="typo-c12 text-text-secondary">
                  {item.author.name}
                </span>
                <span className="typo-c12 text-text-secondary/60">•</span>
                <span className="typo-c12 text-text-secondary">
                  {item.date}
                </span>
              </div>
              <button
                type="button"
                className="typo-t12 text-primary hover:underline"
              >
                Read Article
              </button>
            </div>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className={containerClassName}>
      <div className="mb-2 flex items-center gap-2">
        <span className="typo-t12 text-primary">{item.category}</span>
        <span className="typo-t12 text-text-secondary/60">•</span>
        <span className="typo-t12 text-text-secondary">{item.readTime}</span>
      </div>
      <h3 className="typo-t20 text-foreground">{item.title}</h3>
      <p className="typo-b14 mt-3 text-text-secondary">{item.excerpt}</p>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="typo-c12 text-text-secondary">
            {item.author.name}
          </span>
          <span className="typo-c12 text-text-secondary/60">•</span>
          <span className="typo-c12 text-text-secondary">{item.date}</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="text-text-secondary transition-colors hover:text-primary"
            aria-label="Favorite"
          >
            <Heart className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="text-text-secondary transition-colors hover:text-primary"
            aria-label="Share"
          >
            <Share2 className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  )
}
