"use client"

import Image from "next/image"
import Link from "next/link"

interface ProductTextGridProps {
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

export default function ProductTextGrid({ 
  image, 
  title, 
  description, 
  link, 
}: ProductTextGridProps) {
  return (
    <section className="py-5 md:py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
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
            {title.split(' ').map((word, index) => (
              <h2 
                key={index} 
                className="text-6xl md:text-8xl font-bold uppercase tracking-tight"
                style={{ lineHeight: '0.85' }} 
              >
                {word}
              </h2>
            ))}
          </div>
          <div className="flex flex-col mt-auto pt-4 md:pt-6">
            <p className="text-lg md:text-2xl mb-2 font-light max-w-xl leading-tight">{description}</p>
            <Link 
              href={link.href}
              className="text-base font-medium tracking-wide uppercase hover:opacity-80 transition-opacity underline decoration-1 underline-offset-4"
            >
              {link.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

