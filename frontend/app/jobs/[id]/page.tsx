import { notFound } from 'next/navigation';
import jobsData from '@/data/jobs.json';
import JobDetailsClient from './job-details-client';

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

interface PageProps {
  params: {
    id: string;
  };
}

// Generate static params for all job IDs
export async function generateStaticParams() {
  return jobsData.map((job) => ({
    id: job.id.toString(),
  }));
}

export default function JobDetailsPage({ params }: PageProps) {
  const { id } = params;
  
  // Find the job data
  const job = jobsData.find(job => job.id === parseInt(id));
  
  if (!job) {
    notFound();
  }

  return <JobDetailsClient job={job} />;
} 