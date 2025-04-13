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
    <div className="fixed bottom-0 left-0 right-0 z-[998] w-full bg-foum-gold shadow-lg">
      <button
        onClick={handleClose}
        className="absolute top-6 right-6 text-foum-black hover:opacity-70 transition-opacity text-2xl font-bold leading-none w-8 h-8 flex items-center justify-center"
        aria-label="Close newsletter banner"
      >
        X
      </button>
      <div className="max-w-[1280px] mx-auto container-padding py-8 relative">
        <div className="flex flex-col md:flex-row items-start justify-between standard-gap">
          <div className="max-w-[420px]">
            <h2 className="text-foum-black heading-2 mb-5 whitespace-nowrap">JOIN OUR NEWSLETTER</h2>
            <div className="space-y-2 text-foum-black">
              <p className="body-regular">
                Subscribe to our newsletter and be the first to discover curated collections, special offers, and all the latest updates.
              </p>
              <p className="body-regular">
                Join now for the full FOUM experience.
              </p>
            </div>
          </div>

          <div className="w-full md:w-[580px] mt-6 md:mt-0">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="popupFullName" className="block text-foum-black caption">
                    Full Name
                  </label>
                  <Input 
                    id="popupFullName" 
                    className="w-full h-12 bg-foum-cream border-none !rounded-none focus:ring-1 focus:ring-black text-foum-black px-4" 
                    placeholder="Enter your full name" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="popupEmail" className="block text-foum-black caption">
                    Email
                  </label>
                  <Input 
                    id="popupEmail" 
                    type="email" 
                    className="w-full h-12 bg-foum-cream border-none !rounded-none focus:ring-1 focus:ring-black text-foum-black px-4" 
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <button className="w-full h-12 bg-foum-black text-foum-gold button-text hover:bg-opacity-90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

