'use client'

import React, { useCallback } from 'react';
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

  const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev(); }, [emblaApi]);
  const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext(); }, [emblaApi]);

  if (!images || images.length === 0) return null;

  return (
    <section className="py-8 md:py-16">
      <div className="w-full max-w-[88rem] mx-auto px-5 md:px-0 flex justify-center">
        <div className="w-full md:w-1/2 relative">
          {/* Responsive container */}
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex">
              {images.map((image, index) => (
                <div 
                  className="flex-[0_0_100%] min-w-0 relative" 
                  key={index}
                >
                  <div className="relative aspect-square w-full">
                    <Image
                      src={image.src}
                      alt={image.alt || ''}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover" 
                      priority={index === 0}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={scrollPrev}
                className="absolute top-1/2 left-[-5rem] -translate-y-1/2 text-white transition-opacity hover:opacity-70 hidden md:block"
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={scrollNext}
                className="absolute top-1/2 right-[-5rem] -translate-y-1/2 text-white transition-opacity hover:opacity-70 hidden md:block"
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
} 