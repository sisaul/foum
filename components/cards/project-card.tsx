import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  imageSrc: string
  slug: string
}

export default function ProjectCard({ title, imageSrc, slug }: ProjectCardProps) {
  return (
    <div className="mb-16">
      <div className="relative aspect-square mb-2">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="flex justify-between items-center">
        <h3 className="title font-bold">{title}</h3>
        <Link href={`/studio/${slug}`} className="caption underline">
          READ MORE
        </Link>
      </div>
    </div>
  )
}

