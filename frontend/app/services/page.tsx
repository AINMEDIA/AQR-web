"use client"

import { useState, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { Briefcase, Users, Plane, Shield, ArrowRight, CheckCircle, Globe, Camera, Car, Hotel } from "lucide-react"
import Link from "next/link"
import { FadeIn } from "@/components/FadeIn"
import { ProminentCTA } from "@/components/prominent-cta"

export default function ServicesPage() {
  const [booking, setBooking] = useState({
    name: '',
    contact: '',
    package: '',
    date: '',
    period_length: '',
    service_type: '',
    nationality: '',
    guests: '',
    notes: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const packages = [
    { label: 'City Tour', price: 75 },
    { label: '1-Day Safari', price: 200 },
    { label: '3-Day Murchison Falls Safari', price: 500 },
    { label: 'Gorilla Trekking', price: 800 },
    { label: 'Airport Transfer', price: 35 },
    { label: 'Car Hire', price: 60 },
  ];

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate booking submission for static site
    setTimeout(() => {
      toast({ title: 'Booking submitted!', description: 'Your booking has been received.' });
      setBooking({ name: '', contact: '', package: '', date: '', period_length: '', service_type: '', nationality: '', guests: '', notes: '' });
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      setSubmitting(false);
    }, 1000);
  };

  return (
    <PageTransition>
      <div className="animate-fade-in">
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden animate-slide-up rounded-br-[120px] md:rounded-br-[240px]" data-aos="zoom-in">
          <img
            src="/images/services-hero.jpeg"
            alt="Our Services"
            className="absolute inset-0 w-full h-full object-cover blur-sm"
            data-aos="fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="relative z-10 text-center animate-scale-in" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">Our Services</h1>
          </div>
        </section>
        {/* Services Grid */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white" data-aos="fade-up">
          <div className="container mx-auto px-4 grid grid-cols-2 gap-6 md:gap-12">
            {/* Tours & Travel Card */}
            <div className="relative bg-white rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-blue-300 p-4 md:p-10 flex flex-col items-center text-center border-2 border-blue-100 group cursor-pointer" data-aos="fade-right">
              <span className="text-blue-600 text-3xl md:text-5xl mb-2 md:mb-4 transition-all duration-700 group-hover:scale-110">✈️</span>
              <h3 className="text-sm md:text-2xl font-extrabold mb-1 md:mb-2 text-blue-800 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Tours & Travel</h3>
              <p className="text-xs md:text-lg text-gray-700 mb-1 md:mb-2 transition-all duration-700 opacity-90 group-hover:opacity-100">Wildlife Safaris, Holiday Packages, Car Hire & Transport Solutions</p>
              <span className="text-blue-400 font-semibold text-xs md:text-base transition-all duration-700 group-hover:text-blue-600">Explore the world with us!</span>
            </div>
            {/* Labour Recruitment Card */}
            <div className="relative bg-white rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-blue-300 p-4 md:p-10 flex flex-col items-center text-center border-2 border-blue-100 group cursor-pointer" data-aos="fade-left">
              <span className="text-blue-600 text-3xl md:text-5xl mb-2 md:mb-4 transition-all duration-700 group-hover:scale-110">💼</span>
              <h3 className="text-sm md:text-2xl font-extrabold mb-1 md:mb-2 text-blue-800 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Labour Recruitment Abroad</h3>
              <p className="text-xs md:text-lg text-gray-700 mb-1 md:mb-2 transition-all duration-700 opacity-90 group-hover:opacity-100">Domestic & skilled labour export, Full processing support, Transparent, legal recruitment</p>
              <span className="text-blue-400 font-semibold text-xs md:text-base transition-all duration-700 group-hover:text-blue-600">Your gateway to global opportunities!</span>
            </div>
          </div>
        </section>
        {/* Why Choose AQR */}
        <section className="py-16 bg-white" data-aos="fade-up">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 transition-all duration-700 hover:text-blue-800 hover:scale-105 cursor-default" data-aos="fade-up">Why Choose AQR</h2>
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div className="text-center group cursor-pointer" data-aos="zoom-in" data-aos-delay="100">
                <div className="bg-blue-100 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 transition-all duration-500 group-hover:bg-blue-200 group-hover:scale-110">
                  <Shield className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                </div>
                <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Trusted & Reliable</h3>
                <p className="text-xs md:text-base text-gray-600 transition-all duration-700 opacity-90 group-hover:opacity-100">Years of experience in ethical recruitment</p>
              </div>
              <div className="text-center group cursor-pointer" data-aos="zoom-in" data-aos-delay="200">
                <div className="bg-blue-100 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 transition-all duration-500 group-hover:bg-blue-200 group-hover:scale-110">
                  <Globe className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                </div>
                <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Global Network</h3>
                <p className="text-xs md:text-base text-gray-600 transition-all duration-700 opacity-90 group-hover:opacity-100">Connections worldwide for opportunities</p>
              </div>
              <div className="text-center group cursor-pointer col-span-2 lg:col-span-1" data-aos="zoom-in" data-aos-delay="300">
                <div className="bg-blue-100 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 transition-all duration-500 group-hover:bg-blue-200 group-hover:scale-110">
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                </div>
                <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Personal Support</h3>
                <p className="text-xs md:text-base text-gray-600 transition-all duration-700 opacity-90 group-hover:opacity-100">Dedicated support throughout the process</p>
              </div>
              <div className="text-center group cursor-pointer col-span-2 lg:col-span-1" data-aos="zoom-in" data-aos-delay="400">
                <div className="bg-blue-100 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 transition-all duration-500 group-hover:bg-blue-200 group-hover:scale-110">
                  <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                </div>
                <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Quality Assurance</h3>
                <p className="text-xs md:text-base text-gray-600 transition-all duration-700 opacity-90 group-hover:opacity-100">Verified employers and opportunities</p>
              </div>
            </div>
          </div>
        </section>
        {/* Service Details */}
        <section className="py-16 bg-gradient-to-b from-white to-blue-50" data-aos="fade-up">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-12 items-center">
              <div className="space-y-6" data-aos="fade-right">
                <h2 className="text-3xl font-bold text-blue-700 transition-all duration-700 hover:text-blue-800 hover:scale-105 cursor-default">Labour Recruitment Services</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="bg-blue-100 rounded-full p-2 transition-all duration-500 group-hover:bg-blue-200 group-hover:scale-110">
                      <Briefcase className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Job Placement</h3>
                      <p className="text-gray-600 transition-all duration-700 opacity-90 group-hover:opacity-100">Find the perfect job match for your skills</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="bg-blue-100 rounded-full p-2 transition-all duration-500 group-hover:bg-blue-200 group-hover:scale-110">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Visa Support</h3>
                      <p className="text-gray-600 transition-all duration-700 opacity-90 group-hover:opacity-100">Complete visa processing assistance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="bg-blue-100 rounded-full p-2 transition-all duration-500 group-hover:bg-blue-200 group-hover:scale-110">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">Training</h3>
                      <p className="text-gray-600 transition-all duration-700 opacity-90 group-hover:opacity-100">Pre-departure training and orientation</p>
                    </div>
                  </div>
                </div>
                <Button size="lg" asChild className="group transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                  <Link href="/jobs" className="flex items-center gap-2">
                    View Jobs
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
                </Button>
              </div>
              <div className="flex justify-center" data-aos="fade-left">
                <div className="relative group">
                  <img
                    src="/images/find-labour-hero.jpeg"
                    alt="Labour Recruitment"
                    className="rounded-xl shadow-lg w-full max-w-md object-cover transition-all duration-700 group-hover:scale-105 group-hover:shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Booking Section */}
        <section className="py-16 bg-blue-50" data-aos="fade-up">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">Book a Tour or Service</h2>
            <form onSubmit={handleBookingSubmit} className="space-y-6 bg-white rounded-xl shadow-lg p-8">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={booking.name}
                  onChange={handleBookingChange}
                  required
                  className="w-full border rounded p-2"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Contact (Email or Phone)</label>
                <input
                  type="text"
                  name="contact"
                  value={booking.contact}
                  onChange={handleBookingChange}
                  required
                  className="w-full border rounded p-2"
                  placeholder="Enter your email or phone"
                />
              </div>
              {/* Service Type Dropdown */}
              <div>
                <label className="block text-sm font-medium mb-1">Service Type</label>
                <select
                  name="service_type"
                  value={booking.service_type || ''}
                  onChange={handleBookingChange}
                  required
                  className="w-full border rounded p-2"
                >
                  <option value="">Select a service</option>
                  <option value="Tour">Tour</option>
                  <option value="Car Hire">Car Hire</option>
                  <option value="Hotel">Hotel</option>
                  <option value="Visa">Visa</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              {/* Dynamic fields for each service type (for demo, always show) */}
              <div>
                <label className="block text-sm font-medium mb-1">Package</label>
                <select
                  name="package"
                  value={booking.package}
                  onChange={handleBookingChange}
                  className="w-full border rounded p-2"
                >
                  <option value="">Select a package</option>
                  {packages.map((pkg) => (
                    <option key={pkg.label} value={pkg.label}>{pkg.label} (${pkg.price})</option>
                  ))}
                </select>
                <span className="text-xs text-gray-500">(For Tours/Car Hire. Select the package or vehicle type.)</span>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Date</label>
                <input
                  type="date"
                  name="date"
                  value={booking.date}
                  onChange={handleBookingChange}
                  className="w-full border rounded p-2"
                />
                <span className="text-xs text-gray-500">(For Tours/Hotel/Car Hire. Select your preferred date.)</span>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Period Length (e.g. 3 days, 1 week)</label>
                <input
                  type="text"
                  name="period_length"
                  value={booking.period_length}
                  onChange={handleBookingChange}
                  className="w-full border rounded p-2"
                  placeholder="e.g. 3 days, 1 week"
                />
                <span className="text-xs text-gray-500">(For Tours/Hotel. Specify duration of stay or trip.)</span>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Nationality (for Visa)</label>
                <input
                  type="text"
                  name="nationality"
                  value={booking.nationality || ''}
                  onChange={handleBookingChange}
                  className="w-full border rounded p-2"
                  placeholder="Enter your nationality"
                />
                <span className="text-xs text-gray-500">(For Visa applications only.)</span>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Number of Guests/Passengers</label>
                <input
                  type="number"
                  name="guests"
                  value={booking.guests || ''}
                  onChange={handleBookingChange}
                  className="w-full border rounded p-2"
                  placeholder="e.g. 2, 4, 10"
                  min={1}
                />
                <span className="text-xs text-gray-500">(For Hotel/Car Hire/Tours. Specify number of people.)</span>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Travel Document (PDF, JPG, PNG, max 5MB, optional)</label>
                <input
                  type="file"
                  accept=".pdf,image/jpeg,image/png"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="block w-full border rounded p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Additional Notes</label>
                <textarea
                  name="notes"
                  value={booking.notes || ''}
                  onChange={handleBookingChange}
                  className="w-full border rounded p-2"
                  placeholder="Any special requests, destinations, or details about your booking."
                  rows={3}
                />
              </div>
              <div className="flex gap-2 justify-end">
                <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800" disabled={submitting}>
                  {submitting ? 'Submitting...' : 'Submit Booking'}
                </button>
              </div>
            </form>
          </div>
        </section>
        
        {/* Prominent CTA Section */}
        <ProminentCTA 
          title="Ready to Get Started?"
          subtitle="Contact us for a custom quote or immediate assistance with your recruitment or travel needs"
        />
        
        <Footer />
      </div>
    </PageTransition>
  )
}
