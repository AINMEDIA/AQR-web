"use client"

import { PageTransition } from "@/components/page-transition"
import { Icon } from "@/components/ui/icon"
import { Building2, Search, Handshake, Zap, Globe, FileText, Phone } from "lucide-react"

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
        
        {/* Two-Card Layout Section */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white" data-aos="fade-up">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Left Card - Main Content */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-blue-100">
                <div className="h-full flex flex-col justify-center">
                  {/* Icon */}
                  <div className="flex items-center justify-center mb-6">
                    <Icon icon={Building2} size="xl" />
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-6 text-center">
                    Building Strong Teams, Driving Business Success.
                  </h2>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
                    At AQR, we understand that the right people make all the difference. That's why we help employers find skilled, reliable, and ethical workers through a transparent recruitment process. From understanding your staffing needs to matching you with the best talent, we make hiring simple, efficient, and trustworthy so you can focus on growing your business.
                  </p>
                </div>
              </div>
              
              {/* Right Card - Job Opportunities */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-blue-100">
                <div className="h-full flex flex-col justify-between">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <Icon icon={Building2} size="lg" />
                      <h2 className="text-2xl md:text-3xl font-bold text-blue-800">Job Opportunities</h2>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <Icon icon={Search} size="sm" variant="minimal" />
                      <div>
                        <h3 className="text-lg font-bold text-blue-800 mb-1">Skilled, Vetted Workers</h3>
                        <p className="text-gray-700 text-sm">Every candidate is thoroughly screened and trained to meet your specific business needs.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Icon icon={Handshake} size="sm" variant="minimal" />
                      <div>
                        <h3 className="text-lg font-bold text-blue-800 mb-1">Ethical Recruitment Practices</h3>
                        <p className="text-gray-700 text-sm">We ensure a fair, transparent, and compliant hiring process that builds trust and long-term success.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Icon icon={Zap} size="sm" variant="minimal" />
                      <div>
                        <h3 className="text-lg font-bold text-blue-800 mb-1">Fast & Efficient Matching</h3>
                        <p className="text-gray-700 text-sm">Streamlined processes to fill vacancies quickly without compromising on quality.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Icon icon={Globe} size="sm" variant="minimal" />
                      <div>
                        <h3 className="text-lg font-bold text-blue-800 mb-1">Diverse Talent Pool</h3>
                        <p className="text-gray-700 text-sm">Access workers from various industries and skill levels, ready to work globally.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Icon icon={FileText} size="sm" variant="minimal" />
                      <div>
                        <h3 className="text-lg font-bold text-blue-800 mb-1">Full Documentation Support</h3>
                        <p className="text-gray-700 text-sm">Assistance with contracts, visas, and compliance to simplify the hiring process.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Icon icon={Phone} size="sm" variant="minimal" />
                      <div>
                        <h3 className="text-lg font-bold text-blue-800 mb-1">Ongoing Employer Support</h3>
                        <p className="text-gray-700 text-sm">Continuous communication and support to ensure smooth onboarding and retention.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="text-center">
                    <a 
                      href="/jobs/apply"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105 transform mx-auto"
                    >
                      <span className="text-base">Find Jobs Now</span>
                      <span className="text-xl">→</span>
                    </a>
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