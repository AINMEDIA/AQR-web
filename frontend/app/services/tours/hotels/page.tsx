"use client"

import { PageTransition } from "@/components/page-transition"
import { Hotel, ArrowRight, CheckCircle, Star, Shield, Clock, Globe, Users, Headphones, Plane, Bus, Ship, Target, Wallet, Heart } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function HotelsPage() {
  // Slideshow state and data for the main card
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slideshowImages = [
    {
      src: "/images/Hotel Reservation.jpeg",
      alt: "Hotel Reservation Services",
      title: "Hotel Reservation"
    },
    {
      src: "/images/ticketing.jpeg", 
      alt: "Ticketing Services",
      title: "Ticketing"
    }
  ]

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [slideshowImages.length])

  return (
    <PageTransition>
      <div className="animate-fade-in">
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden rounded-br-[120px] md:rounded-br-[240px] group" data-aos="zoom-in">
          <img
            src="/images/down.jpg"
            alt="Hotel & Ticket Reservation"
            className="absolute inset-0 w-full h-full object-cover"
            data-aos="fade-in"
          />
          <div className="absolute inset-0 bg-black/40 z-10 transition-all duration-500 group-hover:bg-black/30"></div>
          <div className="relative z-20 text-center text-white px-4" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow transition-all duration-700 hover:text-blue-200 hover:scale-105 cursor-default">Hotel & Ticket Reservation</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto transition-all duration-700">Book top hotels and reserve your travel tickets with ease.</p>
          </div>
        </section>

        {/* Hotel Booking Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100 animate-fade-in-delay">
          <div className="w-full max-w-7xl mx-auto px-6 animate-scale-in">
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              {/* Left Big Card - Full Image Slideshow */}
              <div className="relative rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-4 hover:border-blue-400 group cursor-pointer min-h-[300px] md:min-h-[400px] overflow-hidden" data-aos="zoom-in" data-aos-delay="100">
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
                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial' font-size='16'%3E" + image.title + "%3C/text%3E%3C/svg%3E"
                      }}
                    />
                  ))}
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/40 transition-opacity duration-1000"></div>
                </div>
                
                {/* Content Overlay */}
                <div className="relative z-10 p-4 md:p-6 h-full flex flex-col">
                  {/* Top Content Section */}
                  <div className="flex flex-col items-center text-center mb-4">
                    {/* Standardized Icon */}
                    <div className="mb-3 md:mb-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                          <Hotel className="w-4 h-4 md:w-6 md:h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold mb-2 md:mb-3 text-white transition-all duration-700 group-hover:text-blue-200 group-hover:scale-105 drop-shadow-lg">Seamless Stays and Smooth Journeys.</h3>
                    <p className="text-xs md:text-base text-white/90 transition-all duration-700 opacity-90 group-hover:opacity-100 leading-relaxed drop-shadow-md">
                      We're taking the stress out of travel by handling your hotel bookings and ticket reservations from start to finish. With our trusted partners, transparent pricing, and fast service, we ensure you get the best deals, the right accommodations, and hassle-free reservations so you can focus on enjoying the journey, not planning it.
                    </p>
                  </div>
                  
                  {/* Bottom Section with Service Info */}
                  <div className="flex-1 flex flex-col justify-end">
                    {/* Current Service Highlight */}
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 md:p-4 mb-4 transition-all duration-1000 ease-in-out">
                      <h4 className="text-white font-bold text-sm md:text-lg mb-1 drop-shadow-lg transition-all duration-1000 ease-in-out">
                        {slideshowImages[currentSlide].title}
                      </h4>
                      <p className="text-white/90 text-xs md:text-sm drop-shadow-md transition-all duration-1000 ease-in-out">
                        {currentSlide === 0 && "Luxury accommodations with premium amenities and services"}
                        {currentSlide === 1 && "Easy booking and ticketing for all your travel needs"}
                      </p>
                    </div>
                    
                    {/* Slide indicator dots */}
                    <div className="flex justify-center space-x-2 mb-2">
                      {slideshowImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide ? 'bg-white shadow-lg' : 'bg-white/60 hover:bg-white/80'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - 2 Cards */}
              <div className="flex flex-col gap-4 md:gap-6">
                {/* Hotel Reservations Card */}
                <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl border-2 border-blue-200 flex flex-col items-center justify-center text-center" data-aos="zoom-in" data-aos-delay="200">
                  <h3 className="text-sm md:text-lg font-extrabold text-blue-700 mb-3 md:mb-4 flex items-center gap-1 md:gap-2">
                    <Hotel className="w-4 h-4 md:w-5 md:h-5 text-blue-500" /> 
                    <span className="text-xs md:text-sm">Hotel Reservations</span>
                  </h3>
                  <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                    <div className="flex items-start gap-2 text-left">
                      <Star className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-blue-900 font-semibold">Wide Selection of Hotels - From budget-friendly stays to luxury resorts.</span>
                    </div>
                    <div className="flex items-start gap-2 text-left">
                      <Shield className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-blue-900 font-semibold">Best Price Guarantee - Transparent rates with no hidden fees.</span>
                    </div>
                    <div className="flex items-start gap-2 text-left">
                      <Clock className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-blue-900 font-semibold">Fast & Easy Booking - Quick reservations tailored to your schedule.</span>
                    </div>
                    <div className="flex items-start gap-2 text-left">
                      <Globe className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-blue-900 font-semibold">Global Network - Stay anywhere, whether local or international.</span>
                    </div>
                    <div className="flex items-start gap-2 text-left">
                      <Users className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-blue-900 font-semibold">Personalized Recommendations - Hotels matched to your needs and preferences.</span>
                    </div>
                    <div className="flex items-start gap-2 text-left">
                      <Headphones className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-blue-900 font-semibold">24/7 Support - Assistance before, during, and after your stay.</span>
                    </div>
                  </div>
                  <Link href="/services/tours/hotels/booking" className="w-full px-4 py-2 bg-blue-700 text-white font-bold rounded-full shadow-lg hover:bg-blue-800 hover:text-white transition-all duration-500 text-sm hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 group">
                    Book Hotel Now
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-all duration-300" />
                  </Link>
                </div>

                {/* Ticketing Card */}
                <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl border-2 border-blue-200 flex flex-col items-center justify-center text-center" data-aos="zoom-in" data-aos-delay="300">
                  <h3 className="text-sm md:text-lg font-extrabold text-blue-700 mb-3 md:mb-4 flex items-center gap-1 md:gap-2">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-500" /> 
                    <span className="text-xs md:text-sm">Ticketing</span>
                  </h3>
                  <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                    <div className="flex items-start gap-2 text-left">
                      <Plane className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-blue-900 font-semibold">Flight Bookings – Domestic and international flights at competitive rates.</span>
                    </div>
                    <div className="flex items-start gap-2 text-left">
                      <Bus className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-blue-900 font-semibold">Bus & Coach Tickets – Convenient options for city and upcountry travel.</span>
                    </div>
                    <div className="flex items-start gap-2 text-left">
                      <Ship className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-blue-900 font-semibold">Ferry & Cruise Reservations – For waterway travel and leisure trips.</span>
                    </div>
                    <div className="flex items-start gap-2 text-left">
                      <Target className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-blue-900 font-semibold">Multi-Destination Planning – Perfect for tours and complex itineraries.</span>
                    </div>
                    <div className="flex items-start gap-2 text-left">
                      <Wallet className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-blue-900 font-semibold">Flexible Payments – Secure and convenient payment options.</span>
                    </div>
                    <div className="flex items-start gap-2 text-left">
                      <Heart className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-blue-900 font-semibold">24/7 Support – Assistance with cancellations, changes, or emergencies.</span>
                    </div>
                  </div>
                  <Link href="/services/tours/tickets/booking" className="w-full px-4 py-2 bg-blue-700 text-white font-bold rounded-full shadow-lg hover:bg-blue-800 hover:text-white transition-all duration-500 text-sm hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 group">
                    Book Tickets Now
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-all duration-300" />
                  </Link>
                </div>
            </div>
            </div>
          </div>
        </section>


      </div>
    </PageTransition>
  )
} 