"use client"

import ProductGridSection, { ProductGridProps } from "./product-grid-section"

export interface FeaturedProductsSectionProps extends ProductGridProps {
  title?: string
}

export default function FeaturedProductsSection({ 
  title,
  ...productGridProps
}: FeaturedProductsSectionProps) {
  return (
    <section className="w-full">
      {title && (
        <h2 className="text-2xl uppercase font-bold mb-8 text-white">{title}</h2>
      )}
      
      {/* Product grid */}
      <ProductGridSection {...productGridProps} />
    </section>
  )
} 