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
  _type: string;
  [key: string]: unknown; // Additional fields based on section type - using unknown instead of any
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