"use client"

import Link from "next/link"
import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram, MapPin, Clock, ArrowRight, Briefcase, Users, Globe, Info, HelpCircle, FileText, ExternalLink, Youtube } from "lucide-react"

interface LogoCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  className?: string; // className is optional
}

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
      { href: "/about/contact", label: "Contact" },
      { href: "/careers", label: "Careers", icon: Briefcase },
      { href: "/privacy", label: "Privacy Policy", icon: FileText },
    ],
  },
  {
    title: "Support",
    icon: HelpCircle,
    links: [
      { href: "/help", label: "Help Center", icon: HelpCircle },
      { href: "/about/contact", label: "Support"},
      { href: "/terms", label: "Terms of Service", icon: FileText },
    ],
  },
]

// export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
//   // Check if e.currentTarget is defined before accessing its properties
//   if (e.currentTarget) {
//     e.currentTarget.onerror = null;
//     e.currentTarget.src = 'https://placehold.co/120x40/4F46E5/ffffff?text=Image+Load+Error';
//   }
// }
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  // Replace the broken image with a placeholder or log the error
  const target = e.target as HTMLImageElement;
  target.onerror = null; // prevents infinite loop if placeholder also fails
  target.src = "https://placehold.co/100x40/38a169/ffffff?text=Error"; 
  console.error("Image failed to load:", target.alt);
};

const socialLinks = [
  { href: "https://facebook.com/aqrweb", icon: Facebook, label: "Facebook", color: "hover:text-blue-400" },
  // { href: "https://twitter.com/aqrweb", icon: Twitter, label: "Twitter", color: "hover:text-blue-400" },
  // { href: "https://linkedin.com/company/aqrweb", icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-400" },
  // { href: "https://instagram.com/aqrweb", icon: Instagram, label: "Instagram", color: "hover:text-blue-400" },
]

const contactInfo = [
  { icon: Phone, text: "+256745174879", href: "tel:+256745174879" },
  { icon: Phone, text: "+256748840180", href: "tel:+256748840180" },
  { icon: Mail, text: "atlantisquest4@gmail.com", href: "mailto:atlantisquest4@gmail.com" },
  { icon: Mail, text: "info@atlantisquestandreality.com", href: "mailto:info@atlantisquestandreality.com" },
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

// Logo Card Component - EXPORTED to be used in other files
export const LogoCard = ({ src, alt, title, description, className = "" }: LogoCardProps) => (
  // Updated sizing for a more balanced display in the desktop view
  <div className="w-full h-full p-1.5 bg-slate-400 rounded-md shadow-md transition-all duration-300 transform active:scale-[0.98] cursor-pointer hover:shadow-lg flex flex-col justify-center items-center">
    <div className="flex justify-center h-6 items-center">
      <img
        src={src}
        alt={alt}
        // Added the provided hover scale/shadow classes back
        className={`h-6 w-auto transition-all duration-700 hover:scale-105 ${className}`}
        onError={handleImageError}
      />
    </div>
    <div className="mt-0.5 text-center px-1">
      <h2 className="text-xs font-extrabold text-blue-600 leading-tight break-words">{title}</h2>
      <p className="mt-0.5 text-xs text-blue-600 leading-tight break-words line-clamp-2">
        {description}
      </p>
    </div>
  </div>
)


export function Footer() {
  return (
    <footer className="text-white mt-4 w-full" style={{ background: '#757575' }}>
       {/* Social Links - moved to top */}
       <div className="py-1 w-full" style={{ background: '#757575' }}>
         <div className="max-w-7xl mx-auto px-4">
           <div className="flex flex-col items-center gap-4">
             {/* Social Links */}
             <div className="flex space-x-24">
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
                 {/* <Phone className="w-5 h-5" /> */}
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
                 {/* <MapPin className="w-5 h-5" /> */}
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
       
       {/* Contact Information */}
       <div className="py-1 w-full" style={{ background: '#757575' }}>
         <div className="max-w-7xl mx-auto px-8">
           <div className="text-center mb-2">
             <h3 className="text-lg font-semibold text-white mb-1">Get In Touch</h3>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-1">
               {contactInfo.map((contact, index) => (
                 <div key={index} className="flex flex-col items-center justify-center gap-1 text-white p-1">
                   <contact.icon className="w-4 h-4 text-blue-300 flex-shrink-0" />
                   {contact.href ? (
                     <a 
                       href={contact.href} 
                       className="text-xs text-center hover:text-blue-300 transition-colors duration-300 break-words"
                     >
                       {contact.text}
                     </a>
                   ) : (
                     <span className="text-xs text-center break-words">{contact.text}</span>
                   )}
                 </div>
               ))}
             </div>
           </div>
         </div>
       </div>
       
       {/* Footer Logo - moved after contact info */}
       <div className="w-full bg-[#757575] py-2 font-sans">
      
      {/* ---------------------------------------------------- */}
      {/* --- DESKTOP VIEW (md and up) --- */}
      {/* ---------------------------------------------------- */}
      <div className="hidden md:flex flex-col items-center px-4 w-full">
        
        {/* Main Title */}
        <p className="text-lg font-extrabold uppercase text-sky-500 mb-4 tracking-widest border-b-2 border-sky-500 pb-1">
          Our Global Partners
        </p>

        {/* Main Logo Row: Uses flex to space content out and control width */}
        {/* max-w-7xl prevents it from stretching too wide on huge screens */}
        {/* gap-16 provides generous space between the three main elements */}
        <div className="flex w-full max-w-7xl justify-center items-start px-8 gap-16">

          {/* === Group 1: Left-aligned partners (Alqudaibi and Odyssey) === */}
          <div className="flex flex-col items-center w-full max-w-md">
            <p className="text-sm font-extrabold uppercase text-sky-500 mb-2 tracking-wider border-b-2 border-sky-500 pb-1">Core Partners</p>
            <div className="flex items-start justify-center space-x-8">
              
              {/* LOGO 1: Alqudaibi */}
              <LogoCard
                src="/images/Alqudaibi.png"
                alt="Alqudaibi Group Logo"
                title="Alqudaibi Group"
                description="One of the leading Kuwaiti Industrial and commercial groups"
                className="mix-blend-multiply"
              />

              {/* LOGO 2: Odyssey */}
              <LogoCard
                src="/images/Odyssey.png"
                alt="Odyssey Logo"
                title="Odyssey"
                description="Your journey starts here."
                className="mix-blend-multiply"
              />
            </div>
          </div>

          {/* === Center Logo: AQR Footer Logo === */}
          {/* This logo is centered and acts as a separator/focal point */}
          <div className="flex-shrink-0 pt-4">
            <img 
              src="/images/footer-logo.png" 
              alt="AQR Footer Logo" 
              className="h-16 w-auto transition-all duration-700 hover:scale-105" 
              onError={handleImageError}
            />
          </div>

          {/* === Group 2: Right-aligned partners (Grand Canyon and BlueKazi) === */}
          <div className="flex flex-col items-center w-full max-w-md">
            <p className="text-sm font-extrabold uppercase text-sky-500 mb-2 tracking-wider border-b-2 border-sky-500 pb-1">Affiliate Partners</p>
            <div className="flex items-start justify-center space-x-8">

              {/* LOGO 3: Grand Canyon */}
              <LogoCard
                src="/images/Grand Canyon.jpeg"
                alt="Grand Canyon Logo"
                title="Your Workforce"
                description="Global talent solutions."
                className="mix-blend-multiply opacity-80"
              />

              {/* LOGO 4: BlueKazi */}
              <LogoCard
                src="/images/BlueKazi.jpeg"
                alt="BlueKazi Group Logo"
                title="Bluekazi Group"
                description="The hands-on recruitment experts"
                className="mix-blend-multiply"
              />
            </div>
          </div>
        </div>
      </div>
      
      
      {/* ---------------------------------------------------- */}
      {/* --- MOBILE VIEW (hidden md and up) --- */}
      {/* ---------------------------------------------------- */}
        <div 
        className="md:hidden flex flex-col items-center space-y-4 px-4 py-1 w-full" 
        style={{ background: '#757575' }}
      >
        
        {/* === Single Horizontal Line: All Partners with Center Logo === */}
        <div className="flex flex-col items-center w-full">
          <p className="text-sm font-extrabold uppercase text-sky-500 mb-3 tracking-wider border-b-2 border-sky-500 pb-1">Our Global Partners</p>
          
          {/* Single horizontal line with all logos and text - no scrolling */}
          <div className="flex gap-2 w-full items-center justify-center px-6">
            {/* LOGO 1: Alqudaibi (Left side) */}
            <div className="flex flex-col items-center flex-shrink-0 min-w-0 relative z-10">
              <img
                src="/images/Alqudaibi.png"
                alt="Alqudaibi Group Logo"
                className="h-8 w-auto mix-blend-multiply mb-1"
                onError={handleImageError}
              />
              <span className="hidden md:block text-xs text-white text-center leading-tight">Alqudaibi</span>
            </div>

            {/* LOGO 2: Odyssey (Left side) */}
            <div className="flex flex-col items-center flex-shrink-0 min-w-0">
              <img
                src="/images/Odyssey.png"
                alt="Odyssey Logo"
                className="h-6 w-auto mix-blend-multiply mb-1"
                onError={handleImageError}
              />
              <span className="hidden md:block text-xs text-white text-center leading-tight">Odyssey</span>
            </div>

            {/* === Center Logo: AQR Footer Logo === */}
            <div className="flex-shrink-0 px-3">
              <img 
                src="/images/footer-logo.png" 
                alt="AQR Footer Logo" 
                className="h-10 w-auto transition-all duration-700 hover:scale-105" 
                onError={handleImageError}
              />
            </div>

            {/* LOGO 3: Grand Canyon (Right side) */}
            <div className="flex flex-col items-center flex-shrink-0 min-w-0">
              <img
                src="/images/Grand Canyon.jpeg"
                alt="Grand Canyon Logo"
                className="h-6 w-auto mix-blend-multiply opacity-80 mb-1"
                onError={handleImageError}
              />
              <span className="hidden md:block text-xs text-white text-center leading-tight">Workforce</span>
            </div>

            {/* LOGO 4: BlueKazi (Right side) */}
            <div className="flex flex-col items-center flex-shrink-0 min-w-0">
              <img
                src="/images/BlueKazi.jpeg"
                alt="BlueKazi Group Logo"
                className="h-6 w-auto mix-blend-multiply mb-1"
                onError={handleImageError}
              />
              <span className="hidden md:block text-xs text-white text-center leading-tight">Bluekazi</span>
            </div>
          </div>
        </div>
      </div>
      </div>
       
       {/* Copyright - moved to very bottom */}
       <div className="py-1 w-full" style={{ background: '#757575' }}>
         <div className="max-w-7xl mx-auto px-8">
           <div className="text-white text-xs text-center">
             AQR Atlantis Quest & Reality U Ltd © {new Date().getFullYear()}. All rights reserved.
           </div>
         </div>
       </div>
    </footer>
  )
}
