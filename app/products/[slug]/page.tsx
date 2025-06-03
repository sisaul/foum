import { sanityFetch } from "@/lib/sanity/live";
import { urlFor } from "@/lib/sanity/image";
import { ProductSubpage } from "@/lib/sanity/types";
import ProductDetailClient from "./ProductDetailClient";

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const result = await sanityFetch({
    query: `*[_type == "productSubpage" && slug.current == $slug][0]{
      _id,
      _type,
      title,
      slug,
      description,
      mainImage,
      images,
      materials,
      sizes,
      accordionSections[]{
        _key,
        _type,
        title,
        // Conditionally fetch fields based on _type
        _type == 'downloadableAssetsSection' => {
          assets[]{
            _key,
            type,
            files[] { // Target the files array
              asset->{_id, url, originalFilename} // Fetch asset details including originalFilename
            }
          }
        },
        _type == 'faqSection' => {
          items[]{
            _key,
            question,
            answer
          }
        },
        _type == 'findUsInSection' => {
          locations[]{
            _key,
            name,
            details
          }
        }
      },
      relatedProductsTitle,
      relatedProducts[]->{
        _id,
        title,
        slug,
        mainImage
      }
    }`,
    params: { slug }
  });
  const product: ProductSubpage | null = (result && typeof result === 'object' && 'data' in result)
    ? result.data
    : result;

  // Debug log
  // eslint-disable-next-line no-console
  // console.log("Fetched product:", product);

  if (!product) {
    return <div className="p-12 text-center text-red-600">Product not found or data fetch failed. Check console for details.</div>;
  }

  // Prepare images for the client component
  let imagesArr = product.images && product.images.length > 0 ? [...product.images] : [];
  if (product.mainImage && product.mainImage.asset) {
    // Check if mainImage is already in imagesArr (by asset ref)
    const mainImageRef = product.mainImage.asset._ref;
    const alreadyIncluded = imagesArr.some(img => img.asset && img.asset._ref === mainImageRef);
    if (!alreadyIncluded) {
      imagesArr = [product.mainImage, ...imagesArr];
    }
  }
  const images = imagesArr.map(img => ({
    src: urlFor(img).url(),
    alt: img.alt || product.title
  }));

  // Related products for ProductCarousel
  const relatedProducts = (product.relatedProducts || []).map(rp => ({
    title: rp.title,
    slug: rp.slug.current,
    imageSrc: rp.mainImage ? urlFor(rp.mainImage).url() : ""
  }));

  return (
    <ProductDetailClient
      product={product}
      images={images}
      relatedProducts={relatedProducts}
    />
  );
}

