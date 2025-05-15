"use client"

import ContactForm from "@/components/forms/contact-form"
import Header from "@/components/layout/header"
import NewsletterBanner from "@/components/layout/newsletter-banner"
import { usePathname } from "next/navigation"
import React, { createContext, useContext } from "react"

// Create a context for layout properties
export const LayoutContext = createContext({
  darkMode: false
});

// Custom hook to access layout properties
export const useLayout = () => useContext(LayoutContext);

interface LayoutProps {
  children: React.ReactNode
}

const navItems = [
  { title: "PRODUCTS", path: "/products" },
  { title: "STORIES", path: "/stories" },
  { title: "ABOUT", path: "/about" },
  { title: "STUDIO", path: "/studio" },
  { title: "CONTACT", path: "/contact" },
]

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  // Use consistent theme colors from Tailwind config
  let bgColor = "bg-foum-cream"    // Default light background
  let textColor = "text-foum-black" // Default dark text
  let darkMode = false          // Flag for component props
  let contactBgColor = ""       // Default: inherit from parent

  if (pathname?.startsWith('/studio')) {
    bgColor = "bg-[#1b1919]"    // Studio dark bg
    textColor = "text-white"    // Studio light text
    darkMode = true
  } else if (pathname?.startsWith('/stories')) {
    bgColor = "bg-foum-gold"    // Stories gold bg
    textColor = "text-foum-black" // Stories dark text
    contactBgColor = "bg-foum-gold" // Set contact form to gold background
    darkMode = false
  }

  // Create the layout context value
  const layoutValue = { darkMode };

  return (
    <LayoutContext.Provider value={layoutValue}>
    <div className={`min-h-screen ${bgColor} ${textColor} relative`}>
      <Header navItems={navItems} darkMode={darkMode} />
      <div className="flex-grow flex flex-col items-center">
        <main className={`w-full max-w-[1440px] mx-auto flex-grow relative ${!isHomePage ? 'pt-12 md:pt-24' : ''}`}>
          {children}
        </main>
        <div className="w-full max-w-[1440px] mx-auto">
          <div className={`relative z-[998] ${contactBgColor}`}>
            <ContactForm darkMode={darkMode} />
          </div>
        </div>
      </div>
      <NewsletterBanner />
    </div>
    </LayoutContext.Provider>
  )
}

