// New file
import Layout from "@/components/layout";
import ImageSection from "@/components/sections/image-section";
import ImageGridSection from "@/components/sections/image-grid-section";
import TextSection from "@/components/sections/text-section";
import TitleSection from "@/components/sections/title-section";
import TitleTextLayoutSection from "@/components/sections/title-text-layout-section";
import SingleImageCarousel from "@/components/sections/single-image-carousel";
import ProductCarousel from "@/components/sections/product-carousel"

// Define basic types
type Section = {
  _key: string;
  _type: string;
  title?: string;
  text?: string;
  images?: { src: string; alt: string; }[];
  layout?: 'grid' | 'single';
  fullWidth?: boolean;
  size?: 'heading-1' | 'heading-2' | 'heading-3';
  centered?: boolean;
  align?: 'left' | 'center' | 'right';
  maxWidth?: string;
  titlePosition?: 'left' | 'right';
  verticalAlign?: 'start' | 'center' | 'end';
  columns?: 2 | 3 | 4;
  gap?: string;
  products?: { title: string; slug: string; imageSrc: string; basePath?: string }[];
  basePath?: string;
  hideViewDetailsLink?: boolean;
};

interface Project {
  slug: string;
  sections: Section[];
}

interface PageProps {
  params: Promise<{
    slug: string
  }>,
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

// Mock data for projects
const projectsData: Project[] = [
  {
    slug: "kunderi-flat",
    sections: [
      { 
        _key: 'hero', 
        _type: 'imageSection', 
        layout: 'single', 
        fullWidth: true, 
        images: [{ src: '/images/kunderi-flat/quilton.png', alt: 'Kunderi Flat Hero' }] 
      },
      { 
        _key: 'main_title', 
        _type: 'titleSection', 
        title: 'KUNDERI FLAT', 
        size: 'heading-1'
      },
      {
        _key: 'intro', 
        _type: 'textSection', 
        align: 'left',
        text: "The unique villa PH35 is a house for sociable individualists. A house for urban people with a strong connection to nature. The villa PH35 is situated on a south-facing slope, right on the hill between Neustift am Walde in the north and Pötzleinsdorf in the south. A panoramic view over downtown Vienna and the Danube valley spreads out in front of the villa. The northern side is magnificently framed by the Viennese hills."
      },
      {
        _key: 'before_title_text', 
        _type: 'titleTextLayoutSection', 
        title: 'BEFORE',
        text: "The architecture of the house responds to its special location at the transition from urban space to open landscape with clear references.",
        maxWidth: 'max-w-xl',
        titlePosition: 'left'
      },
      {
        _key: 'before_images', 
        _type: 'imageGridSection',
        columns: 2,
        images: [
          { src: '/images/kunderi-flat/before-sofa.png', alt: 'Before 1'},
          { src: '/images/kunderi-flat/before-table.png', alt: 'Before 2'},
        ]
      },
      {
        _key: 'planning_title_text', 
        _type: 'titleTextLayoutSection',
        title: 'PLANNING',
        text: "The architecture of the house responds to its special location at the transition from urban space to open landscape with clear references.",
        maxWidth: 'max-w-xl',
        titlePosition: 'left' 
      },
      {
        _key: 'planning_image', 
        _type: 'singleImageCarousel',
        images: [
          { src: '/images/kunderi-flat/planning.png', alt: 'Planning Floor Plan 1'}, 
          { src: '/images/kunderi-flat/before-table.png', alt: 'Planning Example 2'}, 
          { src: '/images/kunderi-flat/before-sofa.png', alt: 'Planning Example 3'}, 
        ] 
      },
      {
        _key: 'after_title_text', 
        _type: 'titleTextLayoutSection',
        title: 'AFTER',
        text: "The architecturally contemporary interpretation of the villa type with four to five exclusive apartment units follows modern principles.",
        maxWidth: 'max-w-xl',
        titlePosition: 'left' 
      },
      {
        _key: 'after_image', 
        _type: 'imageSection', 
        layout: 'single',
        images: [{ src: '/images/kunderi-flat/after.png', alt: 'After Image'}]
      },
      {
        _key: 'featured_products', 
        _type: 'productGridSection', 
        columns: 4,
        basePath: '/products',
        hideViewDetailsLink: true,
        products: [
          { title: 'MILAN DESIGN WEEK OVERVIEW', slug: 'prod-1', imageSrc: '/images/kunderi-flat/milan-design-week.png' },
          { title: 'GONSIORI FLAT, TALLINN', slug: 'prod-2', imageSrc: '/images/kunderi-flat/gonsiori-flat.png' },
          { title: 'SHELF MINI', slug: 'prod-3', imageSrc: '/images/kunderi-flat/shelf-mini.png' },
          { title: 'CUSTOM MADE VASE', slug: 'prod-4', imageSrc: '/images/kunderi-flat/custom-made-vase.png' },
          { title: 'STORAGE UNIT', slug: 'prod-5', imageSrc: '/images/rummu-cafe/ambience-1.png' },
          { title: 'WOODEN CHAIR', slug: 'prod-6', imageSrc: '/images/rummu-cafe/ambience-2.png' },
          { title: 'COFFEE TABLE', slug: 'prod-7', imageSrc: '/images/rummu-cafe/details-1.png' },
          { title: 'SIDE TABLE', slug: 'prod-8', imageSrc: '/images/rummu-cafe/details-2.png' },
        ]
      }
    ]
  },
  {
    slug: "cafe-rummu",
    sections: [
      { 
        _key: 'hero', 
        _type: 'imageSection', 
        layout: 'single', 
        fullWidth: true, 
        images: [{ src: '/images/rummu-cafe/rummu-hero.png', alt: 'Cafe Rummu Hero' }] 
      },
      { 
        _key: 'title', 
        _type: 'titleSection', 
        title: 'RUMMU CAFE', 
        size: 'heading-1'
      },
      {
        _key: 'intro', 
        _type: 'textSection', 
        align: 'left',
        text: "The unique villa PH35 is a house for sociable individualists. A house for urban people with a strong connection to nature. The villa PH35 is situated on a south-facing slope, right on the hill between Neustift am Walde in the north and Pötzleinsdorf in the south. A panoramic view over downtown Vienna and the Danube valley spreads out in front of the villa. The northern side is magnificently framed by the Viennese hills."
      },
      {
        _key: 'entrance_title_text', 
        _type: 'titleTextLayoutSection', 
        title: 'ENTRANCE',
        text: "The architecture of the house responds to its special location at the transition from natural space to open landscape with clear references.",
        maxWidth: 'max-w-xl',
        titlePosition: 'left'
      },
      {
        _key: 'entrance_images', 
        _type: 'imageGridSection',
        columns: 2,
        images: [
          { src: '/images/rummu-cafe/entrance-1.png', alt: 'Entrance 1'},
          { src: '/images/rummu-cafe/entrance-2.png', alt: 'Entrance 2'},
        ]
      },
      {
        _key: 'ambience_title_text', 
        _type: 'titleTextLayoutSection',
        title: 'AMBIENCE',
        text: "The architecturally contemporary interpretation of the villa type with four to five exclusive apartment units follows modern principles.",
        maxWidth: 'max-w-xl',
        titlePosition: 'left'
      },
      {
        _key: 'ambience_images', 
        _type: 'imageGridSection',
        columns: 2,
        images: [
          { src: '/images/rummu-cafe/ambience-1.png', alt: 'Ambience 1'},
          { src: '/images/rummu-cafe/ambience-2.png', alt: 'Ambience 2'},
        ]
      },
      {
        _key: 'details_title_text', 
        _type: 'titleTextLayoutSection',
        title: 'DETAILS',
        text: "The architecturally contemporary interpretation of the villa type with four to five exclusive apartment units follows modern principles.",
        maxWidth: 'max-w-xl',
        titlePosition: 'left'
      },
      {
        _key: 'details_images', 
        _type: 'imageGridSection',
        columns: 2,
        images: [
          { src: '/images/rummu-cafe/details-1.png', alt: 'Details 1'},
          { src: '/images/rummu-cafe/details-2.png', alt: 'Details 2'},
        ]
      },
      {
        _key: 'featured_products', 
        _type: 'productGridSection', 
        columns: 4,
        basePath: '/products',
        hideViewDetailsLink: true,
        products: [
          { title: 'MILAN DESIGN WEEK OVERVIEW', slug: 'prod-1', imageSrc: '/images/kunderi-flat/milan-design-week.png' },
          { title: 'GONSIORI FLAT, TALLINN', slug: 'prod-2', imageSrc: '/images/kunderi-flat/gonsiori-flat.png' },
          { title: 'SHELF MINI', slug: 'prod-3', imageSrc: '/images/kunderi-flat/shelf-mini.png' },
          { title: 'CUSTOM MADE VASE', slug: 'prod-4', imageSrc: '/images/kunderi-flat/custom-made-vase.png' }
        ]
      }
    ]
  }
];

async function getProjectData(slug: string): Promise<Project | undefined> {
  return projectsData.find(project => project.slug === slug);
}

export default async function Page({ params }: PageProps) {
  // Wait for params to be available before accessing slug
  const { slug } = await params;
  const project = await getProjectData(slug);

  if (!project) {
    return (
      <Layout>
        <div className="text-center py-20">Project not found</div>
      </Layout>
    );
  }

  // Find special sections
  const heroSection = project.sections.find(s => s._type === 'imageSection' && s.layout === 'single' && s.fullWidth);
  const titleSection = project.sections.find(s => s._type === 'titleSection' && (s.size === 'heading-1' || !s.size));
  
  // Other content sections
  const contentSections = project.sections.filter(s => 
    s !== heroSection && 
    s !== titleSection
  );

  return (
    <Layout>
      {/* Hero */}
      {heroSection?.images && (
        <ImageSection 
          images={heroSection.images}
          layout={heroSection.layout}
          fullWidth={heroSection.fullWidth}
        />
      )}

      {/* Content */}
      <div className="max-w-[88rem] mx-auto">
        <div className="px-5 md:px-0 py-10 md:py-24 flex flex-col gap-12 md:gap-16">
          
          {/* Title */}
          {titleSection?.title && (
            <TitleSection 
              title={titleSection.title || ''}
              centered={titleSection.centered}
              noPadding={true}
            />
          )}

          {/* All content sections */}
          {contentSections.map(section => {
            const { _key, _type } = section;
            
            switch (_type) {
              case 'textSection':
                return (
                  <TextSection 
                    key={_key} 
                    text={section.text || ''}
                    align={section.align}
                    maxWidth={section.maxWidth}
                  />
                );
                
              case 'titleSection':
                return (
                  <TitleSection 
                    key={_key} 
                    title={section.title || ''}
                    centered={section.centered}
                  />
                );
                
              case 'titleTextLayoutSection':
                return (
                  <TitleTextLayoutSection 
                    key={_key} 
                    title={section.title || ''}
                    text={section.text || ''}
                    textAlign={section.align}
                    maxWidth={section.maxWidth}
                    titlePosition={section.titlePosition}
                    verticalAlign={section.verticalAlign}
                  />
                );
              
              case 'imageGridSection':
                return section.images && (
                  <ImageGridSection 
                    key={_key} 
                    images={section.images}
                    columns={section.columns as 2 | 3 | 4}
                    gap={section.gap}
                  />
                );
              
              case 'imageSection':
                return section.images && (
                  <div className="w-full" key={_key}>
                    <ImageSection 
                      images={section.images}
                      layout={section.layout}
                      fullWidth={section.fullWidth}
                    />
                  </div>
                );
              
              case 'singleImageCarousel':
                return section.images && (
                  <SingleImageCarousel 
                    key={_key} 
                    images={section.images}
                  />
                );
              
              case 'productGridSection':
                return section.products && (
                  <ProductCarousel 
                    key={_key}
                    title="DISCOVER MORE"
                    products={section.products}
                    columns={section.columns as 2 | 3 | 4}
                    basePath={section.basePath}
                    hideViewDetailsLink={section.hideViewDetailsLink}
                    darkMode={true}
                  />
                );
                
              default:
                return null;
            }
          })}
        </div>
      </div>
    </Layout>
  );
}
