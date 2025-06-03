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

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[999] w-full flex items-start py-6 px-5 md:px-8 lg:px-16`}
    >
      {/* Only show the logo when menu is closed or on desktop */}
      {(!isMenuOpen || !isMobile) && (
        <Link href="/" className={`-ml-2 ${textColor} text-[60px] md:text-[120px] font-bold leading-[0.85] tracking-tighter w-[150px] md:w-[200px]`}>
          FOUM
        </Link>
      )}
      
      {/* Only show hamburger when menu is closed and on mobile */}
      {isMobile && !isMenuOpen ? (
        <button 
          onClick={() => setIsMenuOpen(true)}
          className={`${textColor} z-50 ml-auto`}
          aria-label="Open menu"
        >
          <div className="space-y-2">
            <span className={`block w-8 h-0.5 ${textColor === "text-white" ? "bg-white" : "bg-black"}`}></span>
            <span className={`block w-8 h-0.5 ${textColor === "text-white" ? "bg-white" : "bg-black"}`}></span>
            <span className={`block w-8 h-0.5 ${textColor === "text-white" ? "bg-white" : "bg-black"}`}></span>
          </div>
        </button>
      ) : !isMobile && (
        <div className={`flex ml-auto ${textColor} text-lg leading-7 font-caption uppercase mt-3 font-medium`} style={{ gap: 'clamp(60px, calc(160 * (100vw - 1020px) / 760), 160px)' }}>
          {navItems.map((item) => (
            <Link key={item.path} href={item.path} className="hover:opacity-70 transition-opacity whitespace-nowrap">
              {item.title}
            </Link>
          ))}
        </div>
      )}
      
      {/* Mobile menu overlay */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 bg-[#1C1C1C] z-40 flex flex-col">
          {/* Menu header with FOUM logo and X close button */}
          <div className="flex justify-between items-start w-full py-6 px-5">
            <div className="text-white text-[60px] font-bold leading-[0.85] tracking-tighter">
              FOUM
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-white z-50"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          {/* Menu items */}
          <div className="flex flex-col items-center justify-center flex-grow">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path} 
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-center text-xl uppercase tracking-wider py-4"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

