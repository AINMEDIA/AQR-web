"use client";
import { useState } from "react";
import { PageTransition } from "@/components/page-transition";
import { Truck, ArrowRight } from "lucide-react";

export default function VansHirePage() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    startDate: "",
    endDate: "",
    pickup: "",
    dropoff: "",
    requests: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const message =
      `Vans & Minibuses Hire Request\n` +
      `Name: ${form.name}\n` +
      `Contact: ${form.contact}\n` +
      `Rental Start: ${form.startDate}\n` +
      `Rental End: ${form.endDate}\n` +
      `Pickup: ${form.pickup}\n` +
      `Drop-off: ${form.dropoff}\n` +
      `Special Requests: ${form.requests}`;
    
    const wa1 = `https://wa.me/256745174879?text=${encodeURIComponent(message)}`;
    const wa2 = `https://wa.me/256748840180?text=${encodeURIComponent(message)}`;
    
    // Email setup
    const emailSubject = `Vans & Minibuses Hire Request - ${form.name}`;
    const emailBody = `Vans & Minibuses Hire Request\n\nName: ${form.name}\nContact: ${form.contact}\nRental Start: ${form.startDate}\nRental End: ${form.endDate}\nPickup: ${form.pickup}\nDrop-off: ${form.dropoff}\nSpecial Requests: ${form.requests}\n\n---\nThis message was sent from the AQR website.\n\nContact Information:\nEmail: atlantisquest4@gmail.com\nWhatsApp: +256745174879\nPhone: 0748840180`;
    const emailUrl = `mailto:atlantisquest4@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    window.open(wa1, "_blank");
    setTimeout(() => {
      window.open(wa2, "_blank");
      // Open email client
      window.open(emailUrl, "_blank");
      setSubmitting(false);
      setForm({ name: "", contact: "", startDate: "", endDate: "", pickup: "", dropoff: "", requests: "" });
    }, 500);
  };

  return (
    <PageTransition>
      <div className="animate-fade-in max-w-xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6 flex items-center gap-2 text-blue-700">
          <Truck className="w-8 h-8 text-blue-500" /> Vans & Minibuses Hire Request
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-xl shadow-lg p-8">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded p-2"
              placeholder="Enter your full name*"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Contact (Email or Phone)</label>
            <input
              type="text"
              name="contact"
              value={form.contact}
              onChange={handleChange}
              required
              className="w-full border rounded p-2"
              placeholder="Enter your email or phone*"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Rental Start Date</label>
              <input
                type="date"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                required
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Rental End Date</label>
              <input
                type="date"
                name="endDate"
                value={form.endDate}
                onChange={handleChange}
                required
                className="w-full border rounded p-2"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Pickup Location</label>
              <input
                type="text"
                name="pickup"
                value={form.pickup}
                onChange={handleChange}
                required
                className="w-full border rounded p-2"
                placeholder="e.g. Entebbe Airport"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Drop-off Location</label>
              <input
                type="text"
                name="dropoff"
                value={form.dropoff}
                onChange={handleChange}
                required
                className="w-full border rounded p-2"
                placeholder="e.g. Kampala City Centre"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Special Requests</label>
            <textarea
              name="requests"
              value={form.requests}
              onChange={handleChange}
              className="w-full border rounded p-2"
              placeholder="Any special requests or notes (optional)"
              rows={3}
            />
          </div>
          <div className="flex gap-2 justify-end">
            <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 flex items-center gap-2" disabled={submitting}>
              {submitting ? 'Submitting...' : <><ArrowRight className="w-4 h-4" /> Submit Request</>}
            </button>
          </div>
        </form>
      </div>
    </PageTransition>
  );
} 