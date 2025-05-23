"use client"

// Export the interface
export interface TitleSectionProps {
  title: string
  centered?: boolean
  date?: string
  size?: 'default' | 'small'
  noPadding?: boolean
}

export default function TitleSection({ 
  title, 
  centered = false,
  date,
  size = 'default',
  noPadding = false
}: TitleSectionProps) {
  return (
    // Remove padding from the section itself
    <div className={`${centered ? 'text-center' : ''} ${noPadding ? 'px-0' : 'px-5 md:px-0'}`}>
      <h2 className={size === 'default' ? 'title' : 'title-small'}>
        {title}
      </h2>
      {date && <p className="caption mt-2 text-foum-black/70">{date}</p>}
    </div>
  )
}

