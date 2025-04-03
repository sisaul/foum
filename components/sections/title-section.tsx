"use client"

// Export the interface
export interface TitleSectionProps {
  title: string
  centered?: boolean
  size?: 'small' | 'medium' | 'large'
}

export default function TitleSection({ 
  title, 
  centered = false,
  size = 'medium'
}: TitleSectionProps) {
  const sizeClasses = {
    small: "text-2xl md:text-3xl",
    medium: "text-4xl md:text-5xl",
    large: "text-5xl md:text-6xl"
  }

  return (
    // Remove padding from the section itself
    <div className={`${centered ? 'text-center' : ''}`}>
      <h2 className={`${sizeClasses[size]} font-bold uppercase leading-none tracking-tight`}>
        {title}
      </h2>
    </div>
  )
}

