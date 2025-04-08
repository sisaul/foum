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

  let bgColor = "bg-[#e9e4dd]"    // Default light background
  let textColor = "text-black"      // Default dark text
  let darkMode = false          // Flag for component props
  let contactBgColor = ""       // Default: inherit from parent

  if (pathname?.startsWith('/studio')) {
    bgColor = "bg-[#1b1919]"    // Studio dark bg
    textColor = "text-white"      // Studio light text
    darkMode = true
  } else if (pathname?.startsWith('/stories')) {
    bgColor = "bg-[#E2D0A2]"    // Stories gold bg
    textColor = "text-[#1E1E1E]" // Stories dark text
    contactBgColor = "bg-[#E2D0A2]" // Set contact form to gold background
    darkMode = false
  }

  return (
    <div className={`min-h-screen ${bgColor} ${textColor}`}>
      <Header navItems={navItems} darkMode={darkMode} />
      <main className={`flex-grow ${!isHomePage ? 'pt-40 md:pt-56' : ''}`}>
        {children}
      </main>
      <div className={contactBgColor}>
        <ContactForm darkMode={darkMode} />
      </div>
      <NewsletterBanner />
    </div>
  )
}

