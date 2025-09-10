"use client"

import React from "react"
import { PageTransition } from "@/components/page-transition"
import { Users, Plane, Target, Award, Heart, Globe, Briefcase } from "lucide-react"

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="animate-fade-in">
        <section className="relative min-h-[40vh] w-full flex items-center justify-center overflow-hidden rounded-br-[120px] md:rounded-br-[240px]">
          <img
            src="/images/hero-background.jpg"
            alt="About AQR Hero"
            className="absolute inset-0 w-full h-full object-cover z-0"
            data-aos="fade-in"
          />
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="relative z-20 text-center text-white px-4" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow">About AQR</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">Welcome to AQR – Together we are "unlocking mysteries"</p>
          </div>
        </section>
        
        {/* Our Promise Section */}
        <section className="py-16 bg-white animate-fade-in-up" data-aos="fade-up">
          <div className="container mx-auto px-8 md:px-16 max-w-7xl">
            <section className="my-12 p-8 bg-blue-50 rounded-2xl shadow-md animate-fade-in-up" data-aos="fade-up" data-aos-delay="250">
              <h2 className="text-3xl font-bold mb-8 text-blue-700 text-center">Our Promise</h2>
              <div className="grid gap-4 md:gap-8 grid-cols-2">
                {/* Promise Card 1 */}
                <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg flex flex-col items-center transition-all duration-500 group hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:ring-4 hover:ring-blue-300/40 relative overflow-hidden animate-fade-in">
                  <span className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-blue-900/10 opacity-0 group-hover:opacity-100 transition-all duration-500 z-0" />
                  <Globe className="w-8 h-8 md:w-12 md:h-12 mb-3 md:mb-4 text-blue-500 transition-transform duration-500 group-hover:scale-125 group-hover:text-blue-700 z-10" />
                  <h3 className="text-sm md:text-xl font-bold mb-2 z-10 text-center">Gateway to Opportunity & Adventure</h3>
                  <p className="text-xs md:text-base text-blue-900 z-10 text-center">We are your <span className="font-semibold text-blue-700">trusted partner</span> for both <span className="font-semibold text-blue-700">opportunity</span> and <span className="font-semibold text-blue-700">adventure</span>.</p>
                </div>
                {/* Promise Card 2 */}
                <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg flex flex-col items-center transition-all duration-500 group hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:ring-4 hover:ring-blue-300/40 relative overflow-hidden animate-fade-in">
                  <span className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-blue-900/10 opacity-0 group-hover:opacity-100 transition-all duration-500 z-0" />
                  <Plane className="w-8 h-8 md:w-12 md:h-12 mb-3 md:mb-4 text-blue-500 transition-transform duration-500 group-hover:scale-125 group-hover:text-blue-700 z-10" />
                  <h3 className="text-sm md:text-xl font-bold mb-2 z-10 text-center">Unforgettable Tours & Travel</h3>
                  <p className="text-xs md:text-base text-blue-900 z-10 text-center">We deliver <span className="font-semibold text-blue-700">professional</span>, <span className="font-semibold text-blue-700">reliable</span>, and <span className="font-semibold text-blue-700">personalized</span> experiences—your safety and memories come first.</p>
                </div>
                {/* Promise Card 3 - Spans both columns on mobile */}
                <div className="col-span-2 md:col-span-1 bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg flex flex-col items-center transition-all duration-500 group hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:ring-4 hover:ring-blue-300/40 relative overflow-hidden animate-fade-in">
                  <span className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-blue-900/10 opacity-0 group-hover:opacity-100 transition-all duration-500 z-0" />
                  <Briefcase className="w-8 h-8 md:w-12 md:h-12 mb-3 md:mb-4 text-blue-500 transition-transform duration-500 group-hover:scale-125 group-hover:text-blue-700 z-10" />
                  <h3 className="text-sm md:text-xl font-bold mb-2 z-10 text-center">Ethical Labour Recruitment</h3>
                  <p className="text-xs md:text-base text-blue-900 z-10 text-center">We bridge East African talent with global opportunities through <span className="font-semibold text-blue-700">ethical placement</span> and <span className="font-semibold text-blue-700">comprehensive support</span>.</p>
                </div>
              </div>
              <div className="mt-10 animate-fade-in text-center">
                <p className="text-lg md:text-xl mb-6 font-semibold text-blue-800">At AQR Web, <span className="text-blue-600">excellence</span> is not just our goal—it's our promise.</p>
                <a href="/about/contact/general" className="inline-block px-8 py-4 bg-blue-700 text-white font-bold rounded-full shadow-2xl hover:bg-blue-800 hover:text-white transition-all duration-500 text-xl hover:scale-105 hover:shadow">Contact Us</a>
              </div>
            </section>

            {/* Mission Section */}
            <div className="w-full mx-auto px-2 animate-scale-in">
              <div className="grid grid-cols-2 gap-3 md:gap-6">
                {/* Work that transforms */}
                <div 
                  className="relative h-48 md:h-96 md:min-h-[24rem] rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 group cursor-pointer overflow-hidden
                     hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:border-4 hover:border-blue-400
                     hover:brightness-110 hover:saturate-150 bg-gradient-to-br from-blue-50 to-blue-100"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-blue-400/10 to-transparent group-hover:from-blue-900/40 group-hover:via-blue-400/20 group-hover:to-transparent transition-all duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-80 transition-all duration-500 pointer-events-none">
                    <Target className="w-8 h-8 md:w-16 md:h-16 text-blue-600/80 group-hover:text-blue-500 animate-bounce" />
                  </div>
                  <div className="relative z-10 p-3 md:p-6 flex flex-col justify-end h-full">
                    <h3 className="text-sm md:text-xl font-extrabold text-blue-800 mb-1 md:mb-2 drop-shadow-lg transition-all duration-700
                      group-hover:text-blue-700 group-hover:scale-110 group-hover:-translate-y-2 group-hover:drop-shadow-[0_0_16px_rgba(59,130,246,0.7)]">
                      Work that transforms
                    </h3>
                    <p className="text-blue-700 text-xs md:text-sm transition-all duration-700 opacity-90 group-hover:opacity-100">To create life-changing opportunities and memorable experiences.</p>
                  </div>
                </div>

                {/* Travel that reveals */}
                <div 
                  className="relative h-48 md:h-96 md:min-h-[24rem] rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 group cursor-pointer overflow-hidden
                     hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:border-4 hover:border-blue-400
                     hover:brightness-110 hover:saturate-150 bg-gradient-to-br from-blue-100 to-blue-200"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-blue-400/10 to-transparent group-hover:from-blue-900/40 group-hover:via-blue-400/20 group-hover:to-transparent transition-all duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-80 transition-all duration-500 pointer-events-none">
                    <Globe className="w-8 h-8 md:w-16 md:h-16 text-blue-600/80 group-hover:text-blue-500 animate-bounce" />
                  </div>
                  <div className="relative z-10 p-3 md:p-6 flex flex-col justify-end h-full">
                    <h3 className="text-sm md:text-xl font-extrabold text-blue-800 mb-1 md:mb-2 drop-shadow-lg transition-all duration-700
                      group-hover:text-blue-700 group-hover:scale-110 group-hover:-translate-y-2 group-hover:drop-shadow-[0_0_16px_rgba(59,130,246,0.7)]">
                      Travel that reveals
                    </h3>
                    <p className="text-blue-700 text-xs md:text-sm transition-all duration-700 opacity-90 group-hover:opacity-100">To be the leading provider of international opportunities and travel experiences.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
} 