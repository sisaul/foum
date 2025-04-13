"use client"

import type React from "react"
import Accordion from "./accordion"

interface AccordionItem {
  title: string
  content?: React.ReactNode
}

interface AccordionSectionProps {
  title: string
  items: AccordionItem[]
}

export default function AccordionSection({ title, items }: AccordionSectionProps) {
  return (
    <div>
      <h2 className="caption mb-8">{title}</h2>
      <div className="border-t-4 border-black">
        {items.map((item, index) => (
          <Accordion key={index} title={item.title}>
            {item.content}
          </Accordion>
        ))}
      </div>
    </div>
  )
} 