// Product queries
export const allProductsQuery = `*[_type == "product"] {
  _id,
  title,
  slug,
  price,
  description,
  "mainImage": mainImage.asset->url,
  categories[]->{ title }
}`;

export const productBySlugQuery = `*[_type == "product" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  price,
  description,
  "mainImage": mainImage.asset->url,
  images[] {
    "url": asset->url,
    alt
  },
  categories[]->{ title },
  relatedProducts[]->{ 
    _id, 
    title, 
    slug,
    "mainImage": mainImage.asset->url,
    price
  }
}`;

// Story queries
export const allStoriesQuery = `*[_type == "story"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  "mainImage": mainImage.asset->url,
  categories[]->{ title }
}`;

export const storyBySlugQuery = `*[_type == "story" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  body,
  publishedAt,
  "mainImage": mainImage.asset->url,
  categories[]->{ title }
}`;

// Project queries
export const allProjectsQuery = `*[_type == "project"] | order(order asc) {
  _id,
  title,
  slug,
  excerpt,
  "mainImage": mainImage.asset->url
}`;

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  sections[],
  "mainImage": mainImage.asset->url
}`;

// Homepage query
export const homepageQuery = `*[_type == "homepage"][0] {
  title,
  sections[]
}`; 