// Common types
export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

export interface Slug {
  _type: 'slug';
  current: string;
}

export interface Category {
  _id: string;
  title: string;
}

// Product types
export interface Product {
  _id: string;
  _type: 'product';
  title: string;
  slug: Slug;
  price: number;
  description: string;
  mainImage: SanityImage;
  images?: SanityImage[];
  categories?: Category[];
  relatedProducts?: Product[];
}

// Story types
export interface Story {
  _id: string;
  _type: 'story';
  title: string;
  slug: Slug;
  excerpt: string;
  body: unknown; // Portable Text content - using unknown instead of any
  publishedAt: string;
  mainImage: SanityImage;
  categories?: Category[];
}

// Project types
import type { HeroSectionProps } from '../../components/sections/page-hero-section';
import type { TextSectionProps } from '../../components/sections/text-section';
import type { ImageCarouselProps } from '../../components/sections/image-carousel';
import type { ProductGridProps } from '../../components/sections/product-grid-section';
import type { ProductTextSectionProps } from '../../components/sections/product-text-section';
import type { ProductCarouselProps } from '../../components/sections/product-carousel';
import type { AboutTextSectionProps } from '../../components/sections/about-text-section';
import type { TitleSectionProps } from '../../components/sections/title-section';
import type { TitleTextLayoutSectionProps } from '../../components/sections/title-text-layout-section';
import type { ImageGridSectionProps } from '../../components/sections/image-grid-section';
import type { SingleImageCarouselProps } from '../../components/sections/single-image-carousel';
import type { ProjectPreviewProps } from '../../components/sections/project-preview-section';

export type Section =
  | (HeroSectionProps & { _type: 'heroSection'; _key: string })
  | (ImageSectionProps & { _type: 'imageSection'; _key: string })
  | (TextSectionProps & { _type: 'textSection'; _key: string })
  | (ImageCarouselProps & { _type: 'imageCarousel'; _key: string })
  | (ProductGridProps & { _type: 'productGridSection'; _key: string })
  | (ProductTextSectionProps & { _type: 'productTextSection'; _key: string })
  | (ProductCarouselProps & { _type: 'featuredProductsSection'; _key: string })
  | (AboutTextSectionProps & { _type: 'aboutTextSection'; _key: string })
  | (TitleSectionProps & { _type: 'titleSection'; _key: string })
  | (TitleTextLayoutSectionProps & { _type: 'titleTextLayoutSection'; _key: string })
  | (ImageGridSectionProps & { _type: 'imageGridSection'; _key: string })
  | (SingleImageCarouselProps & { _type: 'singleImageCarousel'; _key: string })
  | (ProjectPreviewProps & { _type: 'projectPreviewSection'; _key: string });

export interface Project {
  _id: string;
  _type: 'project';
  title: string;
  slug: Slug;
  excerpt: string;
  mainImage: SanityImage;
  sections: Section[];
}

// Homepage type
export interface Homepage {
  _id: string;
  _type: 'homepage';
  title: string;
  sections: Section[];
}

export interface ProductMaterial {
  color: string;
  name: string;
}

export interface SanityFile {
  _type: 'file';
  asset: {
    _ref: string;
    _type: 'reference';
    url?: string;
    _id?: string;
    originalFilename?: string;
  };
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

// Define types for new accordion sections
export interface DownloadableAssetsSection {
  _type: 'downloadableAssetsSection';
  _key: string;
  title: string;
  assets?: { // Made optional based on schema validation min(1)
    _key: string;
    type: string;
    files?: SanityFile[]; // Changed to array of SanityFile, and made optional based on schema validation min(1)
  }[];
}

export interface FAQSection {
  _type: 'faqSection';
  _key: string;
  title: string;
  items?: { // Made optional based on schema validation min(1)
    _key: string;
    question: string;
    answer: string; // Assuming text type maps to string
  }[];
}

export interface FindUsInSection {
  _type: 'findUsInSection';
  _key: string;
  title: string;
  locations?: { // Made optional based on schema validation min(1)
    _key: string;
    name: string;
    details?: string; // Assuming text type maps to string, details is optional
  }[];
}

// Union type for all possible accordion sections
export type ProductAccordionSection = DownloadableAssetsSection | FAQSection | FindUsInSection;

export interface ProductSubpage {
  _id: string;
  _type: 'productSubpage';
  title: string;
  slug: Slug;
  description: string;
  mainImage: SanityImage;
  images?: SanityImage[];
  materials: ProductMaterial[];
  sizes: string[];
  accordionSections?: ProductAccordionSection[]; // Use the new flexible array
  relatedProductsTitle?: string;
  relatedProducts?: ProductSubpage[];
  sections?: Section[]; // Keep if other general sections are still possible
}

export interface ImageSectionProps {
  image: SanityImage;
} 