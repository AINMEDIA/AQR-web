import { create } from 'zustand';

// Define types locally for static site
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

interface Application {
  id: number;
  jobId: number;
  applicantName: string;
  applicantEmail: string;
  applicantPhone: string;
  resume: string;
  coverLetter: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  appliedAt: string;
}

interface JobsState {
  jobs: Job[];
  myJobs: Job[];
  applications: Application[];
  currentJob: Job | null;
  isLoading: boolean;
  error: string | null;
  filters: {
    search: string;
    location: string;
    jobType: string;
  };
}

interface JobsActions {
  getJobs: (params?: {
    skip?: number;
    limit?: number;
    search?: string;
    location?: string;
    job_type?: string;
  }) => Promise<void>;
  getJob: (jobId: string) => Promise<void>;
  createJob: (jobData: {
    title: string;
    company: string;
    location: string;
    type: string;
    salary?: string;
    description: string;
    requirements?: string;
    tags?: string;
    featured?: boolean;
  }) => Promise<Job>;
  updateJob: (jobId: string, jobData: Partial<Job>) => Promise<void>;
  deleteJob: (jobId: string) => Promise<void>;
  getMyJobs: () => Promise<void>;
  applyToJob: (jobId: string, coverLetter?: string) => Promise<void>;
  getMyApplications: () => Promise<void>;
  setFilters: (filters: Partial<JobsState['filters']>) => void;
  clearError: () => void;
  setLoading: (loading: boolean) => void;
}

type JobsStore = JobsState & JobsActions;

export const useJobsStore = create<JobsStore>((set, get) => ({
  // State
  jobs: [],
  myJobs: [],
  applications: [],
  currentJob: null,
  isLoading: false,
  error: null,
  filters: {
    search: '',
    location: '',
    jobType: 'all',
  },

  // Actions
  getJobs: async (params) => {
    set({ isLoading: true, error: null });
    try {
      // Mock API call for static site
      const jobs: Job[] = [];
      set({ jobs, isLoading: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Failed to fetch jobs',
        isLoading: false,
      });
    }
  },

  getJob: async (jobId) => {
    set({ isLoading: true, error: null });
    try {
      // Mock API call for static site
      const job: Job | null = null;
      set({ currentJob: job, isLoading: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Failed to fetch job',
        isLoading: false,
      });
    }
  },

  createJob: async (jobData) => {
    set({ isLoading: true, error: null });
    try {
      // Mock API call for static site
      const job: Job = { 
        id: Date.now(),
        title: jobData.title || '',
        company: jobData.company || '',
        location: jobData.location || '',
        type: jobData.type || '',
        salary: jobData.salary || '',
        description: jobData.description || '',
        requirements: Array.isArray(jobData.requirements) ? jobData.requirements : (jobData.requirements ? [jobData.requirements] : []),
        benefits: [],
        category: 'General'
      };
      set((state) => ({
        jobs: [job, ...state.jobs],
        myJobs: [job, ...state.myJobs],
        isLoading: false,
      }));
      return job;
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Failed to create job',
        isLoading: false,
      });
      throw error;
    }
  },

  updateJob: async (jobId, jobData) => {
    set({ isLoading: true, error: null });
    try {
      // Mock API call for static site
      const updatedJob: Job = { 
        id: typeof jobId === 'string' ? parseInt(jobId) : jobId,
        title: jobData.title || '',
        company: jobData.company || '',
        location: jobData.location || '',
        type: jobData.type || '',
        salary: jobData.salary || '',
        description: jobData.description || '',
        requirements: Array.isArray(jobData.requirements) ? jobData.requirements : (jobData.requirements ? [jobData.requirements] : []),
        benefits: [],
        category: 'General'
      };
      set((state) => ({
        jobs: state.jobs.map((job) => (job.id === (typeof jobId === 'string' ? parseInt(jobId) : jobId) ? updatedJob : job)),
        myJobs: state.myJobs.map((job) => (job.id === (typeof jobId === 'string' ? parseInt(jobId) : jobId) ? updatedJob : job)),
        currentJob: state.currentJob?.id === (typeof jobId === 'string' ? parseInt(jobId) : jobId) ? updatedJob : state.currentJob,
        isLoading: false,
      }));
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Failed to update job',
        isLoading: false,
      });
      throw error;
    }
  },

  deleteJob: async (jobId) => {
    set({ isLoading: true, error: null });
    try {
      // Mock API call for static site
      console.log('Mock delete job:', jobId);
      set((state) => ({
        jobs: state.jobs.filter((job) => job.id !== (typeof jobId === 'string' ? parseInt(jobId) : jobId)),
        myJobs: state.myJobs.filter((job) => job.id !== (typeof jobId === 'string' ? parseInt(jobId) : jobId)),
        isLoading: false,
      }));
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Failed to delete job',
        isLoading: false,
      });
      throw error;
    }
  },

  getMyJobs: async () => {
    set({ isLoading: true, error: null });
    try {
      // Mock API call for static site
      const myJobs: Job[] = [];
      set({ myJobs, isLoading: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Failed to fetch your jobs',
        isLoading: false,
      });
    }
  },

  applyToJob: async (jobId, coverLetter) => {
    set({ isLoading: true, error: null });
    try {
      // Mock API call for static site
      const application: Application = {
        id: Date.now(),
        jobId: typeof jobId === 'string' ? parseInt(jobId) : jobId,
        applicantName: 'Mock User',
        applicantEmail: 'mock@example.com',
        applicantPhone: '123-456-7890',
        resume: 'mock-resume.pdf',
        coverLetter: coverLetter || '',
        status: 'pending',
        appliedAt: new Date().toISOString(),
      };
      set((state) => ({
        applications: [application, ...state.applications],
        isLoading: false,
      }));
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Failed to apply to job',
        isLoading: false,
      });
      throw error;
    }
  },

  getMyApplications: async () => {
    set({ isLoading: true, error: null });
    try {
      // Mock API call for static site
      const applications: Application[] = [];
      set({ applications, isLoading: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Failed to fetch applications',
        isLoading: false,
      });
    }
  },

  setFilters: (filters) => {
    set((state) => ({
      filters: { ...state.filters, ...filters },
    }));
  },

  clearError: () => set({ error: null }),
  setLoading: (loading) => set({ isLoading: loading }),
}));