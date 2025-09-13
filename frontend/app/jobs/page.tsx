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
            <div className="grid grid-cols-2 gap-2 md:gap-8 lg:gap-12 items-stretch">
               {/* Left Column - Labour Recruitment Services */}
               <div 
                 className="relative bg-white rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-blue-300 p-4 md:p-6 flex flex-col items-center text-center border-2 border-blue-100 group cursor-pointer"
                 data-aos="fade-right"
                 data-aos-delay="100"
               >
                 <div className="flex flex-col justify-center h-full">
                   {/* Standardized Icon */}
                   <div className="flex items-center justify-center mb-3 md:mb-6">
                     <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center">
                       <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                         <Users className="w-4 h-4 md:w-6 md:h-6 text-white" />
                       </div>
                     </div>
                   </div>
                   <h2 className="text-sm md:text-2xl font-bold mb-2 text-center leading-tight text-blue-800 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">
                   Connecting Talent to Opportunity, Building Success Together.
                   </h2>
                   <p className="text-xs md:text-base text-gray-700 mb-1 md:mb-2 transition-all duration-700 opacity-90 group-hover:opacity-100 text-center">
                   AQR bridges the gap between ethical employers and dependable workers, creating a win-win connection that fuels business growth and transforms lives.
                   </p>
                 </div>
               </div>

              {/* Right Column - Two Cards Stacked Vertically */}
              <div className="space-y-1 md:space-y-6 flex flex-col justify-start">
                 {/* Find Labour Card */}
                 <div 
                   className="relative bg-white rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-blue-300 p-4 md:p-6 flex flex-col items-center text-center border-2 border-blue-100 group cursor-pointer"
                   data-aos="zoom-in"
                   data-aos-delay="200"
                 >
                   <div className="flex flex-col justify-between h-full">
                     <div>
                       {/* Standardized Icon */}
                       <div className="flex items-center justify-center mb-2 md:mb-3">
                         <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                           <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-600 rounded-lg flex items-center justify-center">
                             <Users className="w-3 h-3 md:w-4 md:h-4 text-white" />
                           </div>
                         </div>
                       </div>
                       <h3 className="text-sm md:text-xl font-extrabold mb-1 md:mb-2 text-blue-800 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105 text-center">
                         Find Labour
                       </h3>
                       <p className="text-xs md:text-base text-gray-700 mb-1 md:mb-2 transition-all duration-700 opacity-90 group-hover:opacity-100 text-center">
                         We help you build strong, reliable teams by connecting you to skilled, vetted workers through a transparent and ethical recruitment process saving you time, money, and stress.
                       </p>
                       <span className="text-blue-400 font-semibold text-xs md:text-sm transition-all duration-700 group-hover:text-blue-600 text-center">
                         Find the Right Talent, Hassle-Free.
                       </span>
                    </div>
                    <Link href="/find-labour/request" className="mt-3 md:mt-4">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                        Hire Talent with Confidence
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>

                 {/* Find Work Card */}
                 <div 
                   className="relative bg-white rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-blue-300 p-4 md:p-6 flex flex-col items-center text-center border-2 border-blue-100 group cursor-pointer"
                   data-aos="zoom-in"
                   data-aos-delay="300"
                 >
                   <div className="flex flex-col justify-between h-full">
                     <div>
                       {/* Standardized Icon */}
                       <div className="flex items-center justify-center mb-2 md:mb-3">
                         <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                           <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-600 rounded-lg flex items-center justify-center">
                             <Briefcase className="w-3 h-3 md:w-4 md:h-4 text-white" />
                           </div>
                         </div>
                       </div>
                       <h3 className="text-sm md:text-xl font-extrabold mb-1 md:mb-2 text-blue-800 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105 text-center">
                         Find Work
                       </h3>
                       <p className="text-xs md:text-base text-gray-700 mb-1 md:mb-2 transition-all duration-700 opacity-90 group-hover:opacity-100 text-center">
                         We connect you to safe, rewarding jobs abroad, providing guidance, support, and transparency every step of the way so you can work with dignity and achieve your dreams.
                       </p>
                       <span className="text-blue-400 font-semibold text-xs md:text-sm transition-all duration-700 group-hover:text-blue-600 text-center">
                         Your Future Starts Here.
                       </span>
                    </div>
                    <Link href="/jobs" className="mt-3 md:mt-4">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                        Apply Now for Jobs Abroad
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
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
