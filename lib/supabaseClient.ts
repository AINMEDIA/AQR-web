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