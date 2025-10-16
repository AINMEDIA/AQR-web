"use client"

import React from "react"
import { PageTransition } from "@/components/page-transition"
import { Breadcrumb } from "@/components/seo/breadcrumb"
import { ParallaxBackground, ParallaxSection, ParallaxText } from "@/components/ParallaxSection"
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
        {/* Single Continuous Parallax Background for entire page */}
        <ParallaxBackground speed={0.3} className="fixed inset-0 w-full h-full opacity-60 pointer-events-none z-0">
          <img
            src="/images/About.jpeg"
            alt="About AQR background"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'none', opacity: 1 }}
          />
        </ParallaxBackground>
        <section className="relative min-h-[40vh] w-full flex items-center justify-center overflow-hidden rounded-br-[120px] md:rounded-br-[240px]">
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <ParallaxText speed={0.1} className="relative z-20 text-center text-white px-4" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow">Your Bridge to Opportunity and Discovery  </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">AQR – "unlocking mysteries"</p>
          </ParallaxText>
        </section>
        
        {/* Our Promise Section */}
        <section className="relative py-16 animate-fade-in-up overflow-hidden" data-aos="fade-up">
          <div className="container mx-auto px-8 md:px-16 max-w-7xl relative z-10">
            <section className="my-12 p-8 bg-white/30 backdrop-blur-sm rounded-2xl shadow-md animate-fade-in-up border border-blue-100" data-aos="fade-up" data-aos-delay="250">
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
                  <ParallaxSection speed={0.2} direction="up" className="relative h-56 md:h-96 lg:h-[28rem] xl:h-[32rem] md:min-h-[24rem] rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 group cursor-pointer overflow-hidden
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
                  </ParallaxSection>
                </Link>

                {/* Travel that reveals */}
                <Link href="/services" className="block">
                  <ParallaxSection speed={0.2} direction="down" className="relative h-56 md:h-96 lg:h-[28rem] xl:h-[32rem] md:min-h-[24rem] rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 group cursor-pointer overflow-hidden
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
                  </ParallaxSection>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="relative py-16">
          <div className="container mx-auto px-8 md:px-16 max-w-7xl relative z-10">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 drop-shadow-lg">Leadership Team</h2>
            
            {/* Board of Directors */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-center text-gray-800 mb-8 drop-shadow-lg">Board of Directors</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {/* Board Member 1 */}
                <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 shadow-lg max-w-sm border border-blue-100">
                  <div className="w-48 h-48 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Profile Image</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 text-center mb-2">Dr. Sarah Johnson</h4>
                  <p className="text-gray-600 text-center">Chairman & CEO</p>
                </div>
                
                {/* Board Member 2 */}
                <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 shadow-lg max-w-sm border border-blue-100">
                  <div className="w-48 h-48 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Profile Image</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 text-center mb-2">Michael Chen</h4>
                  <p className="text-gray-600 text-center">Vice Chairman</p>
                </div>
                
                {/* Board Member 3 */}
                <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 shadow-lg max-w-sm border border-blue-100">
                  <div className="w-48 h-48 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Profile Image</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 text-center mb-2">Aisha Patel</h4>
                  <p className="text-gray-600 text-center">Independent Director</p>
                </div>
              </div>
            </div>

            {/* Executive Management */}
            <div>
              <h3 className="text-3xl font-bold text-center text-gray-800 mb-8 drop-shadow-lg">Executive Management</h3>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
                The Executive Management of Atlantic Quest & Reality comprises of the Chief Executive Officer and key department heads appointed by the Board of Directors.
              </p>
              
              {/* CEO */}
              <div className="flex justify-center mb-12">
                <div className="bg-white/30 backdrop-blur-sm rounded-xl p-8 shadow-lg max-w-md border border-blue-100">
                  <div className="w-64 h-64 mx-auto mb-6 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-sm">CEO Profile Image</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 text-center mb-2">James Wilson</h4>
                  <p className="text-gray-600 text-center text-lg">Chief Executive Officer</p>
                </div>
              </div>
              
              {/* Department Heads */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Head of Recruitment */}
                <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Profile</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 text-center mb-2">Maria Rodriguez</h4>
                  <p className="text-gray-600 text-center text-sm">Head of Recruitment</p>
                </div>
                
                {/* Head of Travel Services */}
                <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Profile</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 text-center mb-2">David Kim</h4>
                  <p className="text-gray-600 text-center text-sm">Head of Travel Services</p>
                </div>
                
                {/* Head of Operations */}
                <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Profile</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 text-center mb-2">Ahmed Hassan</h4>
                  <p className="text-gray-600 text-center text-sm">Head of Operations</p>
                </div>
                
                {/* Head of Finance */}
                <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Profile</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 text-center mb-2">Lisa Thompson</h4>
                  <p className="text-gray-600 text-center text-sm">Head of Finance</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
} 