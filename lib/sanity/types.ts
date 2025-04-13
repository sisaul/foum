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
export interface Section {
  _key: string;
  _type: 'heroSection' | 'imageSection' | 'textSection' | 'imageCarousel' | 'productGridSection' | 'productTextSection' | 'projectPreviewSection' | 'featuredProductsSection';
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
}

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