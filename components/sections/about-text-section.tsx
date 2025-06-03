"use client"

import Image from "next/image"

interface AboutTextSectionProps {
  image: {
    src: string
    alt: string
  }
  description: string
}

export type { AboutTextSectionProps };
export default function AboutTextSection({ 
  image, 
  description,
}: AboutTextSectionProps) {
  return (
    <section className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 px-6 md:px-0">
        <div className="relative aspect-square">
          <Image 
            src={image.src || "/placeholder.svg"} 
            alt={image.alt} 
            fill 
            className="object-cover" 
          />
        </div>
        <div className="pt-4 md:pt-0">
          <p className="body">{description}</p>
        </div>
      </div>
    </section>
  )
} 