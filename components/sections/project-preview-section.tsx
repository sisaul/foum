"use client"

import Image from "next/image"
import Link from "next/link"

export interface ProjectPreviewProps {
  title: string
  slug: string
  imageSrc: string
  description?: string
  linkText?: string
}

export default function ProjectPreview({ 
  title, 
  slug, 
  imageSrc, 
  description,
  linkText = "READ MORE" 
}: ProjectPreviewProps) {
  return (
    <section className="py-4 md:py-6 px-8 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        <div className="relative aspect-[4/3]">
          <Image 
            src={imageSrc || "/placeholder.svg"} 
            alt={title} 
            fill 
            className="object-cover" 
            priority
          />
        </div>
        <div className="flex flex-col justify-end">
          <h2 className="heading-2 mb-3">
            {title}
          </h2>
          {description && (
            <p className="body-large mb-3">
              {description}
            </p>
          )}
          <Link 
            href={`/studio/${slug}`} 
            className="caption underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity"
          >
            {linkText}
          </Link>
        </div>
      </div>
    </section>
  )
}

