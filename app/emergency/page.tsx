"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { AlertTriangle, Phone, MapPin, Clock, Shield, CheckCircle, User, Mail } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { FadeIn } from "@/components/FadeIn"

const emergencyTypes = [
  { value: "medical", label: "Medical Emergency", image: "/images/emergency-medical.png" },
  { value: "accident", label: "Accident", image: "/images/emergency-accident.png" },
  { value: "disaster", label: "Natural Disaster", image: "/images/emergency-disaster.png" },
  { value: "security", label: "Security Threat", image: "/images/emergency-security.png" },
  { value: "fire", label: "Fire Emergency", image: "/images/emergency-fire.png" },
  { value: "other", label: "Other", image: "/images/emergency-other.png" },
]

const priorityLevels = [
  { value: "low", label: "Low Priority", color: "text-green-600" },
  { value: "medium", label: "Medium Priority", color: "text-yellow-600" },
  { value: "high", label: "High Priority", color: "text-orange-600" },
  { value: "critical", label: "Critical Emergency", color: "text-red-600" },
]

export default function EmergencyPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    emergencyType: "",
    priority: "",
    description: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    toast({
      title: "Emergency Alert Submitted",
      description: "Your emergency alert has been sent to the AQR Atlantis Quest & Reality U Ltd response team. Help is on the way. For urgent support, call +256700341229 or +256745174879.",
    })
  }

  if (isSubmitted) {
    return (
      <PageTransition>
        <div className="min-h-screen">
          <Navbar />
          <div className="pt-24 pb-12">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl mx-auto text-center"
              >
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>
                    <h1 className="text-3xl font-bold text-green-800 mb-4">Emergency Alert Submitted</h1>
                    <p className="text-green-700 mb-6">
                      Your emergency alert has been successfully submitted and sent to the AQR Atlantis Quest & Reality U Ltd response team. We will contact you shortly at the provided phone number. For urgent support, call +256700341229 or +256745174879.
                    </p>
                    <div className="bg-white rounded-lg p-4 mb-6">
                      <div className="flex items-center justify-center gap-2 text-green-600 font-semibold">
                        <Clock className="w-5 h-5" />
                        Expected Response Time: 5-10 minutes
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mr-4">
                        Submit Another Alert
                      </Button>
                      <Button asChild>
                        <a href="tel:911">Call Emergency Services</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
          <Footer />
        </div>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="w-full min-h-[800px] flex items-center justify-center relative rounded-br-[400px] md:rounded-br-[600px] lg:rounded-br-[800px]"
            style={{
              backgroundImage: "url('/images/emergency-hero.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center 30%',
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
              {/* Replace with your Emergency title */}
              Emergency
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="min-h-screen">
        <Navbar />

        {/* Header Section */}
        <section className="pb-12 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Emergency Alert System</h1>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                Submit an emergency alert and get immediate assistance from our response team
              </p>

              <Alert className="max-w-2xl mx-auto bg-red-100 border-red-300">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  <strong>For life-threatening emergencies, call 911 immediately.</strong>
                  This form is for non-critical emergencies and urgent assistance requests.
                </AlertDescription>
              </Alert>
            </motion.div>
          </div>
        </section>

        {/* Emergency Form */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Form */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="lg:col-span-2"
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">Emergency Alert Form</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Personal Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block">Full Name *</label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                              <Input
                                required
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={(e) => handleInputChange("name", e.target.value)}
                                className="pl-10"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">Email Address *</label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                              <Input
                                type="email"
                                required
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                className="pl-10"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block">Phone Number *</label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                              <Input
                                type="tel"
                                required
                                placeholder="Enter your phone number"
                                value={formData.phone}
                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                className="pl-10"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">Current Location *</label>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                              <Input
                                required
                                placeholder="Enter your current location"
                                value={formData.location}
                                onChange={(e) => handleInputChange("location", e.target.value)}
                                className="pl-10"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Emergency Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block">Emergency Type *</label>
                            <Select
                              value={formData.emergencyType}
                              onValueChange={(value) => handleInputChange("emergencyType", value)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select emergency type" />
                              </SelectTrigger>
                              <SelectContent>
                                {emergencyTypes.map((type) => (
                                  <SelectItem key={type.value} value={type.value}>
                                    <img src={type.image} alt={type.label} className="w-16 h-16 object-cover rounded-full mx-auto mb-4" />
                                    {type.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">Priority Level *</label>
                            <Select
                              value={formData.priority}
                              onValueChange={(value) => handleInputChange("priority", value)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select priority level" />
                              </SelectTrigger>
                              <SelectContent>
                                {priorityLevels.map((level) => (
                                  <SelectItem key={level.value} value={level.value}>
                                    <span className={level.color}>{level.label}</span>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <label className="text-sm font-medium mb-2 block">Emergency Description *</label>
                          <Textarea
                            required
                            placeholder="Please provide detailed information about the emergency situation..."
                            value={formData.description}
                            onChange={(e) => handleInputChange("description", e.target.value)}
                            rows={4}
                          />
                        </div>

                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            type="submit"
                            size="lg"
                            className="w-full bg-red-600 hover:bg-red-700"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                Submitting Emergency Alert...
                              </>
                            ) : (
                              <>
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Submit Emergency Alert
                              </>
                            )}
                          </Button>
                        </motion.div>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Sidebar Info */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-6"
                >
                  <Card className="border-blue-200 bg-blue-50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-800">
                        <Shield className="w-5 h-5" />
                        Emergency Response
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-blue-700">
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          24/7 Response Team
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          5-10 Minute Response Time
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Professional Assistance
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Coordination with Local Services
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-red-200 bg-red-50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-red-800">
                        <Phone className="w-5 h-5" />
                        Emergency Contacts
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-red-700 space-y-3">
                      <div>
                        <div className="font-semibold">Life-Threatening Emergency</div>
                        <a href="tel:911" className="text-red-600 hover:underline">
                          Call 911 Immediately
                        </a>
                      </div>
                      <div>
                        <div className="font-semibold">AQR Emergency Hotline</div>
                        <a href="tel:+1-800-AQR-HELP" className="text-red-600 hover:underline">
                          +1 (800) AQR-HELP
                        </a>
                      </div>
                      <div>
                        <div className="font-semibold">Non-Emergency Support</div>
                        <a href="tel:+1-555-123-4567" className="text-red-600 hover:underline">
                          +1 (555) 123-4567
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        What Happens Next?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ol className="space-y-2 text-sm">
                        <li className="flex gap-2">
                          <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                            1
                          </span>
                          Alert sent to response team
                        </li>
                        <li className="flex gap-2">
                          <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                            2
                          </span>
                          Team member contacts you
                        </li>
                        <li className="flex gap-2">
                          <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                            3
                          </span>
                          Assistance coordinated
                        </li>
                        <li className="flex gap-2">
                          <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                            4
                          </span>
                          Follow-up provided
                        </li>
                      </ol>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  )
}
