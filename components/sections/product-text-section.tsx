"use client"

import Image from "next/image"
import Link from "next/link"

export interface ProductTextSectionProps {
  image: {
    src: string
    alt: string
  }
  title?: string
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
    <section className="py-8 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 px-5 md:px-0">
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
            <p className="body mb-4 max-w-xl">{description}</p>
            {link.href && link.text && (
              <Link 
                href={link.href}
                className="caption hover:opacity-70 transition-opacity md:underline md:decoration-1 md:underline-offset-4 flex items-center"
              >
                <span className="mr-2">{link.text}</span>
                <Image 
                  src="/ReadMoreArrow.svg" 
                  alt="Read more" 
                  width={18} 
                  height={18}
                  className="inline-block md:hidden" 
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

