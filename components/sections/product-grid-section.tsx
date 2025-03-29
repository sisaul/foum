"use client"

import ProductCard from "../product-card"

interface Product {
  title: string
  slug: string
  imageSrc: string
}

interface ProductGridProps {
  products: Product[]
  columns?: number
}

export default function ProductGridSection({ products, columns = 2 }: ProductGridProps) {
  const gridClass = columns === 2 
    ? "grid-cols-1 md:grid-cols-2" 
    : columns === 3
      ? "grid-cols-1 md:grid-cols-3"
      : "grid-cols-1 md:grid-cols-4"

  return (
    <section className="px-8 md:px-16 py-4 md:py-6">
      <div className={`grid ${gridClass} gap-6 md:gap-16`}>
        {products.map((product) => (
          <ProductCard 
            key={product.slug}
            title={product.title}
            imageSrc={product.imageSrc}
            slug={product.slug}
            viewDetailsText="VIEW DETAILS"
          />
        ))}
      </div>
    </section>
  )
} 