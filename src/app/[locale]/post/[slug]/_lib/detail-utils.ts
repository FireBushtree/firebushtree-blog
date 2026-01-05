import { postDetails } from './detail-data'

export function getPostDetail(slug: string) {
  return postDetails.find((item) => item.slug === slug) ?? null
}
