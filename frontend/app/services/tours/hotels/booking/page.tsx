"use client"

import { useState, useRef } from "react";
import { PageTransition } from "@/components/page-transition";
import { Hotel, ArrowRight } from "lucide-react";
import { ChangeEvent, FormEvent } from "react";

export default function HotelBookingPage() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    checkin: "",
    checkout: "",
    guests: 1,
    roomType: "",
    requests: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess(false);
    
    // Simulate booking submission for static site
    setTimeout(() => {
      setSuccess(true);
      // WhatsApp message
      const message = `Hotel Booking Request\nName: ${form.name}\nContact: ${form.contact}\nCheck-in: ${form.checkin}\nCheck-out: ${form.checkout}\nGuests: ${form.guests}\nRoom Type: ${form.roomType}\nRequests: ${form.requests}`;
      const whatsappUrl = `https://wa.me/256700341229?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      setTimeout(() => {
        const whatsappUrl2 = `https://wa.me/256745174879?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl2, '_blank');
        setSubmitting(false);
      }, 1000);
      setForm({ name: "", contact: "", checkin: "", checkout: "", guests: 1, roomType: "", requests: "" });
      if (fileInputRef.current) (fileInputRef.current as HTMLInputElement).value = '';
    }, 1000);
  };

  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto py-12 px-4 animate-fade-in">
        <h1 className="text-3xl font-bold mb-6 flex items-center gap-2 text-blue-800"><Hotel className="w-7 h-7 text-blue-500 animate-bounce" /> Hotel Booking</h1>
        {success && (
          <div className="mb-4 p-4 bg-blue-100 text-blue-800 rounded-lg">Booking submitted! We will contact you soon.</div>
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
            <label className="block text-sm font-medium mb-1">Contact (Email or Phone)</label>
            <input type="text" name="contact" value={form.contact} onChange={handleChange} required className="w-full border rounded p-2" placeholder="Enter your email or phone number*" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Check-in Date</label>
              <input type="date" name="checkin" value={form.checkin} onChange={handleChange} required className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Check-out Date</label>
              <input type="date" name="checkout" value={form.checkout} onChange={handleChange} required className="w-full border rounded p-2" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Number of Guests</label>
              <input type="number" name="guests" value={form.guests} onChange={handleChange} min={1} required className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Room Type</label>
              <select name="roomType" value={form.roomType} onChange={handleChange} required className="w-full border rounded p-2">
                <option value="">Select Room Type</option>
                <option value="Single">Single</option>
                <option value="Double">Double</option>
                <option value="Suite">Suite</option>
                <option value="Family">Family</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Special Requests</label>
            <textarea name="requests" value={form.requests} onChange={handleChange} className="w-full border rounded p-2" placeholder="Any special requests? (Optional)" />
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60" disabled={submitting}>
            {submitting ? 'Submitting...' : <><ArrowRight className="w-5 h-5" /> Submit & WhatsApp</>}
          </button>
        </form>
      </div>
    </PageTransition>
  );
} 