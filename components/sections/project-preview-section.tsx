"use client"

import Image from "next/image"
import Link from "next/link"

interface ProjectPreviewProps {
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
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-3 leading-none tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="text-base md:text-lg mb-3 font-light leading-tight">
              {description}
            </p>
          )}
          <Link 
            href={`/studio/${slug}`} 
            className="text-base uppercase underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity font-medium"
          >
            {linkText}
          </Link>
        </div>
      </div>
    </section>
  )
}

