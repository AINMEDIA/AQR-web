"use client"

import { useState } from "react"
import { PageTransition } from "@/components/page-transition"

export default function JobApplicationPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // WhatsApp message
    const whatsappMessage = `Job Opportunities Inquiry

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Location: ${form.location}
Experience: ${form.experience}

Message: ${form.message}

I'm interested in finding job opportunities abroad. Please help me explore available positions.`;
    
    const whatsappUrl = `https://wa.me/256745174879?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    // Email setup
    const emailSubject = `Job Opportunities Inquiry - ${form.name}`;
    const emailBody = `Job Opportunities Inquiry

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Location: ${form.location}
Experience: ${form.experience}

Message: ${form.message}

I'm interested in finding job opportunities abroad. Please help me explore available positions.

Please provide me with information about:
- Available job positions
- Requirements and qualifications
- Application process
- Any other relevant details

Thank you for your assistance.

---
This message was sent from the AQR website.

Contact Information:
Email: atlantisquest4@gmail.com
WhatsApp: +256745174879
Phone: 0748840180`;
    
    const emailUrl = `mailto:atlantisquest4@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client after a short delay
    setTimeout(() => {
      window.open(emailUrl, '_blank');
      setSubmitting(false);
      setSuccess(true);
      // Reset form
      setForm({ name: "", email: "", phone: "", location: "", experience: "", message: "" });
    }, 1000);
  };

  return (
    <PageTransition>
      <div className="animate-fade-in">
        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden rounded-br-[120px] md:rounded-br-[240px] group" data-aos="zoom-in">
          <img
            src="/images/jobs-hero.png"
            alt="Job Application"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 animate-hero-flash"
            data-aos="fade-in"
          />
          <div className="absolute inset-0 bg-black/40 z-10 transition-all duration-500 group-hover:bg-black/30"></div>
          <div className="relative z-20 text-center text-white px-4" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow transition-all duration-700 hover:text-blue-200 hover:scale-105 cursor-default">Job Application</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto transition-all duration-700">Ready to find your next opportunity?</p>
          </div>
        </section>

        {/* Job Application Form Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100 animate-fade-in-delay">
          <div className="w-full max-w-4xl mx-auto px-6">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800 transition-all duration-700 hover:text-blue-700 hover:scale-105 cursor-default">
                Ready to Find Your Next Opportunity?
              </h2>
              <p className="text-xl md:text-2xl text-blue-600 transition-all duration-700 mb-8">
                Fill out the form below and we'll help you discover global job opportunities that match your skills and career goals
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-blue-100" data-aos="fade-up" data-aos-delay="200">
              {success ? (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-green-600 mb-4">Form Submitted Successfully!</h3>
                  <p className="text-gray-600 mb-6">
                    WhatsApp and email have been opened with your inquiry. Please send the messages to complete your request.
                  </p>
                  <button 
                    onClick={() => setSuccess(false)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 hover:border-blue-400"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 hover:border-blue-400"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 hover:border-blue-400"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Current Location *</label>
                      <input
                        type="text"
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 hover:border-blue-400"
                        placeholder="Enter your current location"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Work Experience</label>
                    <select
                      name="experience"
                      value={form.experience}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 hover:border-blue-400"
                    >
                      <option value="">Select your experience level (optional)</option>
                      <option value="Entry Level (0-2 years)">Entry Level (0-2 years)</option>
                      <option value="Mid Level (3-5 years)">Mid Level (3-5 years)</option>
                      <option value="Senior Level (6-10 years)">Senior Level (6-10 years)</option>
                      <option value="Executive Level (10+ years)">Executive Level (10+ years)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 hover:border-blue-400"
                      placeholder="Tell us about your skills, preferred job types, or any specific requirements..."
                    />
                  </div>
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105 transform mx-auto"
                    >
                      {submitting ? (
                        <>
                          <span className="text-2xl">⏳</span>
                          <span className="text-lg">Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span className="text-2xl">💬</span>
                          <span className="text-lg">Submit Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-blue-600 text-sm">
                      <span className="font-semibold">Quick Response:</span> Your inquiry will be sent via WhatsApp and email for immediate assistance
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
