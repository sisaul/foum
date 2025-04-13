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
  alignTop?: boolean
}

export default function ProductTextSection({ 
  image, 
  title, 
  description, 
  link,
  alignTop = false
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
        <div className={`flex flex-col ${alignTop ? '' : 'justify-between'} h-full py-0`}>
          {title && (
            <div className="leading-none">
              <h2 className="title whitespace-pre-line">{title}</h2>
            </div>
          )}
          <div className={`flex flex-col ${alignTop ? '' : 'mt-auto'} pt-4 md:pt-6`}>
            <p className="body mb-2 max-w-xl">{description}</p>
            {link.href && link.text && (
              <Link 
                href={link.href}
                className="caption hover:opacity-70 transition-opacity underline"
              >
                {link.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

