"use client"

import Image from "next/image"
import Link from "next/link"

interface ProductTextSectionProps {
  image: {
    src: string
    alt: string
  }
  title: string
  description: string
  link: {
    href: string
    text: string
  }
}

export default function ProductTextSection({ 
  image, 
  title, 
  description, 
  link, 
}: ProductTextSectionProps) {
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
        <div className="flex flex-col justify-between h-full py-0">
          <div className="leading-none">
            <h2 className="title whitespace-pre-line">{title}</h2>
          </div>
          <div className="flex flex-col mt-auto pt-4 md:pt-6">
            <p className="body mb-2 max-w-xl">{description}</p>
            <Link 
              href={link.href}
              className="caption underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity"
            >
              {link.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

