"use client"

import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import Image from 'next/image';

interface CarouselItem {
  title: string;
  slug: string;
  imageSrc: string;
}

interface ImageCarouselProps {
  items: CarouselItem[];
  title?: string;
}

export default function ImageCarousel({ items, title }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 >= items.length ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? items.length - 1 : prevIndex - 1));
  };

  if (items.length === 0) return null;

  return (
    <section
      className="relative py-4 md:py-6 px-8 md:px-16"
      ref={containerRef}
    >
      {title && (
        <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 leading-none tracking-tight">
          {title}
        </h2>
      )}

      <div className="flex overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
            width: `${items.length * (100 / visibleItems)}%`
          }}
        >
          {items.map((item) => (
            <div 
              key={item.slug} 
              className="px-2" 
              style={{ width: `${100 / items.length}%` }}
            >
              <Link href={`/products/${item.slug}`} className="block group">
                <div className="relative aspect-square mb-2 bg-white">
                  <Image 
                    src={item.imageSrc || "/placeholder.svg"} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-opacity group-hover:opacity-90" 
                  />
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-sm uppercase font-medium leading-tight">{item.title}</h3>
                  <span className="text-base uppercase font-medium leading-tight">SHOP</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {items.length > visibleItems && (
        <div className="flex justify-end mt-3 space-x-4">
          <button
            onClick={prevSlide}
            className="opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Previous slide"
          >
            <span className="text-lg">←</span>
          </button>
          <button
            onClick={nextSlide}
            className="opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Next slide"
          >
            <span className="text-lg">→</span>
          </button>
        </div>
      )}
    </section>
  )
}

