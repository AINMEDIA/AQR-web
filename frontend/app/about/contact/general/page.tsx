"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { PageTransition } from "@/components/page-transition";
import { Mail, ArrowRight } from "lucide-react";

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess(false);
    
    // Simulate form submission for static site
    setTimeout(() => {
      setSuccess(true);
      // WhatsApp message
      const message = `General Inquiry\nName: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\nMessage: ${form.message}`;
      const whatsappUrl = `https://wa.me/256700341229?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      setTimeout(() => {
        const whatsappUrl2 = `https://wa.me/256745174879?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl2, '_blank');
        setSubmitting(false);
      }, 1000);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto py-12 px-4 animate-fade-in">
        <h1 className="text-3xl font-bold mb-6 flex items-center gap-2 text-green-800"><Mail className="w-7 h-7 text-green-500 animate-bounce" /> General Inquiry</h1>
        {success && (
          <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-lg">Inquiry submitted! We will contact you soon.</div>
        )}
        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-800 rounded-lg">{error}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-xl shadow-lg p-8">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full border rounded p-2" placeholder="Enter your full name" />
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
            {submitting ? 'Submitting...' : <><ArrowRight className="w-5 h-5" /> Submit & WhatsApp</>}
          </button>
        </form>
      </div>
    </PageTransition>
  );
} 