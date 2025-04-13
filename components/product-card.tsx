"use client"

import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  title: string
  imageSrc: string
  slug: string
  viewDetailsText?: string
  basePath?: string
  linkClassName?: string
  largeImage?: boolean
}

export default function ProductCard({ 
  title, 
  imageSrc, 
  slug, 
  viewDetailsText = "VIEW DETAILS", 
  basePath = "/products",
  linkClassName = "",
  largeImage = false
}: ProductCardProps) {
  return (
    <div className="flex flex-col">
      <Link href={`${basePath}/${slug}`} className="block group">
        <div className={`relative ${largeImage ? 'aspect-[1.5/1]' : 'aspect-square'} mb-2`}>
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-opacity group-hover:opacity-90"
          />
        </div>
      </Link>
      <div className="pt-4 flex justify-between items-start">
        <h3 className="caption">{title}</h3>
        {viewDetailsText && (
          <Link 
            href={`${basePath}/${slug}`}
            className={`caption hover:opacity-70 transition-opacity underline ${linkClassName}`}
          >
            {viewDetailsText}
          </Link>
        )}
      </div>
    </div>
  )
} 