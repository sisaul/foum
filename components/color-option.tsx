"use client"

interface ColorOptionProps {
  color: string
  isSelected?: boolean
  onClick?: () => void
}

export default function ColorOption({ color, isSelected = false, onClick }: ColorOptionProps) {
  return (
    <button
      className={`w-12 h-12 rounded-full ${isSelected ? "ring-2 ring-black ring-offset-2" : ""}`}
      style={{ backgroundColor: color }}
      onClick={onClick}
      aria-label={`Select ${color} color`}
    />
  )
}

