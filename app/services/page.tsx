"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { Briefcase, Users, Plane, Shield, ArrowRight, CheckCircle, Globe, Camera, Car, Hotel } from "lucide-react"
import Link from "next/link"
import { FadeIn } from "@/components/FadeIn"

const services = [
  {
    icon: Briefcase,
    title: "Job Placement Services",
    description: "Connect with top employers and find your perfect career match",
    features: ["Resume Review", "Interview Coaching", "Salary Negotiation", "Career Guidance"],
    color: "bg-blue-500",
    href: "/jobs",
    image: "/images/jobs-hero.png",
  },
  {
    icon: Users,
    title: "Labour Solutions",
    description: "Find skilled professionals for your business needs",
    features: ["Skilled Workers", "Background Checks", "Flexible Contracts", "Quality Assurance"],
    color: "bg-green-500",
    href: "/find-labour",
    image: "/images/find-labour-hero.png",
  },
  {
    icon: Plane,
    title: "Travel & Tours",
    description: "Professional travel planning and tour services",
    features: ["Custom Itineraries", "Group Tours", "Business Travel", "24/7 Support"],
    color: "bg-purple-500",
    href: "/services/tours-travel",
    image: "/images/travel.png",
  },
  {
    icon: Shield,
    title: "Emergency Services",
    description: "Round-the-clock emergency assistance and support",
    features: ["24/7 Hotline", "Rapid Response", "Medical Assistance", "Crisis Management"],
    color: "bg-red-500",
    href: "/emergency",
    image: "/images/emergency-hero.png",
  },
]

const travelServices = [
  {
    icon: Hotel,
    title: "Accommodation",
    description: "Premium hotels and lodging arrangements",
    image: "/images/hotel.png",
  },
  {
    icon: Car,
    title: "Transportation",
    description: "Reliable transport solutions for all needs",
    image: "/images/transportation.png",
  },
  {
    icon: Camera,
    title: "Guided Tours",
    description: "Expert-led tours and cultural experiences",
    image: "/images/tour-guide.png",
  },
  {
    icon: Globe,
    title: "International Travel",
    description: "Visa assistance and global travel planning",
    image: "/images/travel.png",
  },
]

const stats = [
  { number: "50,000+", label: "Jobs Placed" },
  { number: "10,000+", label: "Happy Travelers" },
  { number: "500+", label: "Partner Companies" },
  { number: "24/7", label: "Support Available" },
]

export default function ServicesPage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="w-full min-h-[800px] flex items-center justify-center relative rounded-br-[400px] md:rounded-br-[600px] lg:rounded-br-[800px]"
            style={{
              backgroundImage: "url('/images/services-hero.png')",
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
              {/* Replace with your Services title */}
              Our Services
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="min-h-screen">
        {/* Header Section */}
        <section className="pb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <FadeIn delay={0.2}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  AQR Atlantis Quest & Reality U Ltd provides comprehensive overseas job placement, travel, and support services for skilled and unskilled workers from Uganda, Kenya, and East Africa. Our mission is to empower lives through ethical recruitment, skills development, and global opportunities.
                </p>
              </motion.div>
            </FadeIn>
          </div>
        </section>

        {/* Detailed About/Services Info moved from homepage */}
        <section className="py-16 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">OUR MISSION</h2>
            <p className="text-gray-700 mb-6">To empower and transform lives by providing safe, ethical, and sustainable employment opportunities abroad. We are committed to ensuring fair treatment, skills development, and economic growth for workers while contributing to global workforce demands.</p>
            <h2 className="text-2xl font-bold mb-2 text-gray-900">OUR VISION</h2>
            <p className="text-gray-700 mb-6">To be a leading and most trusted labour export company, bridging the gap between skilled and unskilled workers and international employers, while upholding the highest standards of professionalism, worker protection, and economic empowerment.</p>
            <h2 className="text-2xl font-bold mb-2 text-gray-900">OUR VALUES</h2>
            <ul className="list-disc list-inside text-gray-700 grid grid-cols-2 gap-x-8 mb-6">
              <li>Compassion</li>
              <li>Respect</li>
              <li>Innovation</li>
              <li>Accountability</li>
              <li>Excellence</li>
            </ul>
            <h2 className="text-2xl font-bold mb-2 text-gray-900">OUR SERVICES</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li><b>Overseas Job Placement:</b> For both skilled and unskilled workers in industries such as construction, hospitality, domestic work, security, transportation, healthcare, and more.</li>
              <li><b>Visa Processing & Travel Support:</b> Assistance with documentation, visa applications, ticketing, and travel logistics.</li>
              <li><b>Pre-Departure Training & Orientation:</b> Equipping candidates with the knowledge and skills they need to adapt and thrive in their destination countries.</li>
              <li><b>International Agency Partnerships:</b> We work with accredited recruitment agencies in UAE, Saudi Arabia, Qatar, Oman, Europe, and Asia to ensure job authenticity and candidate safety.</li>
              <li><b>Post-Deployment Follow-Up:</b> Continued support for candidates after placement to ensure their welfare and address any arising challenges.</li>
            </ul>
            <h2 className="text-2xl font-bold mb-2 text-gray-900">WHY CHOOSE US?</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li><b>Trusted Partnerships:</b> We work only with vetted and licensed agencies abroad.</li>
              <li><b>Regional Expertise:</b> Deep understanding of the East African workforce and market.</li>
              <li><b>End-to-End Support:</b> From recruitment to deployment and post-arrival follow-up.</li>
              <li><b>Compliance & Ethics:</b> We adhere strictly to international labor laws and ethical recruitment standards.</li>
              <li><b>Candidate Care:</b> We treat each candidate with dignity, professionalism, and respect.</li>
            </ul>
            <h2 className="text-2xl font-bold mb-2 text-gray-900">TARGET MARKETS</h2>
            <p className="text-gray-700 mb-2">We serve job seekers and clients in:</p>
            <ul className="list-disc list-inside text-gray-700 grid grid-cols-2 gap-x-8 mb-6">
              <li>Uganda</li>
              <li>Tanzania</li>
              <li>South Sudan</li>
              <li>Philippine</li>
              <li>Rwanda</li>
              <li>India</li>
              <li>Kenya</li>
            </ul>
            <h2 className="text-2xl font-bold mb-2 text-gray-900">INDUSTRIES WE SERVE</h2>
            <ul className="list-disc list-inside text-gray-700 grid grid-cols-2 gap-x-8">
              <li>Construction & Engineering</li>
              <li>Domestic Work & Caregiving</li>
              <li>Hospitality & Hotel Services</li>
              <li>Transportation & Logistics</li>
              <li>Security Services</li>
              <li>Health & Nursing</li>
              <li>Manufacturing & Factory Work</li>
            </ul>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <FadeIn delay={0.2}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  From career development to travel planning, we provide end-to-end solutions
                </p>
              </motion.div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div
                          className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center flex-shrink-0`}
                        >
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                          <p className="text-muted-foreground mb-4">{service.description}</p>
                          <ul className="space-y-2 mb-6">
                            {service.features.map((feature) => (
                              <li key={feature} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <Button asChild>
                            <Link href={service.href}>
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Travel Services Detail */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <FadeIn delay={0.2}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <Badge variant="secondary" className="mb-4">
                  Featured Service
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Travel & Tours Excellence</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Experience seamless travel with our comprehensive tour and travel services
                </p>
              </motion.div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {travelServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="text-center h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <service.icon className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="font-semibold mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Button size="lg" asChild>
                <Link href="/services/tours-travel">
                  Explore Travel Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <FadeIn delay={0.2}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
                <p className="text-xl text-blue-100">Trusted by thousands of clients worldwide</p>
              </motion.div>
            </FadeIn>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <FadeIn delay={0.2}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let us help you achieve your goals with our professional services
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="text-lg px-8 py-6" asChild>
                      <Link href="/contact">
                        Contact Us Today
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent" asChild>
                      <Link href="/jobs">Browse Jobs</Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  )
}
