export type PostAuthor = {
  name: string
  avatarUrl?: string
}

export type PostImage = {
  src: string
  alt: string
}

export type PostQuote = {
  text: string
  author: string
}

export type PostComment = {
  id: string
  author: string
  avatarUrl?: string
  timeAgo: string
  content: string
  likes: number
}

export type PostDetail = {
  slug: string
  title: string
  category: string
  readTime: string
  date: string
  author: PostAuthor
  heroImage: PostImage
  lead: string
  paragraphs: string[]
  quote: PostQuote
  inlineImage: PostImage & { caption: string }
  tags: string[]
  stats: {
    likes: string
    comments: string
  }
  comments: PostComment[]
}
