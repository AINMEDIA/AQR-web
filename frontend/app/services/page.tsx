"use client"

import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import Link from "next/link"
import { ProminentCTA } from "@/components/prominent-cta"

export default function ServicesPage() {

  return (
    <PageTransition>
      <div className="animate-fade-in">
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden animate-slide-up rounded-br-[120px] md:rounded-br-[240px]" data-aos="zoom-in">
          <img
            src="/images/down.jpg"
            alt="Our Services"
            className="absolute inset-0 w-full h-full object-cover"
            data-aos="fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="relative z-10 text-center animate-scale-in" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-2xl">Travel That Reveals</h1>
          </div>
        </section>
        {/* Services Grid */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white" data-aos="fade-up">
          <div className="container mx-auto px-4 grid grid-cols-2 gap-6 md:gap-12">
            {/* Labour Recruitment Card - Left Column */}
            <div className="relative bg-white rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-blue-300 p-4 md:p-10 flex flex-col items-center justify-center text-center border-2 border-blue-100 group cursor-pointer" data-aos="fade-right">
              <span className="text-blue-600 text-3xl md:text-5xl mb-2 md:mb-4 transition-all duration-700 group-hover:scale-110">💼</span>
              <h3 className="text-sm md:text-2xl font-extrabold mb-1 md:mb-2 text-blue-800 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Travel with AQR</h3>
              <p className="text-xs md:text-lg text-gray-700 mb-1 md:mb-2 transition-all duration-700 opacity-90 group-hover:opacity-100">Delivering seamless travel experiences with transparent pricing, professional service, reliable networks, quick bookings, and customised solutions.</p>
              <span className="text-blue-400 font-semibold text-xs md:text-base transition-all duration-700 group-hover:text-blue-600">Your gateway to global opportunities!</span>
            </div>
            
            {/* Right Column - 3 Cards Stacked Vertically */}
            <div className="flex flex-col gap-4 md:gap-6">
              {/* Car Hire Card */}
              <Link href="/services/tours/transport" className="block">
                <div className="relative bg-white rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-blue-300 p-4 md:p-6 flex flex-col items-center text-center border-2 border-blue-100 group cursor-pointer" data-aos="fade-left">
                  <span className="text-blue-600 text-2xl md:text-4xl mb-2 md:mb-3 transition-all duration-700 group-hover:scale-110">✈️</span>
                  <h3 className="text-sm md:text-xl font-extrabold mb-1 md:mb-2 text-blue-800 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Car Hire</h3>
                  <p className="text-xs md:text-base text-gray-700 mb-1 md:mb-2 transition-all duration-700 opacity-90 group-hover:opacity-100">Wildlife Safaris, Holiday Packages, Car Hire & Transport Solutions</p>
                  <span className="text-blue-400 font-semibold text-xs md:text-sm transition-all duration-700 group-hover:text-blue-600">Explore the world with us!</span>
          </div>
              </Link>
              
              {/* Hotel Booking Card */}
              <Link href="/services/tours/hotels" className="block">
                <div className="relative bg-white rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-blue-300 p-4 md:p-6 flex flex-col items-center text-center border-2 border-blue-100 group cursor-pointer" data-aos="fade-left" data-aos-delay="100">
                  <span className="text-blue-600 text-2xl md:text-4xl mb-2 md:mb-3 transition-all duration-700 group-hover:scale-110">🏨</span>
                  <h3 className="text-sm md:text-xl font-extrabold mb-1 md:mb-2 text-blue-800 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Hotel Booking</h3>
                  <p className="text-xs md:text-base text-gray-700 mb-1 md:mb-2 transition-all duration-700 opacity-90 group-hover:opacity-100">Premium accommodations with best rates and instant confirmations</p>
                  <span className="text-blue-400 font-semibold text-xs md:text-sm transition-all duration-700 group-hover:text-blue-600">Book your stay today!</span>
                </div>
              </Link>
              
              {/* Visa Services Card */}
              <Link href="/services/tours/visa" className="block">
                <div className="relative bg-white rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-blue-300 p-4 md:p-6 flex flex-col items-center text-center border-2 border-blue-100 group cursor-pointer" data-aos="fade-left" data-aos-delay="200">
                  <span className="text-blue-600 text-2xl md:text-4xl mb-2 md:mb-3 transition-all duration-700 group-hover:scale-110">📋</span>
                  <h3 className="text-sm md:text-xl font-extrabold mb-1 md:mb-2 text-blue-800 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Visa Services</h3>
                  <p className="text-xs md:text-base text-gray-700 mb-1 md:mb-2 transition-all duration-700 opacity-90 group-hover:opacity-100">Expert visa processing and documentation assistance</p>
                  <span className="text-blue-400 font-semibold text-xs md:text-sm transition-all duration-700 group-hover:text-blue-600">Get your visa approved!</span>
                </div>
              </Link>
            </div>
          </div>
        </section>
        
        
        {/* Prominent CTA Section */}
        <ProminentCTA 
          title="Ready to Get Started?"
          subtitle="Contact us for a custom quote or immediate assistance"
          showContactInfo={false}
        />
        
        <Footer />
      </div>
    </PageTransition>
  )
}
