"use client"

import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  imageSrc: string
  slug: string
  description?: string
}

export default function ProjectCard({ title, imageSrc, slug, description }: ProjectCardProps) {
  return (
    <Link href={`/studio/${slug}`} className="block group">
      <div className="relative aspect-square bg-white mb-4">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-opacity group-hover:opacity-90"
        />
      </div>
      <h3 className="heading-3 mb-2">{title}</h3>
      {description && <p className="caption mb-2">{description}</p>}
      <Link href={`/studio/${slug}`} className="caption underline">View project</Link>
    </Link>
  )
} 