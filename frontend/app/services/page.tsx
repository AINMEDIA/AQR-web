"use client"

import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { Breadcrumb } from "@/components/seo/breadcrumb"
import { ServiceSchema } from "@/components/seo/structured-data"
import { FAQSection } from "@/components/seo/faq-section"
import { Icon } from "@/components/ui/icon"
import { ParallaxBackground, ParallaxSection, ParallaxText } from "@/components/ParallaxSection"
import { Briefcase, Plane, Building, FileText } from "lucide-react"
import Link from "next/link"
import { ProminentCTA } from "@/components/prominent-cta"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function ServicesPage() {
  // Slideshow state and data for Travel with AQR card
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slideshowImages = [
    {
      src: "/images/Hotel booking.jpeg",
      alt: "Hotel Booking Services",
      title: "Hotel Booking"
    },
    {
      src: "/images/car Hire.jpeg", 
      alt: "Car Hire Services",
      title: "Car Hire"
    },
    {
      src: "/images/Visa Services.jpeg",
      alt: "Visa Services",
      title: "Visa Services"
    }
  ]

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length)
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [slideshowImages.length])

  // Manual AOS refresh
  useEffect(() => {
    const refreshAOS = async () => {
      if (typeof window !== 'undefined') {
        try {
          const AOS = (await import('aos')).default
          AOS.refresh()
        } catch (error) {
          console.warn('AOS refresh failed:', error)
        }
      }
    }
    
    // Refresh AOS after component mounts
    setTimeout(refreshAOS, 1000)
  }, [])

  return (
    <PageTransition>
      <ServiceSchema 
        name="Travel Services"
        description="Comprehensive travel services including visa processing, hotel bookings, and transport solutions"
        serviceType="Travel Agency Services"
        hasOfferCatalog={{
          name: "Travel Services",
          itemListElement: [
            { name: "Visa Services", description: "Professional visa application support" },
            { name: "Hotel Booking", description: "Premium accommodations with best rates" },
            { name: "Transport Hire", description: "Car hire and transport solutions" }
          ]
        }}
      />
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb items={[
          { name: "Services", url: "/services" }
        ]} />
      </div>
      <div>
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden rounded-br-[120px] md:rounded-br-[240px]" data-aos="zoom-in">
          <ParallaxBackground speed={0.35} className="absolute inset-0 w-full h-full">
            <img
              src="/images/down.jpg"
              alt="Travel services and tourism solutions - Atlantic Quest & Reality"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'none', opacity: 1 }}
              data-aos="fade-in"
            />
          </ParallaxBackground>
          <ParallaxText speed={0.2} className="relative z-10 text-center animate-scale-in" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-2xl">Travel That Reveals</h1>
          </ParallaxText>
        </section>
        {/* Continuous Parallax Background for All Content Sections */}
        <div className="relative">
          {/* Single Continuous Parallax Background */}
          <ParallaxBackground speed={0.3} className="fixed inset-0 w-full h-full opacity-60 pointer-events-none z-0">
            <img
              src="/images/Travel.jpeg"
              alt="Travel Services background"
              className="absolute bottom-0 right-0 w-full/4 h-full/4 object-cover"
            />
          </ParallaxBackground>
          
          {/* Services Grid */}
          <section className="relative py-16 overflow-hidden" data-aos="fade-up">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 relative z-10">
            {/* Travel with AQR Card - Left Column */}
            <div className="relative rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-blue-300 border-2 border-blue-100 group cursor-pointer min-h-[450px] md:min-h-[500px] overflow-hidden" data-aos="fade-right">
                {/* Full Background Image with Smooth Transitions */}
                <div className="absolute inset-0">
                  {slideshowImages.map((image, index) => (
                    <Image
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      fill
                      className={`absolute inset-0 object-cover transition-all duration-1000 ease-in-out ${
                        index === currentSlide 
                          ? 'opacity-100 scale-100' 
                          : 'opacity-0 scale-105'
                      }`}
                      onError={(e) => {
                        // Fallback to a placeholder if image doesn't exist
                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect width='400' height='500' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial' font-size='16'%3E" + image.title + "%3C/text%3E%3C/svg%3E"
                      }}
                    />
                  ))}
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/40 transition-opacity duration-1000"></div>
                </div>
              
              {/* Content Overlay */}
              <div className="relative z-10 p-4 md:p-6 h-full flex flex-col">
                {/* Top Content Section */}
                <div className="flex flex-col items-center text-center mb-6">
                  {/* Standardized Icon */}
                  <div className="mb-3 md:mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Briefcase className="w-4 h-4 md:w-6 md:h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-sm md:text-2xl font-extrabold mb-2 md:mb-3 text-white transition-all duration-700 group-hover:text-blue-200 group-hover:scale-105 drop-shadow-lg">Travel with AQR</h3>
                  <p className="text-xs md:text-lg text-white/90 mb-2 md:mb-3 transition-all duration-700 opacity-90 group-hover:opacity-100 leading-relaxed drop-shadow-md">Delivering seamless travel experiences with transparent pricing, professional service, reliable networks, quick bookings, and customised solutions.</p>
                  <span className="text-blue-200 font-semibold text-xs md:text-base transition-all duration-700 group-hover:text-blue-100 drop-shadow-md">Your gateway to global opportunities!</span>
                </div>
                
                {/* Bottom Section with Service Info */}
                <div className="flex-1 flex flex-col justify-end">
                    {/* Current Service Highlight */}
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 md:p-4 mb-4 transition-all duration-1000 ease-in-out">
                      <h4 className="text-white font-bold text-sm md:text-lg mb-1 drop-shadow-lg transition-all duration-1000 ease-in-out">
                        {slideshowImages[currentSlide].title}
                      </h4>
                      <p className="text-white/90 text-xs md:text-sm drop-shadow-md transition-all duration-1000 ease-in-out">
                        {currentSlide === 0 && "Premium accommodations with best rates and instant confirmations"}
                        {currentSlide === 1 && "Reliable vehicles for all your transportation needs"}
                        {currentSlide === 2 && "Expert visa processing and documentation assistance"}
                      </p>
                    </div>
                  
                  {/* Slide indicator dots */}
                  <div className="flex justify-center space-x-2 mb-2">
                    {slideshowImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentSlide ? 'bg-white shadow-lg' : 'bg-white/60 hover:bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - 3 Cards Stacked Vertically */}
            <div className="flex flex-col gap-4 md:gap-6">
              {/* Car Hire Card */}
              <Link href="/services/tours/transport" className="block">
                <div className="relative bg-white rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-blue-300 p-4 md:p-6 flex flex-col items-center text-center border-2 border-blue-100 group cursor-pointer" data-aos="fade-left">
                  {/* Standardized Icon */}
                  <div className="mb-2 md:mb-3">
                    <Icon icon={Plane} size="md" />
                  </div>
                  <h3 className="text-sm md:text-xl font-extrabold mb-1 md:mb-2 text-blue-800 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Car Hire</h3>
                  <p className="text-xs md:text-base text-gray-700 mb-1 md:mb-2 transition-all duration-700 opacity-90 group-hover:opacity-100">Wildlife Safaris, Holiday Packages, Car Hire & Transport Solutions</p>
                  <span className="text-blue-400 font-semibold text-xs md:text-sm transition-all duration-700 group-hover:text-blue-600">Click here to Explore the world with us!</span>
          </div>
              </Link>
              
              {/* Hotel Booking Card */}
              <Link href="/services/tours/hotels" className="block">
                <div className="relative bg-white rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-blue-300 p-4 md:p-6 flex flex-col items-center text-center border-2 border-blue-100 group cursor-pointer" data-aos="fade-left" data-aos-delay="100">
                  {/* Standardized Icon */}
                  <div className="mb-2 md:mb-3">
                    <Icon icon={Building} size="md" />
                  </div>
                  <h3 className="text-sm md:text-xl font-extrabold mb-1 md:mb-2 text-blue-800 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Hotel Booking</h3>
                  <p className="text-xs md:text-base text-gray-700 mb-1 md:mb-2 transition-all duration-700 opacity-90 group-hover:opacity-100">Premium accommodations with best rates and instant confirmations</p>
                  <span className="text-blue-400 font-semibold text-xs md:text-sm transition-all duration-700 group-hover:text-blue-600">Click here to Book your stay today!</span>
                </div>
              </Link>
              
              {/* Visa Services Card */}
              <Link href="/services/tours/visa" className="block">
                <div className="relative bg-white rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-blue-300 p-4 md:p-6 flex flex-col items-center text-center border-2 border-blue-100 group cursor-pointer" data-aos="fade-left" data-aos-delay="200">
                  {/* Standardized Icon */}
                  <div className="mb-2 md:mb-3">
                    <Icon icon={FileText} size="md" />
                  </div>
                  <h3 className="text-sm md:text-xl font-extrabold mb-1 md:mb-2 text-blue-800 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Visa Services</h3>
                  <p className="text-xs md:text-base text-gray-700 mb-1 md:mb-2 transition-all duration-700 opacity-90 group-hover:opacity-100">Expert visa processing and documentation assistance</p>
                  <span className="text-blue-400 font-semibold text-xs md:text-sm transition-all duration-700 group-hover:text-blue-600">Click here to Get your visa approved!</span>
                </div>
              </Link>
            </div>
          </div>
          </section>
          
          {/* FAQ and CTA Section - 2 Column Grid */}
          <section className="relative py-16 overflow-hidden">
            <div className="relative z-10">
              <div className="container mx-auto px-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                  {/* FAQ Section - Left Column */}
                  <div className="bg-white/30 backdrop-blur-sm shadow-2xl p-4 md:p-6 border border-blue-100 relative overflow-hidden" 
                       style={{
                        //  clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))',
                         borderRadius: '20px'
                       }}>
                    {/* Decorative corner accent */}
                    {/* <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-500/20 to-transparent"></div> */}
                    
                    <div className="[&_.bg-gray-50]:bg-transparent [&_.bg-white]:bg-transparent [&_.hover\\:bg-gray-50]:hover:bg-transparent [&_h2]:text-gray-900 [&_h2]:drop-shadow-lg [&_h3]:text-gray-900 [&_h3]:drop-shadow-md [&_p]:text-gray-800 [&_p]:drop-shadow-sm [&_button]:text-gray-900 [&_button]:drop-shadow-md">
                      <FAQSection 
                        faqs={[
                      {
                        question: "What travel services does AQR offer?",
                        answer: "We provide comprehensive travel services including visa processing, hotel bookings, transport hire, safari tours, and holiday packages to make your travel experience seamless and memorable."
                      },
                      {
                        question: "How do I book travel services with AQR?",
                        answer: "You can book our services by contacting us directly through our website, phone, or WhatsApp. We'll provide you with a custom quote and handle all the arrangements for you."
                      },
                      {
                        question: "Do you provide visa assistance for all countries?",
                        answer: "We specialize in visa processing for popular destinations including UAE, Qatar, Europe, and other international locations. Contact us to confirm availability for your specific destination."
                      },
                      {
                        question: "What makes AQR's travel services different?",
                        answer: "We offer personalized service, transparent pricing, reliable partnerships, and local expertise to ensure your travel experience is smooth, safe, and enjoyable."
                      }
                    ]}
                    title="Travel Services FAQ"
                  />
                    </div>
                  </div>
                  
                  {/* CTA Section - Right Column */}
                  <div className="bg-white/30 backdrop-blur-sm shadow-2xl p-4 md:p-6 border border-blue-100 relative overflow-hidden" 
                       style={{
                        //  clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)',
                         borderRadius: '20px'
                       }}>
                    {/* Decorative corner accent */}
                    {/* <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-500/20 to-transparent"></div> */}
                    
                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px)',
                        backgroundSize: '30px 30px'
                      }}></div>
                    </div>
                    
                    <div className="[&_.bg-gradient-to-r]:bg-transparent [&_.from-blue-600]:from-transparent [&_.via-blue-700]:via-transparent [&_.to-blue-800]:to-transparent [&_h2]:text-gray-900 [&_h2]:drop-shadow-lg [&_p]:text-gray-800 [&_p]:drop-shadow-sm [&_button]:text-gray-900 [&_button]:drop-shadow-md [&_a]:text-gray-900 [&_a]:drop-shadow-md">
                      <ProminentCTA 
                        title="Ready to Get Started?"
                        subtitle="Contact us for a custom quote or immediate assistance"
                        showContactInfo={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        <Footer />
      </div>
    </PageTransition>
  )
}
