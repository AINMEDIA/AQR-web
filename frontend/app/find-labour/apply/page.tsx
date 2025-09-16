"use client"

import { useState } from "react"
import { PageTransition } from "@/components/page-transition"

export default function LabourApplicationPage() {
  const [form, setForm] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    country: "",
    workerCategory: "",
    numberOfWorkers: "",
    startDate: "",
    jobDescription: "",
    additionalInfo: ""
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
    const whatsappMessage = `Labour Request - Employer Inquiry

Company: ${form.companyName}
Contact Person: ${form.contactPerson}
Email: ${form.email}
Phone: ${form.phone}
Country: ${form.country}
Worker Category: ${form.workerCategory}
Number of Workers: ${form.numberOfWorkers}
Start Date: ${form.startDate}

Job Description: ${form.jobDescription}
Additional Info: ${form.additionalInfo}

We are looking to hire skilled workers for our business. Please help us find suitable candidates.`;
    
    const whatsappUrl = `https://wa.me/256745174879?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    // Email setup
    const emailSubject = `Labour Request - ${form.companyName}`;
    const emailBody = `Labour Request - Employer Inquiry

Company: ${form.companyName}
Contact Person: ${form.contactPerson}
Email: ${form.email}
Phone: ${form.phone}
Country: ${form.country}
Worker Category: ${form.workerCategory}
Number of Workers: ${form.numberOfWorkers}
Start Date: ${form.startDate}

Job Description: ${form.jobDescription}
Additional Info: ${form.additionalInfo}

We are looking to hire skilled workers for our business. Please help us find suitable candidates.

Please provide us with information about:
- Available workers in the requested category
- Worker qualifications and experience
- Recruitment process and timeline
- Documentation and compliance requirements
- Any other relevant details

Thank you for your assistance.

---
This message was sent from the AQR website.

Contact Information:
Email: atlantisquest4@gmail.com
WhatsApp: +256745174879
Phone: 0745174879`;
    
    const emailUrl = `mailto:atlantisquest4@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client after a short delay
    setTimeout(() => {
      window.open(emailUrl, '_blank');
      setSubmitting(false);
      setSuccess(true);
      // Reset form
      setForm({ companyName: "", contactPerson: "", email: "", phone: "", country: "", workerCategory: "", numberOfWorkers: "", startDate: "", jobDescription: "", additionalInfo: "" });
    }, 1000);
  };

  return (
    <PageTransition>
      <div className="animate-fade-in">
        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden rounded-br-[120px] md:rounded-br-[240px] group" data-aos="zoom-in">
          <img
            src="/images/Labour.jpeg"
            alt="Labour Request"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 animate-hero-flash"
            data-aos="fade-in"
          />
          <div className="absolute inset-0 bg-black/40 z-10 transition-all duration-500 group-hover:bg-black/30"></div>
          <div className="relative z-20 text-center text-white px-4" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow transition-all duration-700 hover:text-blue-200 hover:scale-105 cursor-default">Labour Request Form</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto transition-all duration-700">Ready to hire skilled workers for your business?</p>
          </div>
        </section>

        {/* Labour Request Form Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100 animate-fade-in-delay">
          <div className="w-full max-w-4xl mx-auto px-6">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800 transition-all duration-700 hover:text-blue-700 hover:scale-105 cursor-default">
                Find Skilled Workers for Your Business
              </h2>
              <p className="text-xl md:text-2xl text-blue-600 transition-all duration-700 mb-8">
                Fill out the form below and we'll help you find pre-screened, skilled workers that match your business needs and requirements
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-blue-100" data-aos="fade-up" data-aos-delay="200">
              {success ? (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-green-600 mb-4">Labour Request Submitted Successfully!</h3>
                  <p className="text-gray-600 mb-6">
                    WhatsApp and email have been opened with your labour request. Please send the messages to complete your request.
                  </p>
                  <button 
                    onClick={() => setSuccess(false)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                      <input
                        type="text"
                        name="companyName"
                        value={form.companyName}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 hover:border-blue-400"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person *</label>
                      <input
                        type="text"
                        name="contactPerson"
                        value={form.contactPerson}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 hover:border-blue-400"
                        placeholder="Enter contact person name"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
                      <select
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 hover:border-blue-400"
                      >
                        <option value="">Select your country</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Oman">Oman</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Germany">Germany</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Worker Category *</label>
                      <select
                        name="workerCategory"
                        value={form.workerCategory}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 hover:border-blue-400"
                      >
                        <option value="">Select worker category</option>
                        <option value="Construction Workers">Construction Workers</option>
                        <option value="Healthcare Workers">Healthcare Workers</option>
                        <option value="Hospitality Staff">Hospitality Staff</option>
                        <option value="Manufacturing Workers">Manufacturing Workers</option>
                        <option value="Drivers & Logistics">Drivers & Logistics</option>
                        <option value="Domestic Workers">Domestic Workers</option>
                        <option value="Office Workers">Office Workers</option>
                        <option value="Technical Workers">Technical Workers</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Number of Workers *</label>
                      <input
                        type="number"
                        name="numberOfWorkers"
                        value={form.numberOfWorkers}
                        onChange={handleChange}
                        required
                        min="1"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 hover:border-blue-400"
                        placeholder="How many workers needed?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Start Date *</label>
                      <input
                        type="date"
                        name="startDate"
                        value={form.startDate}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 hover:border-blue-400"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Job Description & Requirements *</label>
                    <textarea
                      name="jobDescription"
                      value={form.jobDescription}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 hover:border-blue-400"
                      placeholder="Please describe the job role, requirements, working conditions, and any specific skills needed..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                    <textarea
                      name="additionalInfo"
                      value={form.additionalInfo}
                      onChange={handleChange}
                      rows={3}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 hover:border-blue-400"
                      placeholder="Any additional information about accommodation, salary, benefits, etc."
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
                          <span className="text-2xl">👥</span>
                          <span className="text-lg">Submit Labour Request</span>
                        </>
                      )}
                    </button>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-blue-600 text-sm">
                      <span className="font-semibold">Quick Response:</span> Your labour request will be sent via WhatsApp and email for immediate assistance and secure processing
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
