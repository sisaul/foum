import ProjectCard from "@/components/project-card"
import Layout from "@/components/layout"

export default function StoriesPage() { // Renamed from StudioPage
  const projects = [
    { title: "GONSIORI FLAT, TALLINN", slug: "gonsiori-flat", imageSrc: "/placeholder.svg?height=600&width=600" },
    { title: "KUNDERI FLAT, TALLINN", slug: "kunderi-flat", imageSrc: "/placeholder.svg?height=600&width=600" },
    { title: "CIAO PACKAGE DESIGN", slug: "ciao-package-design", imageSrc: "/placeholder.svg?height=600&width=600" },
    { title: "CAFÉ in RUMMU", slug: "cafe-rummu", imageSrc: "/placeholder.svg?height=600&width=600" },
    { title: "FROST SPA, PÄRNU", slug: "frost-spa", imageSrc: "/placeholder.svg?height=600&width=600" },
  ]

  return (
    <Layout>
      <div className="max-w-[88rem] mx-auto">
        <div className="px-6 md:px-12 py-8">
          <div className="mb-16">
            <p className="text-lg mb-8 max-w-2xl">
              FOUM Studio is an interior architecture studio by Anna-Grete Konsap and Kaarel Lüht. Fueled by curiosity and
              a passion for innovative design, their portfolio ranges from private homes to cafes and package design.
              Approaching each project with fresh perspectives they blend creativity with client needs to push design
              boundaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {projects.map((project) => (
              <ProjectCard key={project.slug} title={project.title} imageSrc={project.imageSrc} slug={project.slug} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

