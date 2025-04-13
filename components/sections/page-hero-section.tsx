"use client"

import Image from "next/image"

interface HeroSectionProps {
  image: {
    src: string
    alt: string
  }
  title: string
}

export default function HeroSection({ image, title }: HeroSectionProps) {
  return (
    <section>
      <div className="relative h-[80vh] md:h-[90vh]">
        <Image 
          src={image.src || "/placeholder.svg"} 
          alt={image.alt} 
          fill 
          className="object-cover" 
          priority 
        />
      </div>
      <div className="container-padding py-4 border-t border-foum-black/10">
        <h2 className="caption whitespace-nowrap overflow-hidden text-ellipsis leading-tight">
          {title}
        </h2>
      </div>
    </section>
  )
} 