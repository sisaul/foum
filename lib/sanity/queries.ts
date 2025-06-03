import { defineQuery } from 'next-sanity';

// Product queries
export const ALL_PRODUCTS_QUERY = defineQuery(`*[_type == "product"] {
  _id,
  title,
  slug,
  price,
  description,
  "mainImage": mainImage.asset->url,
  categories[]->{ title }
}`);

export const PRODUCT_BY_SLUG_QUERY = defineQuery(`*[_type == "product" && slug.current == $SLUG][0] {
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
}`);

// Story queries
export const ALL_STORIES_QUERY = defineQuery(`*[_type == "story"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  "mainImage": mainImage.asset->url,
  categories[]->{ title }
}`);

export const STORY_BY_SLUG_QUERY = defineQuery(`*[_type == "story" && slug.current == $SLUG][0] {
  _id,
  title,
  slug,
  excerpt,
  body,
  publishedAt,
  "mainImage": mainImage.asset->url,
  categories[]->{ title }
}`);

// Project queries
export const ALL_PROJECTS_QUERY = defineQuery(`*[_type == "project"] | order(order asc) {
  _id,
  title,
  slug,
  excerpt,
  "mainImage": mainImage.asset->url
}`);

export const PROJECT_BY_SLUG_QUERY = defineQuery(`*[_type == "project" && slug.current == $SLUG][0] {
  _id,
  title,
  slug,
  excerpt,
  sections[],
  "mainImage": mainImage.asset->url
}`);

// Homepage query
export const HOMEPAGE_QUERY = defineQuery(`*[_type == "homepage"][0] {
  title,
  sections[]
}`); 