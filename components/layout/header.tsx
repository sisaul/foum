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

  const scrolledBgColor = darkMode ? "bg-[#1b1919]" : "bg-[#e9e4dd]"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)

    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[999] w-full flex justify-between items-start py-8 px-5 md:px-8 transition-colors duration-300 ease-in-out ${isScrolled ? `${scrolledBgColor} shadow-sm border-b border-black/5` : 'bg-transparent'}`}
    >
      <Link href="/" className={`${textColor} text-[120px] md:text-[180px] font-bold leading-[0.85] tracking-tighter`}>
        FOUM
      </Link>
      <nav className={`flex space-x-12 md:space-x-40 ${textColor} text-lg mt-4`}>
        {navItems.map((item) => (
          <Link 
            key={item.path}
            href={item.path}
            className={`${pathname.includes(item.path) ? "font-bold" : ""} hover:opacity-70 transition-opacity`}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  )
}

