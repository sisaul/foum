"use client"

import ProductCard from "../product-card"

interface Product {
  title: string
  slug: string
  imageSrc: string
  basePath?: string
  viewDetailsText?: string
  viewDetailsMobile?: boolean | string
  linkClassName?: string
}

export interface ProductGridProps {
  products: Product[]
  columns?: number
  basePath?: string
  hideViewDetailsLink?: boolean
  largeImages?: boolean
}

export default function ProductGridSection({ 
  products, 
  columns = 2, 
  basePath, 
  hideViewDetailsLink = false,
  largeImages = false
}: ProductGridProps) {
  const gridClass = columns === 2 
    ? "grid-cols-1 md:grid-cols-2" 
    : columns === 3
      ? "grid-cols-1 md:grid-cols-3"
      : "grid-cols-1 md:grid-cols-4"

  return (
    <div className={`grid ${gridClass} gap-6 md:gap-8`}>
      {products.map((product) => {
        const productWithBasePath = { 
          ...product,
          basePath: product.basePath ?? basePath 
        };
        return (
          <ProductCard 
            key={productWithBasePath.slug}
            {...productWithBasePath}
            viewDetailsText={hideViewDetailsLink ? "" : product.viewDetailsText}
            viewDetailsMobile={product.viewDetailsMobile}
            largeImage={largeImages}
          />
        )
      })}
    </div>
  )
} 