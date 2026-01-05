import type { PostDetail } from '../_lib/detail-types'

type DetailBodyProps = {
  lead: PostDetail['lead']
  paragraphs: PostDetail['paragraphs']
  quote: PostDetail['quote']
  inlineImage: PostDetail['inlineImage']
}

export default function DetailBody({
  lead,
  paragraphs,
  quote,
  inlineImage,
}: DetailBodyProps) {
  return (
    <section className="space-y-6 px-4 py-2">
      <p className="typo-m18 text-foreground">{lead}</p>
      <p className="typo-b16 text-text-secondary">{paragraphs[0]}</p>
      <figure className="border-l-4 border-primary pl-4">
        <blockquote className="typo-t20 italic text-foreground">
          {quote.text}
        </blockquote>
        <figcaption className="typo-c12 mt-2 text-text-secondary">
          — {quote.author}
        </figcaption>
      </figure>
      <p className="typo-b16 text-text-secondary">{paragraphs[1]}</p>
      <div className="space-y-2">
        <div className="h-56 overflow-hidden rounded-lg bg-muted md:h-80">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${inlineImage.src})` }}
            role="img"
            aria-label={inlineImage.alt}
          />
        </div>
        <p className="typo-c12 text-center text-text-secondary italic">
          {inlineImage.caption}
        </p>
      </div>
      <p className="typo-b16 text-text-secondary">{paragraphs[2]}</p>
      <p className="typo-b16 text-text-secondary">{paragraphs[3]}</p>
    </section>
  )
}
