"use client"

import { useState } from "react"
import ProductGridSection, { ProductGridProps } from "./product-grid-section"

export interface ProductCarouselProps extends ProductGridProps {
  title?: string
  darkMode?: boolean
}

export default function ProductCarousel({ 
  title = "FEATURED PRODUCTS",
  darkMode = false,
  products = [],
  ...productGridProps
}: ProductCarouselProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const textColor = darkMode ? "text-white" : "text-foum-black"
  const itemsPerPage = productGridProps.columns || 2
  const totalPages = Math.ceil(products.length / itemsPerPage)
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const visibleProducts = products.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  )

  return (
    <section 
      className="w-full relative" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-[88rem] mx-auto">
        <div className="section-spacing">
          <div className={`w-full border-t-4 ${darkMode ? "border-[#E9E4DD]" : "border-[#000000]"} mb-4`}></div>
          <h2 className={`caption mb-8 ${textColor}`}>{title}</h2>
          
          <ProductGridSection 
            {...productGridProps} 
            products={visibleProducts}
          />

          {isHovered && products.length > itemsPerPage && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Previous slide"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Next slide"
              >
                →
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  )
} 