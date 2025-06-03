"use client"

import Image from 'next/image';

// Export the interface
export interface ImageSectionProps {
  image?: { src: string; alt: string };
  images?: { src: string; alt: string }[];
  grid?: boolean;
}

export default function ImageSection({ image, images, grid = false }: ImageSectionProps) {
  if (grid && images && images.length > 0) {
    // Grid layout
    return (
      <section className="py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {images.map((img, idx) => (
            <div key={idx} className="relative aspect-square">
              <Image
                src={img.src}
                alt={img.alt || 'Product image'}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (image) {
    // Single image layout
    return (
      <section className="py-8 md:py-16">
        <div className="relative aspect-[2.4/1] md:aspect-[2.4/1] w-full">
          <Image
            src={image.src}
            alt={image.alt || 'Featured image'}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>
    );
  }

  return null;
}

