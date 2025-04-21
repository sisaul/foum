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
      <div className="relative h-[65vh] md:h-[90vh]">
        <Image 
          src={image.src || "/placeholder.svg"} 
          alt={image.alt} 
          fill 
          className="object-cover" 
          priority 
        />
      </div>
      <div className="px-5 md:px-16 py-4 md:py-5 bg-[#E3DAC0] dark:bg-[#1B1B1B]">
        <h2 className="caption md:whitespace-nowrap md:overflow-hidden md:text-ellipsis leading-tight">
          {title}
        </h2>
      </div>
    </section>
  )
} 