"use client"

import { Button } from '@/components/ui/button'
import { MessageCircle, Globe, Users, ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface ProminentCTAProps {
  title?: string
  subtitle?: string
  showContactInfo?: boolean
  ctaLink?: string
  ctaText?: string
}

export function ProminentCTA({ 
  title = "Ready to Get Started?", 
  subtitle = "Contact us for a custom quote or immediate assistance",
  showContactInfo = true,
  ctaLink,
  ctaText
}: ProminentCTAProps) {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 hover:text-blue-200 cursor-default" data-aos="fade-up">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 transition-all duration-700 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12" data-aos="fade-up" data-aos-delay="200">

            {/* WhatsApp Button */}
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-700 font-semibold px-8 py-4 text-lg group relative overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-500"
              asChild
            >
              <a 
                href="https://wa.me/256748840180" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-all duration-300" />
                WhatsApp Us
                <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </a>
            </Button>

          </div>

        </div>
      </div>
    </div>
  )
} 