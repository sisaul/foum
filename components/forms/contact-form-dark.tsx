"use client"

import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactFormDark() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    
    try {
      const formData = new FormData(formRef.current || undefined);
      const data = {
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        message: formData.get('message')
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        formRef.current?.reset();
      } else {
        setError(true);
      }
    } catch (err: unknown) {
      console.error(err);
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="px-8 py-8 text-white">
      <h2 className="title border-t-4 border-[#E9E4DD] pt-4 mb-6">A QUESTION? AN IDEA? GET IN TOUCH.</h2>
      <form
        ref={formRef} 
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 w-full max-w-xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div>
            <label htmlFor="fullName" className="block caption mb-2">
              FULL NAME
            </label>
            <Input id="fullName" name="fullName" className="w-full h-10 bg-white border-none text-black" />
          </div>
          <div>
            <label htmlFor="email" className="block caption mb-2">
              MAIL
            </label>
            <Input id="email" name="email" type="email" className="w-full h-10 bg-white border-none text-black" />
          </div>
          <div className="md:col-span-1 lg:col-span-1">
            <label htmlFor="message" className="block caption mb-2">
              YOUR MESSAGE
            </label>
            <Textarea id="message" name="message" className="w-full h-32 bg-white border-none text-black" />
          </div>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="py-2 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200 disabled:opacity-50"
        >
          {submitting ? "Sending..." : "Send Message"}
        </button>
        
        {submitted && (
          <p className="text-green-400 text-sm mt-2">
            Your message has been sent! We&apos;ll get back to you soon.
          </p>
        )}
        
        {error && (
          <p className="text-red-400 text-sm mt-2">
            There was an error sending your message. Please try again.
          </p>
        )}
      </form>
    </div>
  )
} 