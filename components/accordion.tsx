"use client"

import type React from "react"

import { useState } from "react"
import { Plus } from "lucide-react"

interface AccordionProps {
  title: string
  children?: React.ReactNode
}

export default function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b-4 border-black">
      <button 
        className="w-full flex justify-between items-center py-8" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="small">{title}</span>
        <Plus className={`w-6 h-6 transform transition-transform ${isOpen ? "rotate-45" : ""}`} />
      </button>
      {isOpen && <div className="pb-8 small">{children}</div>}
    </div>
  )
}

