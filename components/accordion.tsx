"use client"

import type React from "react"

import { useState } from "react"
import { Plus } from "lucide-react"

interface AccordionProps {
  title: string
  children?: React.ReactNode
  className?: string
}

export default function Accordion({ title, children, className }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`border-b-8 border-black ${className}`}>
      <button 
        className="w-full flex justify-between items-center py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="small">{title}</span>
        <Plus className={`w-6 h-6 transform transition-transform ${isOpen ? "rotate-45" : ""}`} />
      </button>
      {isOpen && <div className="pb-1 small">{children}</div>}
    </div>
  )
}

