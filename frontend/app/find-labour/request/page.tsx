"use client"

import { useState, ChangeEvent } from "react";
import { PageTransition } from "@/components/page-transition";
import { Users, ArrowRight } from "lucide-react";
import { handleFormSubmit } from "@/lib/form-utils";

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await handleFormSubmit(
      e,
      form,
      "Worker Request",
      setSubmitting,
      setSuccess,
      setError,
      () => setForm({ company: "", contactPerson: "", email: "", phone: "", country: "", category: "", number: 1, startDate: "", jobDescription: "", info: "" })
    );
  };

  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto py-12 px-4 animate-fade-in">
        <h1 className="text-3xl font-bold mb-6 flex items-center gap-2 text-blue-800"><Users className="w-7 h-7 text-blue-500 " /> Worker Request</h1>
        {success && (
          <div className="mb-4 p-4 bg-blue-100 text-blue-800 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="font-semibold">Success!</span>
            </div>
            <p className="mt-1">Worker request submitted successfully! We've opened WhatsApp and your email client. We'll contact you soon.</p>
          </div>
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
            <input type="text" name="contactPerson" value={form.contactPerson} onChange={handleChange} required className="w-full border rounded p-2" placeholder="Enter contact person's name*" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full border rounded p-2" placeholder="Enter email address" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="w-full border rounded p-2" placeholder="Enter phone number*" />
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
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60" disabled={submitting}>
            {submitting ? 'Submitting...' : <><ArrowRight className="w-5 h-5" /> Submit</>}
          </button>
        </form>
      </div>
    </PageTransition>
  );
} 