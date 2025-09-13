"use client"

import Link from "next/link"
import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram, MapPin, Clock, ArrowRight, Briefcase, Users, Globe, Info, HelpCircle, FileText, ExternalLink, Youtube } from "lucide-react"

const footerSections = [
  {
    title: "Services",
    icon: Briefcase,
    links: [
      { href: "/jobs", label: "Job Listings", icon: Briefcase },
      { href: "/find-labour", label: "Find Labour", icon: Users },
      { href: "/services/tours-travel", label: "Tours & Travel", icon: Globe },
    ],
  },
  {
    title: "Company",
    icon: Info,
    links: [
      { href: "/about", label: "About Us", icon: Info },
      { href: "/about/contact", label: "Contact", icon: Phone },
      { href: "/careers", label: "Careers", icon: Briefcase },
      { href: "/privacy", label: "Privacy Policy", icon: FileText },
    ],
  },
  {
    title: "Support",
    icon: HelpCircle,
    links: [
      { href: "/help", label: "Help Center", icon: HelpCircle },
      { href: "/about/contact", label: "Support", icon: Phone },
      { href: "/terms", label: "Terms of Service", icon: FileText },
    ],
  },
]

const socialLinks = [
  { href: "https://facebook.com/aqrweb", icon: Facebook, label: "Facebook", color: "hover:text-blue-400" },
  { href: "https://twitter.com/aqrweb", icon: Twitter, label: "Twitter", color: "hover:text-blue-400" },
  { href: "https://linkedin.com/company/aqrweb", icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-400" },
  { href: "https://instagram.com/aqrweb", icon: Instagram, label: "Instagram", color: "hover:text-blue-400" },
]

const contactInfo = [
  { icon: Phone, text: "+256745174879 / +256748840180", href: "tel:+256745174879" },
  { icon: Mail, text: "atlantisquest4@gmail.com", href: "mailto:atlantisquest4@gmail.com" },
  { icon: MapPin, text: "Kampala, Uganda" },
  { icon: Clock, text: "Mon-Fri 9AM-6PM EAT" },
]

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="currentColor" width={20} height={20} {...props}>
    <path d="M28.43 10.62a7.13 7.13 0 0 1-4.6-1.59V20a6.38 6.38 0 1 1-6.38-6.38c.13 0 .26 0 .39.01v3.23a3.15 3.15 0 1 0 3.15 3.15V2.67h3.23a3.15 3.15 0 0 0 3.15 3.15h1.08v3.23h-1.08a6.38 6.38 0 0 1-1.94-.3v1.08a7.13 7.13 0 0 0 4.6 1.59z" />
  </svg>
)

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="currentColor" width={20} height={20} {...props}>
    <path d="M16 3A13 13 0 0 0 3 16a12.9 12.9 0 0 0 1.89 6.7L3 29l6.47-1.87A13 13 0 1 0 16 3zm0 23.5a10.5 10.5 0 0 1-5.36-1.48l-.38-.23-3.84 1.11 1.13-3.74-.25-.39A10.5 10.5 0 1 1 16 26.5zm5.7-7.6c-.31-.16-1.84-.91-2.13-1.01-.29-.1-.5-.16-.71.16-.21.31-.82 1.01-1 1.22-.18.21-.36.23-.67.08-.31-.16-1.31-.48-2.5-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.13-.63.13-.13.29-.34.43-.51.14-.17.18-.29.29-.48.1-.19.05-.36-.02-.51-.07-.16-.62-1.5-.85-2.07-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.57-.01-.2 0-.51.07-.78.36-.27.29-1.04 1.01-1.04 2.45s1.07 2.84 1.23 3.04c.16.2 2.1 3.41 5.09 4.65.71.25 1.26.4 1.7.5.71.15 1.36.13 1.87.08.57-.06 1.7-.7 1.95-1.39.25-.69.25-1.27.17-1.39-.08-.12-.26-.19-.56-.33z" />
  </svg>
)

export function Footer() {
  return (
    <footer className="text-white mt-16 w-full" style={{ background: '#757575' }}>
       {/* Social Links - moved to top */}
       <div className="py-4 w-full" style={{ background: '#757575' }}>
         <div className="max-w-7xl mx-auto px-8">
           <div className="flex flex-col items-center gap-4">
             {/* Social Links */}
             <div className="flex space-x-4">
               {socialLinks.map((social, index) => (
                 <a 
                   key={social.label}
                   href={social.href} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   aria-label={social.label} 
                   className={`transition-all duration-300 hover:scale-110 ${social.color}`}
                   style={{ animationDelay: `${index * 100}ms` }}
                 >
                   <social.icon className="w-5 h-5" />
                 </a>
               ))}
               <a 
                 href="tel:+256745174879" 
                 aria-label="Call Us" 
                 className="transition-all duration-300 hover:scale-110 hover:text-green-400"
                 style={{ animationDelay: '400ms' }}
               >
                 <Phone className="w-5 h-5" />
               </a>
               <a 
                 href="https://youtube.com/@aqrweb" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 aria-label="YouTube" 
                 className="transition-all duration-300 hover:scale-110 hover:text-red-400"
                 style={{ animationDelay: '450ms' }}
               >
                 <Youtube className="w-5 h-5" />
               </a>
               <a 
                 href="https://maps.google.com/?q=Martyrs Mall Kyaliwajara" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 aria-label="Our Location - Martyrs Mall Kyaliwajara" 
                 className="transition-all duration-300 hover:scale-110 hover:text-orange-400"
                 style={{ animationDelay: '500ms' }}
               >
                 <MapPin className="w-5 h-5" />
               </a>
               <a 
                 href="https://wa.me/256745174879" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 aria-label="WhatsApp" 
                 className="transition-all duration-300 hover:scale-110 hover:text-blue-400"
                 style={{ animationDelay: '550ms' }}
               >
                 <WhatsAppIcon />
               </a>
               <a 
                 href="https://tiktok.com/@aqrweb" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 aria-label="TikTok" 
                 className="transition-all duration-300 hover:scale-110 hover:text-blue-400"
                 style={{ animationDelay: '600ms' }}
               >
                 <TikTokIcon />
               </a>
             </div>
           </div>
         </div>
       </div>
       
       {/* Skyline Illustration - moved after social links */}
       <div className="w-full">
         <img src="/images/skyline-footer.jpg" alt="Skyline" className="w-full object-cover object-top" style={{ background: '#f1f5f9' }} />
       </div>
       
       {/* Footer Logo - moved after skyline */}
       <div className="w-full flex justify-center items-center py-6" style={{ background: '#757575' }}>
         <img src="/images/footer-logo.png" alt="AQR Footer Logo" className="h-24 w-auto transition-all duration-700 hover:scale-105 hover:shadow-2xl" />
       </div>
       
       {/* Copyright - moved to very bottom */}
       <div className="py-4 w-full" style={{ background: '#757575' }}>
         <div className="max-w-7xl mx-auto px-8">
           <div className="text-white text-xs text-center">
             AQR Atlantis Quest & Reality U Ltd © {new Date().getFullYear()}. All rights reserved.
           </div>
         </div>
       </div>
    </footer>
  )
}
