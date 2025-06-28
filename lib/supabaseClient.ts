import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env.local file.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Helper functions for common operations
export const auth = supabase.auth
export const storage = supabase.storage
export const db = supabase.from

// Custom auth helpers
export const signUp = async (email: string, password: string, metadata?: any) => {
  const { data, error } = await auth.signUp({
    email,
    password,
    options: {
      data: metadata
    }
  })
  return { data, error }
}

export const signIn = async (email: string, password: string) => {
  const { data, error } = await auth.signInWithPassword({
    email,
    password
  })
  return { data, error }
}

export const signOut = async () => {
  const { error } = await auth.signOut()
  return { error }
}

export const getUser = async () => {
  const { data: { user }, error } = await auth.getUser()
  return { user, error }
}

export const getSession = async () => {
  const { data: { session }, error } = await auth.getSession()
  return { session, error }
}

// Database helpers
export const getJobs = async () => {
  const { data, error } = await db('jobs').select('*').eq('status', 'open')
  return { data, error }
}

export const createJob = async (jobData: any) => {
  const { data, error } = await db('jobs').insert(jobData).select()
  return { data, error }
}

export const updateJob = async (id: string, updates: any) => {
  const { data, error } = await db('jobs').update(updates).eq('id', id).select()
  return { data, error }
}

export const deleteJob = async (id: string) => {
  const { error } = await db('jobs').delete().eq('id', id)
  return { error }
}

// User profile helpers
export const getUserProfile = async (userId: string) => {
  const { data, error } = await db('profiles').select('*').eq('user_id', userId).single()
  return { data, error }
}

export const createUserProfile = async (profileData: any) => {
  const { data, error } = await db('profiles').insert(profileData).select()
  return { data, error }
}

export const updateUserProfile = async (userId: string, updates: any) => {
  const { data, error } = await db('profiles').update(updates).eq('user_id', userId).select()
  return { data, error }
}

// Application helpers
export const getApplications = async (userId: string) => {
  const { data, error } = await db('applications')
    .select(`
      *,
      jobs (*)
    `)
    .eq('applicant_id', userId)
  return { data, error }
}

export const createApplication = async (applicationData: any) => {
  const { data, error } = await db('applications').insert(applicationData).select()
  return { data, error }
}

export const updateApplication = async (id: string, updates: any) => {
  const { data, error } = await db('applications').update(updates).eq('id', id).select()
  return { data, error }
}

// Employer helpers
export const getEmployerJobs = async (employerId: string) => {
  const { data, error } = await db('jobs')
    .select(`
      *,
      applications (*)
    `)
    .eq('employer_id', employerId)
  return { data, error }
}

export const getJobApplications = async (jobId: string) => {
  const { data, error } = await db('applications')
    .select(`
      *,
      users (id, email, full_name)
    `)
    .eq('job_id', jobId)
  return { data, error }
}

// Storage helpers
export const uploadFile = async (bucket: string, path: string, file: File) => {
  const { data, error } = await storage.from(bucket).upload(path, file)
  return { data, error }
}

export const getFileUrl = (bucket: string, path: string) => {
  const { data } = storage.from(bucket).getPublicUrl(path)
  return data.publicUrl
}

export const deleteFile = async (bucket: string, path: string) => {
  const { error } = await storage.from(bucket).remove([path])
  return { error }
} 