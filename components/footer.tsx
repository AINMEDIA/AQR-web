"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const footerSections = [
  {
    title: "Services",
    links: [
      { href: "/jobs", label: "Job Listings" },
      { href: "/find-labour", label: "Find Labour" },
      { href: "/services/tours-travel", label: "Tours & Travel" },
      { href: "/emergency", label: "Emergency Services" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact" },
      { href: "/careers", label: "Careers" },
      { href: "/privacy", label: "Privacy Policy" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/help", label: "Help Center" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Support" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
]

const socialLinks = [
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Instagram, label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="bg-[#888888] text-white mt-16 w-full">
      {/* Skyline Illustration - full width, flush top, image */}
      <div className="w-full">
        <img src="/images/skyline-footer.jpg" alt="Skyline" className="w-full object-cover object-top" style={{ background: '#888888' }} />
      </div>
      {/* Swift Code Row */}
      <div className="w-full flex justify-center items-center py-2">
        <span className="text-white text-base">Swift Code: <span className="font-bold underline">AFRIUGKA</span></span>
      </div>
      {/* Main Footer Content - full width, no container */}
      <div className="px-0 pb-8 pt-2 w-full" style={{ background: '#888888' }}>
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-6 px-8">
            {/* For You */}
            <div>
              <h4 className="font-bold mb-4 text-white">For You</h4>
              <ul className="space-y-2 text-white">
                <li><a href="#" className="hover:underline">Open An Account</a></li>
                <li><a href="#" className="hover:underline">Instant Cash Salary Loan</a></li>
                <li><a href="#" className="hover:underline">Home Loans</a></li>
                <li><a href="#" className="hover:underline">Mobile Banking</a></li>
              </ul>
            </div>
            {/* For Business */}
            <div>
              <h4 className="font-bold mb-4 text-white">For Business</h4>
              <ul className="space-y-2 text-white">
                <li><a href="#" className="hover:underline">Open A Business Account</a></li>
                <li><a href="#" className="hover:underline">Working capital finance</a></li>
                <li><a href="#" className="hover:underline">Forex</a></li>
                <li><a href="#" className="hover:underline">Internet Banking</a></li>
              </ul>
            </div>
            {/* Corporate */}
            <div>
              <h4 className="font-bold mb-4 text-white">Corporate</h4>
              <ul className="space-y-2 text-white">
                <li><a href="#" className="hover:underline">Open A Corporate Account</a></li>
                <li><a href="#" className="hover:underline">Sector Specialized Banking</a></li>
                <li><a href="#" className="hover:underline">Value Chain Care</a></li>
                <li><a href="#" className="hover:underline">Internet Banking</a></li>
              </ul>
            </div>
            {/* Support */}
            <div>
              <h4 className="font-bold mb-4 text-white">Support</h4>
              <ul className="space-y-2 text-white">
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">Key Facts Documents</a></li>
                <li><a href="#" className="hover:underline">Tariff Guides</a></li>
                <li><a href="#" className="hover:underline">Security tips</a></li>
              </ul>
            </div>
            {/* Brand */}
            <div>
              <h4 className="font-bold mb-4 text-white">Brand</h4>
              <ul className="space-y-2 text-white">
                <li><a href="#" className="hover:underline">Who we are</a></li>
                <li><a href="#" className="hover:underline">Notices</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">AQR Group</a></li>
              </ul>
            </div>
        </div>
          {/* Divider Line */}
          <div className="w-full border-t border-white opacity-40 my-4"></div>
          {/* Social and Regulatory Row - full width, single row, tight spacing */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 px-8">
            {/* Social Icons */}
            <div className="flex space-x-4 mb-2 lg:mb-0">
              <a href="#" aria-label="WhatsApp" className="hover:text-green-400"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.58 1.38 5.07L2 22l5.09-1.36A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.61 0-3.13-.39-4.45-1.08l-.32-.17-3.02.8.81-2.95-.21-.33A7.96 7.96 0 0 1 4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8zm4.29-5.71c-.2-.1-1.18-.58-1.36-.65-.18-.07-.31-.1-.44.1-.13.2-.5.65-.62.78-.12.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.59-.53-.99-1.18-1.11-1.38-.12-.2-.01-.3.09-.4.09-.09.2-.23.3-.34.1-.11.13-.19.2-.32.07-.13.03-.25-.01-.35-.05-.1-.44-1.07-.6-1.47-.16-.39-.32-.34-.44-.35-.11-.01-.25-.01-.39-.01-.13 0-.35.05-.54.25-.19.2-.72.7-.72 1.7s.74 1.97.85 2.11c.11.14 1.45 2.22 3.52 3.03.49.17.87.27 1.17.34.49.1.94.09 1.29.06.39-.04 1.18-.48 1.35-.95.17-.47.17-.87.12-.95-.05-.08-.18-.13-.38-.23z"/></svg></a>
              <a href="#" aria-label="Facebook" className="hover:text-blue-400"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg></a>
              <a href="#" aria-label="X" className="hover:text-gray-400"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M17.53 6.47a.75.75 0 0 0-1.06 0L12 10.94 7.53 6.47A.75.75 0 1 0 6.47 7.53L10.94 12l-4.47 4.47a.75.75 0 1 0 1.06 1.06L12 13.06l4.47 4.47a.75.75 0 1 0 1.06-1.06L13.06 12l4.47-4.47a.75.75 0 0 0 0-1.06z"/></svg></a>
              <a href="#" aria-label="Instagram" className="hover:text-pink-400"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.602.402 3.635 1.37c-.967.967-1.24 2.14-1.298 3.417C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.058 1.277.331 2.45 1.298 3.417.967.967 2.14 1.24 3.417 1.298C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.277-.058 2.45-.331 3.417-1.298.967-.967 1.24-2.14 1.298-3.417.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.058-1.277-.331-2.45-1.298-3.417-.967-.967-2.14-1.24-3.417-1.298C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg></a>
              <a href="#" aria-label="YouTube" className="hover:text-red-400"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.545 3.5 12 3.5 12 3.5s-7.545 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 8.027 0 12 0 12s0 3.973.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.455 20.5 12 20.5 12 20.5s7.545 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.973 24 12 24 12s0-3.973-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
            </div>
            {/* Regulatory Info */}
            <div className="flex-1 flex flex-col items-end text-white text-xs">
              <span>Customer deposits are protected by the Deposit Protection Fund of Uganda up to UGX 10 million, Terms and Conditions apply.</span>
              <span className="mt-2">AQR Atlantis Quest & Reality U Ltd © {new Date().getFullYear()}. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
