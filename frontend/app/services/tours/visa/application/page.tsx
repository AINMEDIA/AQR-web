"use client"

import { PageTransition } from "@/components/page-transition";
import { Icon } from "@/components/ui/icon";
import { FileText, ArrowRight, PenTool, Globe, Navigation, Shield, Clock, Briefcase } from "lucide-react";
import Link from "next/link";

export default function VisaApplicationPage() {
  return (
    <PageTransition>
      <div className="animate-fade-in">
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden rounded-br-[120px] md:rounded-br-[240px] group" data-aos="zoom-in">
          <img
            src="/images/down.jpg"
            alt="Visa Application"
            className="absolute inset-0 w-full h-full object-cover"
            data-aos="fade-in"
          />
          <div className="absolute inset-0 bg-black/40 z-10 transition-all duration-500 group-hover:bg-black/30"></div>
          <div className="relative z-20 text-center text-white px-4" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow transition-all duration-700 hover:text-blue-200 hover:scale-105 cursor-default">Visa Application</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto transition-all duration-700">Professional visa application support for your travel needs.</p>
          </div>
        </section>

        {/* Visa Services Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100 animate-fade-in-delay">
          <div className="w-full max-w-7xl mx-auto px-6 animate-scale-in">
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              {/* Left Card */}
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-4 hover:border-blue-400 group cursor-pointer flex flex-col items-center justify-center text-center" data-aos="zoom-in" data-aos-delay="100">
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full mb-3 md:mb-4 transition-all duration-500 group-hover:bg-blue-200 group-hover:scale-110">
                  <FileText className="w-6 h-6 md:w-8 md:h-8 text-blue-600 group-hover:text-blue-700" />
                </div>
                <h3 className="text-sm md:text-xl font-bold mb-2 md:mb-3 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Simplifying Your Visa Journey.</h3>
                <p className="text-xs md:text-base text-gray-600 transition-all duration-700 opacity-90 group-hover:opacity-100 leading-relaxed">
                  Applying for a visa doesn't have to be complicated. We provide professional visa application support to guide you through every step from document preparation to submission and follow-up ensuring a smooth, stress-free experience with higher chances of approval.
                </p>
              </div>

              {/* Right Card */}
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl border-2 border-blue-200 flex flex-col items-center justify-start text-center" data-aos="zoom-in" data-aos-delay="200">
                <h3 className="text-sm md:text-lg font-extrabold text-blue-700 mb-3 md:mb-4 flex items-center gap-1 md:gap-2">
                  <Icon icon={FileText} size="sm" variant="minimal" /> 
                  <span className="text-xs md:text-sm">Visa Services</span>
                </h3>
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-start gap-2 text-left">
                    <PenTool className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-blue-900 font-semibold">Document Preparation & Review – Ensuring all paperwork is accurate and complete.</span>
                  </div>
                  <div className="flex items-start gap-2 text-left">
                    <Globe className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-blue-900 font-semibold">Visa Types Covered – Work visas, travel visas, student visas, business visas, and more.</span>
                  </div>
                  <div className="flex items-start gap-2 text-left">
                    <Navigation className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-blue-900 font-semibold">Step-by-Step Guidance – Clear instructions throughout the process.</span>
                  </div>
                  <div className="flex items-start gap-2 text-left">
                    <Shield className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-blue-900 font-semibold">Trusted Embassy Partnerships – Strong networks for reliable processing.</span>
                  </div>
                  <div className="flex items-start gap-2 text-left">
                    <Clock className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-blue-900 font-semibold">Time-Saving Support – Faster, hassle-free application handling.</span>
                  </div>
                  <div className="flex items-start gap-2 text-left">
                    <Briefcase className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-blue-900 font-semibold">Pre-Departure Briefing – Travel tips and requirements before you leave.</span>
                  </div>
                </div>
                <div className="w-full mt-4 md:mt-6">
                  <Link href="/services/tours/visa/booking" className="w-full px-6 py-3 bg-blue-700 text-white font-bold rounded-full shadow-lg hover:bg-blue-800 hover:text-white transition-all duration-500 text-base hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 group">
                    Apply for Visa
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}