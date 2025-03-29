"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"

export default function NewsletterBanner() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const closed = sessionStorage.getItem('newsletterClosed')
    if (closed) {
      setIsVisible(false)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    sessionStorage.setItem('newsletterClosed', 'true')
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[998] w-full bg-[#ddc17f] px-6 md:px-12 py-4 flex justify-between items-center shadow-lg">
      <div className="flex items-center flex-grow mr-4">
        <div className="max-w-md mr-8">
          <h2 className="text-[#000000] text-2xl md:text-3xl font-bold mb-2">JOIN OUR NEWSLETTER.</h2>
          <p className="text-[#1b1919] text-sm md:text-base">
          Subscribe to our newsletter and be the first to discover curated collections, special offers, and all the latest updates.
          Join now for the full FOUM experience.
          </p>
        </div>

        <div className="flex items-end space-x-4 flex-grow">
          <div className="flex-grow">
            <label htmlFor="popupFullName" className="block text-[#000000] text-xs md:text-sm mb-1">
              FULL NAME
            </label>
            <Input id="popupFullName" className="w-full h-10 bg-[#e9e4dd] border-none focus:ring-0 text-sm" />
          </div>
          <div className="flex-grow">
            <label htmlFor="popupEmail" className="block text-[#000000] text-xs md:text-sm mb-1">
              MAIL
            </label>
            <Input id="popupEmail" type="email" className="w-full h-10 bg-[#e9e4dd] border-none focus:ring-0 text-sm" />
          </div>
        </div>
      </div>

      <button 
        onClick={handleClose} 
        className="p-1 rounded-full text-[#1b1919] hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-black/30 flex-shrink-0"
        aria-label="Close newsletter banner"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}

