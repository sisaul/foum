import ProductGridSection from "@/components/sections/product-grid-section";
import Layout from "@/components/layout";
import TextSection from "@/components/sections/text-section";

// Mock data - replace with actual data fetching later (e.g., from Sanity)
const studio = [
  { title: "Gonsiori Flat Staging", slug: "gonsiori-flat", imageSrc: "/images/gonsiori-flat.png" },
  { title: "Kunderi Flat Renovation", slug: "kunderi-flat", imageSrc: "/images/kunderi-flati.png" },
  { title: "Ciao Package Design", slug: "ciao-package", imageSrc: "/images/ciao-package.png" },
  { title: "Cafe Rummu Interior", slug: "cafe-rummu", imageSrc: "/images/cafe-rummu.png" },
  { title: "Frost Spa Concept", slug: "frost-spa", imageSrc: "/images/frost-spa.png" },
  // Add more studio as needed
].map(studio => ({
  ...studio,
  basePath: "/studio", // Adjusted basePath from /studio
  viewDetailsText: "READ MORE",
  viewDetailsMobile: true,
  linkClassName: "md:underline md:decoration-1 md:underline-offset-4 md:text-base"
}));

// Prepare data chunks for the sections
const section1Stories = studio.slice(0, 2);
const section2Stories = studio.slice(2, 4);
const section3Stories = studio.slice(4, 5); // Only the 5th studio

// Define the intro text again
const introText = `FOUM Studio is an interior architecture studio by Anna-Grete Konsap and Kaarel Luht. Fueled by curiosity and a passion for innovative design, their portfolio ranges from private homes to cafes and package design. Approaching each project with fresh perspectives they blend creativity with client needs to push design boundaries.`

export default function StudioPage() { // Renamed from StoriesPage
  // In a real application, you would fetch page data (including the intro text section)
  // from Sanity and render it using SectionRenderer, e.g.:
  // const pageData = await getPageDataFromSanity('studio'); // Adjusted from 'studio'
  // return <Layout><SectionRenderer sections={pageData.sections} /></Layout>;

  // For now, just render the product grids within the Layout
  return (
    <Layout>
      <div className="max-w-[88rem] mx-auto">
        <div className="py-8 md:py-16 px-5 md:px-16 pb-10 md:pb-24">
        <TextSection 
          text={introText} 
          align="left"
          layoutVariant="studioIntro"
            paddingY="pt-0 pb-6 md:py-0" 
        />

          {/* Reduced top spacing by adjusting space-y */}
        <div className="space-y-8 md:space-y-12 pt-8 md:pt-16">
          {section1Stories.length > 0 && (
            <ProductGridSection 
              products={section1Stories}
              columns={2} 
            />
          )}

          {section2Stories.length > 0 && (
            <ProductGridSection 
              products={section2Stories}
              columns={2} 
            />
          )}

          {section3Stories.length > 0 && (
            <ProductGridSection 
              products={section3Stories}
              columns={2}
            />
          )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

