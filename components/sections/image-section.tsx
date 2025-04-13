"use client"

import Image from 'next/image';

// Export the interface
export interface ImageSectionProps {
  images: {
    src: string;
    alt: string;
  }[];
  caption?: string;
  fullWidth?: boolean;
  layout?: 'grid' | 'single';
  columns?: 2 | 3 | 4;
}

export default function ImageSection({ 
  images, 
  caption, 
  fullWidth = false,
  layout = 'grid',
  columns = 3,
}: ImageSectionProps) {
  if (!images || images.length === 0) {
    return null;
  }

  // Column configuration
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4'
  };

  if (layout === 'single' && images.length > 0) {
    // Determine container classes: Use aspect ratio
    const singleLayoutClasses = fullWidth 
        ? 'aspect-[2.4/1]' // Hero aspect ratio
        : 'aspect-[2/1]'; // Non-fullWidth single image aspect ratio (approx 1312:640)

    return (
      <section className={`${fullWidth ? 'w-full' : ''}`}>
        <div className={`relative ${singleLayoutClasses} w-full`}>
          <Image
            src={images[0].src}
            alt={images[0].alt || 'Featured image'}
            fill
            className="object-cover"
            priority
          />
        </div>
        {caption && <p className="mt-2 text-sm text-foum-black/80 leading-tight">{caption}</p>}
      </section>
    );
  }

  // Grid layout
  return (
    <section className={`section-spacing ${fullWidth ? 'w-full' : ''}`}>
      <div className={`grid grid-cols-1 ${gridCols[columns]} standard-gap`}>
        {images.map((image, index) => (
          <div key={index} className="relative aspect-square">
            <Image
              src={image.src}
              alt={image.alt || 'Product image'}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
      {caption && <p className="mt-3 text-sm text-foum-black/80 leading-tight">{caption}</p>}
    </section>
  );
}

