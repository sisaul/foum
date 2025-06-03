"use client"

import Image from "next/image"
import { useLayout } from "@/components/layout"

interface HeroSectionProps {
  image: {
    src: string
    alt: string
  }
  title: string
  darkMode?: boolean
}

export type { HeroSectionProps };
export default function HeroSection({ image, title, darkMode: propDarkMode }: HeroSectionProps) {
  // Get darkMode from context, fallback to prop if provided
  const { darkMode: contextDarkMode } = useLayout();
  const darkMode = propDarkMode !== undefined ? propDarkMode : contextDarkMode;
  
  // Set background based on dark mode instead of using dark: class
  const bgColor = darkMode ? "bg-[#1b1919]" : "bg-foum-cream";
  const textColor = darkMode ? "text-white" : "text-foum-black";

  return (
    <section>
      <div className="w-screen ml-[calc(50%-50vw)] relative h-[85vh]">
        <Image 
          src={image.src || "/placeholder.svg"} 
          alt={image.alt} 
          fill 
          className="object-cover" 
          priority 
        />
      </div>
      <div className="max-w-[88rem] mx-auto px-5 md:px-16">
        <div className={`py-4 md:py-5 ${bgColor} ${textColor}`}> 
          <h2 className="caption md:whitespace-nowrap md:overflow-hidden md:text-ellipsis leading-tight">
            {title}
          </h2>
        </div>
      </div>
    </section>
  )
} 