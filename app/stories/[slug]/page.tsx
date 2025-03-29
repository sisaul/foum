import Layout from "@/components/layout"
import HeroSection from "@/components/sections/hero-section"
import TextSection from "@/components/sections/text-section"
import TitleSection from "@/components/sections/title-section"
import ImageSection from "@/components/sections/image-section"
import ProductCarousel from "@/components/sections/product-carousel"

interface StoryPageProps {
  params: {
    slug: string
  }
}

export default function StoryPage({ params }: StoryPageProps) {
  // This would normally come from a CMS or API
  const storyData = {
    title: "KITCHEN INSPIRATION",
    date: "SEPTEMBER 2023",
    heroImage: {
      src: "/placeholder.svg?height=1200&width=2400",
      alt: "Kitchen Design",
    },
    content:
      "At the recent Milan Design Week, a prominent trend in kitchen design was the innovative use of steel and other industrial metals, reflecting a blend of different aesthetics and functionalities. This fusion of materials and design approaches demonstrates how raw elements can be employed to create sleek, modern kitchen spaces that are both functional and environmentally conscious.",
    sections: [
      {
        title: "STAINLESS STEEL",
        description:
          "Stainless steel continues to be a favored material in contemporary kitchen design. Its durability, ease of maintenance, and timeless appeal make it an ideal choice for various kitchen elements, including countertops, cabinetry, and appliances.",
        images: [
          { src: "/placeholder.svg?height=800&width=800", alt: "Stainless Steel Kitchen 1" },
          { src: "/placeholder.svg?height=800&width=800", alt: "Stainless Steel Kitchen 2" },
        ],
      },
      {
        title: "SUSTAINABILITY",
        description:
          "A significant theme at Milan Design Week was the focus on sustainable materials and practices. The use of natural materials, recycled stone and mushroom-made items align with this ethos, offering environmentally friendly options for kitchen design.",
        images: [
          { src: "/placeholder.svg?height=800&width=800", alt: "Sustainable Kitchen 1" },
          { src: "/placeholder.svg?height=800&width=800", alt: "Sustainable Kitchen 2" },
        ],
      },
    ],
    relatedProducts: [
      {
        title: "MILAN DESIGN WEEK OVERVIEW",
        slug: "milan-design-week",
        imageSrc: "/placeholder.svg?height=400&width=400",
      },
      { title: "GONSIORI FLAT, TALLINN", slug: "gonsiori-flat", imageSrc: "/placeholder.svg?height=400&width=400" },
      { title: "SHELF MINI", slug: "shelf-mini", imageSrc: "/placeholder.svg?height=400&width=400" },
      { title: "CUSTOM MADE VASE", slug: "custom-made-vase", imageSrc: "/placeholder.svg?height=400&width=400" },
    ],
  }

  return (
    <Layout bgColor="bg-[#ddc17f]">
      <div className="px-8 py-8">
        <HeroSection image={storyData.heroImage} title={storyData.title} date={storyData.date} />

        <TextSection content={storyData.content} />

        {storyData.sections.map((section, index) => (
          <div key={index} className="mb-16">
            <TitleSection title={section.title} description={section.description} />
            <ImageSection images={section.images} />
          </div>
        ))}

        <ProductCarousel products={storyData.relatedProducts} />
      </div>
    </Layout>
  )
}

