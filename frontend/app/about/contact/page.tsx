"use client"

import { PageTransition } from "@/components/page-transition"
import { MapPin, Phone, Mail, Globe, MessageSquare, Clock, Users, Shield } from "lucide-react"

export default function ContactPage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] w-full flex items-center justify-center overflow-hidden rounded-br-[120px] md:rounded-br-[240px]">
        <img
          src="/images/hero-background.jpg"
          alt="Contact Hero"
          className="absolute inset-0 w-full h-full object-cover z-0"
          data-aos="fade-in"
        />
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center text-white px-4" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow">Contact Us</h1>
          <p className="text-lg md:text-xl font-medium drop-shadow">We're here to help you with jobs, travel, and more. Reach out anytime!</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white animate-fade-in-delay">
        <div className="w-full mx-auto px-2 animate-scale-in">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-4 hover:border-blue-400 group cursor-pointer"
               data-aos="fade-up"
               data-aos-delay="800">
            <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center transition-all duration-700 group-hover:text-blue-800 group-hover:scale-105">Send Us a Message</h2>
            <form className="grid gap-6">
              <div className="grid grid-cols-2 gap-6">
                <input type="text" name="name" placeholder="Your Name*" className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 hover:border-blue-400" required />
                <input type="email" name="email" placeholder="Your Email" className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 hover:border-blue-400" required />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <input type="tel" name="contact" placeholder="Phone Number* (e.g. +256700000000)" className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 hover:border-blue-400" required />
                <select name="purpose" className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 hover:border-blue-400" required>
                  <option value="">Select Service</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Booking">Booking</option>
                  <option value="Support">Support</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Jobs">Jobs</option>
                  <option value="Tours & Travel">Tours & Travel</option>
                  <option value="Visa">Visa</option>
                  <option value="Hotel">Hotel</option>
                  <option value="Car Hire">Car Hire</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              {/* Subject and dynamic fields (for demo, always show) */}
              <input type="text" name="subject" placeholder="Subject (e.g. Booking Reference, Job Title, etc.)" className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 hover:border-blue-400" required />
              <textarea name="message" placeholder="Your Message (please include details relevant to your purpose)" rows={5} className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 hover:border-blue-400" required />
              <button type="submit" className="bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow hover:bg-blue-800 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Full-width Map Section */}
      <section className="w-full px-0 py-0 animate-fade-in-delay">
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.03101100319!2d32.5825206!3d0.3475961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb1e1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sug!4v1680000000000!5m2!1sen!2sug"
            width="100%"
            height="400"
            className="block w-full rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AQR Location Map"
          ></iframe>
        </div>
      </section>
    </PageTransition>
  )
} 