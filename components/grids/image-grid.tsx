import Image from "next/image"
import Link from "next/link"

interface ImageItem {
  src: string
  alt: string
  title: string
  slug?: string
}

interface ImageGridProps {
  images: ImageItem[]
  columns?: 2 | 3 | 4
  withTitles?: boolean
  withLinks?: boolean
}

export default function ImageGrid({ images, columns = 2, withTitles = true, withLinks = false }: ImageGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  }

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-8 mb-16`}>
      {images.map((image, index) => (
        <div key={index} className="mb-4">
          {withLinks && image.slug ? (
            <Link href={`/studio/${image.slug}`}>
              <a>
                <div className="relative aspect-[4/3] w-full mb-2">
                  <Image 
                    src={image.src || "/placeholder.svg"} 
                    alt={image.alt} 
                    fill={true}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover" 
                  />
                </div>
                {withTitles && <h3 className="text-sm font-medium uppercase">{image.title}</h3>}
              </a>
            </Link>
          ) : (
            <>
              <div className="relative aspect-[4/3] w-full mb-2">
                <Image 
                  src={image.src || "/placeholder.svg"} 
                  alt={image.alt} 
                  fill={true}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover" 
                />
              </div>
              {withTitles && <h3 className="text-sm font-medium uppercase">{image.title}</h3>}
            </>
          )}
        </div>
      ))}
    </div>
  )
}

