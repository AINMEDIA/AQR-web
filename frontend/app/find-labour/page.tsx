"use client"

import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"


export default function FindLabourPage() {



  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] w-full flex items-center justify-center overflow-hidden rounded-br-[120px] md:rounded-br-[240px]">
        <img
          src="/images/Labour.jpeg"
          alt="Labour Sourcing Hero"
          className="absolute inset-0 w-full h-full object-cover z-0"
          data-aos="fade-in"
        />
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center text-white px-4" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow">Labour Sourcing & Externalisation</h1>
          <p className="text-lg md:text-xl font-medium drop-shadow">Connecting skilled Ugandan workers with global opportunities and employers.</p>
        </div>
      </section>

      {/* Two-Card Layout Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white" data-aos="fade-up">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Card - Main Content */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-blue-100">
              <div className="h-full flex flex-col justify-center">
                {/* Icon */}
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-2xl">🌍</span>
                    </div>
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-6 text-center">
                  Your Future, Your Opportunity.
                </h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
                  At AQR, we believe in creating safe and rewarding pathways for individuals seeking to work abroad. We connect you to trusted employers who value your skills and ensure a transparent, ethical recruitment process so you can work with dignity, earn a fair income, and secure a brighter future for yourself and your family.
                </p>
              </div>
            </div>
            
            {/* Right Card - Work Opportunities */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-blue-100">
              <div className="h-full flex flex-col justify-between">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-3xl">🌍</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-800">Work Opportunities</h2>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🌍</span>
                    <div>
                      <h3 className="text-lg font-bold text-blue-800 mb-1">Safe & Trusted Opportunities</h3>
                      <p className="text-gray-700 text-sm">We work only with ethical employers, ensuring secure jobs with dignity and respect.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📋</span>
                    <div>
                      <h3 className="text-lg font-bold text-blue-800 mb-1">Full Guidance & Support</h3>
                      <p className="text-gray-700 text-sm">From application to departure, we walk with you step-by-step, making the process smooth and stress-free.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💰</span>
                    <div>
                      <h3 className="text-lg font-bold text-blue-800 mb-1">Transparent Process</h3>
                      <p className="text-gray-700 text-sm">Clear costs, no hidden fees, and a commitment to honesty at every stage.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🧑‍🏫</span>
                    <div>
                      <h3 className="text-lg font-bold text-blue-800 mb-1">Pre-Departure Training</h3>
                      <p className="text-gray-700 text-sm">Get prepared with skills, cultural orientation, and expectations before you travel.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🛂</span>
                    <div>
                      <h3 className="text-lg font-bold text-blue-800 mb-1">Visa & Documentation Assistance</h3>
                      <p className="text-gray-700 text-sm">Hassle-free support to process your paperwork quickly and correctly.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📞</span>
                    <div>
                      <h3 className="text-lg font-bold text-blue-800 mb-1">Ongoing Support While Abroad</h3>
                      <p className="text-gray-700 text-sm">Even after placement, our team remains available to assist and guide you.</p>
                    </div>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="text-center">
                  <a 
                    href="/find-labour/apply"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105 transform mx-auto"
                  >
                    <span className="text-base">Apply for Work Abroad</span>
                    <span className="text-xl">→</span>
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>



      <Footer />
    </PageTransition>
  )
}
