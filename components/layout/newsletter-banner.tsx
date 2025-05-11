"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

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
      <Button
        onClick={handleClose}
        variant="foumClose"
        size="foumClose"
        aria-label="Close newsletter banner"
        className="absolute top-2 right-2 text-4xl md:text-5xl font-black leading-none p-0 m-0 z-10"
      >
        ✕
      </Button>
      <div className="max-w-[1440px] mx-auto px-8 md:px-8 py-6 md:py-4 xl:py-4 relative">
        <div className="flex flex-col xl:flex-row items-start justify-between gap-8 md:gap-8 xl:gap-8 xl:items-center">
          <div className="w-full xl:max-w-[420px] flex flex-col gap-3">
            <h2 className="text-black font-black text-left text-[52px] leading-tight tracking-tight uppercase xl:whitespace-nowrap">
              JOIN OUR NEWSLETTER.
            </h2>
            <div className="space-y-2">
              <p className="text-left text-lg leading-relaxed">
                Subscribe to our newsletter and be the first to discover curated collections, special offers, and all the latest updates.
              </p>
              <p className="text-left text-lg leading-relaxed">
                Join now for the full FOUM experience.
              </p>
            </div>
          </div>

          <div className="w-full xl:max-w-[400px] flex flex-col gap-3 mt-4 md:mt-0 pt-12 xl:pt-16">
            <div className="flex flex-col gap-3">
              <div className="space-y-1.5">
                <label htmlFor="popupFullName" className="block text-black uppercase text-left text-sm font-medium tracking-wide">
                  FULL NAME:
                </label>
                <Input 
                  id="popupFullName" 
                  className="w-full h-12 bg-[#f2f2f2] border-none !rounded-none focus:ring-1 focus:ring-black text-black px-4" 
                  placeholder="Enter your full name" 
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="popupEmail" className="block text-black uppercase text-left text-sm font-medium tracking-wide">
                  MAIL:
                </label>
                <Input 
                  id="popupEmail" 
                  type="email" 
                  className="w-full h-12 bg-[#f2f2f2] border-none !rounded-none focus:ring-1 focus:ring-black text-black px-4" 
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <Button variant="foum" size="foum" className="uppercase font-medium h-11 mt-2">
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

