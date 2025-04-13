import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  title: string
  imageSrc: string
  slug: string
}

export default function ProductCard({ title, imageSrc, slug }: ProductCardProps) {
  return (
    <div className="mb-16">
      <div className="relative w-full aspect-square mb-2 bg-white">
        <Image
          src={imageSrc || "/placeholder.svg?height=400&width=400"}
          alt={title}
          fill
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex justify-between items-center">
        <h3 className="heading-3">{title}</h3>
        <Link href={`/products/${slug}`} className="text-xs underline">
          VIEW DETAILS
        </Link>
      </div>
    </div>
  )
}

