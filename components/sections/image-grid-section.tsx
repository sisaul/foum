'use client'

import Image from 'next/image';

interface ImageItem {
  src: string;
  alt: string;
}

export interface ImageGridSectionProps {
  images: ImageItem[];
  columns?: 2 | 3 | 4; // Number of columns on medium screens and up
  gap?: string; // Optional Tailwind gap class e.g., 'gap-4', 'gap-8'
}

export default function ImageGridSection({
  images,
  columns = 2,
  gap = 'gap-8', // Default gap
}: ImageGridSectionProps) {
  if (!images || images.length === 0) {
    return null;
  }

  const gridColsClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }[columns];

  return (
    // Removed padding/section wrapper, rely on parent for spacing 
    <div className={`grid grid-cols-1 ${gridColsClass} ${gap}`}>
      {images.map((image, index) => (
        <div key={index} className="relative aspect-square"> 
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
} 