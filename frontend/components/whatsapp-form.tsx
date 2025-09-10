"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { Phone, Mail, User, MapPin, Calendar, MessageSquare, Send, Loader2 } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  location: string
  service: string
  message: string
  preferredContact: string
}

const services = [
  { value: "jobs", label: "Jobs Abroad" },
  { value: "tours", label: "Tours & Travel" },
  { value: "transport", label: "Transport Services" },
  { value: "visa", label: "Visa Application" },
  { value: "hotels", label: "Hotel Booking" },
  { value: "safaris", label: "Safari Tours" },
  { value: "labour", label: "Labour Recruitment" },
  { value: "other", label: "Other Services" }
]

const contactMethods = [
  { value: "whatsapp", label: "WhatsApp" },
  { value: "phone", label: "Phone Call" },
  { value: "email", label: "Email" }
]

export function WhatsAppForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    location: '',
    service: '',
    message: '',
    preferredContact: 'whatsapp'
  })
  const [submitting, setSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const formatWhatsAppMessage = (data: FormData): string => {
    const message = `*New Client Inquiry - AQR Web*

*Client Information:*
👤 *Name:* ${data.name}
📧 *Email:* ${data.email}
📱 *Phone:* ${data.phone}
📍 *Location:* ${data.location}

*Service Requested:*
🔧 *Service:* ${services.find(s => s.value === data.service)?.label || data.service}
💬 *Preferred Contact:* ${contactMethods.find(c => c.value === data.preferredContact)?.label}

*Message:*
${data.message}

---
*Sent from AQR Website*
*Time:* ${new Date().toLocaleString('en-US', { 
  timeZone: 'Africa/Kampala',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}`

    return encodeURIComponent(message)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation
    if (!formData.name || !formData.phone || !formData.service) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields (Name, Phone, and Service).",
        variant: "destructive"
      })
      return
    }

    setSubmitting(true)

    try {
      // WhatsApp numbers (you can add multiple numbers)
      const whatsappNumbers = [
        '+256700341229',
        '+256745174879'
      ]

      // Create WhatsApp message
      const message = formatWhatsAppMessage(formData)
      
      // Open WhatsApp with the message
      const whatsappUrl = `https://wa.me/${whatsappNumbers[0]}?text=${message}`
      
      // Open in new tab
      window.open(whatsappUrl, '_blank')

      // Show success message
      toast({
        title: "Message Prepared!",
        description: "WhatsApp is opening with your inquiry. Please send the message to complete your request.",
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        service: '',
        message: '',
        preferredContact: 'whatsapp'
      })

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to prepare WhatsApp message. Please try again.",
        variant: "destructive"
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-2xl border-2 border-blue-200">
      <CardHeader className="text-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-t-lg">
        <CardTitle className="text-2xl font-bold text-blue-800 flex items-center justify-center gap-2">
          <MessageSquare className="w-6 h-6" />
          Contact Us via WhatsApp
        </CardTitle>
        <CardDescription className="text-blue-600">
          Fill out the form below and we'll send your inquiry directly to our WhatsApp
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <User className="w-4 h-4 text-blue-600" />
                Full Name *
              </label>
              <Input
                type="text"
                placeholder="Enter your full name*"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="border-blue-200 focus:border-blue-500"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-600" />
                Phone Number *
              </label>
              <Input
                type="tel"
                placeholder="+256 700 341 229*"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="border-blue-200 focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" />
                Email Address
              </label>
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="border-blue-200 focus:border-blue-500"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                Location
              </label>
              <Input
                type="text"
                placeholder="City, Country"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="border-blue-200 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Service Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-600" />
              Service Required *
            </label>
            <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
              <SelectTrigger className="border-blue-200 focus:border-blue-500">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service.value} value={service.value}>
                    {service.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Preferred Contact Method */}
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-blue-600" />
              Preferred Contact Method
            </label>
            <Select value={formData.preferredContact} onValueChange={(value) => handleInputChange('preferredContact', value)}>
              <SelectTrigger className="border-blue-200 focus:border-blue-500">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {contactMethods.map((method) => (
                  <SelectItem key={method.value} value={method.value}>
                    {method.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-blue-600" />
              Your Message
            </label>
            <Textarea
              placeholder="Tell us about your requirements, questions, or any specific details..."
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              rows={4}
              className="border-blue-200 focus:border-blue-500 resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-lg transition-all duration-300 hover:scale-105"
            disabled={submitting}
          >
            {submitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Preparing WhatsApp...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Send via WhatsApp
              </>
            )}
          </Button>

          {/* Info */}
          <div className="text-center text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
            <p>📱 Your inquiry will be sent to our WhatsApp business number</p>
            <p>⏰ We typically respond within 1-2 hours during business hours</p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
} 