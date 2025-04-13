"use client"

import Link from "next/link"
import { FormEvent, useState } from "react"

interface ContactFormProps {
  darkMode?: boolean;
}

export default function ContactForm({ darkMode = false }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const textColor = darkMode ? "text-white" : "text-black";
  const inputBgColor = "bg-white";
  const inputTextColor = "text-black";
  const borderColor = darkMode ? "border-[#E9E4DD]" : "border-[#000000]";
  const hoverColor = darkMode ? "hover:opacity-70" : "hover:opacity-70";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Clear form
      e.currentTarget.reset();
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="px-8 md:px-16 py-8 md:py-12">
        <h2 className={`title pb-4 ${textColor}`}>A QUESTION? AN IDEA? GET IN TOUCH.</h2>
        <hr className={`border-t-4 ${borderColor}`} />
        
        <div className="py-8 md:py-12">
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Left side - Name, Email and the 3 columns */}
            <div className="w-full md:w-1/2 flex flex-col">
              {/* Name and Mail side by side */}
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="w-full md:w-1/2">
                  <label htmlFor="fullName" className={`block caption mb-2 ${textColor}`}>
                    FULL NAME
                  </label>
                  <input 
                    id="fullName"
                    name="fullName"
                    required
                    className={`w-full h-10 ${inputBgColor} border-none focus:outline-none px-2 ${inputTextColor}`} 
                  />
                </div>
                
                <div className="w-full md:w-1/2">
                  <label htmlFor="email" className={`block caption mb-2 ${textColor}`}>
                    MAIL
                  </label>
                  <input 
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={`w-full h-10 ${inputBgColor} border-none focus:outline-none px-2 ${inputTextColor}`} 
                  />
                </div>
              </div>
              
              {/* Three columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div>
                  <h3 className={`caption mb-4 ${textColor}`}>COMPANY</h3>
                  <ul className="space-y-3">
                    <li><Link href="/about" className={`small ${hoverColor} transition-opacity ${textColor}`}>About</Link></li>
                    <li><Link href="/resellers" className={`small ${hoverColor} transition-opacity ${textColor}`}>Resellers</Link></li>
                    <li><Link href="/newsletter" className={`small ${hoverColor} transition-opacity ${textColor}`}>Newsletter</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className={`caption mb-4 ${textColor}`}>COMMUNITY</h3>
                  <ul className="space-y-3">
                    <li><Link href="/stories" className={`small ${hoverColor} transition-opacity ${textColor}`}>Stories</Link></li>
                    <li><a href="https://instagram.com/foumstudio" target="_blank" rel="noopener noreferrer" className={`small ${hoverColor} transition-opacity ${textColor}`}>Instagram</a></li>
                    <li><a href="https://linkedin.com/company/foumstudio" target="_blank" rel="noopener noreferrer" className={`small ${hoverColor} transition-opacity ${textColor}`}>LinkedIn</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className={`caption mb-4 ${textColor}`}>INFO</h3>
                  <ul className="space-y-3">
                    <li><Link href="/faq" className={`small ${hoverColor} transition-opacity ${textColor}`}>FAQ</Link></li>
                    <li><Link href="/terms-and-conditions" className={`small ${hoverColor} transition-opacity ${textColor}`}>Terms & Conditions</Link></li>
                    <li><Link href="/privacy-policy" className={`small ${hoverColor} transition-opacity ${textColor}`}>Privacy Policy</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Right side - Message box */}
            <div className="w-full md:w-1/2">
              <label htmlFor="message" className={`block caption mb-2 ${textColor}`}>
                YOUR MESSAGE
              </label>
              <textarea 
                id="message"
                name="message"
                required
                className={`w-full h-40 md:h-48 ${inputBgColor} border-none focus:outline-none resize-none px-2 py-2 ${inputTextColor} mb-4`} 
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full h-10 ${darkMode ? "bg-white text-black" : "bg-black text-white"} caption transition-opacity ${hoverColor} disabled:opacity-50`}
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </div>
          </form>
        </div>
        
        <hr className={`border-t-4 ${borderColor}`} />
        
        <div className="py-4 flex justify-between">
          <div>
            <p className={`caption ${textColor}`}>FOUM STUDIOS</p>
          </div>
          <div>
            <p className={`caption ${textColor}`}>ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </div>
  )
}

