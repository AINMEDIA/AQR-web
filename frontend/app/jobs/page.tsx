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
import { ParallaxBackground, ParallaxSection, ParallaxText } from "@/components/ParallaxSection"
import { MapPin, Briefcase, Clock, DollarSign, Star, Building, ArrowRight, Loader2, Zap, Heart, Globe, Users } from "lucide-react"
import { Icon } from "@/components/ui/icon"
import Link from "next/link"
import Image from "next/image"
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
  
  // Slideshow state and data for the main card
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slideshowImages = [
    {
      src: "/images/Find labour.jpg",
      alt: "Find Labour Services",
      title: "Find Labour"
    },
    {
      src: "/images/find work.jpeg", 
      alt: "Find Work Services",
      title: "Find Work"
    }
  ]

  // Load static jobs data
  useEffect(() => {
    setLoading(true)
    // Use static data instead of API call
    setJobs(jobsData as Job[])
    setLoading(false)
  }, [])

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [slideshowImages.length])

  const filteredJobs = jobs

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb items={[
          { name: "Jobs", url: "/jobs" }
        ]} />
      </div>
      <div>
        {/* Single Parallax Background for entire page */}
        <ParallaxBackground speed={0.3} className="fixed inset-0 w-full h-full opacity-60 pointer-events-none z-0">
          <img
            src="/images/Jobs abroad.jpeg"
            alt="Jobs Abroad background"
            className="absolute bottom-0 right-5 w-full/4 h-full/4 object-cover"
          />
        </ParallaxBackground>
        
        <section>
          {/* Hero Section */}
          <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden rounded-br-[120px] md:rounded-br-[240px]" >
          <img
            src={"/images/Jobs abroad.jpeg"}
            alt="Hero background for Jobs Abroad"
            className="absolute inset-0 w-full h-full object-cover"
        />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40 z-5"></div>
            {/* Centered Content */}
            <ParallaxText speed={0.1} className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center" data-aos="fade-up">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold mb-2 text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)] transition-all duration-700 hover:text-blue-200 hover:scale-105 cursor-default">
                Jobs Abroad
              </h1>
            </ParallaxText>
          </section>
        </section>

        {/* Recruitment Services Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-stretch">
               {/* Left Column - Labour Recruitment Services - Full Image Slideshow */}
               <div 
                 className="relative rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-blue-300 border-2 border-blue-100 group cursor-pointer min-h-[350px] md:min-h-[400px] overflow-hidden"
                 data-aos="fade-right"
                 data-aos-delay="100"
               >
                 {/* Full Background Image with Smooth Transitions */}
                 <div className="absolute inset-0">
                   {slideshowImages.map((image, index) => (
                     <Image
                       key={index}
                       src={image.src}
                       alt={image.alt}
                       fill
                       className={`absolute inset-0 object-cover transition-all duration-1000 ease-in-out ${
                         index === currentSlide 
                           ? 'opacity-100 scale-100' 
                           : 'opacity-0 scale-105'
                       }`}
                     />
                   ))}
                   {/* Dark overlay for better text readability */}
                   <div className="absolute inset-0 bg-black/40 transition-opacity duration-1000"></div>
                 </div>
                 
                 {/* Content Overlay */}
                 <div className="relative z-10 p-4 md:p-6 h-full flex flex-col">
                   {/* Top Content Section */}
                   <div className="flex flex-col items-center text-center mb-4">
                     <h2 className="text-sm md:text-2xl font-bold mb-2 text-center leading-tight text-white transition-all duration-700 group-hover:text-blue-200 group-hover:scale-105 drop-shadow-lg">
                     Connecting Talent to Opportunity, Building Success Together.
                     </h2>
                     <p className="text-xs md:text-base text-white/90 mb-1 md:mb-2 transition-all duration-700 opacity-90 group-hover:opacity-100 text-center drop-shadow-md">
                     AQR bridges the gap between ethical employers and dependable workers, creating a win-win connection that fuels business growth and transforms lives.
                     </p>
                   </div>
                   
                   {/* Bottom Section with Service Info */}
                   <div className="flex-1 flex flex-col justify-end">
                     {/* Current Service Highlight */}
                     <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 md:p-4 mb-4 transition-all duration-1000 ease-in-out">
                       <h4 className="text-white font-bold text-sm md:text-lg mb-1 drop-shadow-lg transition-all duration-1000 ease-in-out">
                         {slideshowImages[currentSlide].title}
                       </h4>
                       <p className="text-white/90 text-xs md:text-sm drop-shadow-md transition-all duration-1000 ease-in-out">
                         {currentSlide === 0 && "Connecting skilled workers with international opportunities"}
                         {currentSlide === 1 && "Finding the right talent for your business needs"}
                       </p>
                     </div>
                     
                     {/* Slide indicator dots */}
                     <div className="flex justify-center space-x-2 mb-2">
                       {slideshowImages.map((_, index) => (
                         <button
                           key={index}
                           onClick={() => setCurrentSlide(index)}
                           className={`w-3 h-3 rounded-full transition-all duration-300 ${
                             index === currentSlide ? 'bg-white shadow-lg' : 'bg-white/60 hover:bg-white/80'
                           }`}
                         />
                       ))}
                     </div>
                   </div>
                 </div>
               </div>

              {/* Right Column - Two Cards Stacked Vertically */}
              <div className="space-y-1 md:space-y-6 flex flex-col justify-start">
                 {/* Find Labour Card */}
                 <Link href="/find-labour" className="block">
                   <div className="relative bg-white rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-blue-300 p-4 md:p-6 flex flex-col items-center text-center border-2 border-blue-100 group cursor-pointer"
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
                   <div className="relative bg-white rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-blue-300 p-4 md:p-6 flex flex-col items-center text-center border-2 border-blue-100 group cursor-pointer"
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

        
        {/* FAQ and CTA Section - 2 Column Grid */}
        <section className="relative py-16 overflow-hidden">
          <div className="relative z-10">
            <div className="container mx-auto px-2">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {/* FAQ Section - Left Column */}
                <div className="bg-white/30 backdrop-blur-sm shadow-2xl p-4 md:p-6 border border-blue-100 relative overflow-hidden" 
                     style={{
                      //  clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))',
                       borderRadius: '20px'
                     }}>
                  {/* Decorative corner accent */}
                  {/* <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-500/20 to-transparent"></div> */}
                  
                  <div className="[&_.bg-gray-50]:bg-transparent [&_.bg-white]:bg-transparent [&_.hover\\:bg-gray-50]:hover:bg-transparent [&_h2]:text-gray-900 [&_h2]:drop-shadow-lg [&_h3]:text-gray-900 [&_h3]:drop-shadow-md [&_p]:text-gray-800 [&_p]:drop-shadow-sm [&_button]:text-gray-900 [&_button]:drop-shadow-md">
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
                  </div>
                </div>
                
                {/* CTA Section - Right Column */}
                <div className="bg-white/30 backdrop-blur-sm shadow-2xl p-4 md:p-6 border border-blue-100 relative overflow-hidden" 
                     style={{
                      //  clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)',
                       borderRadius: '20px'
                     }}>
                  {/* Decorative corner accent */}
                  {/* <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-500/20 to-transparent"></div> */}
                  
                  {/* Subtle pattern overlay */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px)',
                      backgroundSize: '30px 30px'
                    }}></div>
                  </div>
                  
                  <div className="[&_.bg-gradient-to-r]:bg-transparent [&_.from-blue-600]:from-transparent [&_.via-blue-700]:via-transparent [&_.to-blue-800]:to-transparent [&_h2]:text-gray-900 [&_h2]:drop-shadow-lg [&_p]:text-gray-800 [&_p]:drop-shadow-sm [&_button]:text-gray-900 [&_button]:drop-shadow-md [&_a]:text-gray-900 [&_a]:drop-shadow-md">
                    <ProminentCTA 
                      title="Need Help Finding the Right Job?"
                      subtitle="Contact us for personalized job matching and application assistance"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Job Listings */}
        
      </div>
      <Footer />
    </PageTransition>
  )
}
