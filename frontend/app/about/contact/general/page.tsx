"use client";
import { useState, ChangeEvent } from "react";
import { PageTransition } from "@/components/page-transition";
import { Mail, ArrowRight } from "lucide-react";
import { handleFormSubmit } from "@/lib/form-utils";

export default function GeneralContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await handleFormSubmit(
      e,
      form,
      "General Inquiry",
      setSubmitting,
      setSuccess,
      setError,
      () => setForm({ name: "", email: "", subject: "", message: "" })
    );
  };

  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto py-12 px-4 animate-fade-in">
        <h1 className="text-3xl font-bold mb-6 flex items-center gap-2 text-green-800"><Mail className="w-7 h-7 text-green-500 " /> General Inquiry</h1>
        {success && (
          <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-lg border border-green-200">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="font-semibold">Success!</span>
            </div>
            <p className="mt-1">Form submitted successfully! We've opened WhatsApp and your email client. We'll contact you soon.</p>
          </div>
        )}
        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-800 rounded-lg">{error}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-xl shadow-lg p-8">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full border rounded p-2" placeholder="Enter your full name*" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full border rounded p-2" placeholder="Enter your email address" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <input type="text" name="subject" value={form.subject} onChange={handleChange} required className="w-full border rounded p-2" placeholder="Subject of your inquiry" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} required className="w-full border rounded p-2" placeholder="Type your message here..." />
          </div>
          <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60" disabled={submitting}>
            {submitting ? 'Submitting...' : <><ArrowRight className="w-5 h-5" /> Submit</>}
          </button>
        </form>
      </div>
    </PageTransition>
  );
} 