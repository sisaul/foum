import Image from "next/image"
import Link from "next/link"

interface Product {
  title: string
  slug: string
  imageSrc: string
}

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      {products.map((product) => (
        <div key={product.slug} className="mb-8">
          <Link href={`/products/${product.slug}`}>
            <div className="relative w-full aspect-square mb-2 bg-white">
              <Image
                src={product.imageSrc || "/placeholder.svg"}
                alt={product.title}
                fill
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex justify-between items-center">
              <h3 className="heading-3">{product.title}</h3>
              <span className="caption underline">VIEW DETAILS</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

