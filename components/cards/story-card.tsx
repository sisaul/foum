import Image from "next/image"
import Link from "next/link"

interface StoryCardProps {
  title: string
  imageSrc: string
  slug: string
  description?: string
}

export default function StoryCard({ title, imageSrc, slug, description }: StoryCardProps) {
  return (
    <div className="mb-16">
      <div className="relative aspect-square mb-4">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="title font-bold mb-2">{title}</h3>
          {description && <p className="body mb-2">{description}</p>}
        </div>
        <Link href={`/stories/${slug}`} className="caption underline">
          READ MORE
        </Link>
      </div>
    </div>
  )
}

