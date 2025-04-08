"use client"

import ProductGridSection, { ProductGridProps } from "./product-grid-section"

export interface StudioFeaturedProductsSectionProps extends ProductGridProps {
  title?: string
}

export default function StudioFeaturedProductsSection({ 
  title = "FEATURED PRODUCTS",
  ...productGridProps
}: StudioFeaturedProductsSectionProps) {
  return (
    <section className="w-full">
      {/* Horizontal line at the top */}
      <div className="w-full h-[3px] bg-white mb-4"></div>
      
      {/* Title on the left top */}
      <h2 className="text-2xl uppercase font-bold mb-8 text-white">{title}</h2>
      
      {/* Product grid */}
      <ProductGridSection {...productGridProps} />
    </section>
  )
} 