export type PostVariant = 'featured' | 'row' | 'note'

export type PostAuthor = {
  name: string
  avatarUrl?: string
}

export type PostCoverImage = {
  src: string
  alt: string
}

export type PostListItem = {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  author: PostAuthor
  coverImage?: PostCoverImage
  badge?: string
  variant: PostVariant
}
