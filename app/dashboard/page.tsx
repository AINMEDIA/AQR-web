'use client'

import { ProtectedRoute } from '@/components/auth/protected-route'
import { useAuthContext } from '@/components/auth-provider'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { User, Briefcase, FileText, Settings, Users, Building, Plus, Upload } from 'lucide-react'
import { useState, useEffect } from 'react'
import { getJobs, getEmployerJobs, getApplications } from '@/lib/supabaseClient'
import { JobForm } from '@/components/jobs/job-form'
import { ProfileForm } from '@/components/profile/profile-form'
import { ResumeUpload } from '@/components/resume/resume-upload'
import Link from 'next/link'

export default function DashboardPage() {
  const { user } = useAuthContext()
  const [userRole, setUserRole] = useState<string>('user')
  const [jobs, setJobs] = useState<any[]>([])
  const [applications, setApplications] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showJobForm, setShowJobForm] = useState(false)
  const [showProfileForm, setShowProfileForm] = useState(false)
  const [showResumeUpload, setShowResumeUpload] = useState(false)
  const [showAdminJobForm, setShowAdminJobForm] = useState(false)

  useEffect(() => {
    if (user) {
      loadUserData()
    }
  }, [user])

  const loadUserData = async () => {
    if (!user) return
    
    try {
      // Get user role from metadata or profile
      const role = user.user_metadata?.role || 'user'
      setUserRole(role)

      // Load data based on role
      if (role === 'employer') {
        const { data: employerJobs } = await getEmployerJobs(user.id)
        setJobs(employerJobs || [])
      } else if (role === 'worker') {
        const { data: userApplications } = await getApplications(user.id)
        setApplications(userApplications || [])
      } else {
        // Admin or general user - load all jobs
        const { data: allJobs } = await getJobs()
        setJobs(allJobs || [])
      }
    } catch (error) {
      console.error('Error loading user data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleJobCreated = () => {
    setShowJobForm(false)
    loadUserData() // Reload data to show new job
  }

  const renderAdminSection = () => (
    <TabsContent value="admin" className="space-y-6">
      {userRole !== 'admin' ? (
        <div className="text-red-600 font-bold text-center py-8">You are not authorized to access admin features.</div>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Admin: Manage Jobs</h2>
            <Dialog open={showAdminJobForm} onOpenChange={setShowAdminJobForm}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Create New Job
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Create New Job</DialogTitle>
                </DialogHeader>
                <JobForm onSuccess={handleJobCreated} onCancel={() => setShowAdminJobForm(false)} />
              </DialogContent>
            </Dialog>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <Card key={job.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{job.title}</CardTitle>
                  <CardDescription>{job.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Status:</span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        job.status === 'open' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {job.status}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Applications:</span>
                      <span>{job.applications?.length || 0}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Posted:</span>
                      <span>{new Date(job.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}
    </TabsContent>
  )

  const renderEmployerSection = () => (
    <TabsContent value="employer" className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">My Job Postings</h2>
        <Dialog open={showJobForm} onOpenChange={setShowJobForm}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Post New Job
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Post New Job</DialogTitle>
            </DialogHeader>
            <JobForm onSuccess={handleJobCreated} onCancel={() => setShowJobForm(false)} />
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <Card key={job.id}>
            <CardHeader>
              <CardTitle className="text-lg">{job.title}</CardTitle>
              <CardDescription>{job.location}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Status:</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    job.status === 'open' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {job.status}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Applications:</span>
                  <span>{job.applications?.length || 0}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Posted:</span>
                  <span>{new Date(job.created_at).toLocaleDateString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </TabsContent>
  )

  const renderWorkerSection = () => (
    <TabsContent value="worker" className="space-y-6">
      <h2 className="text-2xl font-bold">My Applications</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.map((application) => (
          <Card key={application.id}>
            <CardHeader>
              <CardTitle className="text-lg">{application.jobs?.title}</CardTitle>
              <CardDescription>{application.jobs?.location}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Status:</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    application.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    application.status === 'accepted' ? 'bg-green-100 text-green-800' :
                    application.status === 'rejected' ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {application.status}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Applied:</span>
                  <span>{new Date(application.created_at).toLocaleDateString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </TabsContent>
  )

  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Welcome back, {user?.email}
            {userRole !== 'user' && (
              <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
              </span>
            )}
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            {userRole === 'admin' && <TabsTrigger value="admin">Admin</TabsTrigger>}
            {userRole === 'employer' && <TabsTrigger value="employer">My Jobs</TabsTrigger>}
            {userRole === 'worker' && <TabsTrigger value="worker">Applications</TabsTrigger>}
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Profile</CardTitle>
                  <User className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Complete</div>
                  <p className="text-xs text-muted-foreground">
                    Your profile is up to date
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {userRole === 'employer' ? 'Jobs Posted' : 'Jobs Applied'}
                  </CardTitle>
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {userRole === 'employer' ? jobs.length : applications.length}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {userRole === 'employer' ? 'Active postings' : 'Total applications'}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Resume</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Not Uploaded</div>
                  <p className="text-xs text-muted-foreground">
                    Upload your resume to get started
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Settings</CardTitle>
                  <Settings className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/settings">
                      Manage Account
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>
                    Your latest actions and updates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">Account created</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date().toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>
                    Common tasks and shortcuts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link href="/jobs">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Browse Jobs
                      </Link>
                    </Button>
                    <Dialog open={showResumeUpload} onOpenChange={setShowResumeUpload}>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full justify-start">
                          <Upload className="mr-2 h-4 w-4" />
                          Upload Resume
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Upload Resume</DialogTitle>
                        </DialogHeader>
                        <ResumeUpload />
                      </DialogContent>
                    </Dialog>
                    <Dialog open={showProfileForm} onOpenChange={setShowProfileForm}>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full justify-start">
                          <User className="mr-2 h-4 w-4" />
                          Edit Profile
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>Edit Profile</DialogTitle>
                        </DialogHeader>
                        <ProfileForm />
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {userRole === 'admin' && renderAdminSection()}
          {userRole === 'employer' && renderEmployerSection()}
          {userRole === 'worker' && renderWorkerSection()}

          <TabsContent value="profile" className="space-y-6">
            <ProfileForm />
          </TabsContent>
        </Tabs>
      </div>
    </ProtectedRoute>
  )
}
