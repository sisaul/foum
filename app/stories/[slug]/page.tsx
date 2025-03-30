import Image from 'next/image'
import Layout from "@/components/layout";

interface StoryPageProps {
  params: {
    slug: string
  }
}

const stories = [
  { title: "Cafe Rummu Interior", slug: "cafe-rummu", imageSrc: "/images/cafe-rummu.png", description: "Detailed description for Cafe Rummu..." },
  { title: "Ciao Package Design", slug: "ciao-package", imageSrc: "/images/ciao-package.png", description: "Detailed description for Ciao Package..." },
  { title: "Kunderi Flat Renovation", slug: "kunderi-flat", imageSrc: "/images/kunderi-flati.png", description: "Detailed description for Kunderi Flat..." },
  { title: "Gonsiori Flat Staging", slug: "gonsiori-flat", imageSrc: "/images/gonsiori-flat.png", description: "Detailed description for Gonsiori Flat..." },
  { title: "Frost Spa Concept", slug: "frost-spa", imageSrc: "/images/frost-spa.png", description: "Detailed description for Frost Spa..." },
];

async function getStory(slug: string) {
  // In a real app, fetch this from your CMS (Sanity)
  return stories.find(story => story.slug === slug);
}

export default async function StoryPage({ params }: StoryPageProps) {
  const story = await getStory(params.slug);

  if (!story) {
    return <div>Story not found</div>;
  }

  return (
    <Layout>
      <div className="px-8 md:px-16 py-12 md:py-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">{story.title}</h1>
        <div className="relative aspect-video mb-8 w-full max-w-5xl mx-auto">
          <Image
            src={story.imageSrc}
            alt={story.title}
            fill
            className="object-contain"
          />
        </div>
        {story.description && (
          <div className="prose prose-invert dark:prose-invert lg:prose-xl max-w-3xl mx-auto">
            <p>{story.description}</p>
          </div>
        )}
      </div>
    </Layout>
  )
}

