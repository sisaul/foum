"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar({ inverted = false }) {
  const pathname = usePathname()
  const isStudioPage = pathname === "/studio"
  const textColor = isStudioPage || inverted ? "text-white" : "text-[#000000]"

  return (
    <nav className="px-8 md:px-16 pt-8 pb-4 flex items-start justify-between">
      <Link
        href="/"
        className={`${textColor} text-5xl font-bold leading-none tracking-tighter`}
      >
        FOUM
      </Link>
      <div className={`flex space-x-10 ${textColor} text-sm uppercase mt-3 font-medium`}>
        <Link href="/products" className="hover:opacity-70 transition-opacity">
          PRODUCTS
        </Link>
        <Link href="/stories" className="hover:opacity-70 transition-opacity">
          STORIES
        </Link>
        <Link href="/about" className="hover:opacity-70 transition-opacity">
          ABOUT
        </Link>
        <Link href="/studio" className="hover:opacity-70 transition-opacity">
          STUDIO
        </Link>
        <Link href="/contact" className="hover:opacity-70 transition-opacity">
          CONTACT
        </Link>
      </div>
    </nav>
  )
}

