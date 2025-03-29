"use client"

import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  title: string
  imageSrc: string
  slug: string
  viewDetailsText?: string
}

export default function ProductCard({ title, imageSrc, slug, viewDetailsText = "VIEW DETAILS" }: ProductCardProps) {
  return (
    <div className="flex flex-col">
      <Link href={`/products/${slug}`} className="block group">
        <div className="relative aspect-square mb-2">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-opacity group-hover:opacity-90"
          />
        </div>
      </Link>
      <div className="pt-4 flex justify-between items-start">
        <h3 className="text-base uppercase font-medium leading-tight">{title}</h3>
        <Link 
          href={`/products/${slug}`} 
          className="text-base uppercase font-medium hover:opacity-70 transition-opacity leading-tight underline decoration-1 underline-offset-4"
        >
          {viewDetailsText}
        </Link>
      </div>
    </div>
  )
} 