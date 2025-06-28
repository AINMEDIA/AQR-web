"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { FadeIn } from "@/components/FadeIn"
import { supabase } from "@/lib/supabaseClient"

const NAV = [
  { key: "dashboard", label: "Dashboard" },
  { key: "jobs", label: "Manage Jobs" },
  { key: "users", label: "Manage Users" },
  { key: "settings", label: "Settings" },
]

export default function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [checked, setChecked] = useState(false)
  const [section, setSection] = useState("dashboard")
  const [jobs, setJobs] = useState<any[]>([])
  const [users, setUsers] = useState<any[]>([])
  const [loadingJobs, setLoadingJobs] = useState(false)
  const [loadingUsers, setLoadingUsers] = useState(false)

  useEffect(() => {
    async function checkAdmin() {
      const { data: { user }, error } = await supabase.auth.getUser()
      if (!user) {
        setIsAdmin(false)
        setChecked(true)
        return
      }
      const { data: profile } = await supabase
        .from('users')
        .select('role')
        .eq('id', user.id)
        .single()
      setIsAdmin(profile?.role === 'admin')
      setChecked(true)
    }
    checkAdmin()
  }, [])

  // Fetch jobs
  useEffect(() => {
    if (section === "jobs") {
      setLoadingJobs(true)
      supabase
        .from('jobs')
        .select('*')
        .then(({ data }) => {
          setJobs(data || [])
          setLoadingJobs(false)
        })
    }
  }, [section])

  // Fetch users
  useEffect(() => {
    if (section === "users") {
      setLoadingUsers(true)
      supabase
        .from('users')
        .select('id, email, role')
        .then(({ data }) => {
          setUsers(data || [])
          setLoadingUsers(false)
        })
    }
  }, [section])

  if (!checked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-lg text-gray-600 animate-pulse">Checking admin access...</div>
      </div>
    )
  }
  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <Card className="max-w-md w-full text-center">
          <CardContent className="p-8">
            <h1 className="text-2xl font-bold mb-4 text-red-600">Access Denied</h1>
            <p className="mb-6">You do not have permission to view this page.</p>
            <Button asChild>
              <Link href="/">Go to Homepage</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r flex flex-col p-6 min-h-screen">
        <h2 className="text-xl font-bold mb-8">Admin Panel</h2>
        <nav className="flex flex-col gap-4">
          {NAV.map((item) => (
            <button
              key={item.key}
              className={`text-left font-medium px-2 py-1 rounded transition-colors ${section === item.key ? "text-blue-700 bg-blue-100" : "text-gray-700 hover:bg-gray-100"}`}
              onClick={() => setSection(item.key)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="mt-auto pt-8">
          <Button asChild variant="outline" className="w-full">
            <Link href="/">Back to Site</Link>
          </Button>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-10">
        <FadeIn>
          {section === "dashboard" && (
            <>
              <h1 className="text-3xl font-bold mb-6">Welcome, Admin!</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold mb-2">{jobs.length}</div>
                    <div className="text-gray-600">Jobs Posted</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold mb-2">{users.length}</div>
                    <div className="text-gray-600">Users</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold mb-2">0</div>
                    <div className="text-gray-600">Pending Requests</div>
                  </CardContent>
                </Card>
              </div>
              <p className="text-lg text-gray-700">Use the sidebar to manage jobs, users, and site settings.</p>
            </>
          )}
          {section === "jobs" && (
            <>
              <h1 className="text-2xl font-bold mb-6">Manage Jobs</h1>
              {loadingJobs ? (
                <div className="text-gray-600 animate-pulse">Loading jobs...</div>
              ) : jobs.length === 0 ? (
                <div className="text-gray-500">No jobs found.</div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {jobs.map((job) => (
                    <Card key={job.id}>
                      <CardContent className="p-6">
                        <div className="font-bold text-lg mb-2">{job.title}</div>
                        <div className="text-gray-700 mb-1">{job.company}</div>
                        <div className="text-gray-500 text-sm mb-2">{job.location}</div>
                        <div className="text-gray-500 text-xs mb-2">{job.type} | {job.salary}</div>
                        <div className="text-gray-400 text-xs">Posted: {job.posted}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </>
          )}
          {section === "users" && (
            <>
              <h1 className="text-2xl font-bold mb-6">Manage Users</h1>
              {loadingUsers ? (
                <div className="text-gray-600 animate-pulse">Loading users...</div>
              ) : users.length === 0 ? (
                <div className="text-gray-500">No users found.</div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {users.map((user) => (
                    <Card key={user.id}>
                      <CardContent className="p-6">
                        <div className="font-bold text-lg mb-2">{user.email}</div>
                        <div className="text-gray-700 mb-1">Role: {user.role || 'user'}</div>
                        <div className="text-gray-400 text-xs">ID: {user.id}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </>
          )}
          {section === "settings" && (
            <>
              <h1 className="text-2xl font-bold mb-6">Settings</h1>
              <div className="text-gray-500">Settings section coming soon.</div>
            </>
          )}
        </FadeIn>
      </main>
    </div>
  )
} 