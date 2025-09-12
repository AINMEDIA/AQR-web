"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { MapPin, Briefcase, Clock, DollarSign, Star, Building, ArrowRight, Loader2, Zap, Heart, Globe, Users } from "lucide-react"
import Link from "next/link"
import { FadeIn } from "@/components/FadeIn"
import { ProminentCTA } from "@/components/prominent-cta"
import jobsData from "@/data/jobs.json"

// Define Job interface locally since we're not using the API
interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
  category: string;
  tags?: string;
  featured?: boolean;
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)

  // Load static jobs data
  useEffect(() => {
    setLoading(true)
    // Use static data instead of API call
    setJobs(jobsData as Job[])
    setLoading(false)
  }, [])

  const filteredJobs = jobs

  return (
    <PageTransition>
      <div>
        <section>
          {/* Hero Section */}
          <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden " >
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden ">
              <div
                className="w-full min-h-[800px] flex items-center justify-center relative rounded-br-[400px] md:rounded-br-[600px] lg:rounded-br-[800px]"
                style={{
                  backgroundImage: "url('/images/jobs-hero.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                  backgroundRepeat: 'no-repeat',
                }}
                
              />
            </div>
            {/* Logo halfway down, offset left */}
            {/* <div className="absolute z-20 left-[4cm] top-1/2 -translate-y-1/2 transition-all duration-700 group-hover:scale-110" data-aos="fade-right">
              <img src="/android-chrome-192x192.png" alt="AQR-Web Logo" className="h-40 w-40 animate-logo-breathe" />
            </div> */}
            {/* Centered Content */}
            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center" data-aos="fade-up">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold mb-2 text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)] transition-all duration-700 hover:text-blue-200 hover:scale-105 cursor-default">
                Jobs Abroad
              </h1>
            </div>
          </section>
        </section>

        {/* Recruitment Services Section */}
        <section className="py-16 bg-white animate-fade-in-delay">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-2 md:gap-8 lg:gap-12 items-start">
              {/* Left Column - Labour Recruitment Services */}
              <div 
                className="relative h-[calc(112px*3+4px*2)] md:h-[calc(128px*3+24px*2)] lg:h-[calc(160px*3+24px*2)] rounded-2xl shadow-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-2xl transition-all duration-500"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-blue-400/10 to-transparent rounded-2xl"></div>
                <div className="relative z-10 p-3 md:p-8 flex flex-col justify-center h-full">
                  <h2 className="text-base md:text-4xl font-bold text-blue-800 mb-3 md:mb-6 drop-shadow-lg">
                    Labour Recruitment Services
                  </h2>
                  <div className="space-y-3 md:space-y-4 text-blue-700">
                    <p className="text-sm md:text-xl font-medium leading-tight">
                      "Connecting the right talent to the right opportunity."
                    </p>
                    <p className="text-xs md:text-lg leading-relaxed">
                      At AQR, we believe that the right job can change a life — and the right employee can transform a business. Our recruitment services connect skilled and motivated workers to employers locally and abroad, ensuring a perfect match every time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Three Cards Stacked Vertically */}
              <div className="space-y-1 md:space-y-6 flex flex-col justify-start">
                {/* Construction Card */}
                <div 
                  className="relative h-28 md:h-32 lg:h-40 rounded-xl shadow-xl bg-gradient-to-br from-blue-100 to-blue-200 hover:shadow-2xl hover:scale-105 transition-all duration-500"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-blue-400/10 to-transparent rounded-xl"></div>
                  <div className="relative z-10 p-3 md:p-6 flex flex-col justify-center h-full">
                    <h3 className="text-sm md:text-xl lg:text-2xl font-bold text-blue-800 mb-2 md:mb-2 drop-shadow-lg">
                      Construction
                    </h3>
                    <p className="text-blue-700 text-xs md:text-sm lg:text-base opacity-90 leading-tight">Skilled construction professionals</p>
                  </div>
                </div>

                {/* Healthcare Card */}
                <div 
                  className="relative h-28 md:h-32 lg:h-40 rounded-xl shadow-xl bg-gradient-to-br from-blue-200 to-blue-300 hover:shadow-2xl hover:scale-105 transition-all duration-500"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-blue-400/10 to-transparent rounded-xl"></div>
                  <div className="relative z-10 p-3 md:p-6 flex flex-col justify-center h-full">
                    <h3 className="text-sm md:text-xl lg:text-2xl font-bold text-blue-800 mb-2 md:mb-2 drop-shadow-lg">
                      Healthcare
                    </h3>
                    <p className="text-blue-700 text-xs md:text-sm lg:text-base opacity-90 leading-tight">Medical and care professionals</p>
                  </div>
                </div>

                {/* Hospitality Card */}
                <div 
                  className="relative h-28 md:h-32 lg:h-40 rounded-xl shadow-xl bg-gradient-to-br from-blue-300 to-blue-400 hover:shadow-2xl hover:scale-105 transition-all duration-500"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-blue-400/10 to-transparent rounded-xl"></div>
                  <div className="relative z-10 p-3 md:p-6 flex flex-col justify-center h-full">
                    <h3 className="text-sm md:text-xl lg:text-2xl font-bold text-blue-800 mb-2 md:mb-2 drop-shadow-lg">
                      Hospitality
                    </h3>
                    <p className="text-blue-700 text-xs md:text-sm lg:text-base opacity-90 leading-tight">Hotel and service industry</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        {/* Prominent CTA Section */}
        <ProminentCTA 
          title="Need Help Finding the Right Job?"
          subtitle="Contact us for personalized job matching and application assistance"
        />
        
        {/* Job Listings */}
        
      </div>
      <Footer />
    </PageTransition>
  )
}
