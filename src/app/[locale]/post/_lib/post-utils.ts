import type { PostVariant } from './post-types'

const containerClasses: Record<PostVariant, string> = {
  featured:
    'group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md',
  row: 'overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md',
  note:
    'overflow-hidden rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md',
}

export function getPostCardContainerClasses(variant: PostVariant) {
  return containerClasses[variant]
}
