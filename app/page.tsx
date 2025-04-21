import Layout from "@/components/layout"
import HeroSection from "@/components/sections/page-hero-section"
import TwoProductGrid from "@/components/sections/product-grid-section"
import TitleSection from "@/components/sections/title-section"
import ProductTextSection from "@/components/sections/product-text-section"

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
    { title: "SHELF 60", slug: "shelf-60", imageSrc: "/images/shelf-60.jpg" },
    { title: "SHELF 120", slug: "shelf-120", imageSrc: "/images/shelf-120.jpg" },
  ]

  const kitchenStory = {
    image: {
      src: "/images/kitchen-inspiration.jpg",
      alt: "Kitchen Inspiration"
    },
    title: "KITCHEN\nINSPIRATION",
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
    title: "MIXING\nMEDIUMS IN\nBEDROOM",
    description: "Read about the latest collaboration between FOUM STUDIOS and aare carpets.",
    link: {
      href: "/stories/mixing-mediums-in-bedroom",
      text: "READ MORE"
    }
  }

  return (
    <Layout>
      <HeroSection 
        image={heroData.image}
        title={heroData.title}
      />
      <div className="max-w-[88rem] mx-auto">
        <div className="px-5 md:px-16 flex flex-col space-y-16 md:space-y-32 py-10 md:py-24">
          <TwoProductGrid products={featuredProducts} columns={2} />
        
          <ProductTextSection 
            image={kitchenStory.image}
            title={kitchenStory.title}
            description={kitchenStory.description}
            link={kitchenStory.link}
          />
        
          <TitleSection 
            title={studioDescription.title}
            centered={false}
            size="small"
          />
        
          <TwoProductGrid products={featuredProducts} columns={2} />
        
          <ProductTextSection 
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

