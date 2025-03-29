import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactFormDark() {
  return (
    <div className="px-8 py-8 text-white">
      <h2 className="text-4xl font-bold mb-6 border-b border-white pb-2">A QUESTION? AN IDEA? GET IN TOUCH.</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium mb-2">
            FULL NAME
          </label>
          <Input id="fullName" className="w-full h-10 bg-white border-none text-black" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            MAIL
          </label>
          <Input id="email" type="email" className="w-full h-10 bg-white border-none text-black" />
        </div>
        <div className="md:col-span-1 lg:col-span-1">
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            YOUR MESSAGE
          </label>
          <Textarea id="message" className="w-full h-32 bg-white border-none text-black" />
        </div>
      </div>
    </div>
  )
}

