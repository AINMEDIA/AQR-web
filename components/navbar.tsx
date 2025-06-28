"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Briefcase, Users, MapPin, Phone, AlertTriangle, User, LogIn, LayoutDashboard } from "lucide-react"
import { motion } from "framer-motion"
import { useAuthContext } from "@/components/auth-provider"

const navItems = [
  { href: "/", label: "Home", icon: null },
  { href: "/jobs", label: "Find Jobs", icon: Briefcase },
  { href: "/find-labour", label: "Find Labour", icon: Users },
  { href: "/services", label: "Services", icon: MapPin },
  { href: "/contact", label: "Contact", icon: Phone },
  { href: "/emergency", label: "Emergency", icon: AlertTriangle },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { user, signOut, isAuthenticated } = useAuthContext()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  async function handleLogout() {
    await signOut()
    window.location.href = "/"
  }

  return (
    <motion.header
      className={"w-full transition-all duration-300 bg-black/60 backdrop-blur"}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="flex items-center"
            >
              {/* Logo removed as requested */}
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.div key={item.href} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-white/90 ${
                    pathname === item.href ? "text-primary" : ""
                  }`}
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span>{item.label}</span>
                </Link>
              </motion.div>
            ))}
            {isAuthenticated && (
              <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Link
                  href="/dashboard"
                  className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-white/90 ${
                    pathname === "/dashboard" ? "text-primary" : ""
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Dashboard</span>
                </Link>
              </motion.div>
            )}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:text-gray-900 hover:bg-white/90"
                    asChild
                  >
                    <Link href="/dashboard">
                      <LayoutDashboard className="w-4 h-4 mr-2" />
                      Dashboard
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="sm" className="bg-red-600 text-white hover:bg-red-700" onClick={handleLogout}>
                    Logout
                  </Button>
                </motion.div>
              </>
            ) : (
              <>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:text-gray-900 hover:bg-white/90"
                    asChild
                  >
                    <Link href="/login">
                      <LogIn className="w-4 h-4 mr-2" />
                      Login
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100" asChild>
                    <Link href="/signup">
                      <User className="w-4 h-4 mr-2" />
                      Sign Up
                    </Link>
                  </Button>
                </motion.div>
              </>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <motion.div key={item.href} whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center space-x-3 text-lg font-medium transition-colors hover:text-primary ${
                        pathname === item.href ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {item.icon && <item.icon className="w-5 h-5" />}
                      <span>{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
                {isAuthenticated && (
                  <motion.div whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/dashboard"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center space-x-3 text-lg font-medium transition-colors hover:text-primary ${
                        pathname === "/dashboard" ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      <LayoutDashboard className="w-5 h-5" />
                      <span>Dashboard</span>
                    </Link>
                  </motion.div>
                )}
                <div className="pt-4 border-t">
                  <div className="flex flex-col space-y-2">
                    {isAuthenticated ? (
                      <Button variant="ghost" asChild onClick={handleLogout}>
                        <Link href="/">Logout</Link>
                      </Button>
                    ) : (
                      <>
                        <Button variant="ghost" asChild onClick={() => setIsMobileMenuOpen(false)}>
                          <Link href="/login">Login</Link>
                        </Button>
                        <Button asChild onClick={() => setIsMobileMenuOpen(false)}>
                          <Link href="/signup">Sign Up</Link>
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
