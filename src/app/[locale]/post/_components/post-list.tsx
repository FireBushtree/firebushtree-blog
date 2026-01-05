import type { PostListItem } from '../_lib/post-types'
import PostCard from './post-card'

type PostListProps = {
  items: PostListItem[]
}

export default function PostList({ items }: PostListProps) {
  return (
    <div className="flex flex-col gap-6">
      {items.map((item) => (
        <PostCard key={item.id} item={item} />
      ))}
    </div>
  )
}
