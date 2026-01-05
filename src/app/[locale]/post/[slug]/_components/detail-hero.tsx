import type { PostImage } from '../_lib/detail-types'

type DetailHeroProps = {
  image: PostImage
}

export default function DetailHero({ image }: DetailHeroProps) {
  return (
    <div className="px-4 pb-2 pt-4">
      <div className="relative h-64 overflow-hidden rounded-lg bg-muted shadow-sm">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
          style={{ backgroundImage: `url(${image.src})` }}
          role="img"
          aria-label={image.alt}
        />
      </div>
    </div>
  )
}
