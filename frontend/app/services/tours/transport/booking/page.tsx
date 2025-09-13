"use client"

import { useState, useRef } from "react";
import { PageTransition } from "@/components/page-transition";
import { Car, ArrowRight } from "lucide-react";
import { ChangeEvent } from "react";
import { handleFormSubmit } from "@/lib/form-utils";

export default function TransportBookingPage() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    pickupDate: "",
    returnDate: "",
    passengers: 1,
    vehicleType: "",
    pickupLocation: "",
    destination: "",
    requests: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await handleFormSubmit(
      e,
      form,
      "Car Hire Booking",
      setSubmitting,
      setSuccess,
      setError,
      () => {
        setForm({ name: "", contact: "", pickupDate: "", returnDate: "", passengers: 1, vehicleType: "", pickupLocation: "", destination: "", requests: "" });
        if (fileInputRef.current) (fileInputRef.current as HTMLInputElement).value = '';
      }
    );
  };

  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto py-12 px-4 animate-fade-in">
        <h1 className="text-3xl font-bold mb-6 flex items-center gap-2 text-blue-800"><Car className="w-7 h-7 text-blue-500" /> Car Hire Booking</h1>
        {success && (
          <div className="mb-4 p-4 bg-blue-100 text-blue-800 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="font-semibold">Success!</span>
            </div>
            <p className="mt-1">Booking submitted successfully! We've opened WhatsApp and your email client. We'll contact you soon.</p>
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
            <label className="block text-sm font-medium mb-1">Contact (Email or Phone)</label>
            <input type="text" name="contact" value={form.contact} onChange={handleChange} required className="w-full border rounded p-2" placeholder="Enter your email or phone number*" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Pickup Date</label>
              <input type="date" name="pickupDate" value={form.pickupDate} onChange={handleChange} required className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Return Date</label>
              <input type="date" name="returnDate" value={form.returnDate} onChange={handleChange} required className="w-full border rounded p-2" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Number of Passengers</label>
              <input type="number" name="passengers" value={form.passengers} onChange={handleChange} min={1} required className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Vehicle Type</label>
              <select name="vehicleType" value={form.vehicleType} onChange={handleChange} required className="w-full border rounded p-2">
                <option value="">Select Vehicle Type</option>
                <option value="SUV (4x4)">SUV (4x4)</option>
                <option value="Saloon Car">Saloon Car</option>
                <option value="Van/Minibus">Van/Minibus</option>
                <option value="Luxury Car">Luxury Car</option>
                <option value="Truck/Pickup">Truck/Pickup</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Pickup Location</label>
              <input type="text" name="pickupLocation" value={form.pickupLocation} onChange={handleChange} required className="w-full border rounded p-2" placeholder="Enter pickup location*" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Destination</label>
              <input type="text" name="destination" value={form.destination} onChange={handleChange} required className="w-full border rounded p-2" placeholder="Enter destination*" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Special Requests</label>
            <textarea name="requests" value={form.requests} onChange={handleChange} className="w-full border rounded p-2" placeholder="Any special requests? (Optional)" />
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60" disabled={submitting}>
            {submitting ? 'Submitting...' : <><ArrowRight className="w-5 h-5" /> Submit </>}
          </button>
        </form>
      </div>
    </PageTransition>
  );
}
