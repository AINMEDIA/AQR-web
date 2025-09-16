import { notFound } from 'next/navigation';
import jobsData from '@/data/jobs.json';
import JobDetailsClient from './job-details-client';
import { JobPostingSchema } from '@/components/seo/structured-data';
import { Breadcrumb } from '@/components/seo/breadcrumb';

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

export default async function JobDetailsPage({ params }: PageProps) {
  const { id } = await params;
  
  // Find the job data
  const job = jobsData.find(job => job.id === parseInt(id));
  
  if (!job) {
    notFound();
  }

  const currentDate = new Date().toISOString();
  const validThrough = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(); // 30 days from now

  return (
    <>
      <JobPostingSchema
        title={job.title}
        description={job.description}
        company={job.company}
        location={job.location}
        employmentType={job.type}
        salary={job.salary}
        datePosted={currentDate}
        validThrough={validThrough}
        url={`https://atlantisquestandreality.com/jobs/${job.id}`}
        requirements={job.requirements}
        benefits={job.benefits}
      />
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb items={[
          { name: "Jobs", url: "/jobs" },
          { name: job.title, url: `/jobs/${job.id}` }
        ]} />
      </div>
      <JobDetailsClient job={job} />
    </>
  );
} 