"use client"

import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { Breadcrumb } from "@/components/seo/breadcrumb"
import { ServiceSchema } from "@/components/seo/structured-data"
import { Icon } from "@/components/ui/icon"
import { Globe, Shield, FileText, GraduationCap, Plane, Phone } from "lucide-react"


export default function FindLabourPage() {



  return (
    <PageTransition>
      <ServiceSchema 
        name="International Labour Recruitment Services"
        description="Professional international recruitment services connecting employers worldwide with skilled East African workers. Specialized in domestic workers, construction, hospitality, and healthcare recruitment for UAE, Qatar, Saudi Arabia, and global markets."
        serviceType="International Recruitment Services"
        areaServed={["United Arab Emirates", "Qatar", "Saudi Arabia", "Kuwait", "Oman", "Bahrain", "Asia", "Middle East"]}
        hasOfferCatalog={{
          name: "International Recruitment Services",
          itemListElement: [
            { name: "Domestic Workers", description: "Reliable household staff for international employers" },
            { name: "Construction Workers", description: "Skilled construction professionals for international projects" },
            { name: "Hospitality Staff", description: "Trained hospitality workers for hotels and restaurants" },
            { name: "Healthcare Workers", description: "Qualified healthcare professionals for international facilities" },
            { name: "Skilled Trades", description: "Certified tradespeople for various international industries" }
          ]
        }}
      />
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb items={[
          { name: "Find Labour", url: "/find-labour" }
        ]} />
      </div>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] w-full flex items-center justify-center overflow-hidden rounded-br-[120px] md:rounded-br-[240px]">
        <img
          src="/images/Labour.jpeg"
          alt="Labour sourcing and recruitment services - Atlantic Quest & Reality"
          className="absolute inset-0 w-full h-full object-cover z-0"
          data-aos="fade-in"
        />
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center text-white px-4" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow">International Labour Recruitment</h1>
          <p className="text-lg md:text-xl font-medium drop-shadow">Connecting international employers with skilled East African workers for global opportunities.</p>
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
                  <Icon icon={Globe} size="xl" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-6 text-center">
                  Connecting Global Employers with Skilled East African Talent.
                </h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
                  At AQR, we specialize in connecting international employers with skilled, reliable East African workers. Our comprehensive recruitment services ensure employers find the right talent while workers receive fair treatment, competitive compensation, and ongoing support in their international assignments.
                </p>
              </div>
            </div>
            
            {/* Right Card - Work Opportunities */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-blue-100">
              <div className="h-full flex flex-col justify-between">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Icon icon={Globe} size="lg" />
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-800">International Work Opportunities</h2>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Icon icon={Shield} size="sm" variant="minimal" />
                    <div>
                      <h3 className="text-lg font-bold text-blue-800 mb-1">International Employer Partnerships</h3>
                      <p className="text-gray-700 text-sm">We work with verified employers from UAE, Qatar, Saudi Arabia, and other international markets, ensuring secure jobs with fair treatment and competitive compensation.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon icon={FileText} size="sm" variant="minimal" />
                    <div>
                      <h3 className="text-lg font-bold text-blue-800 mb-1">Complete International Support</h3>
                      <p className="text-gray-700 text-sm">From application to international placement, we provide comprehensive support including visa processing, pre-departure training, and ongoing assistance while working abroad.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon icon={Shield} size="sm" variant="minimal" />
                    <div>
                      <h3 className="text-lg font-bold text-blue-800 mb-1">Transparent Process</h3>
                      <p className="text-gray-700 text-sm">Clear costs, no hidden fees, and a commitment to honesty at every stage.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon icon={GraduationCap} size="sm" variant="minimal" />
                    <div>
                      <h3 className="text-lg font-bold text-blue-800 mb-1">International Pre-Departure Training</h3>
                      <p className="text-gray-700 text-sm">Comprehensive training including cultural orientation, language basics, job-specific skills, and expectations for working in international markets like UAE, Qatar, and Saudi Arabia.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon icon={Plane} size="sm" variant="minimal" />
                    <div>
                      <h3 className="text-lg font-bold text-blue-800 mb-1">International Visa & Documentation</h3>
                      <p className="text-gray-700 text-sm">Complete visa processing support for international destinations including UAE, Qatar, Saudi Arabia, and other countries. We handle all documentation requirements efficiently.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon icon={Phone} size="sm" variant="minimal" />
                    <div>
                      <h3 className="text-lg font-bold text-blue-800 mb-1">24/7 International Support</h3>
                      <p className="text-gray-700 text-sm">Round-the-clock support for workers in international assignments. Our team maintains regular contact and provides assistance with any challenges while working abroad.</p>
                    </div>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="text-center">
                  <a 
                    href="/find-labour/apply"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105 transform mx-auto"
                  >
                    <span className="text-base">Hire International Workers</span>
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
