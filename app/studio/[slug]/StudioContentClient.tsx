"use client";

import ImageSection from "@/components/sections/image-section";
import ImageGridSection from "@/components/sections/image-grid-section";
import TextSection from "@/components/sections/text-section";
import TitleSection from "@/components/sections/title-section";
import TitleTextLayoutSection from "@/components/sections/title-text-layout-section";
import SingleImageCarousel from "@/components/sections/single-image-carousel";
import dynamic from "next/dynamic";
import { urlFor } from '@/lib/sanity/image';
import type { Section, SanityImage } from '@/lib/sanity/types';

const ProductCarousel = dynamic(() => import("@/components/sections/product-carousel"), { ssr: false });

interface ImageSectionSanity {
  image?: SanityImage;
}

interface StudioContentClientProps {
  heroImage?: { src: string; alt: string };
  titleSection?: Extract<Section, { _type: 'titleSection' }>;
  introTextSection: Extract<Section, { _type: 'textSection' }>;
  contentSections: Section[];
}

export default function StudioContentClient({ heroImage, titleSection, introTextSection, contentSections }: StudioContentClientProps) {
  return (
    <div className="max-w-[88rem] mx-auto">
      <div className="flex flex-col gap-16 md:gap-32">
        {/* Hero */}
        {heroImage && (
          <ImageSection 
            image={heroImage}
          />
        )}

        {/* Title (no date here) */}
        {titleSection && titleSection.title && (
          <div className="flex justify-between items-baseline px-0">
            <TitleSection 
              title={titleSection.title || ''}
              centered={titleSection.centered}
              noPadding={true}
            />
          </div>
        )}

        {/* Intro Text Section */}
        {introTextSection && (
          <TextSection
            key={introTextSection._key}
            text={introTextSection.text || ''}
            align="left"
          />
        )}

        {/* All content sections */}
        {contentSections.map((section: Section) => {
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
                  textAlign={section.textAlign}
                  maxWidth={section.maxWidth}
                  titlePosition={section.titlePosition}
                  verticalAlign={section.verticalAlign}
                />
              );
            case 'imageGridSection': {
              const gridImages = (section.images as unknown as SanityImage[]);
              return gridImages && gridImages.length > 0 && (
                <ImageGridSection 
                  key={_key} 
                  images={gridImages.map(img => ({ src: urlFor(img).url(), alt: img.alt || '' }))}
                  columns={section.columns as 2 | 3 | 4}
                  gap={section.gap}
                />
              );
            }
            case 'imageSection': {
              const sectionSanityImage = (section as ImageSectionSanity)?.image;
              const img = sectionSanityImage && sectionSanityImage.asset ? { src: urlFor(sectionSanityImage).url(), alt: sectionSanityImage.alt || '' } : undefined;
              return img && (
                <div className="w-full" key={_key}>
                  <ImageSection 
                    image={img}
                  />
                </div>
              );
            }
            case 'singleImageCarousel': {
              const carouselImages = (section.images as unknown as SanityImage[]);
              return carouselImages && carouselImages.length > 0 && (
                <SingleImageCarousel 
                  key={_key}
                  images={carouselImages.map(img => ({ src: urlFor(img).url(), alt: img.alt || '' }))}
                />
              );
            }
            case 'featuredProductsSection':
            case 'productGridSection': {
              const products = (section.products || []).map((p: { title: string; slug: string; imageSrc: { asset?: object } | string }) => ({
                title: p.title,
                slug: p.slug,
                imageSrc: typeof p.imageSrc === 'object' && p.imageSrc && 'asset' in p.imageSrc ? urlFor(p.imageSrc).url() : (typeof p.imageSrc === 'string' ? p.imageSrc : ''),
              }));
              const title = 'title' in section && typeof section.title === 'string'
                ? section.title
                : (_type === 'featuredProductsSection' ? 'FEATURED PRODUCTS' : 'DISCOVER MORE');
              return products.length > 0 && (
                <ProductCarousel
                  key={_key}
                  title={title}
                  products={products}
                  columns={4}
                  hideViewDetailsLink={true}
                  darkMode={true}
                />
              );
            }
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
} 