"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/seo/breadcrumb"
import { FAQSection } from "@/components/seo/faq-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { MapPin, Briefcase, Clock, DollarSign, Star, Building, ArrowRight, Loader2, Zap, Heart, Globe, Users } from "lucide-react"
import { Icon } from "@/components/ui/icon"
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
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb items={[
          { name: "Jobs", url: "/jobs" }
        ]} />
      </div>
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
                     <Icon icon={Users} size="lg" />
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
                 <Link href="/find-labour" className="block">
                   <div 
                     className="relative bg-white rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-blue-300 p-4 md:p-6 flex flex-col items-center text-center border-2 border-blue-100 group cursor-pointer"
                     data-aos="zoom-in"
                     data-aos-delay="200"
                   >
                     <div className="flex flex-col justify-between h-full">
                       <div>
                         {/* Standardized Icon */}
                         <div className="flex items-center justify-center mb-2 md:mb-3">
                           <Users className="w-6 h-6 text-blue-500" />
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
                      <div className="mt-3 md:mt-4">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                          Hire Talent with Confidence
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>

                 {/* Find Work Card */}
                 <Link href="/jobs/categories" className="block">
                   <div 
                     className="relative bg-white rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-blue-300 p-4 md:p-6 flex flex-col items-center text-center border-2 border-blue-100 group cursor-pointer"
                     data-aos="zoom-in"
                     data-aos-delay="300"
                   >
                     <div className="flex flex-col justify-between h-full">
                       <div>
                         {/* Standardized Icon */}
                         <div className="flex items-center justify-center mb-2 md:mb-3">
                           <Briefcase className="w-6 h-6 text-blue-500" />
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
                      <div className="mt-3 md:mt-4">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                          Apply Now for Jobs Abroad
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        
        {/* Prominent CTA Section */}
        <ProminentCTA 
          title="Need Help Finding the Right Job?"
          subtitle="Contact us for personalized job matching and application assistance"
        />
        
        {/* FAQ Section */}
        <FAQSection 
          faqs={[
            {
              question: "What types of international jobs are available through AQR?",
              answer: "We specialize in placing skilled East African workers in high-demand positions including domestic workers, construction workers, hospitality staff, healthcare professionals, and skilled trades in UAE, Qatar, Saudi Arabia, Kuwait, Oman, and other international markets."
            },
            {
              question: "How long does the international recruitment process take?",
              answer: "Our international recruitment process typically takes 3-6 weeks from application to job placement, including document verification, visa processing, and pre-departure training. We ensure all workers are properly prepared for their international assignments."
            },
            {
              question: "What support do you provide for international workers?",
              answer: "We provide comprehensive support including document preparation, visa assistance, pre-departure training, cultural orientation, airport pickup, accommodation assistance, and ongoing support while working abroad. Our team maintains contact throughout the employment period."
            },
            {
              question: "Do you work with employers from Asia and other international countries?",
              answer: "Yes, we have established partnerships with employers across Asia, Middle East, and other international markets. We specialize in connecting East African talent with employers in UAE, Qatar, Saudi Arabia, and other countries seeking reliable, skilled workers."
            },
            {
              question: "What makes AQR different from other recruitment agencies?",
              answer: "We focus on ethical recruitment practices, transparent processes, and comprehensive support. Our workers are pre-screened, trained, and supported throughout their international employment journey. We maintain strong relationships with both workers and employers for successful placements."
            }
          ]}
          title="International Job Opportunities FAQ"
        />
        
        {/* Job Listings */}
        
      </div>
      <Footer />
    </PageTransition>
  )
}
