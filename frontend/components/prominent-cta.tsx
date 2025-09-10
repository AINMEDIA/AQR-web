"use client"

import { Button } from '@/components/ui/button'
import { MessageCircle, Quote, Phone, Mail, ArrowRight, Globe, Briefcase, Users, ExternalLink } from 'lucide-react'
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
            {/* Primary CTA Button */}
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-4 text-lg group relative overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-500"
              asChild
            >
              <Link href={ctaLink || "/about/contact"} className="flex items-center gap-3">
                <Quote className="w-6 h-6 group-hover:scale-110 group-hover:animate-bounce transition-all duration-300" />
                {ctaText || "Request A Quote"}
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </Button>

            {/* WhatsApp Button */}
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-700 font-semibold px-8 py-4 text-lg group relative overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-500"
              asChild
            >
              <a 
                href="https://wa.me/256745174879" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <MessageCircle className="w-6 h-6 group-hover:scale-110 group-hover:animate-bounce transition-all duration-300" />
                WhatsApp Us
                <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </a>
            </Button>

            {/* Find Jobs Button */}
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-700 font-semibold px-8 py-4 text-lg group relative overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-500"
              asChild
            >
              <Link href="/jobs" className="flex items-center gap-3">
                <Briefcase className="w-6 h-6 group-hover:scale-110 group-hover:animate-bounce transition-all duration-300" />
                Find Jobs
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </Button>
          </div>

          {showContactInfo && (
            <div className="grid md:grid-cols-3 gap-8 mt-12" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center justify-center gap-4 group cursor-pointer p-4 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full group-hover:bg-blue-500/30 group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-6 h-6 text-blue-200 group-hover:text-white group-hover:animate-bounce transition-all duration-300" />
                </div>
                <a 
                  href="tel:+256700341229" 
                  className="text-blue-100 hover:text-white transition-all duration-300 group-hover:translate-x-1 text-lg font-medium"
                >
                  +256 700 341 229
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-4 group cursor-pointer p-4 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full group-hover:bg-blue-500/30 group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-6 h-6 text-blue-200 group-hover:text-white group-hover:animate-bounce transition-all duration-300" />
                </div>
                <a 
                  href="mailto:atlantisquest4@gmail.com" 
                  className="text-blue-100 hover:text-white transition-all duration-300 group-hover:translate-x-1 text-lg font-medium"
                >
                  atlantisquest4@gmail.com
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-4 group cursor-pointer p-4 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full group-hover:bg-blue-500/30 group-hover:scale-110 transition-all duration-300">
<MessageCircle className="w-6 h-6 text-blue-200 group-hover:text-white group-hover:animate-bounce transition-all duration-300" />
                </div>
                <a 
                  href="https://wa.me/256745174879" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-white transition-all duration-300 group-hover:translate-x-1 text-lg font-medium"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 