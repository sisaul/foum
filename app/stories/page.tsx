import Layout from "@/components/layout"
import ProductGridSection from "@/components/sections/product-grid-section"

export default function StoriesPage() {
  // Mock data for stories
  const storiesData = [
    { 
      title: "KITCHEN INSPIRATION", 
      slug: "kitchen-inspiration", 
      imageSrc: "/images/stories/stories-1.png",
      viewDetailsText: "READ MORE", 
      linkClassName: "underline decoration-1 underline-offset-4" 
    },
    { 
      title: "MIXING MEDIUMS IN BEDROOM", 
      slug: "mixing-mediums-in-bedroom", 
      imageSrc: "/images/stories/stories-2.png",
      viewDetailsText: "READ MORE", 
      linkClassName: "underline decoration-1 underline-offset-4" 
    },
    { 
      title: "FROM FINE DINING TO HOME COOKING", 
      slug: "fine-dining-to-home-cooking", 
      imageSrc: "/images/stories/stories-3.png",
      viewDetailsText: "READ MORE", 
      linkClassName: "underline decoration-1 underline-offset-4" 
    },
    { 
      title: "STAYCATION IS HERE TO STAY", 
      slug: "staycation", 
      imageSrc: "/images/stories/stories-4.png",
      viewDetailsText: "READ MORE", 
      linkClassName: "underline decoration-1 underline-offset-4" 
    }
  ];

  // Prepare story chunks for the grid sections
  const section1Stories = storiesData.slice(0, 2);
  const section2Stories = storiesData.slice(2, 4);

  return (
    <Layout>
      <div className="max-w-[88rem] mx-auto">
        {/* Stories grid sections */}
        <div className="container-padding section-spacing space-y-16 md:space-y-24">
          {/* First row */}
          {section1Stories.length > 0 && (
            <ProductGridSection 
              products={section1Stories.map(story => ({
                ...story,
                basePath: "/stories",
              }))}
              columns={2}
            />
          )}

          {/* Second row */}
          {section2Stories.length > 0 && (
            <ProductGridSection 
              products={section2Stories.map(story => ({
                ...story,
                basePath: "/stories",
              }))}
              columns={2}
            />
          )}
        </div>
      </div>
    </Layout>
  )
}

