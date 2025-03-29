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

  let bgColor = "bg-[#e9e4dd]"
  let textColor = "text-black"
  let darkMode = false

  if (pathname?.startsWith('/studio')) {
    bgColor = "bg-[#1b1919]"
    textColor = "text-white"
    darkMode = true
  } else if (pathname?.startsWith('/stories')) {
    bgColor = "bg-[#ddc174]"
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

