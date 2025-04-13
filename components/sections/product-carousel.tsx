"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

interface Product {
  title: string
  slug: string
  imageSrc: string
}

interface ProductCarouselProps {
  products: Product[]
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4 >= products.length ? 0 : prevIndex + 4))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 4 < 0 ? Math.max(products.length - 4, 0) : prevIndex - 4))
  }

  return (
    <div className="relative mb-16" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <h2 className="heading-2 mb-8 border-b border-black pb-2">DISCOVER MORE</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.slice(currentIndex, currentIndex + 4).map((product) => (
          <Link key={product.slug} href={`/products/${product.slug}`} className="block">
            <div className="relative w-full aspect-square mb-2 bg-white">
              <Image 
                src={product.imageSrc || "/placeholder.svg"} 
                alt={product.title} 
                fill 
                className="object-cover" 
              />
            </div>
            <h3 className="heading-3">{product.title}</h3>
          </Link>
        ))}
      </div>

      {isHovered && products.length > 4 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-black text-white p-2 rounded-full"
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-black text-white p-2 rounded-full"
            aria-label="Next slide"
          >
            →
          </button>
        </>
      )}
    </div>
  )
}

