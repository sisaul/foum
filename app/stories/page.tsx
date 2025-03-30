import ProductGridSection from "@/components/sections/product-grid-section";
import Layout from "@/components/layout";
import TextSection from "@/components/sections/text-section";

// Mock data - replace with actual data fetching later (e.g., from Sanity)
const stories = [
  { title: "Gonsiori Flat Staging", slug: "gonsiori-flat", imageSrc: "/images/gonsiori-flat.png" },
  { title: "Kunderi Flat Renovation", slug: "kunderi-flat", imageSrc: "/images/kunderi-flati.png" },
  { title: "Ciao Package Design", slug: "ciao-package", imageSrc: "/images/ciao-package.png" },
  { title: "Cafe Rummu Interior", slug: "cafe-rummu", imageSrc: "/images/cafe-rummu.png" },
  { title: "Frost Spa Concept", slug: "frost-spa", imageSrc: "/images/frost-spa.png" },
  // Add more stories as needed
].map(story => ({
  ...story,
  basePath: "/stories",
  viewDetailsText: "Read More",
  linkClassName: "underline decoration-1 underline-offset-4"
}));

// Prepare data chunks for the sections
const section1Stories = stories.slice(0, 2);
const section2Stories = stories.slice(2, 4);
const section3Stories = stories.slice(4, 5); // Only the 5th story

// Define the intro text again
const introText = `FOUM Studio is an interior architecture studio by Anna-Grete Konsap and Kaarel Luht. Fueled by curiosity and a passion for innovative design, their portfolio ranges from private homes to cafes and package design. Approaching each project with fresh perspectives they blend creativity with client needs to push design boundaries.`

export default function StoriesPage() {
  // In a real application, you would fetch page data (including the intro text section)
  // from Sanity and render it using SectionRenderer, e.g.:
  // const pageData = await getPageDataFromSanity('stories');
  // return <Layout><SectionRenderer sections={pageData.sections} /></Layout>;

  // For now, just render the product grids within the Layout
  return (
    <Layout>
      {/* Render the intro text. Use paddingY prop if default isn't right */}
      {/* Let's try the default paddingY from TextSection first */}
      <TextSection 
        text={introText} 
        align="left"
        maxWidth="max-w-4xl"
      />

      {/* Product Grid Sections - Adjust top padding if TextSection padding changes */}
      {/* The main layout adds pt-40/pt-56, so maybe less padding needed here? */}
      <div className="space-y-8 md:space-y-12 pt-8 md:pt-12 pb-8 md:pb-12"> {/* Keep some top padding? */}
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
    </Layout>
  );
}

