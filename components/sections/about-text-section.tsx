"use client"

import Image from "next/image"

interface AboutTextSectionProps {
  image: {
    src: string
    alt: string
  }
  description: string
}

export default function AboutTextSection({ 
  image, 
  description,
}: AboutTextSectionProps) {
  return (
    <section className="section-spacing">
      <div className="grid grid-cols-1 md:grid-cols-2 standard-gap">
        <div className="relative aspect-square">
          <Image 
            src={image.src || "/placeholder.svg"} 
            alt={image.alt} 
            fill 
            className="object-cover" 
          />
        </div>
        <div>
          <p className="body max-w-[80%]">{description}</p>
        </div>
      </div>
    </section>
  )
} 