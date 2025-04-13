"use client"

import ProductGridSection, { ProductGridProps } from "./product-grid-section"

export interface FeaturedProductsHeaderSectionProps extends ProductGridProps {
  title?: string
  darkMode?: boolean
}

export default function FeaturedProductsHeaderSection({ 
  title = "FEATURED PRODUCTS",
  darkMode = false, // Default to light mode (text and line are black)
  ...productGridProps
}: FeaturedProductsHeaderSectionProps) {
  const textColor = darkMode ? "text-white" : "text-foum-black"

  return (
    <section className="w-full">
      <div className="max-w-[88rem] mx-auto">
        <div className="section-spacing">
          {/* Horizontal line at the top */}
          <div className={`w-full border-t-4 ${darkMode ? "border-[#E9E4DD]" : "border-[#000000]"} mb-4`}></div>
          
          {/* Title on the left top */}
          <h2 className={`caption mb-8 ${textColor}`}>{title}</h2>
          
          {/* Product grid */}
          <ProductGridSection {...productGridProps} />
        </div>
      </div>
    </section>
  )
} 