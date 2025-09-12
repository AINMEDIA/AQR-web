"use client";
import { useState } from "react";
import { PageTransition } from "@/components/page-transition";
import { Truck, ArrowRight } from "lucide-react";

export default function TrucksHirePage() {
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
    const message = `Trucks & Pickups Hire Request\nName: ${form.name}\nContact: ${form.contact}\nRental Dates: ${form.startDate} to ${form.endDate}\nPickup: ${form.pickup}\nDrop-off: ${form.dropoff}\nRequests: ${form.requests}`;
    const whatsappUrl = `https://wa.me/256256748840180?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setTimeout(() => {
      const whatsappUrl2 = `https://wa.me/256748840180?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl2, '_blank');
      setSubmitting(false);
    }, 1000);
    // TODO: Trigger admin notification (email/dashboard)
  };

  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto py-12 px-4 animate-fade-in">
        <h1 className="text-3xl font-bold mb-6 flex items-center gap-2 text-yellow-800"><Truck className="w-7 h-7 text-yellow-500 " /> Trucks & Pickups Hire</h1>
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
              <label className="block text-sm font-medium mb-1">Rental Start Date</label>
              <input type="date" name="startDate" value={form.startDate} onChange={handleChange} required className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Rental End Date</label>
              <input type="date" name="endDate" value={form.endDate} onChange={handleChange} required className="w-full border rounded p-2" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Pickup Location</label>
              <input type="text" name="pickup" value={form.pickup} onChange={handleChange} required className="w-full border rounded p-2" placeholder="e.g. Entebbe Airport" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Drop-off Location</label>
              <input type="text" name="dropoff" value={form.dropoff} onChange={handleChange} required className="w-full border rounded p-2" placeholder="e.g. Kampala City" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Special Requests</label>
            <textarea name="requests" value={form.requests} onChange={handleChange} className="w-full border rounded p-2" placeholder="Any special requests? (Optional)" />
          </div>
          <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60" disabled={submitting}>
            {submitting ? 'Submitting...' : <><ArrowRight className="w-5 h-5" /> Submit &amp; WhatsApp</>}
          </button>
        </form>
      </div>
    </PageTransition>
  );
} 