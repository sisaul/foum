"use client"

import ContactForm from "@/components/forms/contact-form"
import Header from "@/components/layout/header"
import NewsletterBanner from "@/components/layout/newsletter-banner"
import { usePathname } from "next/navigation"
import React from "react"

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

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} relative`}>
      <Header navItems={navItems} darkMode={darkMode} />
      <main className={`flex-grow relative ${!isHomePage ? 'pt-40 md:pt-56' : ''}`}>
        {children}
      </main>
      <div className={`relative z-[998] ${contactBgColor}`}>
        <ContactForm darkMode={darkMode} />
      </div>
      <NewsletterBanner />
    </div>
  )
}

