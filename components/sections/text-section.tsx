"use client"

interface TextSectionProps {
  content: string
  backgroundColor?: string
  textColor?: string
  centered?: boolean
}

export default function TextSection({
  content,
  backgroundColor = 'transparent',
  textColor = 'text-black',
  centered = false,
}: TextSectionProps) {
  if (!content) return null;

  return (
    <section className={`py-4 md:py-6 px-8 md:px-16 ${backgroundColor}`}>
      <div className={`${centered ? 'text-center mx-auto' : ''}`}>
        <p className={`${textColor} text-base md:text-lg leading-tight max-w-3xl font-light`}>
          {content}
        </p>
      </div>
    </section>
  )
}

