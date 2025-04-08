"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useState, useEffect } from "react"

interface NavItem {
  title: string
  path: string
}

interface HeaderProps {
  navItems: NavItem[]
  darkMode?: boolean
}

export default function Header({ navItems, darkMode = false }: HeaderProps) {
  const pathname = usePathname() || ""
  const textColor = darkMode ? "text-white" : "text-black"
  const [isScrolled, setIsScrolled] = useState(false)

  let scrolledBgColor = "bg-[#e9e4dd]/95" // Default color
  
  if (pathname?.startsWith('/studio')) {
    scrolledBgColor = "bg-[#1b1919]/95" // Studio dark bg
  } else if (pathname?.startsWith('/stories')) {
    scrolledBgColor = "bg-[#E2D0A2]/95" // Stories gold bg
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[999] w-full flex justify-between items-start py-6 px-8 md:px-16 transition-colors duration-300 ease-in-out ${isScrolled ? `${scrolledBgColor} shadow-md border-b border-black/10 dark:border-white/10` : 'bg-transparent'}`}
    >
      <Link href="/" className={`${textColor} text-[100px] md:text-[160px] font-bold leading-[0.85] tracking-tighter`}>
        FOUM
      </Link>
      <nav className={`flex space-x-8 md:space-x-12 ${textColor} text-base uppercase font-medium pt-2`}>
        {navItems.map((item) => (
          <Link 
            key={item.path}
            href={item.path}
            className={`${pathname === item.path ? "underline decoration-1 underline-offset-4" : ""} hover:opacity-70 transition-opacity`}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  )
}

