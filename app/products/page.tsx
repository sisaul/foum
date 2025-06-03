import ProductGridSection from "@/components/sections/product-grid-section"
import { sanityFetch } from "@/lib/sanity/live";
import { urlFor } from "@/lib/sanity/image";

export default async function ProductsPage() {
  // Fetch the ordered product subpages from the products document
  const result = await sanityFetch({
    query: `*[_type == "products"][0]{
      products[]->{
        _id,
        title,
        slug,
        mainImage
      }
    }`
  });
  const data = result?.data || result;
  const products = (data?.products || []).map((p: { title: string; slug: { current: string }; mainImage?: any }) => ({
    title: p.title,
    slug: p.slug.current,
    imageSrc: p.mainImage ? urlFor(p.mainImage).url() : "",
  }));

  return (
    <div className="max-w-[88rem] mx-auto">
      <div className="py-8 md:py-16 px-5 md:px-16 pb-10 md:pb-24">
        <ProductGridSection 
          products={products} 
          columns={2} 
          largeImages={true}
        />
      </div>
    </div>
  )
}

