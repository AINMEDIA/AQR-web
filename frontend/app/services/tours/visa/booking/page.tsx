"use client"

import { useState } from "react";
import { PageTransition } from "@/components/page-transition";
import { FileText, ArrowRight } from "lucide-react";

export default function VisaBookingPage() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    nationality: "",
    destination: "",
    visaType: "",
    travelDates: "",
    passportNumber: "",
    requests: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const message = `Visa Application Request\nName: ${form.name}\nContact: ${form.contact}\nNationality: ${form.nationality}\nDestination: ${form.destination}\nVisa Type: ${form.visaType}\nTravel Dates: ${form.travelDates}\nPassport Number: ${form.passportNumber}\nSpecial Requests: ${form.requests}`;
    const whatsappUrl = `https://wa.me/256256748840180?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setTimeout(() => {
      const whatsappUrl2 = `https://wa.me/256748840180?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl2, '_blank');
      setSubmitting(false);
      setSuccess(true);
    }, 1000);
  };

  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto py-12 px-4 animate-fade-in">
        <h1 className="text-3xl font-bold mb-6 flex items-center gap-2 text-blue-800"><FileText className="w-7 h-7 text-blue-500" /> Visa Application</h1>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-xl shadow-lg p-8">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full border rounded p-2" placeholder="Enter your full name*" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Contact (Email or Phone)</label>
            <input type="text" name="contact" value={form.contact} onChange={handleChange} required className="w-full border rounded p-2" placeholder="Enter your email or phone number*" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nationality</label>
              <input type="text" name="nationality" value={form.nationality} onChange={handleChange} required className="w-full border rounded p-2" placeholder="e.g. Ugandan" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Destination Country</label>
              <input type="text" name="destination" value={form.destination} onChange={handleChange} required className="w-full border rounded p-2" placeholder="e.g. Qatar" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Visa Type</label>
              <select name="visaType" value={form.visaType} onChange={handleChange} required className="w-full border rounded p-2">
                <option value="">Select Visa Type</option>
                <option value="Tourist">Tourist</option>
                <option value="Business">Business</option>
                <option value="Student">Student</option>
                <option value="Work">Work</option>
                <option value="Transit">Transit</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Travel Dates</label>
              <input type="text" name="travelDates" value={form.travelDates} onChange={handleChange} required className="w-full border rounded p-2" placeholder="e.g. 2024-07-01 to 2024-07-15" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Passport Number</label>
            <input type="text" name="passportNumber" value={form.passportNumber} onChange={handleChange} required className="w-full border rounded p-2" placeholder="Enter your passport number*" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Special Requests</label>
            <textarea name="requests" value={form.requests} onChange={handleChange} className="w-full border rounded p-2" placeholder="Any special requests or additional information? (Optional)" />
          </div>
          {success && (
            <div className="mb-4 p-4 bg-blue-100 text-blue-800 rounded-lg">Visa application request submitted! We will contact you soon.</div>
          )}
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60" disabled={submitting}>
            {submitting ? 'Submitting...' : <><ArrowRight className="w-5 h-5" /> Submit &amp; WhatsApp</>}
          </button>
        </form>
      </div>
    </PageTransition>
  );
}
