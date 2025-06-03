import ProductGridSection from "@/components/sections/product-grid-section";
import { sanityFetch } from "@/lib/sanity/live";
import { urlFor } from "@/lib/sanity/image";

// Define a type for subpages
interface StudioSubpageGridItem {
  title: string;
  slug: { current: string };
  mainImage?: { asset?: { _ref: string; _type: string } };
  heroImageSection?: { image?: { asset?: { _ref: string; _type: string }, alt?: string } };
}

export default async function StudioPage() {
  // Fetch the studio page data
  const result = await sanityFetch({
    query: `*[_type == "studio"][0]{
      subpages[]->{
        _id,
        title,
        slug,
        mainImage,
        heroImageSection
      }
    }`
  });
  const data = result?.data || result;
  const subpages = (data?.subpages || []).map((p: StudioSubpageGridItem) => ({
    title: p.title,
    slug: p.slug.current,
    imageSrc: p.mainImage && p.mainImage.asset
      ? urlFor(p.mainImage).url()
      : (p.heroImageSection && p.heroImageSection.image && p.heroImageSection.image.asset
        ? urlFor(p.heroImageSection.image).url()
        : "/placeholder.svg"),
    basePath: "/studio",
  viewDetailsText: "READ MORE",
  viewDetailsMobile: true,
  linkClassName: "md:underline md:decoration-1 md:underline-offset-4 md:text-base"
}));

  // Split into rows of 2, as before
  const rows = [];
  for (let i = 0; i < subpages.length; i += 2) {
    rows.push(subpages.slice(i, i + 2));
  }

  return (
      <div className="max-w-[88rem] mx-auto">
        <div className="py-8 md:py-16 px-5 md:px-16 pb-10 md:pb-24">
        <div className="space-y-8 md:space-y-12 pt-8 md:pt-16">
          {rows.map((row, idx) => (
            <ProductGridSection 
              key={idx}
              products={row}
              columns={2}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

