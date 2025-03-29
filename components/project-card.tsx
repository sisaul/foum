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
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      {description && <p className="text-sm text-gray-700 mb-2">{description}</p>}
      <div className="flex items-center">
        <span className="text-sm">View project</span>
        <span className="ml-2">→</span>
      </div>
    </Link>
  )
} 