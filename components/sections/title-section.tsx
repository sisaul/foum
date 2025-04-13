"use client"

// Export the interface
export interface TitleSectionProps {
  title: string
  centered?: boolean
  date?: string
  size?: 'heading-1' | 'heading-2' | 'heading-3'
}

export default function TitleSection({ 
  title, 
  centered = false,
  date,
  size = 'heading-1'
}: TitleSectionProps) {
  return (
    // Remove padding from the section itself
    <div className={`${centered ? 'text-center' : ''}`}>
      <h2 className={`title uppercase leading-none tracking-tight ${size}`}>
        {title}
      </h2>
      {date && <p className="mt-2 text-sm text-foum-black/70">{date}</p>}
    </div>
  )
}

