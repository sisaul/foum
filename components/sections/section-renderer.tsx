import { Section } from '../../lib/sanity/types';
import HeroSection from './page-hero-section';
import ImageSection from './image-section';
import TextSection from './text-section';
import ImageCarousel from './image-carousel';
import ProductGridSection from './product-grid-section';
import ProductTextSection from './product-text-section';
import ProductCarousel from './product-carousel';

interface SectionRendererProps {
  sections: Section[];
}

export default function SectionRenderer({ sections }: SectionRendererProps) {
  if (!sections || !sections.length) {
    return null;
  }

  return (
    <>
      {sections.map((section) => {
        const { _key, _type } = section;
        switch (_type) {
          case 'heroSection':
            return <HeroSection key={_key} {...section} />;
          case 'imageSection':
            return <ImageSection key={_key} {...section} />;
          case 'textSection':
            return <TextSection key={_key} {...section} />;
          case 'imageCarousel':
            return <ImageCarousel key={_key} {...section} />;
          case 'productGridSection':
            return <ProductGridSection key={_key} {...section} />;
          case 'productTextSection':
            return <ProductTextSection key={_key} {...section} />;
          case 'featuredProductsSection':
            return <ProductCarousel 
              key={_key} 
              {...section}
              darkMode={false}
            />;
          default:
            console.warn(`Section type not supported: ${_type}`);
            return null;
        }
      })}
    </>
  );
} 