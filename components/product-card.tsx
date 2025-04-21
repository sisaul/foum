"use client"

import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  title: string
  imageSrc: string
  slug: string
  viewDetailsText?: string
  viewDetailsMobile?: string | boolean
  basePath?: string
  linkClassName?: string
  largeImage?: boolean
}

export default function ProductCard({ 
  title, 
  imageSrc, 
  slug, 
  viewDetailsText = "VIEW DETAILS",
  viewDetailsMobile,
  basePath = "/products",
  linkClassName = "",
  largeImage = false
}: ProductCardProps) {
  // Check if dark mode by looking at the linkClassName or parent context
  const isDarkMode = 
    linkClassName?.includes("text-white") || 
    basePath?.includes("/studio") ||
    false;
  
  return (
    <div className="flex flex-col mb-8 md:mb-0">
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
      <div className="pt-3 md:pt-4 flex justify-between items-start">
        <h3 className="caption">{title}</h3>
        {(viewDetailsText || viewDetailsMobile) && (
          <Link 
            href={`${basePath}/${slug}`}
            className={`caption hover:opacity-70 transition-opacity ${linkClassName}`}
          >
            {/* Show arrow icon on mobile, READ MORE on desktop */}
            <span className="md:hidden">
              {viewDetailsMobile ? (
                <Image 
                  src="/ReadMoreArrow.svg" 
                  alt="Read more" 
                  width={18} 
                  height={18} 
                  className={isDarkMode ? "invert" : ""} 
                />
              ) : viewDetailsText}
            </span>
            <span className="hidden md:inline">{viewDetailsText}</span>
          </Link>
        )}
      </div>
    </div>
  )
} 