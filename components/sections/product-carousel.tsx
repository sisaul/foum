"use client"

import { useState, useEffect, useRef } from "react"
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
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showArrows, setShowArrows] = useState(false)
  const [imageHeight, setImageHeight] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const textColor = darkMode ? "text-white" : "text-foum-black"
  const itemsPerPage = productGridProps.columns || 4
  
  useEffect(() => {
    if (products.length > 0) {
      setCurrentIndex(prev => Math.min(prev, products.length - 1));
    }
  }, [products]);

  useEffect(() => {
    const updateImageHeight = () => {
      if (containerRef.current) {
        const imageContainer = containerRef.current.querySelector('.aspect-square');
        if (imageContainer) {
          setImageHeight(imageContainer.clientHeight);
        }
      }
    };

    updateImageHeight();
    window.addEventListener('resize', updateImageHeight);
    return () => window.removeEventListener('resize', updateImageHeight);
  }, []);

  const shouldShowArrows = products.length > itemsPerPage
  
  const getVisibleProducts = () => {
    if (products.length <= itemsPerPage) {
      return products;
    }
    
    const wrappedProducts = [...products];
    const result = [];
    for (let i = 0; i < itemsPerPage; i++) {
      const index = (currentIndex + i) % products.length;
      result.push(wrappedProducts[index]);
    }
    
    return result;
  };
  
  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % products.length);
  }

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + products.length) % products.length);
  }

  const visibleProducts = getVisibleProducts();

  return (
    <section className="w-full">
      <div className="max-w-[88rem] mx-auto">
        <div className="section-spacing">
          <div className={`w-full border-t-4 ${darkMode ? "border-[#E9E4DD]" : "border-[#000000]"} mb-4`}></div>
          <h2 className={`caption mb-8 ${textColor}`}>{title}</h2>
          
          <div 
            ref={containerRef}
            className="relative"
            onMouseEnter={() => setShowArrows(true)}
            onMouseLeave={() => setShowArrows(false)}
          >
            <ProductGridSection 
              {...productGridProps} 
              products={visibleProducts}
              columns={itemsPerPage}
            />

            {shouldShowArrows && showArrows && (
              <>
                <button
                  type="button"
                  onClick={prevSlide}
                  style={{ top: `${imageHeight / 2}px` }}
                  className="absolute left-2 transform -translate-y-1/2 pointer-events-auto text-white w-12 h-12 flex items-center justify-center text-3xl font-bold hover:text-gray-200 transition-all z-10 drop-shadow-lg"
                  aria-label="Previous slide"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  style={{ top: `${imageHeight / 2}px` }}
                  className="absolute right-2 transform -translate-y-1/2 pointer-events-auto text-white w-12 h-12 flex items-center justify-center text-3xl font-bold hover:text-gray-200 transition-all z-10 drop-shadow-lg"
                  aria-label="Next slide"
                >
                  →
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
} 