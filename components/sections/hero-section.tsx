"use client"

import Image from "next/image"

interface ShowroomSectionProps {
  image: {
    src: string
    alt: string
  }
  title: string
}

export default function ShowroomSection({ image, title }: ShowroomSectionProps) {
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
      <div className="px-8 md:px-16 py-4 border-t border-[#00000010]">
        <h2 className="text-base uppercase tracking-wide font-medium whitespace-nowrap overflow-hidden text-ellipsis leading-tight">
          {title}
        </h2>
      </div>
    </section>
  )
}

