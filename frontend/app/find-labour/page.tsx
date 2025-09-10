"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"

import { useToast } from "@/hooks/use-toast"


import {
  Search,
  Globe,
  Shield,
  Clock,
  Award,
  Wrench,
  HardHat,
  Stethoscope,
  Car,
  Home,
  ChefHat,
  Laptop,
  Factory,
  Users,
  MapPin,
  DollarSign,
  Calendar,
  Briefcase,
  Heart,
  Target,
  Zap,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { FadeIn } from "@/components/FadeIn"
import { ProminentCTA } from "@/components/prominent-cta"
import { WhatsAppForm } from "@/components/whatsapp-form"

const workerCategories = [
  {
    icon: HardHat,
    title: "Construction Workers",
    description: "Skilled construction professionals for building projects",
    skills: ["Masonry", "Carpentry", "Electrical", "Plumbing", "Welding"],
    available: "500+",
    color: "bg-blue-500",
    image: "/images/construction.png",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Workers",
    description: "Qualified medical and healthcare professionals",
    skills: ["Nursing", "Caregiving", "Medical Assistance", "Therapy"],
    available: "200+",
    color: "bg-blue-500",
    image: "/images/healthcare.png",
  },
  {
    icon: ChefHat,
    title: "Hospitality Staff",
    description: "Experienced hospitality and service professionals",
    skills: ["Cooking", "Hotel Service", "Restaurant Management", "Cleaning"],
    available: "300+",
    color: "bg-blue-500",
    image: "/images/hospitality.png",
  },
  {
    icon: Factory,
    title: "Manufacturing Workers",
    description: "Skilled factory and production line workers",
    skills: ["Assembly", "Quality Control", "Machine Operation", "Packaging"],
    available: "400+",
    color: "bg-blue-500",
    image: "/images/manufacturing.png",
  },
  {
    icon: Car,
    title: "Drivers & Logistics",
    description: "Professional drivers and logistics personnel",
    skills: ["Heavy Vehicle Driving", "Delivery", "Warehouse", "Logistics"],
    available: "250+",
    color: "bg-blue-500",
    image: "/images/drivers.png",
  },
  {
    icon: Home,
    title: "Domestic Workers",
    description: "Reliable domestic and household service providers",
    skills: ["Housekeeping", "Childcare", "Elderly Care", "Gardening"],
    available: "350+",
    color: "bg-blue-500",
    image: "/images/domestic.png",
  },
  {
    icon: Laptop,
    title: "Office Workers",
    description: "Skilled administrative and office professionals",
    skills: ["Data Entry", "Customer Service", "Administration", "Reception"],
    available: "180+",
    color: "bg-blue-500",
    image: "/images/office-worker.png",
  },
  {
    icon: Wrench,
    title: "Technical Workers",
    description: "Specialized technical and maintenance professionals",
    skills: ["HVAC", "Electronics", "Maintenance", "Installation"],
    available: "220+",
    color: "bg-blue-500",
    image: "/images/technical.png",
  },
]

const countries = [
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Oman",
  "Bahrain",
  "United Kingdom",
  "Germany",
  "Netherlands",
  "Canada",
  "Australia",
  "New Zealand",
]

const benefits = [
  {
    icon: Shield,
    title: "Pre-Screened Workers",
    description: "All workers undergo thorough background checks and skill assessments",
  },
  {
    icon: Award,
    title: "Skills Training",
    description: "Workers receive specialized training before deployment",
  },
  {
    icon: Globe,
    title: "Global Compliance",
    description: "Full compliance with international labor laws and regulations",
  },
  {
    icon: Clock,
    title: "Quick Deployment",
    description: "Fast processing and deployment within 30-60 days",
  },
]

export default function FindLabourPage() {
  const [showRequestForm, setShowRequestForm] = useState(false)

  // Worker request form state
  const [workerRequestForm, setWorkerRequestForm] = useState({
    company_name: '',
    contact_person: '',
    email: '',
    phone: '',
    country: '',
    worker_category: '',
    number_of_workers: 1,
    start_date: '',
    job_description: '',
    additional_info: '',
    request_purpose: '',
  })


  const { toast } = useToast()

  const handleWorkerRequestSubmit = async () => {
    // Simulate worker request submission for static site
    setTimeout(() => {
      toast({
        title: "Success",
        description: "Worker request submitted successfully! We will contact you soon.",
      })
      setShowRequestForm(false)
      setWorkerRequestForm({
        company_name: '',
        contact_person: '',
        email: '',
        phone: '',
        country: '',
        worker_category: '',
        number_of_workers: 1,
        start_date: '',
        job_description: '',
        additional_info: '',
        request_purpose: '',
      })
    }, 1000)
  }



  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] w-full flex items-center justify-center overflow-hidden rounded-br-[120px] md:rounded-br-[240px]">
        <img
          src="/images/Labour.jpeg"
          alt="Labour Sourcing Hero"
          className="absolute inset-0 w-full h-full object-cover z-0"
          data-aos="fade-in"
        />
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center text-white px-4" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow">Labour Sourcing & Externalisation</h1>
          <p className="text-lg md:text-xl font-medium drop-shadow">Connecting skilled Ugandan workers with global opportunities and employers.</p>
        </div>
      </section>

      {/* Main Content */}
      {/* Header Section */}
      <section className="pb-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 hover:text-blue-200 hover:scale-105 cursor-default">Find Skilled & Unskilled Workers</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto transition-all duration-700">
              AQR Atlantis Quest & Reality U Ltd connects employers with pre-screened, skilled and unskilled workers from Uganda, Kenya, and the East African region for overseas opportunities. We ensure ethical recruitment, regional expertise, and a commitment to quality and compliance.
            </p>

            {/* Custom Request Button */}
            <div className="w-full mx-auto">
              <Button size="lg" className="h-12 px-8 transition-all duration-300 hover:scale-105 hover:shadow-xl" onClick={() => setShowRequestForm(true)}>
                Custom Request
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Worker Categories Grid */}
      <section className="py-16 bg-white animate-fade-in-delay">
        <div className="w-full mx-auto px-2 animate-scale-in">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4 transition-all duration-700 hover:text-blue-700 hover:scale-105 cursor-default">Available Worker Categories</h2>
            <p className="text-xl text-muted-foreground transition-all duration-700">Browse our comprehensive range of skilled professionals</p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {workerCategories.map((category, index) => (
              <div 
                key={category.title}
                className="relative h-40 md:h-32 md:min-h-[8rem] rounded-lg md:rounded-xl shadow-lg transition-all duration-300 group cursor-pointer overflow-hidden
                   hover:scale-105 hover:shadow-xl hover:border-2 hover:border-blue-400
                   bg-gradient-to-br from-blue-50 to-blue-100"
                data-aos="zoom-in"
                data-aos-delay={index * 50}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-blue-400/5 to-transparent group-hover:from-blue-900/20 group-hover:via-blue-400/10 group-hover:to-transparent transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-60 transition-all duration-300 pointer-events-none">
                  <category.icon className="w-6 h-6 md:w-8 md:h-8 text-blue-600/80 group-hover:text-blue-500" />
                </div>
                <div className="relative z-10 p-2 md:p-3 flex flex-col justify-end h-full">
                  <h3 className="text-xs md:text-sm font-bold text-blue-800 mb-1 drop-shadow-sm transition-all duration-300
                    group-hover:text-blue-700 group-hover:scale-105 leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-blue-700 text-[10px] md:text-xs transition-all duration-300 opacity-90 group-hover:opacity-100 mb-1 line-clamp-2 leading-tight">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-semibold text-[10px] md:text-xs">{category.available}</span>
                    <Badge variant="outline" className="text-[8px] md:text-xs px-1 py-0 transition-all duration-300 group-hover:scale-105">
                      {category.skills[0]}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white" data-aos="fade-up">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="text-center mb-8 animate-slide-up">
            <h2 className="text-3xl font-bold mb-4 transition-all duration-700 hover:text-blue-700 hover:scale-105 cursor-default">Why Choose AQR Workers?</h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="hover:scale-105 animate-fade-in-delay group cursor-pointer"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <Card className="text-center h-full rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-4 hover:border-blue-400 group cursor-pointer">
                  <CardContent className="p-3 md:p-6">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4 transition-all duration-500 group-hover:bg-blue-200 group-hover:scale-110">
                      <benefit.icon className="w-4 h-4 md:w-6 md:h-6 text-blue-600" />
                    </div>
                    <h3 className="text-sm md:text-base font-semibold mb-1 md:mb-2 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">{benefit.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground transition-all duration-700 opacity-90 group-hover:opacity-100">{benefit.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Worker Request Form Modal */}
      {showRequestForm && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowRequestForm(false)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="rounded-2xl shadow-xl transition-transform duration-300 hover:shadow-2xl hover:scale-105 hover:border-4 hover:border-blue-400 group cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center justify-between transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">
                  Custom Worker Request Form
                  <Button variant="ghost" size="sm" onClick={() => setShowRequestForm(false)} className="transition-all duration-300 hover:scale-105">
                    ×
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Company Name *</label>
                    <Input
                      value={workerRequestForm.company_name}
                      onChange={(e) => setWorkerRequestForm({...workerRequestForm, company_name: e.target.value})}
                      placeholder="Enter your company name"
                      className="transition-all duration-300 hover:border-blue-400 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Contact Person *</label>
                    <Input
                      value={workerRequestForm.contact_person}
                      onChange={(e) => setWorkerRequestForm({...workerRequestForm, contact_person: e.target.value})}
                      placeholder="Enter contact person name"
                      className="transition-all duration-300 hover:border-blue-400 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email *</label>
                    <Input
                      type="email"
                      value={workerRequestForm.email}
                      onChange={(e) => setWorkerRequestForm({...workerRequestForm, email: e.target.value})}
                      placeholder="Enter email address"
                      className="transition-all duration-300 hover:border-blue-400 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone *</label>
                    <Input
                      type="tel"
                      value={workerRequestForm.phone}
                      onChange={(e) => setWorkerRequestForm({...workerRequestForm, phone: e.target.value})}
                      placeholder="Enter phone number"
                      className="transition-all duration-300 hover:border-blue-400 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Country *</label>
                    <Select
                      value={workerRequestForm.country}
                      onValueChange={(value) => setWorkerRequestForm({...workerRequestForm, country: value})}
                    >
                      <SelectTrigger className="transition-all duration-300 hover:border-blue-400 focus:border-blue-500">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Worker Category *</label>
                    <Select
                      value={workerRequestForm.worker_category}
                      onValueChange={(value) => setWorkerRequestForm({...workerRequestForm, worker_category: value})}
                    >
                      <SelectTrigger className="transition-all duration-300 hover:border-blue-400 focus:border-blue-500">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {workerCategories.map((category) => (
                          <SelectItem key={category.title} value={category.title}>
                            {category.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Request Purpose *</label>
                    <Select
                      value={workerRequestForm.request_purpose}
                      onValueChange={(value) => setWorkerRequestForm({...workerRequestForm, request_purpose: value})}
                    >
                      <SelectTrigger className="transition-all duration-300 hover:border-blue-400 focus:border-blue-500">
                        <SelectValue placeholder="Select purpose" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Skilled Worker">Skilled Worker</SelectItem>
                        <SelectItem value="Unskilled Worker">Unskilled Worker</SelectItem>
                        <SelectItem value="Domestic Worker">Domestic Worker</SelectItem>
                        <SelectItem value="Healthcare">Healthcare</SelectItem>
                        <SelectItem value="Driver">Driver</SelectItem>
                        <SelectItem value="Office/Admin">Office/Admin</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <span className="text-xs text-gray-500">(Specify the main purpose or type of worker needed.)</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Number of Workers *</label>
                    <Input
                      type="number"
                      min="1"
                      value={workerRequestForm.number_of_workers}
                      onChange={(e) => setWorkerRequestForm({...workerRequestForm, number_of_workers: parseInt(e.target.value)})}
                      placeholder="How many workers needed?"
                      className="transition-all duration-300 hover:border-blue-400 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Start Date *</label>
                    <Input
                      type="date"
                      value={workerRequestForm.start_date}
                      onChange={(e) => setWorkerRequestForm({...workerRequestForm, start_date: e.target.value})}
                      className="transition-all duration-300 hover:border-blue-400 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Job Description & Requirements *</label>
                  <Textarea
                    value={workerRequestForm.job_description}
                    onChange={(e) => setWorkerRequestForm({...workerRequestForm, job_description: e.target.value})}
                    placeholder="Please describe the job role, requirements, working conditions, and any specific skills needed..."
                    rows={4}
                    className="transition-all duration-300 hover:border-blue-400 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Additional Information</label>
                  <Textarea
                    value={workerRequestForm.additional_info}
                    onChange={(e) => setWorkerRequestForm({...workerRequestForm, additional_info: e.target.value})}
                    placeholder="Any additional information about accommodation, salary, benefits, etc."
                    rows={3}
                    className="transition-all duration-300 hover:border-blue-400 focus:border-blue-500"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button className="flex-1 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800" onClick={handleWorkerRequestSubmit}>
                    <Target className="w-4 h-4 group-hover:scale-110 group-hover:animate-bounce transition-all duration-300" />
                    Submit Request
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </Button>
                  <Button variant="outline" onClick={() => setShowRequestForm(false)} className="transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* WhatsApp Form Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100 animate-fade-in-delay">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4 text-blue-800 transition-all duration-700 hover:text-blue-700 hover:scale-105 cursor-default">
              Quick WhatsApp Inquiry for Workers
            </h2>
            <p className="text-xl text-blue-600 transition-all duration-700">
              Get instant responses about worker availability and recruitment via WhatsApp
            </p>
          </div>
          
          <WhatsAppForm />
        </div>
      </section>

      {/* Prominent CTA Section */}
      <ProminentCTA 
        title="Ready to Hire Quality Workers?"
        subtitle="Contact us for personalized workforce solutions and immediate assistance"
        ctaLink="/find-labour/request"
        ctaText="Request Workers Now"
      />

      <Footer />
    </PageTransition>
  )
}
