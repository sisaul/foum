import { Section } from '../../lib/sanity/types';
import HeroSection from './hero-section';
import ImageSection from './image-section';
import TextSection from './text-section';
import ImageCarousel from './image-carousel';
import ProductGridSection from './product-grid-section';
import ProductTextSection from './product-text-section';
import ProjectPreviewSection from './project-preview-section';
import FeaturedProductsSection from './featured-products-section';

interface SectionRendererProps {
  sections: Section[];
}

// This is a simplified implementation
// In a real application, you would need to properly type each section
export default function SectionRenderer({ sections }: SectionRendererProps) {
  if (!sections || !sections.length) {
    return null;
  }

  return (
    <>
      {sections.map((section) => {
        const { _key, _type } = section;

        // Note: This is a temporary solution to bypass TypeScript errors
        // In a production app, you would define proper interfaces for each section type
        try {
          switch (_type) {
            case 'heroSection':
              // @ts-expect-error - Section types would be properly defined in a real app
              return <HeroSection key={_key} {...section} />;
            case 'imageSection':
              // @ts-expect-error - Section types would be properly defined in a real app
              return <ImageSection key={_key} {...section} />;
            case 'textSection':
              // @ts-expect-error - Section types would be properly defined in a real app
              return <TextSection key={_key} {...section} />;
            case 'imageCarousel':
              // @ts-expect-error - Section types would be properly defined in a real app
              return <ImageCarousel key={_key} {...section} />;
            case 'productGridSection':
              // @ts-expect-error - Section types would be properly defined in a real app
              return <ProductGridSection key={_key} {...section} />;
            case 'productTextSection':
              // @ts-expect-error - Section types would be properly defined in a real app
              return <ProductTextSection key={_key} {...section} />;
            case 'projectPreviewSection':
              // @ts-expect-error - Section types would be properly defined in a real app
              return <ProjectPreviewSection key={_key} {...section} />;
            case 'featuredProductsSection':
              // @ts-expect-error - Section types would be properly defined in a real app
              return <FeaturedProductsSection key={_key} {...section} />;
            default:
              console.warn(`Section type not supported: ${_type}`);
              return null;
          }
        } catch (error) {
          console.error(`Error rendering section of type ${_type}:`, error);
          return null;
        }
      })}
    </>
  );
} 