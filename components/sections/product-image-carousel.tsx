"use client"

import { useState } from "react"
import Image from "next/image"

interface ProductImageCarouselProps {
  images: {
    src: string
    alt: string
  }[]
}

export default function ProductImageCarousel({ images }: ProductImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cursorStyle, setCursorStyle] = useState<'default' | 'prev' | 'next'>('default')
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e
    const { left, width } = currentTarget.getBoundingClientRect()
    const x = clientX - left

    setCursorPosition({ x: clientX, y: clientY })

    if (x < width / 2) {
      setCursorStyle('prev')
    } else {
      setCursorStyle('next')
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, currentTarget } = e
    const { left, width } = currentTarget.getBoundingClientRect()
    const x = clientX - left

    if (x < width / 2) {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    } else {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }
  }

  const handleMouseLeave = () => {
    setCursorStyle('default')
  }

  return (
    <div 
      className="relative aspect-square w-full"
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: cursorStyle === 'default' ? 'default' : 'none' }}
    >
      {/* Custom cursor */}
      {cursorStyle !== 'default' && (
        <div 
          className="fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 text-[64px] text-[#000000]"
          style={{ 
            left: cursorPosition.x,
            top: cursorPosition.y
          }}
        >
          {cursorStyle === 'prev' ? '<' : '>'}
        </div>
      )}

      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={image.src}
            className={`
              absolute inset-0 transition-opacity duration-500
              ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}
            `}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-black' : 'bg-black/30'
            }`}
            onClick={(e) => {
              e.stopPropagation()
              setCurrentIndex(index)
            }}
          />
        ))}
      </div>
    </div>
  )
}