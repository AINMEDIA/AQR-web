"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { Search, MapPin, Briefcase, Clock, DollarSign, Filter, Star, Building } from "lucide-react"
import Link from "next/link"
import { FadeIn } from "@/components/FadeIn"

const jobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    posted: "2 days ago",
    description: "We are looking for a senior software engineer to join our growing team...",
    tags: ["React", "Node.js", "TypeScript", "AWS"],
    featured: true,
    image: "/images/jobs-hero.png",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "StartupXYZ",
    location: "New York, NY",
    type: "Full-time",
    salary: "$100,000 - $140,000",
    posted: "1 day ago",
    description: "Join our product team and help shape the future of our platform...",
    tags: ["Product Strategy", "Analytics", "Agile", "Leadership"],
    featured: false,
    image: "/images/find-labour-hero.png",
  },
  {
    id: 3,
    title: "UX Designer",
    company: "Design Studio",
    location: "Remote",
    type: "Contract",
    salary: "$80,000 - $100,000",
    posted: "3 days ago",
    description: "Create beautiful and intuitive user experiences for our clients...",
    tags: ["Figma", "User Research", "Prototyping", "Design Systems"],
    featured: false,
    image: "/images/services-hero.png",
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "Analytics Pro",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    posted: "1 week ago",
    description: "Analyze complex datasets and provide actionable insights...",
    tags: ["Python", "Machine Learning", "SQL", "Statistics"],
    featured: true,
    image: "/images/contact-hero.png",
  },
  {
    id: 5,
    title: "Marketing Manager",
    company: "Growth Co.",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$70,000 - $90,000",
    posted: "4 days ago",
    description: "Lead our marketing efforts and drive customer acquisition...",
    tags: ["Digital Marketing", "SEO", "Content Strategy", "Analytics"],
    featured: false,
    image: "/images/emergency-hero.png",
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$130,000 - $170,000",
    posted: "5 days ago",
    description: "Build and maintain our cloud infrastructure and deployment pipelines...",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    featured: false,
    image: "/images/office-worker.png",
  },
]

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [locationFilter, setLocationFilter] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesLocation = !locationFilter || job.location.toLowerCase().includes(locationFilter.toLowerCase())
    const matchesType = typeFilter === "all" || job.type === typeFilter

    return matchesSearch && matchesLocation && matchesType
  })

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
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
          />
        </div>
        {/* Logo halfway down, offset left */}
        <div className="absolute z-20 left-[4cm] top-1/2 -translate-y-1/2">
          <img src="/android-chrome-192x192.png" alt="AQR-Web Logo" className="h-40 w-40" />
        </div>
        {/* Centered Content */}
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
            className="relative z-10"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-2 text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]" style={{fontStyle: 'italic'}}>
              {/* Replace with your Jobs title */}
              Find Jobs
            </h1>
          </motion.div>
          <FadeIn delay={0.2}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg md:text-2xl text-white/90 mb-6 max-w-2xl mx-auto">
                Explore overseas job opportunities for skilled and unskilled workers from East Africa. Connect with reputable employers in the Middle East, Europe, and Asia.
              </p>
            </motion.div>
          </FadeIn>
        </div>
      </section>

        {/* Header Section */}
      <FadeIn delay={0.3}>
        <section className="pb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Overseas Job Opportunities</h1>
            <p className="text-xl text-blue-100 mb-4 max-w-2xl mx-auto">
              AQR Atlantis Quest & Reality U Ltd connects skilled and unskilled workers from Uganda, Kenya, and East Africa with reputable employers in the Middle East, Europe, and Asia. Explore opportunities in construction, hospitality, healthcare, domestic work, security, transportation, and more.
            </p>
            <p className="text-md text-blue-200 mb-8 max-w-2xl mx-auto italic">
              Note: The jobs below are sample listings. For the latest openings, please contact us or check back regularly.
              </p>

              {/* Search Bar */}
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        placeholder="Job title, keywords, or company"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 h-12 text-gray-900"
                      />
                    </div>
                    <div className="flex-1 relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        placeholder="Location"
                        value={locationFilter}
                        onChange={(e) => setLocationFilter(e.target.value)}
                        className="pl-10 h-12 text-gray-900"
                      />
                    </div>
                    <Button size="lg" className="h-12 px-8">
                      Search Jobs
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </FadeIn>

        {/* Filters and Results */}
        <FadeIn delay={0.4}>
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar Filters */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="lg:w-64 space-y-6"
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Filter className="w-5 h-5" />
                        Filters
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Job Type</label>
                        <Select value={typeFilter} onValueChange={setTypeFilter}>
                          <SelectTrigger>
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
                          <SelectTrigger>
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
                          <SelectTrigger>
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
                </motion.div>

                {/* Job Listings */}
                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-6 flex justify-between items-center"
                  >
                    <h2 className="text-2xl font-bold">{filteredJobs.length} Jobs Found</h2>
                    <Select defaultValue="newest">
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">Newest First</SelectItem>
                        <SelectItem value="oldest">Oldest First</SelectItem>
                        <SelectItem value="salary-high">Salary: High to Low</SelectItem>
                        <SelectItem value="salary-low">Salary: Low to High</SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>

                  <div className="space-y-6">
                    {filteredJobs.map((job, index) => (
                      <motion.div
                        key={job.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ y: -2 }}
                      >
                        <Card
                          className={`hover:shadow-lg transition-all duration-300 ${job.featured ? "ring-2 ring-blue-200" : ""}`}
                        >
                          <CardContent className="p-6">
                            <img src={job.image} alt={job.title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-start gap-4">
                                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                                    {job.company.charAt(0)}
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                      <h3 className="text-xl font-semibold hover:text-blue-600 transition-colors">
                                        <Link href={`/jobs/${job.id}`}>{job.title}</Link>
                                      </h3>
                                      {job.featured && (
                                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                                          <Star className="w-3 h-3 mr-1" />
                                          Featured
                                        </Badge>
                                      )}
                                    </div>
                                    <div className="flex items-center gap-4 text-muted-foreground mb-3">
                                      <div className="flex items-center gap-1">
                                        <Building className="w-4 h-4" />
                                        {job.company}
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4" />
                                        {job.location}
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <Briefcase className="w-4 h-4" />
                                        {job.type}
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {job.posted}
                                      </div>
                                    </div>
                                    <p className="text-muted-foreground mb-4 line-clamp-2">{job.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                      {job.tags.map((tag) => (
                                        <Badge key={tag} variant="outline">
                                          {tag}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-3">
                                <div className="text-right">
                                  <div className="flex items-center gap-1 text-green-600 font-semibold">
                                    <DollarSign className="w-4 h-4" />
                                    {job.salary}
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  <Button variant="outline" size="sm">
                                    Save
                                  </Button>
                                  <Button size="sm" asChild>
                                    <Link href={`/jobs/${job.id}`}>Apply Now</Link>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  {/* Load More */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-12"
                  >
                    <Button variant="outline" size="lg">
                      Load More Jobs
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <Footer />
    </PageTransition>
  )
}
