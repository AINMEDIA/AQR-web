"use client"

import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { Breadcrumb } from "@/components/seo/breadcrumb"
import { ServiceSchema } from "@/components/seo/structured-data"
import { Icon } from "@/components/ui/icon"
import { ParallaxBackground, ParallaxSection, ParallaxText } from "@/components/ParallaxSection"
import { Globe, Shield, FileText, GraduationCap, Plane, Phone } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"


export default function FindLabourPage() {
  // Slideshow state and data
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slideshowImages = [
    {
      src: "/images/Ty.jpeg",
      alt: "International Labour Recruitment Services"
    },
    {
      src: "/images/df.jpeg", 
      alt: "Skilled Workers Abroad"
    },
    {
      src: "/images/af.jpeg",
      alt: "Global Employment Opportunities"
    },
    {
      src: "/images/cd.jpeg",
      alt: "Professional Recruitment Services"
    }
  ]

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [slideshowImages.length])

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
        <ParallaxBackground speed={0.4} className="absolute inset-0 w-full h-full z-0">
          <img
            src="/images/Labour.jpeg"
            alt="Labour sourcing and recruitment services - Atlantic Quest & Reality"
            className="absolute inset-0 w-full h-full object-cover"
            data-aos="fade-in"
          />
        </ParallaxBackground>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <ParallaxText speed={0.15} className="relative z-20 text-center text-white px-4" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow">International Labour Recruitment</h1>
          <p className="text-lg md:text-xl font-medium drop-shadow">Connecting international employers with skilled East African workers for global opportunities.</p>
        </ParallaxText>
      </section>

      {/* Two-Card Layout Section */}
      <section className="relative py-16 bg-gradient-to-b from-blue-50 to-white overflow-hidden" data-aos="fade-up">
        {/* Parallax Background */}
        <ParallaxBackground speed={0.25} className="absolute inset-0 w-full h-full opacity-15">
          <img
            src="/images/Find labour.jpeg"
            alt="Find Labour background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </ParallaxBackground>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            
            {/* Left Card - Main Content */}
            <ParallaxSection speed={0.1} direction="left" className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 lg:p-12 border-2 border-blue-100 relative overflow-hidden">
              <div className="h-full flex flex-col relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-800 mb-4 md:mb-6 text-center">
                  Connecting Global Employers with Skilled East African Talent.
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-center">
                  At AQR, we specialize in connecting international employers with skilled, reliable East African workers. Our comprehensive recruitment services ensure employers find the right talent while workers receive fair treatment, competitive compensation, and ongoing support in their international assignments.
                </p>
              </div>

              {/* Slideshow Images at the bottom of the left card */}
              <div className="absolute bottom-0 left-0 right-0 h-96 md:h-[28rem] overflow-hidden rounded-b-2xl">
                {slideshowImages.map((image, index) => (
                  <Image
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    fill
                    className={`absolute inset-0 object-cover transition-all duration-1000 ease-in-out ${
                      index === currentSlide 
                        ? 'opacity-100 translate-y-0' 
                        : index === (currentSlide + 1) % slideshowImages.length
                        ? 'opacity-0 translate-y-full'
                        : 'opacity-0 -translate-y-full'
                    }`}
                    onError={(e) => {
                      // Fallback to a placeholder if image doesn't exist
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='200' viewBox='0 0 800 200'%3E%3Crect width='800' height='200' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial' font-size='14'%3E" + image.alt + "%3C/text%3E%3C/svg%3E"
                    }}
                  />
                ))}
              </div>
            </ParallaxSection>
            
            {/* Right Card - Work Opportunities */}
            <ParallaxSection speed={0.1} direction="right" className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 lg:p-12 border-2 border-blue-100">
              <div className="h-full flex flex-col justify-between">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Icon icon={Globe} size="lg" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800">International Work Opportunities</h2>
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
            </ParallaxSection>
            
          </div>
        </div>
      </section>


      <Footer />
    </PageTransition>
  )
}
