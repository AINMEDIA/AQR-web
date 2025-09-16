"use client"

import React from "react"
import { PageTransition } from "@/components/page-transition"
import { Breadcrumb } from "@/components/seo/breadcrumb"
import Link from "next/link"

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb items={[
          { name: "About", url: "/about" }
        ]} />
      </div>
      <div className="animate-fade-in">
        <section className="relative min-h-[40vh] w-full flex items-center justify-center overflow-hidden rounded-br-[120px] md:rounded-br-[240px]">
          <img
            src="/images/hero-background.jpg"
            alt="About Atlantic Quest & Reality - Your bridge to opportunity and discovery"
            className="absolute inset-0 w-full h-full object-cover z-0"
            data-aos="fade-in"
          />
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="relative z-20 text-center text-white px-4" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow">Your Bridge to Opportunity and Discovery  </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">AQR – "unlocking mysteries"</p>
          </div>
        </section>
        
        {/* Our Promise Section */}
        <section className="py-16 bg-white animate-fade-in-up" data-aos="fade-up">
          <div className="container mx-auto px-8 md:px-16 max-w-7xl">
            <section className="my-12 p-8 bg-blue-50 rounded-2xl shadow-md animate-fade-in-up" data-aos="fade-up" data-aos-delay="250">
              <h2 className="text-3xl font-bold mb-8 text-blue-700 text-center">Our Promise</h2>
              {/* Optimized Promise Text */}
              <div className="max-w-4xl mx-auto text-center animate-fade-in" data-aos="fade-up" data-aos-delay="200">
                <blockquote className="text-xl md:text-3xl font-bold text-blue-800 leading-relaxed mb-8 italic">
                  Unlocking doors to dignified opportunities and life-changing adventures.
                </blockquote>
                
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8 rounded-full"></div>
                
                <p className="text-lg md:text-2xl text-blue-700 leading-relaxed font-medium">
                  We believe that work and travel should elevate your life. Whether you're seeking meaningful employment or unforgettable journeys, We are your <span className="font-bold text-blue-800">trusted partner</span> every step of the way.
                </p>
              </div>
              <div className="mt-10 animate-fade-in text-center">
                {/* <p className="text-lg md:text-xl mb-6 font-semibold text-blue-800">,<span className="text-blue-600">excellence</span> is not just our goal—it's our promise.</p> */}
                {/* <a href="/about/contact/general" className="inline-block px-8 py-4 bg-blue-700 text-white font-bold rounded-full shadow-2xl hover:bg-blue-800 hover:text-white transition-all duration-500 text-xl hover:scale-105 hover:shadow">Contact Us</a> */}
              </div>
            </section>

            {/* Mission Section */}
            <div className="w-full mx-auto px-2 animate-scale-in">
              <div className="grid grid-cols-2 gap-3 md:gap-6">
                {/* Work that transforms */}
                <Link href="/jobs" className="block">
                  <div 
                    className="relative h-56 md:h-96 lg:h-[28rem] xl:h-[32rem] md:min-h-[24rem] rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 group cursor-pointer overflow-hidden
                       hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:border-4 hover:border-blue-400
                       hover:brightness-110 hover:saturate-150 bg-gradient-to-br from-blue-50 to-blue-100"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-blue-400/10 to-transparent group-hover:from-blue-900/40 group-hover:via-blue-400/20 group-hover:to-transparent transition-all duration-500"></div>
                     <div className="relative z-10 p-3 md:p-6 lg:p-8 xl:p-10 flex flex-col justify-center items-center text-center h-full">
                       <h3 className="text-sm md:text-xl lg:text-2xl xl:text-3xl font-extrabold text-blue-800 mb-2 md:mb-3 lg:mb-4 drop-shadow-lg transition-all duration-700
                         group-hover:text-blue-700 group-hover:scale-110 group-hover:-translate-y-2 group-hover:drop-shadow-[0_0_16px_rgba(59,130,246,0.7)]">
                         Work That Transforms
                       </h3>
                       <p className="text-xs md:text-sm lg:text-base xl:text-lg text-blue-700 leading-relaxed lg:leading-loose transition-all duration-700 opacity-90 group-hover:opacity-100">
                         We connect employers to skilled, reliable workers through a transparent process, and individuals to safe, rewarding jobs abroad that bring dignity and growth.
                       </p>
                     </div>
                  </div>
                </Link>

                {/* Travel that reveals */}
                <Link href="/services" className="block">
                  <div 
                    className="relative h-56 md:h-96 lg:h-[28rem] xl:h-[32rem] md:min-h-[24rem] rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 group cursor-pointer overflow-hidden
                       hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:border-4 hover:border-blue-400
                       hover:brightness-110 hover:saturate-150 bg-gradient-to-br from-blue-100 to-blue-200"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-blue-400/10 to-transparent group-hover:from-blue-900/40 group-hover:via-blue-400/20 group-hover:to-transparent transition-all duration-500"></div>
                    <div className="relative z-10 p-3 md:p-6 lg:p-8 xl:p-10 flex flex-col justify-center items-center text-center h-full">
                      <h3 className="text-sm md:text-xl lg:text-2xl xl:text-3xl font-extrabold text-blue-800 mb-2 md:mb-3 lg:mb-4 drop-shadow-lg transition-all duration-700
                        group-hover:text-blue-700 group-hover:scale-110 group-hover:-translate-y-2 group-hover:drop-shadow-[0_0_16px_rgba(59,130,246,0.7)]">
                        Travel That Reveals
                      </h3>
                      <p className="text-xs md:text-sm lg:text-base xl:text-lg text-blue-700 leading-relaxed lg:leading-loose transition-all duration-700 opacity-90 group-hover:opacity-100">Travel is more than seeing new places, it's discovering yourself. Our curated journeys inspire wonder, connect you to cultures, and leave you with memories that last a lifetime.</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
} 