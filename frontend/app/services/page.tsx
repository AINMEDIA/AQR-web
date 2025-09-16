"use client"

import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { Breadcrumb } from "@/components/seo/breadcrumb"
import { ServiceSchema } from "@/components/seo/structured-data"
import { FAQSection } from "@/components/seo/faq-section"
import { Icon } from "@/components/ui/icon"
import { Briefcase, Plane, Building, FileText } from "lucide-react"
import Link from "next/link"
import { ProminentCTA } from "@/components/prominent-cta"

export default function ServicesPage() {

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
      <div className="animate-fade-in">
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden animate-slide-up rounded-br-[120px] md:rounded-br-[240px]" data-aos="zoom-in">
          <img
            src="/images/down.jpg"
            alt="Travel services and tourism solutions - Atlantic Quest & Reality"
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
              {/* Standardized Icon */}
              <div className="mb-2 md:mb-4">
                <Icon icon={Briefcase} size="lg" />
              </div>
              <h3 className="text-sm md:text-2xl font-extrabold mb-1 md:mb-2 text-blue-800 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Travel with AQR</h3>
              <p className="text-xs md:text-lg text-gray-700 mb-1 md:mb-2 transition-all duration-700 opacity-90 group-hover:opacity-100">Delivering seamless travel experiences with transparent pricing, professional service, reliable networks, quick bookings, and customised solutions.</p>
              <span className="text-blue-400 font-semibold text-xs md:text-base transition-all duration-700 group-hover:text-blue-600">Your gateway to global opportunities!</span>
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
        
        
        {/* FAQ Section */}
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
