'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { useRef, useState } from 'react';

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

interface JobDetailsClientProps {
  job: Job;
}

export default function JobDetailsClient({ job }: JobDetailsClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const showApplyModal = searchParams.get('apply') === '1';
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [coverLetter, setCoverLetter] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!job) return;
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('cover_letter', coverLetter);
      if (file) formData.append('file', file);
      const res = await fetch(`/api/jobs/${job.id}/apply`, {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.detail || 'Failed to apply');
      }
      toast({ title: 'Application submitted!', description: 'Your application has been received.' });
      setCoverLetter('');
      setFile(null);
      router.replace(`/jobs/${job.id}`);
    } catch (err: any) {
      toast({ title: 'Error', description: err.message || 'Failed to apply', variant: 'destructive' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <p className="mb-2 text-gray-700">{job.description}</p>
      <div className="mb-2">Company: <span className="font-semibold">{job.company}</span></div>
      <div className="mb-2">Location: {job.location}</div>
      <div className="mb-2">Type: {job.type}</div>
      <div className="mb-2">Salary: {job.salary}</div>
      <div className="mb-2">Category: {job.category}</div>
      
      {job.requirements && job.requirements.length > 0 && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Requirements:</h3>
          <ul className="list-disc list-inside space-y-1">
            {job.requirements.map((req, index) => (
              <li key={index} className="text-gray-700">{req}</li>
            ))}
          </ul>
        </div>
      )}
      
      {job.benefits && job.benefits.length > 0 && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Benefits:</h3>
          <ul className="list-disc list-inside space-y-1">
            {job.benefits.map((benefit, index) => (
              <li key={index} className="text-gray-700">{benefit}</li>
            ))}
          </ul>
        </div>
      )}
      
      <Dialog open={showApplyModal} onOpenChange={(open) => { if (!open) router.replace(`/jobs/${job.id}`); }}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Apply for {job?.title}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleApply} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Cover Letter</label>
              <textarea
                className="w-full border rounded p-2"
                rows={4}
                value={coverLetter}
                onChange={e => setCoverLetter(e.target.value)}
                placeholder="Write a brief cover letter (optional)"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Travel Document (PDF, JPG, PNG, max 5MB)</label>
              <input
                type="file"
                accept=".pdf,image/jpeg,image/png"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="block w-full border rounded p-2"
              />
            </div>
            <div className="flex gap-2 justify-end">
              <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Submit Application'}
              </button>
              <DialogClose asChild>
                <button type="button" className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">Cancel</button>
              </DialogClose>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
} 