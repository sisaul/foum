import Layout from "@/components/layout"
import ProductGridSection from "@/components/sections/product-grid-section"

export default function ProductsPage() {
  const products = [
    { title: "SIDEBOARD MAI", slug: "sideboard-mai", imageSrc: "/images/shelf-60.jpg" },
    { title: "SHELF F20", slug: "shelf-f20", imageSrc: "/images/shelf-120.jpg" },
    { title: "CANDLE HOLDER", slug: "candle-holder", imageSrc: "/images/shelf-60.jpg" },
    { title: "MIRROR", slug: "mirror", imageSrc: "/images/shelf-120.jpg" },
    { title: "HEADBOARD", slug: "headboard", imageSrc: "/images/shelf-60.jpg" },
    { title: "BED", slug: "bed", imageSrc: "/images/shelf-120.jpg" },
  ]

  return (
    <Layout>
      <div className="max-w-[88rem] mx-auto">
        <div className="py-8 md:py-16 px-5 md:px-16 pb-10 md:pb-24">
          <ProductGridSection 
            products={products} 
            columns={2} 
            largeImages={true}
          />
        </div>
      </div>
    </Layout>
  )
}

