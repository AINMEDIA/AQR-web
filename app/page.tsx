"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { Briefcase, MapPin, Users, Star, ArrowRight, Globe, Shield, Clock } from "lucide-react"
import Link from "next/link"
import { FadeIn } from "@/components/FadeIn"

const features = [
  {
    icon: Briefcase,
    title: "Job Opportunities",
    description: "Access thousands of job listings across various industries and locations.",
    color: "bg-blue-500",
  },
  {
    icon: MapPin,
    title: "Travel Services",
    description: "Professional travel and tour services for business and leisure.",
    color: "bg-green-500",
  },
  {
    icon: Users,
    title: "Labour Solutions",
    description: "Connect with skilled professionals and find the right talent.",
    color: "bg-purple-500",
  },
  {
    icon: Shield,
    title: "Emergency Support",
    description: "24/7 emergency assistance and support services.",
    color: "bg-red-500",
  },
]

const stats = [
  { number: "10,000+", label: "Jobs Posted", icon: Briefcase },
  { number: "5,000+", label: "Happy Clients", icon: Users },
  { number: "50+", label: "Countries", icon: Globe },
  { number: "24/7", label: "Support", icon: Clock },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer",
    content:
      "AQR-Web helped me find my dream job in just 2 weeks. The platform is intuitive and the support team is amazing!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Project Manager",
    content: "The travel services exceeded my expectations. Professional, reliable, and great value for money.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "HR Director",
    content: "We found excellent candidates through AQR-Web. The quality of applicants is consistently high.",
    rating: 5,
  },
]

export default function HomePage() {
  return (
    <PageTransition>
      {/* Hero Section with Navbar inside */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
            <div
            className="w-full h-full bg-cover bg-center bg-no-repeat rounded-br-[400px] md:rounded-br-[600px] lg:rounded-br-[800px]"
              style={{
                backgroundImage: "url('/images/hero-background.png')",
              }}
            />
        </div>
        {/* Logo just below the top left navbar position, overlaying hero background */}
        <div className="absolute z-20 top-24" style={{ left: '4cm' }}>
          <FadeIn delay={0.2} y={-20}>
            <img src="/android-chrome-192x192.png" alt="AQR-Web Logo" className="h-40 w-40" />
          </FadeIn>
          </div>
          {/* Content */}
          <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl flex flex-col items-start relative">
            {/* Local overlay behind text for contrast */}
            <div className="absolute -inset-8 rounded-lg bg-black/40 blur-sm z-0" style={{minWidth: '420px', minHeight: '180px'}} />
              <motion.div
              initial={{ opacity: 0, x: -120 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2.5, ease: 'easeInOut' }}
              className="text-left relative z-10"
            >
              <h1 className="text-5xl md:text-7xl font-extrabold mb-2 text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]" style={{fontStyle: 'italic'}}>
                Unlocking
                </h1>
              <h2 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)] flex items-center gap-4" style={{fontStyle: 'italic'}}>
                mysteries
              </h2>
              </motion.div>
            </div>
          </div>
      </section>

      {/* Mission, Vision, Values, Services, Why Choose Us, Target Markets, Industries - replaced with summary */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg text-gray-700 mb-6">
            AQR Atlantis Quest & Reality U Ltd connects East African talent with global opportunities. We provide ethical job placement, visa support, training, and ongoing care for workers and employers.
          </p>
          <Button size="lg" asChild>
            <Link href="/services">Learn More</Link>
          </Button>
        </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need in One Platform</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From job searching to travel planning, we provide comprehensive solutions for your professional and
                personal needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
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
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
              <p className="text-xl text-muted-foreground">
                Don't just take our word for it - hear from our satisfied users
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who have found success through our platform. Your next opportunity is
                just a click away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="text-lg px-8 py-6" asChild>
                    <Link href="/signup">
                      Get Started Today
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

      {/* --- NEW: Quick Actions Section --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
          {/* Left: Large image */}
          <div className="flex-1 flex justify-center">
            <img src="/images/find-labour-hero.png" alt="Find Jobs" className="rounded-2xl shadow-xl w-full max-w-md object-cover" />
          </div>
          {/* Right: Grid of action cards */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {[
              { title: 'Request Skilled Workers', img: '/images/services-hero.png', desc: 'Hire pre-screened professionals for your business needs.' },
              { title: 'Apply for Overseas Jobs', img: '/images/jobs-hero.png', desc: 'Browse and apply for international job openings.' },
              { title: '24/7 Emergency Help', img: '/images/emergency-hero.png', desc: 'Get urgent support for workers and employers.' },
              { title: 'Visa & Travel Assistance', img: '/images/visa-support.png', desc: 'Get help with documentation, visas, and travel logistics.' },
              { title: 'Training & Orientation', img: '/images/training.png', desc: 'Prepare for success with our pre-departure programs.' },
              { title: 'Global Agency Partnerships', img: '/images/partnerships.png', desc: 'Work with trusted international recruitment partners.' },
              { title: 'Ongoing Support', img: '/images/contact-hero.png', desc: 'We\'re here for you before, during, and after placement.' },
              { title: 'Customer Care', img: '/images/find-labour-hero.png', desc: 'Contact our team for any questions or assistance.' },
            ].map((action, idx) => (
              <div key={action.title} className="flex items-center gap-4 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all p-4">
                <img src={action.img} alt={action.title} className="w-14 h-14 rounded-lg object-cover" />
                <div>
                  <span className="font-semibold text-gray-800 text-lg">{action.title}</span>
                  <div className="text-gray-500 text-sm">{action.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW: AQR Portal (Mobile Wallet style) --- */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
          {/* Left: Phone mockup */}
          <div className="flex-1 flex justify-center">
            <img src="/images/phone-mockup.png" alt="AQR Portal" className="rounded-2xl shadow-xl w-full max-w-xs object-cover" />
          </div>
          {/* Right: Text and CTA */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-green-700">AQR Portal</h2>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Manage your job search and applications on the go</h3>
            <p className="text-gray-700 mb-6">Access all our services from your phone or computer. Track applications, get support, and stay updated—anywhere, anytime.</p>
            <Button size="lg" className="text-lg px-8 py-6">Learn More</Button>
          </div>
        </div>
      </section>

      {/* --- NEW: Featured Services Grid --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Job Matching & Placement', img: '/images/jobs-hero.png', desc: 'Personalized job matching for skilled and unskilled workers.' },
              { title: 'Visa Processing & Travel', img: '/images/visa-support.png', desc: 'Comprehensive support for all your travel and visa needs.' },
              { title: 'Pre-Departure Training', img: '/images/training.png', desc: 'Essential training to prepare you for work abroad.' },
              { title: 'Post-Deployment Care', img: '/images/contact-hero.png', desc: 'Continued support for workers after placement.' },
              { title: 'Rapid Emergency Response', img: '/images/emergency-hero.png', desc: 'Immediate help for urgent situations, anytime.' },
              { title: 'Employer Solutions', img: '/images/services-hero.png', desc: 'Custom recruitment and workforce solutions for businesses.' },
            ].map((service, idx) => (
              <div key={service.title} className="relative rounded-2xl overflow-hidden shadow-lg group h-72 flex flex-col justify-end">
                <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="relative z-10 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                  <p className="text-white text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW: Online Services (Internet Banking style) --- */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-2 text-green-700">AQR Online Services</h2>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Access AQR services anywhere, anytime</h3>
          <p className="text-gray-700 mb-8 max-w-2xl">Use our online platform to find jobs, manage your applications, and get support from any device. Your next opportunity is just a click away.</p>
          <img src="/images/laptop-dashboard.png" alt="AQR Online Services" className="rounded-2xl shadow-xl w-full max-w-lg object-cover mb-6" />
          <Button size="lg" className="text-lg px-8 py-6">Learn More</Button>
        </div>
      </section>

        <Footer />
    </PageTransition>
  )
}
