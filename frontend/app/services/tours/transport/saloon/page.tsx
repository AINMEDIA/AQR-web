"use client";
import { useState } from "react";
import { PageTransition } from "@/components/page-transition";
import { Car, ArrowRight } from "lucide-react";
import { handleFormSubmit } from "@/lib/form-utils";

export default function SaloonCarHirePage() {
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
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await handleFormSubmit(
      e,
      form,
      "Saloon Car Hire Request",
      setSubmitting,
      setSuccess,
      setError,
      () => setForm({ name: "", contact: "", startDate: "", endDate: "", pickup: "", dropoff: "", requests: "" })
    );
  };

  return (
    <PageTransition>
      <div className="animate-fade-in max-w-xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6 flex items-center gap-2 text-blue-700">
          <Car className="w-8 h-8 text-blue-500" /> Saloon Car Hire Request
        </h1>
        
        {success && (
          <div className="mb-4 p-4 bg-blue-100 text-blue-800 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Form submitted successfully! We've opened WhatsApp and your email client. We'll contact you soon.</span>
            </div>
          </div>
        )}
        
        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-800 rounded-lg border border-red-200">
            <div className="flex items-center gap-2">
              <span className="text-red-500">✗</span>
              <span>{error}</span>
            </div>
          </div>
        )}
        
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