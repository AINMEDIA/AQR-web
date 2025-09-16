"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { Briefcase, MapPin, Users, Star, ArrowRight, Globe, Shield, Clock, Play, Pause, ChevronLeft, ChevronRight, Phone, Mail, MessageCircle, ExternalLink, Target, CheckCircle, Zap, Heart, Award, TrendingUp, Building2, Plane, Car, Camera, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { FadeIn } from "@/components/FadeIn"
import { Navbar } from "@/components/navbar";
import { tours } from "@/data/tours"
import React, { useState, useEffect } from "react";

export default function HomePage() {
  const heading = "Unlocking Mysteries";
  const gradientStart = "from-blue-200";
  const gradientEnd = "to-blue-300";
  const [showQuoteOptions, setShowQuoteOptions] = useState(false);
  const QUOTE_MESSAGES = [
    "I would like to request a quote for transport services.",
    "Can you provide pricing for a group trip?",
    "What are your rates for airport transfers?",
    "Do you offer discounts for long-term hire?",
    "I have a custom request, can you assist?"
  ];
  const handleQuoteOption = (msg: string) => {
    setShowQuoteOptions(false);
    const url = `https://wa.me/256745174879?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer",
    content:
      "AQR-Web helped me find my dream job in just 2 weeks. The platform is intuitive and the support team is amazing!",
    rating: 5,
    avatar: "/images/avatar1.jpg"
  },
  {
    name: "Michael Chen",
    role: "Project Manager",
    content: "The travel services exceeded my expectations. Professional, reliable, and great value for money.",
    rating: 5,
    avatar: "/images/avatar2.jpg"
  },
  {
    name: "Emily Davis",
    role: "HR Director",
    content: "We found excellent candidates through AQR-Web. The quality of applicants is consistently high.",
    rating: 5,
    avatar: "/images/avatar3.jpg"
  },
]

const jobs = [
  { title: "Now Recruiting: Housekeepers – Saudi Arabia", location: "Saudi Arabia", image: "/images/Now Recruiting Housekeepers.jpeg", salary: "$800-1200/month", type: "Full-time" },
  { title: "Security Jobs – UAE", location: "UAE", image: "/images/security-jobs-uae.jpeg", salary: "$1000-1500/month", type: "Full-time" },
  { title: "Drivers – Qatar", location: "Qatar", image: "/images/drivers-qatar.jpeg", salary: "$900-1300/month", type: "Full-time" },
];

const stats = [
  { number: "500+", label: "Jobs Placed", icon: Briefcase },
  { number: "1000+", label: "Happy Clients", icon: Users },
  { number: "50+", label: "Tour Destinations", icon: Globe },
  { number: "24/7", label: "Support", icon: Shield },
];

const benefits = [
  {
    icon: Shield,
    title: "Trusted & Reliable",
    description: "Years of experience in ethical recruitment and travel services",
    color: "text-blue-600"
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Connections worldwide for opportunities and travel destinations",
    color: "text-blue-600"
  },
  {
    icon: Users,
    title: "Personal Support",
    description: "Dedicated support throughout the entire process",
    color: "text-blue-600"
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Verified employers and premium travel experiences",
    color: "text-blue-600"
  },
  {
    icon: Target,
    title: "Focused Results",
    description: "Tailored solutions for your specific needs",
    color: "text-blue-600"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Award-winning service and customer satisfaction",
    color: "text-blue-600"
  }
];

const features = [
  {
    icon: Briefcase,
    title: "Job Placement",
    description: "Find the perfect job match for your skills and experience",
    color: "text-blue-600"
  },
  {
    icon: Shield,
    title: "Visa Support",
    description: "Complete visa processing assistance and documentation",
    color: "text-blue-600"
  },
  {
    icon: Users,
    title: "Training",
    description: "Pre-departure training and cultural orientation",
    color: "text-blue-600"
  },
  {
    icon: Plane,
    title: "Travel Services",
    description: "Professional travel arrangements and tour packages",
    color: "text-blue-600"
  },
  {
    icon: Car,
    title: "Transport",
    description: "Reliable transportation solutions for business and leisure",
    color: "text-blue-600"
  },
  {
    icon: Camera,
    title: "Experiences",
    description: "Unforgettable travel experiences and adventures",
    color: "text-blue-600"
  }
];

  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [isClient, setIsClient] = useState(false)

  // Carousel logic for testimonials
  const nextTestimonial = () => setTestimonialIndex((i) => (i + 1) % testimonials.length)
  const prevTestimonial = () => setTestimonialIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  // Auto-slide testimonials every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Set client-side flag only
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <PageTransition>
      <div className="animate-fade-in">
        <section className="animate-slide-up" data-aos="fade-up">
          {/* Hero Section - Simplified design */}
          <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden rounded-br-[120px] md:rounded-br-[240px] -mt-32" data-aos="zoom-in">
            {/* Background Image - optimized */}
            <img
              src="/images/download.jpg"
              alt="Hero background"
              className="absolute inset-0 w-full h-full object-cover z-0"
              data-aos="fade-in"
              loading="eager"
            />
            
            {/* Simple overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent z-0"></div>
            
            {/* Centered Content */}
            <div className="relative z-30 flex flex-col items-center justify-center w-full h-full py-12 md:py-24 px-4 text-center" data-aos="fade-up">
              {/* Title - Both text and PULLUP.png arrow */}
              <div className="flex flex-col items-center justify-center mt-16 md:mt-32 w-full">
                <div className="w-full max-w-6xl px-4 relative z-40">
                  {/* Text and arrow positioned like the reference image */}
                  <div className="relative flex flex-col items-center">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white drop-shadow-lg relative z-40 text-center">
                      <span className="block">Unlocking</span>
                      <span className="block">
                        Mysteries
                      </span>
                      
                      {/* PULLUP.png arrow positioned centered relative to entire title */}
                      <img
                        src="/images/PULLUP.png"
                        alt="Curved Arrow"
                        className="absolute drop-shadow-2xl hidden sm:block"
                        style={{ 
                          width: '600px',
                          maxWidth: '60vw',
                          height: 'auto',
                          objectFit: 'contain',
                          filter: 'brightness(1.5) contrast(1.3) drop-shadow(0 8px 16px rgba(0,0,0,0.5)) drop-shadow(0 0 20px rgba(255,255,255,0.3))',
                          left: '53%',
                          transform: 'translateX(-50%)',
                          top: '-10px',
                          zIndex: 45
                        }}
                      />
                      
                      {/* Mobile-specific arrow - centered and positioned to flow from "mysteries" */}
                      <img
                        src="/images/PULLUP.png"
                        alt="Curved Arrow"
                        className="absolute drop-shadow-2xl block sm:hidden"
                        style={{ 
                          width: '350px',
                          maxWidth: '70vw',
                          height: 'auto',
                          objectFit: 'contain',
                          filter: 'brightness(1.5) contrast(1.3) drop-shadow(0 4px 8px rgba(0,0,0,0.5)) drop-shadow(0 0 10px rgba(255,255,255,0.3))',
                          left: '60%',
                          transform: 'translateX(-50%)',
                          top: '10px',
                          zIndex: 45
                        }}
                      />
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="py-8 md:py-16 bg-white" data-aos="fade-up">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-8 items-start">
              {/* Left Column - Main Info Card - Spans both columns on mobile */}
              <div className="col-span-2 lg:col-span-2" data-aos="fade-right">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl md:rounded-2xl p-4 md:p-12 text-white h-full shadow-xl flex flex-col justify-center min-h-[250px] md:min-h-[600px]">
                  <div className="text-center mb-6 md:mb-12">
                    <h2 className="text-lg md:text-4xl font-bold mb-3 md:mb-6 leading-tight">ATLANTIS QUEST & REALITY</h2>
                    <div className="text-base md:text-2xl font-bold mb-2">(AQR)</div>
                    <div className="w-12 md:w-24 h-1 bg-blue-300 mx-auto rounded-full mb-4 md:mb-8"></div>
                    <h3 className="text-sm md:text-2xl font-semibold text-blue-200">Unlocking Mysteries</h3>
                  </div>
                   
                  <div className="flex-1 flex items-center">
                    <p className="text-xs md:text-xl leading-relaxed text-center">
                      AQR is a trusted Ugandan agency connecting <span className="font-semibold text-blue-200">YOU</span> to dignified overseas jobs and unforgettable travel experiences, 
                      built on integrity, professionalism, and a network of reliable global partners.
                    </p>
                </div>
              </div>
            </div>
            
              {/* Right Column - Vision, Mission, Values Cards */}
              <div className="col-span-2 lg:col-span-3 h-full" data-aos="fade-left">
                <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 md:gap-6 h-full min-h-[250px] md:min-h-[600px]">
                  {/* Vision Card */}
                  <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 flex flex-col">
                    <h4 className="text-xs md:text-2xl font-bold text-blue-700 mb-2 md:mb-4">OUR VISION</h4>
                    <p className="text-[10px] md:text-base text-gray-700 leading-tight md:leading-relaxed flex-1">
                      To be a leading and most trusted labour export company, bridging the gap between skilled and unskilled workers and international employers, 
                      while upholding the highest standards of professionalism, worker protection, and economic empowerment.
                    </p>
                  </div>

                  {/* Mission Card */}
                  <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 flex flex-col">
                    <h4 className="text-xs md:text-2xl font-bold text-blue-700 mb-2 md:mb-4">OUR MISSION</h4>
                    <p className="text-[10px] md:text-base text-gray-700 leading-tight md:leading-relaxed flex-1">
                      To empower and transform lives by providing safe, ethical, and sustainable employment opportunities abroad. 
                      We are committed to ensuring fair treatment, skills development, and economic growth for workers while contributing to global workforce demands.
                    </p>
            </div>
            
                  {/* Values Card - Spans both columns on mobile and larger screens */}
                  <div className="col-span-2 bg-white rounded-lg md:rounded-xl p-3 md:p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 flex flex-col">
                    <h4 className="text-xs md:text-2xl font-bold text-blue-700 mb-3 md:mb-6 text-center">OUR VALUES</h4>
                    <div className="grid grid-cols-5 gap-1 md:gap-8 text-gray-700 flex-1 items-center">
                      <div className="text-center group">
                        <div className="flex justify-center mb-1 md:mb-3">
                          <Heart className="w-4 h-4 md:w-10 md:h-10 text-red-500 transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse" />
                        </div>
                        <div className="font-semibold text-[8px] md:text-base transition-colors duration-300 group-hover:text-red-600">Compassion</div>
                      </div>
                      <div className="text-center group">
                        <div className="flex justify-center mb-1 md:mb-3">
                          <Shield className="w-4 h-4 md:w-10 md:h-10 text-green-500 transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse" />
                        </div>
                        <div className="font-semibold text-[8px] md:text-base transition-colors duration-300 group-hover:text-green-600">Respect</div>
                      </div>
                      <div className="text-center group">
                        <div className="flex justify-center mb-1 md:mb-3">
                          <Award className="w-4 h-4 md:w-10 md:h-10 text-blue-500 transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse" />
                    </div>
                        <div className="font-semibold text-[8px] md:text-base transition-colors duration-300 group-hover:text-blue-600">Excellence</div>
                  </div>
                      <div className="text-center group">
                        <div className="flex justify-center mb-1 md:mb-3">
                          <Zap className="w-4 h-4 md:w-10 md:h-10 text-yellow-500 transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse" />
                        </div>
                        <div className="font-semibold text-[8px] md:text-base transition-colors duration-300 group-hover:text-yellow-600">Innovation</div>
                      </div>
                      <div className="text-center group">
                        <div className="flex justify-center mb-1 md:mb-3">
                          <CheckCircle className="w-4 h-4 md:w-10 md:h-10 text-purple-500 transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse" />
                        </div>
                        <div className="font-semibold text-[8px] md:text-base transition-colors duration-300 group-hover:text-purple-600">Accountability</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Our Impact Section - replaced with Promise Statement */}
        <section className="py-16 md:py-20 relative overflow-hidden text-blue-900 text-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/AQR.jpg"
              alt="AQR Background"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
          {/* Enhanced overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/60 z-10"></div>
          {/* Additional blue tint overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-blue-800/10 to-blue-600/20 z-20"></div>
                    <div className="relative z-30">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-2 text-blue-900 drop-shadow-lg">Our Promise</h2>
            <div className="mx-auto w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-800 rounded-full mb-4 shadow-lg" />
            <p className="text-lg md:text-xl mb-10 md:mb-12 text-blue-800 font-semibold px-4 drop-shadow-md">Empowering your journey with trust, care, and opportunity</p>
            <div className="max-w-7xl mx-auto px-4 md:px-16 flex justify-center">
              <div className="grid gap-4 md:gap-8 grid-cols-2 max-w-6xl w-full">
              {/* Promise Card 2 */}
              <Link href="/services" className="block">
                <div className="bg-white/98 backdrop-blur-lg border border-blue-200/50 rounded-xl md:rounded-2xl p-4 md:p-10 shadow-2xl flex flex-col items-center justify-center h-48 md:h-64 transition-all duration-500 group hover:scale-105 hover:-translate-y-2 hover:shadow-3xl hover:ring-4 hover:ring-blue-400/50 hover:bg-white relative overflow-hidden animate-fade-in cursor-pointer" data-aos="fade-up" data-aos-delay="200">
                  {/* Standardized Icon */}
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3 md:mb-4">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Plane className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-sm md:text-2xl font-bold mb-2 text-center leading-tight">Unforgettable <span className="text-blue-600">Tours</span> & <span className="text-blue-600">Travel</span></h3>
                  <p className="text-xs md:text-base text-blue-800 text-center leading-tight">We deliver <span className="font-semibold text-blue-500">professional</span>, <span className="font-semibold text-blue-500">reliable</span>, and <span className="font-semibold text-blue-500">personalized</span> experiences. Your safety and memories come first.</p>
                </div>
              </Link>
              {/* Promise Card 3 */}
              <Link href="/jobs" className="block">
                <div className="bg-white/98 backdrop-blur-lg border border-blue-200/50 rounded-xl md:rounded-2xl p-4 md:p-10 shadow-2xl flex flex-col items-center justify-center h-48 md:h-64 transition-all duration-500 group hover:scale-105 hover:-translate-y-2 hover:shadow-3xl hover:ring-4 hover:ring-blue-400/50 hover:bg-white relative overflow-hidden animate-fade-in cursor-pointer" data-aos="fade-up" data-aos-delay="300">
                  {/* Standardized Icon */}
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3 md:mb-4">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-sm md:text-2xl font-bold mb-2 text-center leading-tight">Ethical <span className="text-blue-600">Labour Recruitment</span></h3>
                  <p className="text-xs md:text-base text-blue-800 text-center leading-tight">We bridge East African talent with global opportunities through <span className="font-semibold text-blue-500">ethical placement</span> and <span className="font-semibold text-blue-500">comprehensive support</span>.</p>
                </div>
              </Link>
              </div>
            </div>
          </div>
        </section>



        </div>
        <Footer />
    </PageTransition>
  )
}
