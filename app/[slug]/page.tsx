import { client } from '../../sanity/lib/client' // Assuming this is the correct client
import { defineQuery } from 'next-sanity'
import { notFound } from 'next/navigation'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image' // If you use Next.js Image component in sections

// Import existing section components
import AboutTextSection from '@/components/sections/about-text-section'
import PageHeroSection from '@/components/sections/page-hero-section'
import ProductCarousel from '@/components/sections/product-carousel'
import TitleTextLayoutSection from '@/components/sections/title-text-layout-section'
import TextSection from '@/components/sections/text-section'
import TitleSection from '@/components/sections/title-section'
import ImageGridSection from '@/components/sections/image-grid-section'
import ProductGridSection from '@/components/sections/product-grid-section'
import ProductTextSection from '@/components/sections/product-text-section'
import ProductImageCarousel from '@/components/sections/product-image-carousel'
import ImageSection from '@/components/sections/image-section'
import ProjectPreviewSection from '@/components/sections/project-preview-section'
import SingleImageCarousel from '@/components/sections/single-image-carousel'
import FeaturedProductsHeaderSection from '@/components/sections/featured-products-header-section'
import ImageCarousel from '@/components/sections/image-carousel'

// Configure the Sanity image URL builder
const builder = imageUrlBuilder(client)
function urlFor(source: unknown) { // TODO: Replace 'unknown' with a more specific Sanity image source type
  return builder.image(source as any) // Cast to any for now to satisfy builder.image()
}

type Props = {
  params: { slug: string }
}

// Basic prop types for section components - YOU MUST REFINE THESE
interface SanitySectionProps {
  _key: string
  _type: string
  // [key: string]: any; // Removed to encourage defining specific props below
}

// Define interfaces for each section type, inheriting from SanitySectionProps
// TODO: Populate these interfaces with the actual props your components expect!
interface AboutTextProps extends SanitySectionProps { _type: 'aboutText'; [key: string]: unknown; }
interface HeroSectionProps extends SanitySectionProps { 
  _type: 'heroSection'; 
  title?: string;
  // If PageHeroSection receives an image, it must have src and alt.
  // The image prop itself is optional.
  image?: { src: string; alt: string; width?: number; height?: number }; 
  [key: string]: unknown; 
}
interface ProductCarouselProps extends SanitySectionProps { _type: 'productCarousel'; [key: string]: unknown; }
interface TitleTextLayoutProps extends SanitySectionProps { _type: 'titleTextLayout'; [key: string]: unknown; }
interface TextBlockProps extends SanitySectionProps { _type: 'textBlock'; [key: string]: unknown; } // For text-section
interface TitleBlockProps extends SanitySectionProps { _type: 'titleBlock'; [key: string]: unknown; } // For title-section
interface ImageGridProps extends SanitySectionProps { _type: 'imageGrid'; [key: string]: unknown; }
interface ProductGridProps extends SanitySectionProps { _type: 'productGrid'; [key: string]: unknown; }
interface ProductTextSectionProps extends SanitySectionProps { _type: 'productTextSection'; [key: string]: unknown; }
interface ProductImageCarouselProps extends SanitySectionProps { _type: 'productImageCarousel'; [key: string]: unknown; }
interface ImageBlockProps extends SanitySectionProps { _type: 'imageBlock'; [key: string]: unknown; } // For image-section
interface ProjectPreviewProps extends SanitySectionProps { _type: 'projectPreview'; [key: string]: unknown; }
interface SingleImageCarouselProps extends SanitySectionProps { _type: 'singleImageCarousel'; [key: string]: unknown; }
interface FeaturedProductsHeaderProps extends SanitySectionProps { _type: 'featuredProductsHeader'; [key: string]: unknown; }
interface ImageCarouselProps extends SanitySectionProps { _type: 'imageCarousel'; [key: string]: unknown; }

// Union type for all possible section data structures - ENSURE THIS IS COMPLETE AND ACCURATE
type SectionData =
  | AboutTextProps
  | HeroSectionProps
  | ProductCarouselProps
  | TitleTextLayoutProps
  | TextBlockProps
  | TitleBlockProps
  | ImageGridProps
  | ProductGridProps
  | ProductTextSectionProps
  | ProductImageCarouselProps
  | ImageBlockProps
  | ProjectPreviewProps
  | SingleImageCarouselProps
  | FeaturedProductsHeaderProps
  | ImageCarouselProps

interface PageData {
  _id: string
  title?: string
  slug: { current: string }
  sections?: SectionData[]
  [key: string]: unknown // Allow other top-level fields from Sanity
}

// Define the GROQ query (ensure defineQuery has only one argument if previous linter error persists)
const PAGE_CONTENT_QUERY = defineQuery(
  `*[_type == "homepage" && slug.current == $SLUG][0]{
    _id,
    title,
    slug,
    sections[]{...} // Fetch all fields within each section. Add specific projections if needed for references.
  }`
  // If 'defineQuery' still complains about 2 arguments, remove the {SLUG: ''} from the original attempt.
  // It should be: defineQuery(`...query...`)
)

async function getData(slug: string): Promise<PageData | null> {
  try {
    const data = await client.fetch<PageData | null>(
      PAGE_CONTENT_QUERY,
      { SLUG: slug }
    )
    return data
  } catch (error) {
    console.error("Failed to fetch data from Sanity:", error)
    return null
  }
}

export default async function Page({ params }: Props) {
  const data = await getData(params.slug)

  if (!data) {
    notFound() // Triggers the 404 page
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8"> {/* Site-wide horizontal padding */}
      {/* Optional: Render a page title if available and not part of a section */}
      {/* {data.title && <h1 className="text-2xl font-bold m-4">{data.title}</h1>} */}

      {data.sections && Array.isArray(data.sections) && data.sections.length > 0 ? (
        data.sections.map((section) => {
          let processedSectionData = { ...section } as any; // Cast to any for easier property assignment for now

          // Image processing for heroSection
          if (processedSectionData._type === 'heroSection') {
            if (processedSectionData.image) { // Check if there is an image field from Sanity
              const originalImageField = processedSectionData.image;
              // console.log("Original Sanity Image Field (Hero):", JSON.stringify(originalImageField, null, 2)); 
              const imageUrl = urlFor(originalImageField)?.url();
              const imageAlt = originalImageField.alt || 'Hero image'; 
              if (imageUrl) {
                processedSectionData.image = { src: imageUrl, alt: imageAlt }; 
              } else {
                processedSectionData.image = undefined;
              }
            } else {
              processedSectionData.image = undefined;
            }
          }

          // Image processing for productTextSection - ASSUMING image field is named 'image'
          if (processedSectionData._type === 'productTextSection') {
            if (processedSectionData.image) { // Check if there is an image field from Sanity
              const originalImageField = processedSectionData.image;
              const imageUrl = urlFor(originalImageField)?.url();
              const imageAlt = originalImageField.alt || 'Product Text Section Image'; 
              if (imageUrl) {
                processedSectionData.image = { src: imageUrl, alt: imageAlt }; 
              } else {
                processedSectionData.image = undefined;
              }
            } else {
              processedSectionData.image = undefined;
            }

            // Fix newline characters in title for productTextSection
            if (processedSectionData.title && typeof processedSectionData.title === 'string') {
              processedSectionData.title = processedSectionData.title.replace(/\\n/g, '\n');
            }
          }

          // VERIFY YOUR SANITY _type NAMES IN THESE CASE STATEMENTS
          switch (section._type) {
            case 'heroSection':
              return <PageHeroSection key={section._key} {...processedSectionData as any} />;
            case 'productTextSection':
              return <ProductTextSection key={section._key} {...processedSectionData as any} />;
            case 'aboutText':
            case 'productCarousel':
            case 'titleTextLayout': 
            case 'textBlock': 
            case 'titleBlock': 
            case 'imageGrid': 
            case 'productGrid': 
            case 'productImageCarousel': 
            case 'imageBlock': 
            case 'projectPreview': 
            case 'singleImageCarousel': 
            case 'featuredProductsHeader': 
            case 'imageCarousel':
              return <div key={section._key}>Section Type: {section._type} (Content temporarily hidden)</div>;
            default:
              if (section && (section as any)._type) {
                console.warn(`Sanity section type "${(section as any)._type}" not handled in app/[slug]/page.tsx`);
                return <div key={(section as any)._key || Math.random().toString()}>Unsupported section type: {(section as any)._type}</div>;
              }
              console.warn("Encountered an undefined or malformed section.");
              return <div key={Math.random().toString()}>Malformed section data</div>;
          }
        })
      ) : (
        <p>No sections to display for this page.</p> // Handle case with no sections
      )}
    </div>
  )
}

// Optional: If you want to pre-render pages at build time
// export async function generateStaticParams() {
//   // Fetch all slugs for the 'homepage' type to pre-render
//   const query = groq`*[_type == "homepage" && defined(slug.current)]{ "slug": slug.current }`