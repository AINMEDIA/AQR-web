"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, User, Building, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { FadeIn } from "@/components/FadeIn"

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our support team",
    contact: "+256700341229 / +256745174879",
    hours: "Mon-Fri 9AM-6PM EAT",
    color: "bg-blue-500",
    image: "/images/phone-support.png",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us a detailed message",
    contact: "atlantisquest4@outlook.com / atlantisquest4@gmail.com",
    hours: "Response within 24 hours",
    color: "bg-green-500",
    image: "/images/email-support.png",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with us in real-time",
    contact: "Available on website",
    hours: "Mon-Fri 9AM-6PM EAT",
    color: "bg-purple-500",
    image: "/images/live-chat.png",
  },
  {
    icon: MapPin,
    title: "Office Visit",
    description: "Visit our headquarters",
    contact: "Kampala, Uganda",
    hours: "By appointment only",
    color: "bg-orange-500",
    image: "/images/office.png",
  },
]

const inquiryTypes = [
  "General Inquiry",
  "Job Application Support",
  "Travel Services",
  "Technical Support",
  "Partnership Opportunities",
  "Billing Questions",
  "Other",
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "",
    subject: "",
    message: "",
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
      title: "Message Sent Successfully",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    })
  }

  if (isSubmitted) {
    return (
      <PageTransition>
        <div className="min-h-screen">
          <div className="pt-24 pb-12">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl mx-auto text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="w-10 h-10 text-white" />
                </motion.div>
                <h1 className="text-3xl font-bold text-green-800 mb-4">Message Sent Successfully!</h1>
                <p className="text-green-700 mb-6">
                  Thank you for contacting AQR Atlantis Quest & Reality U Ltd. We've received your message and will get back to you within 24 hours.
                </p>
                <div className="bg-white rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-center gap-2 text-green-600 font-semibold">
                    <Clock className="w-5 h-5" />
                    Expected Response Time: Within 24 hours
                  </div>
                </div>
                <Button onClick={() => setIsSubmitted(false)} className="mr-4">
                  Send Another Message
                </Button>
                <Button variant="outline" asChild>
                  <a href="/">Return to Home</a>
                </Button>
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
              backgroundImage: "url('/images/contact-hero.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
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
              Contact Us
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg md:text-2xl text-white/90 mb-6 max-w-2xl mx-auto">
              Get in touch with our team for support, inquiries, or partnership opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="min-h-screen">
        {/* Header Section */}
        <section className="pb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Have questions or need assistance? We're here to help you succeed.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">How Can We Help You?</h2>
              <p className="text-muted-foreground text-lg">Choose the best way to reach us based on your needs</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <img src={method.image} alt={method.title} className="w-16 h-16 object-cover rounded-full mx-auto mb-4" />
                      <div
                        className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <method.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                      <p className="text-muted-foreground mb-3">{method.description}</p>
                      <div className="space-y-1">
                        <div className="font-medium text-blue-600">{method.contact}</div>
                        <div className="text-sm text-muted-foreground">{method.hours}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="lg:col-span-2"
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
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
                            <label className="text-sm font-medium mb-2 block">Company (Optional)</label>
                            <div className="relative">
                              <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                              <Input
                                placeholder="Enter your company name"
                                value={formData.company}
                                onChange={(e) => handleInputChange("company", e.target.value)}
                                className="pl-10"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">Phone Number (Optional)</label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                              <Input
                                type="tel"
                                placeholder="Enter your phone number"
                                value={formData.phone}
                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                className="pl-10"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block">Inquiry Type *</label>
                            <Select
                              value={formData.inquiryType}
                              onValueChange={(value) => handleInputChange("inquiryType", value)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select inquiry type" />
                              </SelectTrigger>
                              <SelectContent>
                                {inquiryTypes.map((type) => (
                                  <SelectItem key={type} value={type}>
                                    {type}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">Subject *</label>
                            <Input
                              required
                              placeholder="Enter message subject"
                              value={formData.subject}
                              onChange={(e) => handleInputChange("subject", e.target.value)}
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-sm font-medium mb-2 block">Message *</label>
                          <Textarea
                            required
                            placeholder="Please provide details about your inquiry..."
                            value={formData.message}
                            onChange={(e) => handleInputChange("message", e.target.value)}
                            rows={5}
                          />
                        </div>

                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? (
                              <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                Sending Message...
                              </>
                            ) : (
                              <>
                                <Send className="w-5 h-5 mr-2" />
                                Send Message
                              </>
                            )}
                          </Button>
                        </motion.div>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Contact Info Sidebar */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-6"
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                        <div>
                          <div className="font-medium">Address</div>
                          <div className="text-sm text-muted-foreground">
                            123 Business Avenue
                            <br />
                            Suite 100
                            <br />
                            New York, NY 10001
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-blue-600 mt-1" />
                        <div>
                          <div className="font-medium">Phone</div>
                          <div className="text-sm text-muted-foreground">+1 (555) 123-4567</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-blue-600 mt-1" />
                        <div>
                          <div className="font-medium">Email</div>
                          <div className="text-sm text-muted-foreground">support@aqr-web.com</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-blue-600 mt-1" />
                        <div>
                          <div className="font-medium">Business Hours</div>
                          <div className="text-sm text-muted-foreground">
                            Monday - Friday
                            <br />
                            9:00 AM - 6:00 PM EST
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200 bg-blue-50">
                    <CardHeader>
                      <CardTitle className="text-blue-800">Quick Response</CardTitle>
                    </CardHeader>
                    <CardContent className="text-blue-700">
                      <p className="text-sm">
                        Need immediate assistance? Our support team typically responds to inquiries within 2-4 hours
                        during business hours.
                      </p>
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
