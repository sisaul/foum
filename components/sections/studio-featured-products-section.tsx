"use client"

import ProductGridSection, { ProductGridProps } from "./product-grid-section"

export interface StudioFeaturedProductsSectionProps extends ProductGridProps {
  title?: string
  textColor?: string
}

export default function StudioFeaturedProductsSection({ 
  title = "FEATURED PRODUCTS",
  textColor = "text-white",
  ...productGridProps
}: StudioFeaturedProductsSectionProps) {
  const lineColor = textColor === "text-white" ? "bg-white" : "bg-[#1E1E1E]"

  return (
    <section className="w-full">
      {/* Horizontal line at the top */}
      <div className={`w-full h-[3px] ${lineColor} mb-4`}></div>
      
      {/* Title on the left top */}
      <h2 className={`text-2xl uppercase font-bold mb-8 ${textColor}`}>{title}</h2>
      
      {/* Product grid */}
      <ProductGridSection {...productGridProps} />
    </section>
  )
} 