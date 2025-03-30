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

  if (pathname?.startsWith('/studio')) {
    bgColor = "bg-[#1b1919]"    // Studio dark bg
    textColor = "text-white"      // Studio light text
    darkMode = true
  } else if (pathname?.startsWith('/stories')) {
    bgColor = "bg-[#1B1919]"    // Stories dark bg (#1B1919)
    textColor = "text-[#E9E4DD]" // Stories light text (#E9E4DD)
    darkMode = true
  }

  return (
    <div className={`min-h-screen ${bgColor} ${textColor}`}>
      <Header navItems={navItems} darkMode={darkMode} />
      <main className={`flex-grow ${!isHomePage ? 'pt-40 md:pt-56' : ''}`}>
        {children}
      </main>
      <ContactForm darkMode={darkMode} />
      <NewsletterBanner />
    </div>
  )
}

