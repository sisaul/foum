import Layout from "@/components/layout"
import ProductCard from "@/components/product-card"

export default function ProductsPage() {
  const products = [
    { title: "SIDEBOARD MAI", slug: "sideboard-mai", imageSrc: "/placeholder.svg?height=400&width=400" },
    { title: "SHELF F20", slug: "shelf-f20", imageSrc: "/placeholder.svg?height=400&width=400" },
    { title: "CANDLE HOLDER", slug: "candle-holder", imageSrc: "/placeholder.svg?height=400&width=400" },
    { title: "MIRROR", slug: "mirror", imageSrc: "/placeholder.svg?height=400&width=400" },
    { title: "HEADBOARD", slug: "headboard", imageSrc: "/placeholder.svg?height=400&width=400" },
    { title: "BED", slug: "bed", imageSrc: "/placeholder.svg?height=400&width=400" },
  ]

  return (
    <Layout>
      <div className="px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.slug} title={product.title} imageSrc={product.imageSrc} slug={product.slug} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

