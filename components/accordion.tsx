"use client"

import type React from "react"

import { useState } from "react"
import { Plus } from "lucide-react"

interface AccordionProps {
  title: string
  children: React.ReactNode
}

export default function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-black">
      <button className="w-full flex justify-between items-center py-4" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-lg font-medium">{title}</h3>
        <Plus className={`w-5 h-5 transform transition-transform ${isOpen ? "rotate-45" : ""}`} />
      </button>
      {isOpen && <div className="pb-0">{children}</div>}
    </div>
  )
}

