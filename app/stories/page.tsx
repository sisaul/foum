import Layout from "@/components/layout"
import StoryCard from "@/components/story-card"

export default function StoriesPage() {
  const stories = [
    {
      title: "KITCHEN INSPIRATION",
      slug: "kitchen-inspiration",
      imageSrc: "/placeholder.svg?height=600&width=600",
      description: "Pour yourself some coffee and read about latest trends in interior design world.",
    },
    {
      title: "MIXING MEDIUMS IN BEDROOM",
      slug: "mixing-mediums-in-bedroom",
      imageSrc: "/placeholder.svg?height=600&width=600",
      description: "Read about the latest collaboration between FOUM STUDIOS and Sane carpets.",
    },
    {
      title: "FROM FINE DINING TO HOME COOKING",
      slug: "from-fine-dining-to-home-cooking",
      imageSrc: "/placeholder.svg?height=600&width=600",
    },
    {
      title: "STAYCATION IS HERE TO STAY",
      slug: "staycation-is-here-to-stay",
      imageSrc: "/placeholder.svg?height=600&width=600",
    },
  ]

  return (
    <Layout bgColor="bg-[#ddc17f]">
      <div className="px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story) => (
            <StoryCard
              key={story.slug}
              title={story.title}
              imageSrc={story.imageSrc}
              slug={story.slug}
              description={story.description}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

