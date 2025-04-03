'use client'

import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

interface CarouselImage {
  src: string;
  alt: string;
}

export interface SingleImageCarouselProps {
  images: CarouselImage[];
}

export default function SingleImageCarousel({ images }: SingleImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    console.log("Embla API initialized (Full Container):", emblaApi);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev(); }, [emblaApi]);
  const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext(); }, [emblaApi]);

  if (!images || images.length === 0) return null;

  return (
    <div className="max-w-2xl mx-auto relative">
      {/* Square container with responsive height based on width */}
      <div className="overflow-hidden aspect-square w-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((image, index) => (
            <div 
              className="flex-[0_0_100%] min-w-0 h-full" 
              key={index}
            >
              <Image
                src={image.src}
                alt={image.alt || ''}
                width={1200}
                height={1200}
                className="w-full h-full object-cover" 
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 left-[-3.5rem] -translate-y-1/2 p-2 text-gray-300 hover:text-white transition-all duration-200 rounded-full hover:bg-gray-800/50 hover:scale-110 z-20"
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="absolute top-1/2 right-[-3.5rem] -translate-y-1/2 p-2 text-gray-300 hover:text-white transition-all duration-200 rounded-full hover:bg-gray-800/50 hover:scale-110 z-20"
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
} 