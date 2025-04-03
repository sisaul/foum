import Layout from "@/components/layout"
import ShowroomSection from "@/components/sections/hero-section"
import TwoProductGrid from "@/components/sections/product-grid-section"
import TitleSection from "@/components/sections/title-section"
import ProductTextGrid from "@/components/sections/product-text-section"

export default function Home() {
  // This data would come from Sanity in a real implementation
  const heroData = {
    image: {
      src: "/images/hero-image.jpg",
      alt: "FOUM hero image"
    },
    title: "DRIVEN BY PLAYFULNESS AND A SENSE OF TIMELESSNESS, WE CRAFT CUSTOMIZED CLASSICS DESIGNED TO LAST A LIFETIME AND BEYOND."
  }

  const featuredProducts = [
    { title: "SHELF 60", imageSrc: "/images/shelf-60.jpg", slug: "shelf-60" },
    { title: "SHELF 120", imageSrc: "/images/shelf-120.jpg", slug: "shelf-120" }
  ]

  const kitchenStory = {
    image: {
      src: "/images/kitchen-inspiration.jpg",
      alt: "Kitchen Inspiration"
    },
    title: "KITCHEN INSPIRATION",
    description: "Pour yourself some coffee and read about latest trends in interior design world, that our founder Kaarel Luht encountered at Milan Design Week.",
    link: {
      href: "/stories/kitchen-inspiration",
      text: "READ MORE"
    }
  }

  const studioDescription = {
    title: "FOUM IS A CUSTOMIZED FURNITURE BRAND BY INTERIOR ARCHITECTS AT FOUM STUDIO."
  }

  const bedroomStory = {
    image: {
      src: "/images/mixing-mediums.jpg",
      alt: "Mixing Mediums in Bedroom"
    },
    title: "MIXING MEDIUMS IN BEDROOM",
    description: "Read about the latest collaboration between FOUM STUDIOS and aare carpets.",
    link: {
      href: "/stories/mixing-mediums-in-bedroom",
      text: "READ MORE"
    }
  }

  return (
    <Layout>
      <ShowroomSection 
        image={heroData.image}
        title={heroData.title}
      />
      <div className="max-w-[88rem] mx-auto">
        <div className="px-6 md:px-12 flex flex-col space-y-16 md:space-y-24 py-16 md:py-24">
          <TwoProductGrid products={featuredProducts} columns={2} />
        
          <ProductTextGrid 
            image={kitchenStory.image}
            title={kitchenStory.title}
            description={kitchenStory.description}
            link={kitchenStory.link}
          />
        
          <TitleSection 
            title={studioDescription.title}
            centered={false}
          />
        
          <TwoProductGrid products={featuredProducts} columns={2} />
        
          <ProductTextGrid 
            image={bedroomStory.image}
            title={bedroomStory.title}
            description={bedroomStory.description}
            link={bedroomStory.link}
          />
        </div>
      </div>
    </Layout>
  )
}

