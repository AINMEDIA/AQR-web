import { notFound } from 'next/navigation';
import jobsData from '@/data/jobs.json';
import JobApplicationClient from './job-application-client';

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
  params: Promise<{
    id: string;
  }>;
}

// Generate static params for all job IDs
export async function generateStaticParams() {
  return jobsData.map((job) => ({
    id: job.id.toString(),
  }));
}

export default async function JobApplicationPage({ params }: PageProps) {
  const { id } = await params;
  
  // Find the job data
  const job = jobsData.find(job => job.id === parseInt(id));
  
  if (!job) {
    notFound();
  }

  return <JobApplicationClient job={job} />;
} 