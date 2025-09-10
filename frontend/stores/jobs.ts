import { create } from 'zustand';
import { jobsApi, Job, Application } from '@/lib/api';

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
      const jobs = await jobsApi.getJobs(params);
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
      const job = await jobsApi.getJob(jobId);
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
      const job = await jobsApi.createJob(jobData);
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
      const updatedJob = await jobsApi.updateJob(jobId, jobData);
      set((state) => ({
        jobs: state.jobs.map((job) => (job.id === jobId ? updatedJob : job)),
        myJobs: state.myJobs.map((job) => (job.id === jobId ? updatedJob : job)),
        currentJob: state.currentJob?.id === jobId ? updatedJob : state.currentJob,
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
      await jobsApi.deleteJob(jobId);
      set((state) => ({
        jobs: state.jobs.filter((job) => job.id !== jobId),
        myJobs: state.myJobs.filter((job) => job.id !== jobId),
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
      const myJobs = await jobsApi.getMyJobs();
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
      const application = await jobsApi.applyToJob(jobId, coverLetter);
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
      const applications = await jobsApi.getMyApplications();
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