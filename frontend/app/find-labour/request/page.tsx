"use client"

import { useState, ChangeEvent, FormEvent } from "react";
import { PageTransition } from "@/components/page-transition";
import { Users, ArrowRight } from "lucide-react";

export default function WorkerRequestPage() {
  const [form, setForm] = useState({
    company: "",
    contactPerson: "",
    email: "",
    phone: "",
    country: "",
    category: "",
    number: 1,
    startDate: "",
    jobDescription: "",
    info: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess(false);
    
    // Simulate form submission for static site
    setTimeout(() => {
      setSuccess(true);
      // WhatsApp message
      const message = `Worker Request\nCompany: ${form.company}\nContact Person: ${form.contactPerson}\nEmail: ${form.email}\nPhone: ${form.phone}\nCountry: ${form.country}\nCategory: ${form.category}\nNumber of Workers: ${form.number}\nStart Date: ${form.startDate}\nJob Description: ${form.jobDescription}\nAdditional Info: ${form.info}`;
      const whatsappUrl = `https://wa.me/256700341229?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      setTimeout(() => {
        const whatsappUrl2 = `https://wa.me/256745174879?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl2, '_blank');
        setSubmitting(false);
      }, 1000);
      setForm({ company: "", contactPerson: "", email: "", phone: "", country: "", category: "", number: 1, startDate: "", jobDescription: "", info: "" });
    }, 1000);
  };

  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto py-12 px-4 animate-fade-in">
        <h1 className="text-3xl font-bold mb-6 flex items-center gap-2 text-emerald-800"><Users className="w-7 h-7 text-emerald-500 animate-bounce" /> Worker Request</h1>
        {success && (
          <div className="mb-4 p-4 bg-blue-100 text-blue-800 rounded-lg">Worker request submitted! We will contact you soon.</div>
        )}
        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-800 rounded-lg">{error}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-xl shadow-lg p-8">
          <div>
            <label className="block text-sm font-medium mb-1">Company Name</label>
            <input type="text" name="company" value={form.company} onChange={handleChange} required className="w-full border rounded p-2" placeholder="Enter your company name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Contact Person</label>
            <input type="text" name="contactPerson" value={form.contactPerson} onChange={handleChange} required className="w-full border rounded p-2" placeholder="Enter contact person's name" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full border rounded p-2" placeholder="Enter email address" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="w-full border rounded p-2" placeholder="Enter phone number" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Country</label>
              <input type="text" name="country" value={form.country} onChange={handleChange} required className="w-full border rounded p-2" placeholder="Country of work" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Worker Category</label>
              <input type="text" name="category" value={form.category} onChange={handleChange} required className="w-full border rounded p-2" placeholder="e.g. Skilled, Unskilled, Domestic, etc." />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Number of Workers</label>
              <input type="number" name="number" value={form.number} onChange={handleChange} min={1} required className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Start Date</label>
              <input type="date" name="startDate" value={form.startDate} onChange={handleChange} required className="w-full border rounded p-2" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Job Description</label>
            <textarea name="jobDescription" value={form.jobDescription} onChange={handleChange} required className="w-full border rounded p-2" placeholder="Describe the job requirements" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Additional Info</label>
            <textarea name="info" value={form.info} onChange={handleChange} className="w-full border rounded p-2" placeholder="Any additional information? (Optional)" />
          </div>
          <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60" disabled={submitting}>
            {submitting ? 'Submitting...' : <><ArrowRight className="w-5 h-5" /> Submit & WhatsApp</>}
          </button>
        </form>
      </div>
    </PageTransition>
  );
} 