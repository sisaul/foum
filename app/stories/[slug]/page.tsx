import Layout from "@/components/layout";
import ImageSection from "@/components/sections/image-section";
import TextSection from "@/components/sections/text-section";
import TitleSection from "@/components/sections/title-section";
import ImageGridSection from "@/components/sections/image-grid-section";
import TitleTextLayoutSection from "@/components/sections/title-text-layout-section";
import FeaturedProductsHeaderSection from "@/components/sections/featured-products-header-section";

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
  date?: string;
};

interface Story {
  slug: string;
  sections: Section[];
  date?: string;
}

interface PageProps {
  params: {
    slug: string
  }
}

// Mock data for stories
const storiesData: Story[] = [
  {
    slug: "kitchen-inspiration",
    date: "SEPTEMBER 2023",
    sections: [
      { 
        _key: 'hero', 
        _type: 'imageSection', 
        layout: 'single', 
        fullWidth: true, 
        images: [{ src: '/images/stories/kitchen-1.png', alt: 'Kitchen Inspiration Hero' }] 
      },
      { 
        _key: 'main_title', 
        _type: 'titleSection', 
        title: 'KITCHEN INSPIRATION', 
        size: 'heading-1'
      },
      {
        _key: 'intro', 
        _type: 'textSection', 
        align: 'left',
        text: "At the recent Milan Design Week, a prominent trend in kitchen design was the innovative use of steel and other industrial metals, reflecting a blend of utilitarian aesthetics and sustainability. Designers showcased how materials like stainless steel and aluminum can be employed to create sleek, modern kitchen spaces that are both functional and environmentally conscious."
      },
      {
        _key: 'stainless_steel_title_text', 
        _type: 'titleTextLayoutSection', 
        title: 'STAINLESS STEEL',
        text: "Stainless steel continues to be a favored material in contemporary kitchen design. Its durability, ease of maintenance, and timeless appeal make it an ideal choice for various kitchen elements, including countertops, cabinetry, and appliances.",
        maxWidth: 'max-w-xl',
        titlePosition: 'left'
      },
      {
        _key: 'stainless_steel_images', 
        _type: 'imageGridSection',
        columns: 2,
        images: [
          { src: '/images/stories/kitchen-2.png', alt: 'Steel Detail 1'},
          { src: '/images/stories/kitchen-3.png', alt: 'Steel Detail 2'},
        ]
      },
      {
        _key: 'sustainability_title_text', 
        _type: 'titleTextLayoutSection',
        title: 'SUSTAINABILITY',
        text: "A significant theme at Milan Design Week was the focus on sustainable materials and practices. The use of natural materials such as stone and mushroom mass aligns with this ethos, offering environmentally friendly options for kitchen design.",
        maxWidth: 'max-w-xl',
        titlePosition: 'left' 
      },
      {
        _key: 'sustainability_images', 
        _type: 'imageGridSection',
        columns: 2,
        images: [
          { src: '/images/stories/kitchen-4.png', alt: 'Sustainable Material 1'},
          { src: '/images/stories/kitchen-5.png', alt: 'Sustainable Material 2'},
        ]
      },
      {
        _key: 'related_products', 
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
  },
  // Add other stories here as needed
];

async function getStoryData(slug: string): Promise<Story | undefined> {
  return storiesData.find(story => story.slug === slug);
}

export default async function Page({ params }: PageProps) {
  // Wait for params to be available before accessing slug
  const { slug } = params;
  const story = await getStoryData(slug);

  if (!story) {
    return (
      <Layout>
        <div className="text-center py-20">Story not found</div>
      </Layout>
    );
  }

  // Find special sections
  const heroSection = story.sections.find(s => s._type === 'imageSection' && s.layout === 'single' && s.fullWidth);
  const titleSection = story.sections.find(s => s._type === 'titleSection' && (s.size === 'heading-1' || !s.size));
  
  // Other content sections
  const contentSections = story.sections.filter(s => 
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
        <div className="container-padding section-spacing flex flex-col gap-12 md:gap-16">
          
          {/* Title + Date */}
          {titleSection?.title && (
            <div className="flex justify-between items-baseline">
              <TitleSection 
                title={titleSection.title || ''}
                size={titleSection.size}
                centered={titleSection.centered}
              />
              {story.date && (
                <span className="text-sm font-mono pl-4">{story.date}</span>
              )}
            </div>
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
                    size={section.size}
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
                    titleSize={section.size}
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
              
              case 'productGridSection':
                return section.products && (
                  <FeaturedProductsHeaderSection 
                    key={_key}
                    title="DISCOVER MORE"
                    products={section.products}
                    columns={section.columns as 2 | 3 | 4}
                    basePath={section.basePath}
                    hideViewDetailsLink={section.hideViewDetailsLink}
                    darkMode={false}
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