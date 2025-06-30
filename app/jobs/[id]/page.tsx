import { supabase } from '@/lib/supabaseClient';
import { notFound } from 'next/navigation';

export default async function JobDetailsPage({ params }) {
  const { id } = params;
  // Fetch job from Supabase
  const { data: job, error } = await supabase
    .from('jobs')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !job) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <p className="mb-2 text-gray-700">{job.description}</p>
      <div className="mb-2">Employer: <span className="font-semibold">{job.employer_id}</span></div>
      <div className="mb-2">Location: {job.location}</div>
      <div className="mb-2">Type: {job.type}</div>
      <div className="mb-2">Status: {job.status}</div>
      <div className="mb-2">Posted: {job.created_at}</div>
      {/* Add more job fields as needed */}
    </div>
  );
} 