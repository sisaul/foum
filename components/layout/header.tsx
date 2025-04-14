"use client"

import Link from "next/link"
import React, { useState, useEffect } from "react"

interface HeaderProps {
  darkMode?: boolean
  navItems: { title: string; path: string; }[]
}

export default function Header({ darkMode = false, navItems }: HeaderProps) {
  const textColor = darkMode ? "text-white" : "text-foum-black"
  const [isMobile, setIsMobile] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1020)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[999] w-full flex items-start py-6 px-8 lg:px-16`}
    >
      <Link href="/" className={`${textColor} text-[80px] md:text-[120px] font-bold leading-[0.85] tracking-tighter w-[200px]`}>
        FOUM
      </Link>
      {isMobile ? (
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`${textColor} z-50 ml-auto`}
        >
          <div className="space-y-2">
            <span className={`block w-8 h-0.5 ${textColor === "text-white" ? "bg-white" : "bg-black"}`}></span>
            <span className={`block w-8 h-0.5 ${textColor === "text-white" ? "bg-white" : "bg-black"}`}></span>
            <span className={`block w-8 h-0.5 ${textColor === "text-white" ? "bg-white" : "bg-black"}`}></span>
          </div>
        </button>
      ) : (
        <div className={`flex ml-auto ${textColor} text-lg leading-7 font-caption uppercase mt-3 font-medium`} style={{ gap: 'clamp(60px, calc(160 * (100vw - 1020px) / 760), 160px)' }}>
          {navItems.map((item) => (
            <Link key={item.path} href={item.path} className="hover:opacity-70 transition-opacity whitespace-nowrap">
              {item.title}
            </Link>
          ))}
        </div>
      )}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-white text-2xl font-caption uppercase">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} onClick={() => setIsMenuOpen(false)}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

