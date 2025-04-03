import Image from "next/image"
import Layout from "@/components/layout"

export default function AboutPage() {
  const recentUpdates = [
    {
      title: "MILAN DESIGN WEEK OVERVIEW",
      slug: "milan-design-week",
      imageSrc: "/placeholder.svg?height=400&width=400",
    },
    { title: "GONSIORI FLAT, TALLINN", slug: "gonsiori-flat", imageSrc: "/placeholder.svg?height=400&width=400" },
    { title: "SHELF MINI", slug: "shelf-mini", imageSrc: "/placeholder.svg?height=400&width=400" },
    { title: "CUSTOM MADE VASE", slug: "custom-made-vase", imageSrc: "/placeholder.svg?height=400&width=400" },
  ]

  return (
    <Layout>
      <div className="max-w-[88rem] mx-auto">
        <div className="px-6 md:px-12 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div className="md:col-span-1">{/* Placeholder for image or empty space */}</div>
            <div className="md:col-span-1">
              <p className="text-lg mb-4">
                Founded in 2020 by Anna-Grete Konsap and Kaarel Lüht, Foum Studio emerged from their shared passion for
                furniture and spatial design. From prototyping with whatever was available on an art student&apos;s budget to
                launching a multidisciplinary design studio, they&apos;ve built a wealth of experience making things work on
                any scale.
              </p>
              <p className="text-lg mb-4">
                Their portfolio spans a broad spectrum – from product design, bespoke furniture, and home goods to
                intimate private interiors and public spaces. Combining interior architecture and tailored furniture, Foum
                by Foum Studio is a true reflection of their collaborative spirit.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-xl font-bold mb-8 border-b border-black pb-2">RECENT UPDATES</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {recentUpdates.map((update) => (
                <div key={update.slug} className="mb-8">
                  <div className="relative aspect-square mb-2">
                    <Image src={update.imageSrc || "/placeholder.svg"} alt={update.title} fill className="object-cover" />
                  </div>
                  <h3 className="text-sm font-medium">{update.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

