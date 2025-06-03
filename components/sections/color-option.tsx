"use client"

import * as Tooltip from '@radix-ui/react-tooltip';

interface ColorOptionProps {
  color: string
  name: string
  isSelected?: boolean
  onClick?: () => void
}

export default function ColorOption({ color, name, isSelected = false, onClick }: ColorOptionProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button
            className={`w-24 h-24 rounded-full ${isSelected ? "ring-2 ring-black ring-offset-2" : ""}`}
            style={{ backgroundColor: color }}
            onClick={onClick}
            aria-label={`Select ${name} color`}
          />
        </Tooltip.Trigger>
        <Tooltip.Content className="px-3 py-1 text-sm text-white bg-black rounded-md shadow-sm">
          {name}
          <Tooltip.Arrow className="fill-current text-black" />
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
} 