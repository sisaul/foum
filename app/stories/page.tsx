import Layout from "@/components/layout"
import ProductGridSection from "@/components/sections/product-grid-section"
import TextSection from "@/components/sections/text-section"

export default function StoriesPage() {
  // Mock intro text for the stories page
  const introText = `FOUM Stories is a curated collection of inspirational pieces featuring our products in real-world settings. Each story showcases innovative design solutions, creative spaces, and the versatility of our products across different environments.`;

  // Mock data for stories
  const storiesData = [
    { 
      title: "KITCHEN INSPIRATION", 
      slug: "kitchen-inspiration", 
      imageSrc: "/images/stories/stories-1.png",
      viewDetailsText: "READ MORE",
      viewDetailsMobile: true, 
      linkClassName: "md:underline md:decoration-1 md:underline-offset-4 md:text-base" 
    },
    { 
      title: "MIXING MEDIUMS IN BEDROOM", 
      slug: "mixing-mediums-in-bedroom", 
      imageSrc: "/images/stories/stories-2.png",
      viewDetailsText: "READ MORE", 
      viewDetailsMobile: true,
      linkClassName: "md:underline md:decoration-1 md:underline-offset-4 md:text-base" 
    },
    { 
      title: "FROM FINE DINING TO HOME COOKING", 
      slug: "fine-dining-to-home-cooking", 
      imageSrc: "/images/stories/stories-3.png",
      viewDetailsText: "READ MORE",
      viewDetailsMobile: true, 
      linkClassName: "md:underline md:decoration-1 md:underline-offset-4 md:text-base" 
    },
    { 
      title: "STAYCATION IS HERE TO STAY", 
      slug: "staycation", 
      imageSrc: "/images/stories/stories-4.png",
      viewDetailsText: "READ MORE",
      viewDetailsMobile: true, 
      linkClassName: "md:underline md:decoration-1 md:underline-offset-4 md:text-base" 
    }
  ];

  // Split stories into sections like in the studio page
  const section1Stories = storiesData.slice(0, 2);
  const section2Stories = storiesData.slice(2, 4);

  return (
    <Layout>
      <div className="max-w-[88rem] mx-auto px-5 md:px-0">
        <TextSection 
          text={introText} 
          align="left"
          layoutVariant="studioIntro"
          paddingY="pt-8 pb-6 md:py-16" // Match studio page padding
        />

        {/* Same spacing structure as studio page */}
        <div className="space-y-8 md:space-y-12 pt-8 md:pt-16 pb-10 md:pb-24">
          {section1Stories.length > 0 && (
            <ProductGridSection 
              products={section1Stories.map(story => ({
                ...story,
                basePath: "/stories",
              }))}
              columns={2}
              largeImages={false}
            />
          )}

          {section2Stories.length > 0 && (
            <ProductGridSection 
              products={section2Stories.map(story => ({
                ...story,
                basePath: "/stories",
              }))}
              columns={2}
              largeImages={false}
            />
          )}
        </div>
      </div>
    </Layout>
  )
}

