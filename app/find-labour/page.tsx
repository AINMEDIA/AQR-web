"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
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
} from "lucide-react"
import Link from "next/link"
import { FadeIn } from "@/components/FadeIn"

const workerCategories = [
  {
    icon: HardHat,
    title: "Construction Workers",
    description: "Skilled construction professionals for building projects",
    skills: ["Masonry", "Carpentry", "Electrical", "Plumbing", "Welding"],
    available: "500+",
    color: "bg-orange-500",
    image: "/images/construction.png",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Workers",
    description: "Qualified medical and healthcare professionals",
    skills: ["Nursing", "Caregiving", "Medical Assistance", "Therapy"],
    available: "200+",
    color: "bg-green-500",
    image: "/images/healthcare.png",
  },
  {
    icon: ChefHat,
    title: "Hospitality Staff",
    description: "Experienced hospitality and service professionals",
    skills: ["Cooking", "Hotel Service", "Restaurant Management", "Cleaning"],
    available: "300+",
    color: "bg-purple-500",
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
    color: "bg-red-500",
    image: "/images/drivers.png",
  },
  {
    icon: Home,
    title: "Domestic Workers",
    description: "Reliable domestic and household service providers",
    skills: ["Housekeeping", "Childcare", "Elderly Care", "Gardening"],
    available: "350+",
    color: "bg-pink-500",
    image: "/images/domestic.png",
  },
  {
    icon: Laptop,
    title: "Office Workers",
    description: "Skilled administrative and office professionals",
    skills: ["Data Entry", "Customer Service", "Administration", "Reception"],
    available: "180+",
    color: "bg-indigo-500",
    image: "/images/office-worker.png",
  },
  {
    icon: Wrench,
    title: "Technical Workers",
    description: "Specialized technical and maintenance professionals",
    skills: ["HVAC", "Electronics", "Maintenance", "Installation"],
    available: "220+",
    color: "bg-teal-500",
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
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [showRequestForm, setShowRequestForm] = useState(false)

  const filteredCategories = workerCategories.filter((category) => {
    const matchesSearch =
      category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesSearch
  })

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="w-full min-h-[800px] flex items-center justify-center relative rounded-b-[200px] md:rounded-b-[300px] lg:rounded-b-[400px]"
            style={{
              backgroundImage: "url('/images/find-labour-hero.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>
        {/* Logo halfway down, offset left */}
        <div className="absolute z-20 left-[4cm] top-1/2 -translate-y-1/2">
          <img src="/android-chrome-192x192.png" alt="AQR-Web Logo" className="h-40 w-40" />
        </div>
        {/* Centered Content */}
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
            className="relative z-10"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-2 text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]" style={{fontStyle: 'italic'}}>
              {/* Replace with your Find Labour title */}
              Find Labour
            </h1>
          </motion.div>
        </div>
      </section>

        {/* Header Section */}
      <section className="pb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Skilled & Unskilled Workers</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              AQR Atlantis Quest & Reality U Ltd connects employers with pre-screened, skilled and unskilled workers from Uganda, Kenya, and the East African region for overseas opportunities. We ensure ethical recruitment, regional expertise, and a commitment to quality and compliance.
              </p>

              {/* Search Bar */}
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        placeholder="Search by skill, job type, or category"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 h-12 text-gray-900"
                      />
                    </div>
                    <div className="flex-1">
                      <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                        <SelectTrigger className="h-12 text-gray-900">
                          <SelectValue placeholder="Select destination country" />
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
                    <Button size="lg" className="h-12 px-8" onClick={() => setShowRequestForm(true)}>
                      Request Workers
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold mb-4">Why Choose AQR Workers?</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="text-center h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <benefit.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Worker Categories */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Available Worker Categories</h2>
              <p className="text-xl text-muted-foreground">
                Choose from our diverse pool of skilled and unskilled workers
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                    <img src={category.image} alt={category.title} className="w-full h-32 object-cover rounded-t-lg mb-4" />
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center`}>
                          <category.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{category.title}</h3>
                          <Badge variant="secondary" className="text-xs">
                            {category.available} Available
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                      <div className="space-y-2">
                        <div className="text-sm font-medium">Key Skills:</div>
                        <div className="flex flex-wrap gap-1">
                          {category.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full mt-4" onClick={() => setShowRequestForm(true)}>
                        Request Workers
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Request Form Modal/Section */}
        {showRequestForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowRequestForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Worker Request Form
                    <Button variant="ghost" size="sm" onClick={() => setShowRequestForm(false)}>
                      ×
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Company Name *</label>
                      <Input placeholder="Enter your company name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Contact Person *</label>
                      <Input placeholder="Enter contact person name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email *</label>
                      <Input type="email" placeholder="Enter email address" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Phone *</label>
                      <Input type="tel" placeholder="Enter phone number" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Country *</label>
                      <Select>
                        <SelectTrigger>
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
                      <Select>
                        <SelectTrigger>
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Number of Workers *</label>
                      <Input type="number" placeholder="How many workers needed?" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Start Date *</label>
                      <Input type="date" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Job Description & Requirements *</label>
                    <Textarea
                      placeholder="Please describe the job role, requirements, working conditions, and any specific skills needed..."
                      rows={4}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Additional Information</label>
                    <Textarea
                      placeholder="Any additional information about accommodation, salary, benefits, etc."
                      rows={3}
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button className="flex-1">Submit Request</Button>
                    <Button variant="outline" onClick={() => setShowRequestForm(false)}>
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Hire Quality Workers?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied employers who trust AQR for their workforce needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                  onClick={() => setShowRequestForm(true)}
                >
                  Request Workers Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
    </PageTransition>
  )
}
