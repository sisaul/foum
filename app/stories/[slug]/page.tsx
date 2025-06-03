import TitleSection from "@/components/sections/title-section";
import { sanityFetch } from "@/lib/sanity/live";
import { Section } from "@/lib/sanity/types";
import { urlFor } from '@/lib/sanity/image';
import type { SanityImage } from '@/lib/sanity/types';
import StoriesContentClient from "./StoriesContentClient";

interface Story {
  _id: string;
  title: string;
  slug: { _type: "slug"; current: string };
  date: string;
  heroImageSection: { image?: SanityImage };
  introTextSection: Extract<Section, { _type: 'textSection' }>;
  sections: Section[];
}

interface PageProps {
  params: { slug: string }
}

export default async function Page({ params }: PageProps) {
  const slug = params.slug;
  // Query storySubpage from Sanity
  const result = await sanityFetch({
    query: `*[_type == "storySubpage" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      heroImageSection,
      introTextSection,
      sections
    }`,
    params: { slug }
  });
  const story: Story | null = (result && typeof result === 'object' && 'data' in result)
    ? result.data
    : result;

  if (!story) {
    return (
      <div className="text-center py-20">Story not found</div>
    );
  }

  const heroSection = story.heroImageSection;
  const introTextSection = story.introTextSection;
  const contentSections = story.sections || [];
  const title = story.title;
  const date = story.date;

  // Map single image for hero section
  const heroSanityImage = (heroSection as { image?: SanityImage })?.image;
  const heroImage = heroSanityImage && heroSanityImage.asset ? { src: urlFor(heroSanityImage).url(), alt: heroSanityImage.alt || '' } : undefined;

  return (
      <div className="max-w-[88rem] mx-auto">
        <div className="px-5 md:px-16 py-10 md:py-24 flex flex-col gap-12 md:gap-16">
        {/* Hero image */}
        {heroImage && (
          <img src={heroImage.src} alt={heroImage.alt} className="w-full object-cover" />
        )}
        {/* Title below hero */}
        {title && (
          <div className="w-full flex flex-row justify-between items-start px-0">
              <TitleSection 
              title={title}
                centered={false}
                noPadding={true}
              />
            {date && (
              <span className="text-sm font-medium pl-4 self-start text-right">
                {date}
                </span>
              )}
            </div>
          )}
        {/* All other content rendered in client component */}
        <StoriesContentClient
          introTextSection={{...introTextSection, align: 'left'}} // force left align
          contentSections={contentSections}
                  />
      </div>
    </div>
  );
} 