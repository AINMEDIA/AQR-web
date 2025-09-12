"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { MessageCircle, Quote, ArrowRight, Phone, Mail, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export function UniversalCTA() {
  const [isVisible, setIsVisible] = useState(true)
  const [isClient, setIsClient] = useState(false)

  // Set client-side flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isVisible) return null

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4" data-aos="fade-left" data-aos-delay="300">
      {/* Request A Quote Button */}
      <Button
        size="lg"
        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 group relative overflow-hidden hover:scale-105"
        asChild
      >
        <Link href="/about/contact" className="flex items-center gap-3 px-6 py-4">
          <Quote className="w-5 h-5 group-hover:scale-110 transition-all duration-300" />
          <span className="font-semibold group-hover:translate-x-1 transition-transform duration-300">Request A Quote</span>
          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
        </Link>
      </Button>

      {/* Chat/WhatsApp Button */}
      <Button
        size="lg"
        className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-full w-16 h-16 p-0 group relative overflow-hidden hover:scale-110"
        asChild
      >
        <a 
          href="https://wa.me/256748840180" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-all duration-300" />
        </a>
      </Button>

      {/* Quick Contact Buttons - Appear on hover */}
      <div className="flex flex-col gap-2 opacity-0 hover:opacity-100 transition-all duration-500 group/container">
        {/* Phone Button */}
        <Button
          size="sm"
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full w-12 h-12 p-0 group/phone hover:scale-110"
          asChild
        >
          <a 
            href="tel:+256256748840180" 
            className="flex items-center justify-center"
          >
            <Phone className="w-5 h-5 group-hover/phone:scale-110 transition-all duration-300" />
          </a>
        </Button>

        {/* Email Button */}
        <Button
          size="sm"
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full w-12 h-12 p-0 group/email hover:scale-110"
          asChild
        >
          <a 
                            href="mailto:atlantisquest4@gmail.com" 
            className="flex items-center justify-center"
          >
            <Mail className="w-5 h-5 group-hover/email:scale-110 transition-all duration-300" />
          </a>
        </Button>
      </div>
    </div>
  )
} 