"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { PageTransition } from "@/components/page-transition";
import { Briefcase, ArrowRight } from "lucide-react";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
  category: string;
}

interface JobApplicationClientProps {
  job: Job;
}

export default function JobApplicationClient({ job }: JobApplicationClientProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    cv: null as File | null,
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (name === "cv" && files) {
      setForm({ ...form, cv: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
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
      const message = `Job Application for ${job.title}\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCover Letter: ${form.coverLetter}\nCV: [Please attach your CV to this WhatsApp chat]`;
      const whatsappUrl = `https://wa.me/256745174879?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      // Email setup
      const emailSubject = `Job Application for ${job.title} - ${form.name}`;
      const emailBody = `Job Application for ${job.title}\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCover Letter: ${form.coverLetter}\nCV: [Please attach your CV to this email]\n\n---\nThis message was sent from the AQR website.\n\nContact Information:\nEmail: atlantisquest4@gmail.com\nWhatsApp: +256745174879\nPhone: 0745174879`;
      const emailUrl = `mailto:atlantisquest4@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      
      setTimeout(() => {
        const whatsappUrl2 = `https://wa.me/256745174879?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl2, '_blank');
        // Open email client
        window.open(emailUrl, '_blank');
        setSubmitting(false);
      }, 1000);
      setForm({ name: "", email: "", phone: "", coverLetter: "", cv: null });
    }, 1000);
  };

  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto py-12 px-4 animate-fade-in">
        <h1 className="text-3xl font-bold mb-6 flex items-center gap-2 text-indigo-800">
          <Briefcase className="w-7 h-7 text-indigo-500 " /> 
          Job Application - {job.title}
        </h1>
        {success && (
          <div className="mb-4 p-4 bg-blue-100 text-blue-800 rounded-lg">Application submitted! We will contact you soon.</div>
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
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="w-full border rounded p-2" placeholder="Enter your phone number*" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">CV Upload</label>
            <input type="file" name="cv" accept=".pdf,.doc,.docx" onChange={handleChange} className="w-full border rounded p-2" />
            <p className="text-xs text-gray-500 mt-1">(You will be prompted to attach your CV in WhatsApp after submitting this form.)</p>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Cover Letter</label>
            <textarea name="coverLetter" value={form.coverLetter} onChange={handleChange} required className="w-full border rounded p-2" placeholder="Write your cover letter here..." />
          </div>
          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60" disabled={submitting}>
            {submitting ? 'Submitting...' : <><ArrowRight className="w-5 h-5" /> Submit</>}
          </button>
        </form>
      </div>
    </PageTransition>
  );
} 