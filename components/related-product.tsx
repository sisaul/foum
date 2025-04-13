import Image from "next/image"

interface RelatedProductProps {
  title: string
  imageSrc: string
  slug: string
}

export default function RelatedProduct({ title, imageSrc, slug }: RelatedProductProps) {
  return (
    <div className="mb-8">
      <div className="relative w-full aspect-square mb-2 bg-white">
        <Image
          src={imageSrc || "/placeholder.svg?height=400&width=400"}
          alt={title}
          fill
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="caption">{title}</h3>
    </div>
  )
}

