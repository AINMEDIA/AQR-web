"use client"

import { PageTransition } from "@/components/page-transition"
import { WhatsAppForm } from "@/components/whatsapp-form"

export default function JobCategoriesPage() {

  return (
    <PageTransition>
      <div className="animate-fade-in">
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden rounded-br-[120px] md:rounded-br-[240px] group" data-aos="zoom-in">
          <img
            src="/images/jobs-hero.png"
            alt="Job Categories"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 animate-hero-flash"
            data-aos="fade-in"
          />
          <div className="absolute inset-0 bg-black/40 z-10 transition-all duration-500 group-hover:bg-black/30"></div>
          <div className="relative z-20 text-center text-white px-4" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow transition-all duration-700 hover:text-blue-200 hover:scale-105 cursor-default">Job Categories</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto transition-all duration-700">Explore opportunities across different industries</p>
          </div>
        </section>
        


        {/* WhatsApp Form Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100 animate-fade-in-delay">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-4 text-blue-800 transition-all duration-700 hover:text-blue-700 hover:scale-105 cursor-default">
                Quick WhatsApp Inquiry for Job Opportunities
              </h2>
              <p className="text-xl text-blue-600 transition-all duration-700">
                Get instant responses about job availability and application process via WhatsApp
              </p>
            </div>
            
            <WhatsAppForm />
          </div>
        </section>
      </div>
    </PageTransition>
  )
} 