import Image from "next/image"
import Link from "next/link"

interface BlogPost {
  title: string
  slug: string
  imageSrc: string
  description: string
  date?: string
}

interface BlogGridProps {
  posts: BlogPost[]
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      {posts.map((post) => (
        <div key={post.slug} className="mb-16">
          <Link href={`/stories/${post.slug}`}>
            <div className="relative w-full aspect-square mb-4">
              <Image src={post.imageSrc || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
          </Link>
          <div>
            <div className="flex justify-between items-start mb-2">
              <h2 className="heading-2">{post.title}</h2>
              {post.date && <span className="caption">{post.date}</span>}
            </div>
            <p className="mb-4">{post.description}</p>
            <Link href={`/stories/${post.slug}`} className="caption underline">
              READ MORE
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

