"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { Search, MapPin, Briefcase, Clock, DollarSign, Filter, Star, Building, ArrowRight, Loader2, Zap, Target, Heart, Globe, Users } from "lucide-react"
import Link from "next/link"
import { FadeIn } from "@/components/FadeIn"
import { ProminentCTA } from "@/components/prominent-cta"
import jobsData from "@/data/jobs.json"

// Define Job interface locally since we're not using the API
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
  tags?: string;
  featured?: boolean;
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [locationFilter, setLocationFilter] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  // Load static jobs data
  useEffect(() => {
    setLoading(true)
    // Use static data instead of API call
    setJobs(jobsData as Job[])
    setLoading(false)
  }, [])

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (job.tags && job.tags.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesLocation = !locationFilter || job.location.toLowerCase().includes(locationFilter.toLowerCase())
    const matchesType = typeFilter === "all" || job.type === typeFilter

    return matchesSearch && matchesLocation && matchesType
  })

  return (
    <PageTransition>
      <div className="animate-fade-in">
        <section className="animate-slide-up" data-aos="fade-up">
          {/* Hero Section */}
          <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden" data-aos="zoom-in">
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="w-full min-h-[800px] flex items-center justify-center relative rounded-br-[400px] md:rounded-br-[600px] lg:rounded-br-[800px]"
                style={{
                  backgroundImage: "url('/images/jobs-hero.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                  backgroundRepeat: 'no-repeat',
                }}
                data-aos="fade-in"
              />
            </div>
            {/* Logo halfway down, offset left */}
            {/* <div className="absolute z-20 left-[4cm] top-1/2 -translate-y-1/2 transition-all duration-700 group-hover:scale-110" data-aos="fade-right">
              <img src="/android-chrome-192x192.png" alt="AQR-Web Logo" className="h-40 w-40 animate-logo-breathe" />
            </div> */}
            {/* Centered Content */}
            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center" data-aos="fade-up">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold mb-2 text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]" style={{fontStyle: 'italic'}}>
                Find Jobs
              </h1>
              <p className="text-sm md:text-lg lg:text-2xl text-white/90 mb-6 max-w-2xl mx-auto transition-all duration-700">
                Explore overseas job opportunities for skilled and unskilled workers from East Africa. Connect with reputable employers in the Middle East, Europe, and Asia.
              </p>
            </div>
          </section>
        </section>

        {/* Job Categories Grid */}
        <section className="py-16 bg-white animate-fade-in-delay">
          <div className="w-full mx-auto px-2 animate-scale-in">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 transition-all duration-700 hover:text-blue-700 hover:scale-105 cursor-default">Popular Job Categories</h2>
              <p className="text-sm md:text-lg lg:text-xl text-muted-foreground transition-all duration-700">Explore opportunities across various industries</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
              {/* Construction */}
              <div 
                className="relative h-48 md:h-96 md:min-h-[24rem] rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 group cursor-pointer overflow-hidden
                   hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:border-4 hover:border-blue-400
                   hover:brightness-110 hover:saturate-150 bg-gradient-to-br from-blue-50 to-blue-100"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-blue-400/10 to-transparent group-hover:from-blue-900/40 group-hover:via-blue-400/20 group-hover:to-transparent transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-80 transition-all duration-500 pointer-events-none">
                  <Building className="w-8 h-8 md:w-16 md:h-16 text-blue-600/80 group-hover:text-blue-500 animate-bounce" />
                </div>
                <div className="relative z-10 p-3 md:p-6 flex flex-col justify-end h-full">
                  <h3 className="text-sm md:text-xl font-extrabold text-blue-800 mb-1 md:mb-2 drop-shadow-lg transition-all duration-700
                    group-hover:text-blue-700 group-hover:scale-110 group-hover:-translate-y-2 group-hover:drop-shadow-[0_0_16px_rgba(59,130,246,0.7)]">
                    Construction
                  </h3>
                  <p className="text-blue-700 text-xs md:text-sm transition-all duration-700 opacity-90 group-hover:opacity-100">Skilled construction professionals</p>
                </div>
              </div>

              {/* Healthcare */}
              <div 
                className="relative h-48 md:h-96 md:min-h-[24rem] rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 group cursor-pointer overflow-hidden
                   hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:border-4 hover:border-blue-400
                   hover:brightness-110 hover:saturate-150 bg-gradient-to-br from-blue-100 to-blue-200"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-blue-400/10 to-transparent group-hover:from-blue-900/40 group-hover:via-blue-400/20 group-hover:to-transparent transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-80 transition-all duration-500 pointer-events-none">
                  <Heart className="w-8 h-8 md:w-16 md:h-16 text-blue-600/80 group-hover:text-blue-500 animate-bounce" />
                </div>
                <div className="relative z-10 p-3 md:p-6 flex flex-col justify-end h-full">
                  <h3 className="text-sm md:text-xl font-extrabold text-blue-800 mb-1 md:mb-2 drop-shadow-lg transition-all duration-700
                    group-hover:text-blue-700 group-hover:scale-110 group-hover:-translate-y-2 group-hover:drop-shadow-[0_0_16px_rgba(59,130,246,0.7)]">
                    Healthcare
                  </h3>
                  <p className="text-blue-700 text-xs md:text-sm transition-all duration-700 opacity-90 group-hover:opacity-100">Medical and care professionals</p>
                </div>
              </div>

              {/* Hospitality */}
              <div 
                className="relative h-48 md:h-96 md:min-h-[24rem] rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 group cursor-pointer overflow-hidden
                   hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:border-4 hover:border-blue-400
                   hover:brightness-110 hover:saturate-150 bg-gradient-to-br from-blue-200 to-blue-300"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-blue-400/10 to-transparent group-hover:from-blue-900/40 group-hover:via-blue-400/20 group-hover:to-transparent transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-80 transition-all duration-500 pointer-events-none">
                  <Star className="w-8 h-8 md:w-16 md:h-16 text-blue-600/80 group-hover:text-blue-500 animate-bounce" />
                </div>
                <div className="relative z-10 p-3 md:p-6 flex flex-col justify-end h-full">
                  <h3 className="text-sm md:text-xl font-extrabold text-blue-800 mb-1 md:mb-2 drop-shadow-lg transition-all duration-700
                    group-hover:text-blue-700 group-hover:scale-110 group-hover:-translate-y-2 group-hover:drop-shadow-[0_0_16px_rgba(59,130,246,0.7)]">
                    Hospitality
                  </h3>
                  <p className="text-blue-700 text-xs md:text-sm transition-all duration-700 opacity-90 group-hover:opacity-100">Hotel and service industry</p>
                </div>
              </div>

              {/* Technology */}
              <div 
                className="relative h-48 md:h-96 md:min-h-[24rem] rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 group cursor-pointer overflow-hidden
                   hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:border-4 hover:border-blue-400
                   hover:brightness-110 hover:saturate-150 bg-gradient-to-br from-blue-300 to-blue-400"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-blue-400/10 to-transparent group-hover:from-blue-900/40 group-hover:via-blue-400/20 group-hover:to-transparent transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-80 transition-all duration-500 pointer-events-none">
                  <Zap className="w-8 h-8 md:w-16 md:h-16 text-blue-600/80 group-hover:text-blue-500 animate-bounce" />
                </div>
                <div className="relative z-10 p-3 md:p-6 flex flex-col justify-end h-full">
                  <h3 className="text-sm md:text-xl font-extrabold text-blue-800 mb-1 md:mb-2 drop-shadow-lg transition-all duration-700
                    group-hover:text-blue-700 group-hover:scale-110 group-hover:-translate-y-2 group-hover:drop-shadow-[0_0_16px_rgba(59,130,246,0.7)]">
                    Technology
                  </h3>
                  <p className="text-blue-700 text-xs md:text-sm transition-all duration-700 opacity-90 group-hover:opacity-100">IT and software development</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="animate-slide-up">
          {/* Header Section */}
          <section className="pb-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white mt-16">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 hover:text-blue-200 hover:scale-105 cursor-default text-center">Overseas Job Opportunities</h1>
              <p className="text-xl text-blue-100 mb-4 max-w-2xl mx-auto transition-all duration-700">
                AQR Atlantis Quest & Reality U Ltd connects skilled and unskilled workers from Uganda, Kenya, and East Africa with reputable employers in the Middle East, Europe, and Asia. Explore opportunities in construction, hospitality, healthcare, domestic work, security, transportation, and more.
              </p>
              <p className="text-md text-blue-200 mb-8 max-w-2xl mx-auto italic transition-all duration-700">
                Note: The jobs below are sample listings. For the latest openings, please contact us or check back regularly.
              </p>
              {/* Search Bar */}
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg p-4 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-4 hover:border-blue-400 group cursor-pointer">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-all duration-300 group-hover:text-blue-500" />
                      <Input
                        placeholder="Job title, keywords, or company"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 h-10 md:h-12 text-sm md:text-base text-gray-900 transition-all duration-300 hover:border-blue-400 focus:border-blue-500"
                      />
                    </div>
                    <div className="flex-1 relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-all duration-300 group-hover:text-blue-500" />
                      <Input
                        placeholder="Location"
                        value={locationFilter}
                        onChange={(e) => setLocationFilter(e.target.value)}
                        className="pl-10 h-10 md:h-12 text-sm md:text-base text-gray-900 transition-all duration-300 hover:border-blue-400 focus:border-blue-500"
                      />
                    </div>
                    <Button size="sm" className="h-10 md:h-12 px-4 md:px-8 text-xs md:text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-1 md:gap-2">
                      <Target className="w-3 h-3 md:w-4 md:h-4" />
                      <span className="hidden sm:inline">Search Jobs</span>
                      <span className="sm:hidden">Search</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        
        {/* Prominent CTA Section */}
        <ProminentCTA 
          title="Need Help Finding the Right Job?"
          subtitle="Contact us for personalized job matching and application assistance"
        />
        
        {/* Filters and Results */}
        <FadeIn delay={0.4}>
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar Filters */}
                <div className="lg:w-64 space-y-6">
                  <Card className="transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-4 hover:border-blue-400 group cursor-pointer">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">
                        <Filter className="w-5 h-5" />
                        Filters
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Job Type</label>
                        <Select value={typeFilter} onValueChange={setTypeFilter}>
                          <SelectTrigger className="transition-all duration-300 hover:border-blue-400 focus:border-blue-500">
                            <SelectValue placeholder="All types" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All types</SelectItem>
                            <SelectItem value="Full-time">Full-time</SelectItem>
                            <SelectItem value="Part-time">Part-time</SelectItem>
                            <SelectItem value="Contract">Contract</SelectItem>
                            <SelectItem value="Freelance">Freelance</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Experience Level</label>
                        <Select>
                          <SelectTrigger className="transition-all duration-300 hover:border-blue-400 focus:border-blue-500">
                            <SelectValue placeholder="All levels" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="entry">Entry Level</SelectItem>
                            <SelectItem value="mid">Mid Level</SelectItem>
                            <SelectItem value="senior">Senior Level</SelectItem>
                            <SelectItem value="executive">Executive</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Salary Range</label>
                        <Select>
                          <SelectTrigger className="transition-all duration-300 hover:border-blue-400 focus:border-blue-500">
                            <SelectValue placeholder="Any salary" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-50k">$0 - $50,000</SelectItem>
                            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                            <SelectItem value="100k-150k">$100,000 - $150,000</SelectItem>
                            <SelectItem value="150k+">$150,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Job Listings */}
                <div className="flex-1">
                  <div className="mb-6 flex justify-between items-center">
                    <h2 className="text-lg md:text-xl lg:text-2xl font-bold transition-all duration-700 hover:text-blue-700 hover:scale-105 cursor-default">{filteredJobs.length} Jobs Found</h2>
                    <Select defaultValue="newest">
                      <SelectTrigger className="w-36 md:w-48 text-xs md:text-sm transition-all duration-300 hover:border-blue-400 focus:border-blue-500">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">Newest First</SelectItem>
                        <SelectItem value="oldest">Oldest First</SelectItem>
                        <SelectItem value="salary-high">Salary: High to Low</SelectItem>
                        <SelectItem value="salary-low">Salary: Low to High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:grid-cols-2 xl:grid-cols-3">
                    {loading ? (
                      <div className="flex items-center justify-center py-12 col-span-full">
                        <div className="flex items-center gap-2">
                          <Loader2 className="w-6 h-6 animate-spin" />
                          <span>Loading jobs...</span>
                        </div>
                      </div>
                    ) : (
                      filteredJobs.map((job, index) => (
                        <div
                          key={job.id}
                          className="animate-slide-up"
                          data-aos="zoom-in"
                          data-aos-delay={index * 100}
                        >
                          <Card className={`rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-4 hover:border-blue-400 group cursor-pointer ${job.featured ? "ring-2 ring-blue-200" : ""}`}>
                            <CardContent className="p-4 md:p-6">
                              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4">
                                <div className="flex-1">
                                  <div className="flex items-center gap-1 md:gap-2 mb-2">
                                    {job.featured && (
                                      <Badge className="bg-blue-100 text-blue-800 transition-all duration-300 group-hover:bg-blue-200 group-hover:scale-105 text-xs md:text-sm">
                                        Featured
                                      </Badge>
                                    )}
                                    <Badge variant="outline" className="transition-all duration-300 group-hover:scale-105 text-xs md:text-sm">
                                      {job.type}
                                    </Badge>
                                  </div>
                                  <h3 className="text-lg md:text-xl font-semibold mb-2 transition-all duration-700 group-hover:text-blue-700 group-hover:scale-105">{job.title}</h3>
                                  <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 transition-all duration-700 opacity-90 group-hover:opacity-100 line-clamp-2 md:line-clamp-none">{job.description}</p>
                                  <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm text-gray-500 transition-all duration-700 group-hover:text-gray-700">
                                    <span className="flex items-center gap-1 transition-all duration-300 group-hover:scale-105">
                                      <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                                      <span className="truncate">{job.location}</span>
                                    </span>
                                    <span className="flex items-center gap-1 transition-all duration-300 group-hover:scale-105">
                                      <Briefcase className="w-3 h-3 md:w-4 md:h-4" />
                                      <span className="truncate">{job.salary}</span>
                                    </span>
                                    <span className="flex items-center gap-1 transition-all duration-300 group-hover:scale-105">
                                      <Clock className="w-3 h-3 md:w-4 md:h-4" />
                                      <span className="truncate">{job.type}</span>
                                    </span>
                                  </div>
                                </div>
                                <div className="flex flex-col sm:flex-row md:flex-col gap-2 mt-2 md:mt-0">
                                  <Button 
                                    asChild 
                                    size="sm" 
                                    className="group/btn transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-1 md:gap-2 text-xs md:text-sm h-8 md:h-9"
                                  >
                                    <Link href={`/jobs/${job.id}`} className="flex items-center gap-1 md:gap-2">
                                      <Globe className="w-3 h-3 md:w-4 md:h-4 group-hover/btn:scale-110 group-hover/btn:animate-bounce transition-all duration-300" />
                                      <span className="hidden sm:inline">View Details</span>
                                      <span className="sm:hidden">Details</span>
                                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                  </Button>
                                  <Button 
                                    asChild
                                    variant="outline" 
                                    size="sm"
                                    className="transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-1 md:gap-2 group/apply hover:bg-blue-50 hover:border-blue-300 text-xs md:text-sm h-8 md:h-9"
                                  >
                                    <Link href={`/jobs/${job.id}/apply`} className="flex items-center gap-1 md:gap-2">
                                      <Users className="w-3 h-3 md:w-4 md:h-4 group-hover/apply:scale-110 group-hover/apply:animate-bounce transition-all duration-300" />
                                      <span className="hidden sm:inline">Apply Now</span>
                                      <span className="sm:hidden">Apply</span>
                                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4 opacity-0 group-hover/apply:opacity-100 group-hover/apply:translate-x-1 transition-all duration-300" />
                                    </Link>
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Load More */}
                  <div className="text-center mt-12">
                    <Button variant="outline" size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-blue-600 hover:border-blue-700">
                      <Zap className="w-5 h-5 group-hover:scale-110 group-hover:animate-bounce transition-all duration-300" />
                      Load More Jobs
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>
      </div>
      <Footer />
    </PageTransition>
  )
}
