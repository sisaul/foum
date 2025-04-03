import Layout from "@/components/layout";
import SectionRenderer from "@/components/sections/section-renderer";
import ImageSection from "@/components/sections/image-section";
import TextSection from "@/components/sections/text-section";
import TitleSection from "@/components/sections/title-section";
import ImageGridSection from "@/components/sections/image-grid-section";
import TitleTextLayoutSection from "@/components/sections/title-text-layout-section";
import ProductGridSection from "@/components/sections/product-grid-section";
import SingleImageCarousel from "@/components/sections/single-image-carousel";
// import SingleImageCarousel from "@/components/sections/single-image-carousel"; // Removed unused import
// Removed unused Key import

// Assuming Section type is defined elsewhere, e.g., lib/sanity/types
// If not, we might need a basic definition here.
// For now, using 'any' to avoid blocking, replace with proper type later.
// import { Section } from '@/lib/sanity/types'; 
// Define a basic placeholder Section type
type Section = {
  _key: string;
  _type: string;
  // Shared props
  title?: string;
  text?: string;
  images?: { src: string; alt: string; }[];
  // ImageSection props
  layout?: 'grid' | 'single';
  fullWidth?: boolean;
  // TitleSection / TitleTextLayoutSection props
  size?: 'small' | 'medium' | 'large'; // Renamed from titleSize for consistency
  centered?: boolean;
  // TextSection / TitleTextLayoutSection props
  align?: 'left' | 'center' | 'right'; // Renamed from textAlign
  maxWidth?: string; // Renamed from textMaxWidth
  // TitleTextLayoutSection props
  titlePosition?: 'left' | 'right';
  verticalAlign?: 'start' | 'center' | 'end';
  // ImageGridSection props
  columns?: number; // Used by ImageGridSection and ProductGridSection
  gap?: string;
  // ProductGridSection props
  products?: { title: string; slug: string; imageSrc: string; basePath?: string }[];
  basePath?: string;
  hideViewDetailsLink?: boolean;
  // SingleImageCarousel props
  aspectRatio?: string; // Add aspectRatio prop
  fixedHeight?: string; // Add fixedHeight prop
}; 

interface Project {
  slug: string;
  sections: Section[];
}

interface StudioPageProps {
  params: {
    slug: string
  }
}

// --- Mock Data Refactoring ---
const projectsData: Project[] = [
  {
    slug: "kunderi-flat",
    sections: [
      // 0: Hero Image
      { 
        _key: 'hero', _type: 'imageSection', layout: 'single', fullWidth: true, 
        images: [{ src: '/images/kunderi-flat/quilton.png', alt: 'Kunderi Flat Hero' }] 
      },
      // 1: Main Title + Year (Rendered specially in JSX)
      { 
        _key: 'main_title', _type: 'titleSection', title: 'KUNDERI FLAT', size: 'medium' 
      }, 
      // 2: Intro Text (Removed maxWidth)
      {
        _key: 'intro', _type: 'textSection', align: 'left',
        text: "The unique villa PH35 is a house for sociable individualists. A house for urban people with a strong connection to nature. The villa PH35 is situated on a south-facing slope, right on the hill between Neustift am Walde in the north and Pötzleinsdorf in the south. A panoramic view over downtown Vienna and the Danube valley spreads out in front of the villa. The northern side is magnificently framed by the Viennese hills."
      },
      // 3: BEFORE Title + Text (Side-by-side)
      {
        _key: 'before_title_text', _type: 'titleTextLayoutSection', 
        title: 'BEFORE',
        text: "The architecture of the house responds to its special location at the transition from urban space to open landscape with clear references.",
        maxWidth: 'max-w-xl',
        titlePosition: 'left' // Title on left, text on right
      },
      // 4: BEFORE Images (Side-by-side grid)
      {
        _key: 'before_images', _type: 'imageGridSection',
        columns: 2,
        images: [
          { src: '/images/kunderi-flat/before-sofa.png', alt: 'Before 1'},
          { src: '/images/kunderi-flat/before-table.png', alt: 'Before 2'},
        ]
      },
      // 5: PLANNING Title + Text (Side-by-side)
      {
        _key: 'planning_title_text', _type: 'titleTextLayoutSection',
        title: 'PLANNING',
        text: "The architecture of the house responds to its special location at the transition from urban space to open landscape with clear references.",
        maxWidth: 'max-w-xl',
        titlePosition: 'left' 
      },
      // 6: PLANNING Image Carousel (Reverted Type and Data)
      {
        _key: 'planning_image', 
        _type: 'singleImageCarousel', // Changed type back
        images: [
          // Revert swap
          { src: '/images/kunderi-flat/planning.png', alt: 'Planning Floor Plan 1'}, 
          { src: '/images/kunderi-flat/before-table.png', alt: 'Planning Example 2'}, 
          { src: '/images/kunderi-flat/before-sofa.png', alt: 'Planning Example 3'}, 
        ] 
      },
      // 7: AFTER Title + Text (Side-by-side)
      {
        _key: 'after_title_text', _type: 'titleTextLayoutSection',
        title: 'AFTER',
        text: "The architecturally contemporary interpretation of the villa type with four to five exclusive apartment units follows modern principles.",
        maxWidth: 'max-w-xl',
        titlePosition: 'left' 
      },
      // 8: AFTER Image (Single image section)
      {
        _key: 'after_image', _type: 'imageSection', layout: 'single',
        images: [{ src: '/images/kunderi-flat/after.png', alt: 'After Image'}]
      },
      // 9: Featured Title (Added centering)
      { 
        _key: 'featured_title', _type: 'titleSection', 
        title: 'FEATURED PRODUCTS', size: 'small', centered: true // Added centered: true
      }, 
      // 10: Featured Products (Hide 'VIEW DETAILS')
      {
        _key: 'featured_products', 
        _type: 'productGridSection', 
        columns: 4,
        basePath: '/products',
        hideViewDetailsLink: true, // Added prop to signal hiding the link
        products: [
           // basePath removed from individual products unless needed for override
           { title: 'PROD 1', slug: 'prod-1', imageSrc: '/images/kunderi-flat/milan-design-week.png' },
           { title: 'PROD 2', slug: 'prod-2', imageSrc: '/images/kunderi-flat/gonsiori-flat.png' },
           { title: 'PROD 3', slug: 'prod-3', imageSrc: '/images/kunderi-flat/shelf-mini.png' },
           { title: 'PROD 4', slug: 'prod-4', imageSrc: '/images/kunderi-flat/custom-made-vase.png' },
        ]
      },
    ]
  },
  {
    slug: "cafe-rummu",
    sections: [
       { 
        _key: 'hero', _type: 'imageSection', layout: 'single', fullWidth: true, 
        images: [{ src: '/images/cafe-rummu.png', alt: 'Cafe Rummu Hero' }] 
      },
      { 
        _key: 'title', _type: 'titleSection', title: 'RUMMU CAFE', size: 'medium', centered: false 
        // Note: Year ('2024') isn't part of TitleSection
      }, 
      {
        _key: 'intro', _type: 'textSection', align: 'left', maxWidth: 'max-w-2xl', 
        text: "This unique villa project is a house for seaside individualists. A house for urban people with high demands, between tranquility and density, between fascinating views and the Baltic Sea. Located halfway between Pirita and the city centre, the Lucca valley spreads out in front of the villa. Thoughtfully planned greenery ensures privacy for the residents." // Re-used text from Kunderi
      },
      { _key: 'entrance_title', _type: 'titleSection', title: 'ENTRANCE', size: 'small', centered: false },
      // Side-by-side layout approximation
      { 
        _key: 'entrance_images', _type: 'imageSection', columns: 2, 
        images: [
          { src: '/placeholder.svg?height=600&width=600', alt: 'Entrance 1'},
          { src: '/placeholder.svg?height=600&width=600', alt: 'Entrance 2'},
        ]
      },
      {
        _key: 'entrance_text', _type: 'textSection', align: 'left', maxWidth: 'max-w-xl', 
        text: "The architecture of the house responds to its special location at the intersection of urban space so its open towards the sea view nature reserves." // Re-used text
      },
      { _key: 'ambience_title', _type: 'titleSection', title: 'AMBIENCE', size: 'small', centered: false },
      // Side-by-side layout approximation
       { 
        _key: 'ambience_images', _type: 'imageSection', columns: 2, 
        images: [
          { src: '/placeholder.svg?height=600&width=600', alt: 'Ambience 1'},
          { src: '/placeholder.svg?height=600&width=600', alt: 'Ambience 2'},
        ]
      },
      {
        _key: 'ambience_text', _type: 'textSection', align: 'left', maxWidth: 'max-w-xl', 
        text: "The architecturally contemporary interpretation of the villa is characterized by five exclusive apartment units follows proven principles." // Re-used text
      },
      { _key: 'details_title', _type: 'titleSection', title: 'DETAILS', size: 'small', centered: false },
      // Side-by-side layout approximation
       { 
        _key: 'details_images', _type: 'imageSection', columns: 2, 
        images: [
          { src: '/placeholder.svg?height=600&width=600', alt: 'Details 1'},
          { src: '/placeholder.svg?height=600&width=600', alt: 'Details 2'},
        ]
      },
      {
        _key: 'details_text', _type: 'textSection', align: 'left', maxWidth: 'max-w-xl', 
        text: "The architecture of the house responds to its special location at the intersection of urban space so its open towards the sea view nature reserves." // Re-used text
      },
      // Featured Product (only one shown in Figma) - Using ImageSection for simplicity
       { _key: 'featured_title', _type: 'titleSection', title: 'FEATURED PRODUCTS', size: 'small', centered: false }, // Title seems missing in figma? Added for consistency.
       { 
        _key: 'featured_product', _type: 'imageSection', columns: 1, // Use 1 column for single image
        images: [
           { src: '/placeholder.svg?height=300&width=300', alt: 'Featured Product Cafe Rummu' },
        ],
        // caption: "Link to product?" // ImageSection doesn't directly support links in caption
      },
    ]
  },
  // Add other projects here if needed
];

async function getProjectData(slug: string): Promise<Project | undefined> {
  // Replace with actual CMS fetching logic eventually
  return projectsData.find(project => project.slug === slug);
}

// Corrected implementation with proper params handling for Next.js 13+
export default async function StudioPage({ params }: StudioPageProps) {
  // This is how you properly handle params in Next.js App Router
  const slug = params.slug;
  const project = await getProjectData(slug);

  if (!project) {
    return (
       <Layout>
        <div className="text-center py-20">Project not found</div>
       </Layout>
    );
  }

  // --- Custom Layout for Kunderi Flat --- 
  if (project.slug === 'kunderi-flat') {
    const getSection = (key: string): Section | undefined => project.sections.find(s => s._key === key);

    // Get sections by key
    const heroSection = getSection('hero');
    const mainTitleSection = getSection('main_title');
    const introSection = getSection('intro');
    const beforeTitleTextSection = getSection('before_title_text');
    const beforeImagesSection = getSection('before_images');
    const planningTitleTextSection = getSection('planning_title_text');
    const planningImageSection = getSection('planning_image');
    const afterTitleTextSection = getSection('after_title_text');
    const afterImageSection = getSection('after_image');
    const featuredProductsSection = getSection('featured_products');

    return (
      <Layout>
        {/* Hero */}
        {heroSection?.images && <ImageSection {...heroSection as ImageSectionProps} />} 

        {/* Apply slightly larger max-width wrapper */}
        <div className="max-w-[88rem] mx-auto">
          {/* Main content area with reduced gap */}
          <div className="px-6 md:px-12 py-12 md:py-16 flex flex-col gap-12 md:gap-16"> {/* Reduced gap */}
            
            {/* Main Title + Year */}
            {mainTitleSection?.title && (
              <div className="flex justify-between items-baseline">
                <TitleSection {...mainTitleSection as TitleSectionProps} />
                <span className="text-sm font-mono pl-4">2024</span>
              </div>
            )}

            {/* Intro (Removed noHorizontalPadding prop) */} 
            {introSection && <TextSection {...introSection as TextSectionProps} />}

            {/* BEFORE Title + Text */} 
            {beforeTitleTextSection && beforeTitleTextSection._type === 'titleTextLayoutSection' && (
              <TitleTextLayoutSection {...beforeTitleTextSection as TitleTextLayoutSectionProps} />
            )}
            {/* BEFORE Images (Removed Wrapper) */} 
            {beforeImagesSection?.images && beforeImagesSection._type === 'imageGridSection' && (
              // <div className="max-w-5xl mx-auto"> {/* Removed constraining wrapper */}
                <ImageGridSection {...beforeImagesSection as ImageGridSectionProps} />
              // </div>
            )}

            {/* PLANNING Title + Text */} 
            {planningTitleTextSection && planningTitleTextSection._type === 'titleTextLayoutSection' && (
              <TitleTextLayoutSection {...planningTitleTextSection as TitleTextLayoutSectionProps} />
            )}
            {/* PLANNING Image Carousel (Removed Wrapper) */}
            {planningImageSection?.images && planningImageSection._type === 'singleImageCarousel' && (
             // <div className="max-w-5xl mx-auto"> {/* Removed wrapper */}
               <SingleImageCarousel {...planningImageSection as SingleImageCarouselProps} />
             // </div>
            )}

            {/* AFTER Title + Text */} 
            {afterTitleTextSection && afterTitleTextSection._type === 'titleTextLayoutSection' && (
              <TitleTextLayoutSection {...afterTitleTextSection as TitleTextLayoutSectionProps} />
            )}
            {/* AFTER Image (Wrap to control width) */}
            {afterImageSection?.images && afterImageSection._type === 'imageSection' && (
              <div className="w-full"> {/* Or maybe a specific max-width if needed? Start with full width within parent padding */}
                <ImageSection {...afterImageSection as ImageSectionProps} />
              </div>
            )}

            {/* FEATURED PRODUCTS (Title Removed) */} 
            {/* {featuredTitleSection?.title && <TitleSection {...featuredTitleSection as TitleSectionProps} />} */}
            {featuredProductsSection?.products && (
              <ProductGridSection {...featuredProductsSection as ProductGridProps} />
            )} 

          </div>
        </div>
      </Layout>
    );
  }

  // --- Default: Use SectionRenderer for other slugs (e.g., cafe-rummu) --- 
  return (
    <Layout>
      <SectionRenderer sections={project.sections} />
    </Layout>
  );
}

// Optional: Add generateStaticParams if using SSG
// export async function generateStaticParams() {
//   // Fetch all slugs from Sanity or use mock data
//   return projectsData.map((project) => ({
//     slug: project.slug,
//   }));
// }

// Optional: Add revalidate for ISR
// export const revalidate = 60; // Revalidate every 60 seconds

// Import specific prop types needed for assertions
import { ImageSectionProps } from "@/components/sections/image-section";
import { TextSectionProps } from "@/components/sections/text-section";
import { TitleSectionProps } from "@/components/sections/title-section";
import { ImageGridSectionProps } from "@/components/sections/image-grid-section";
import { TitleTextLayoutSectionProps } from "@/components/sections/title-text-layout-section";
import { ProductGridProps } from "@/components/sections/product-grid-section";
import { SingleImageCarouselProps } from "@/components/sections/single-image-carousel";
// import { SingleImageCarouselProps } from "@/components/sections/single-image-carousel"; // Removed unused import

