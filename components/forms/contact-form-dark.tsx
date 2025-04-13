"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactFormDark() {
  return (
    <div className="px-8 py-8 text-white">
      <h2 className="title border-t-4 border-[#E9E4DD] pt-4 mb-6">A QUESTION? AN IDEA? GET IN TOUCH.</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div>
          <label htmlFor="fullName" className="block caption mb-2">
            FULL NAME
          </label>
          <Input id="fullName" className="w-full h-10 bg-white border-none text-black" />
        </div>
        <div>
          <label htmlFor="email" className="block caption mb-2">
            MAIL
          </label>
          <Input id="email" type="email" className="w-full h-10 bg-white border-none text-black" />
        </div>
        <div className="md:col-span-1 lg:col-span-1">
          <label htmlFor="message" className="block caption mb-2">
            YOUR MESSAGE
          </label>
          <Textarea id="message" className="w-full h-32 bg-white border-none text-black" />
        </div>
      </div>
    </div>
  )
} 