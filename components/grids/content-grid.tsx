import Image from "next/image"
import Link from "next/link"

interface ContentGridProps {
  image: {
    src: string
    alt: string
  }
  title: string
  description: string
  link: {
    href: string
    text: string
  }
}

export default function ContentGrid({ image, title, description, link }: ContentGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <div className="md:col-span-1">
        <div className="relative w-full aspect-square bg-white">
          <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover w-full h-full" />
        </div>
      </div>
      <div className="md:col-span-2">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="mb-4">{description}</p>
        <Link href={link.href} className="text-xs underline">
          {link.text}
        </Link>
      </div>
    </div>
  )
}

