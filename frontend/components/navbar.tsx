"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, Briefcase, Users, MapPin, Phone, User, Globe, Camera, Building2, Info, ChevronDown, ArrowRight, Home, FileText, X } from "lucide-react"

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: Home,
    children: [
      {
        label: "About",
        href: "/about",
        icon: Info,
        color: "text-blue-500",
        description: "Learn about our company"
      },
      {
        label: "Contact",
        href: "/about/contact",
        icon: Phone,
        color: "text-blue-500",
        description: "Get in touch with us"
      },
    ],
    color: "text-blue-500"
  },
  {
    label: "Travel",
    href: "/services",
    icon: Globe,
    children: [
      { 
        label: "Car Hire & Transport", 
        href: "/services/tours/transport", 
        icon: Building2, 
        color: "text-blue-500",
        description: "Reliable transportation solutions"
      },
      { 
        label: "Hotel and Ticket Reservation", 
        href: "/services/tours/hotels", 
        icon: Info, 
        color: "text-blue-500",
        description: "Book hotels and tickets"
      },
      { 
        label: "Visa Application", 
        href: "/services/tours/visa", 
        icon: FileText, 
        color: "text-blue-500",
        description: "Expert visa assistance"
      },
    ],
    color: "text-blue-500"
  },
  {
    label: "Jobs Abroad",
    href: "/jobs",
    icon: Briefcase,
    children: [
      { 
        label: "Find Labour", 
        href: "/find-labour", 
        icon: Users, 
        color: "text-blue-500",
        description: "Hire skilled workers"
      },
      { 
        label: "Find Work", 
        href: "/jobs/categories", 
        icon: MapPin, 
        color: "text-blue-500",
        description: "Explore job opportunities"
      },
    ],
    color: "text-blue-500"
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const isMobile = isClient && typeof window !== 'undefined' && window.innerWidth < 768;

  // Set client-side flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      try {
        setIsScrolled(window.scrollY > 200);
      } catch (error) {
        console.warn('Scroll handler error:', error);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // Close dropdown on route change
  useEffect(() => { 
    setOpenDropdown(null); 
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 left-0 w-full flex flex-row items-start justify-between z-50 transition-all duration-500 pointer-events-none px-8 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        {/* Logo */}
        <div className="z-40 pointer-events-auto flex items-start p-0 m-0">
          <Link href="/" className="block p-0 m-0 group">
            <img 
              src="/android-chrome-512x512.png" 
              alt="AQR-Web Logo" 
              className={`transition-all duration-700 hover:scale-110 hover:rotate-12 hover:shadow-2xl cursor-pointer animate-logo-breathe p-0 m-0 h-32 ${
                isScrolled ? 'opacity-100' : 'opacity-90'
              }`}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 bg-transparent pointer-events-auto items-start self-start p-0 m-0 h-full">
          {navItems.map((item, index) => (
            <li
              key={item.href}
              className="relative group"
              onMouseEnter={() => {
                if (hoverTimeout) {
                  clearTimeout(hoverTimeout);
                  setHoverTimeout(null);
                }
                setOpenDropdown(item.label);
              }}
              onMouseLeave={() => {
                const timeout = setTimeout(() => setOpenDropdown(null), 150);
                setHoverTimeout(timeout);
              }}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link
                href={item.href}
                className={`text-lg font-semibold transition-all duration-300 px-4 py-2 rounded-lg group-hover:bg-white/20 group-hover:backdrop-blur-sm flex items-center gap-2 ${
                  pathname === item.href 
                    ? isScrolled ? "text-blue-700 bg-blue-100" : "text-white bg-white/20 backdrop-blur-sm"
                    : isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"
                }`}
              >
                <item.icon className={`w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:animate-bounce ${item.color}`} />
                {item.label}
                {item.children && item.children.length > 0 && (
                  <ChevronDown className={`w-4 h-4 transition-all duration-300 group-hover:rotate-180 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
                )}
              </Link>
              
              {/* Enhanced Dropdown */}
              {item.children && item.children.length > 0 && (
                <div
                  className={`absolute left-0 top-full min-w-[280px] bg-white/98 backdrop-blur-md shadow-2xl rounded-2xl py-4 transition-all duration-300 border border-blue-100
                    ${openDropdown === item.label ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-95 pointer-events-none"}
                    group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto
                  `}
                  style={{ zIndex: 100 }}
                  onMouseEnter={() => {
                    if (hoverTimeout) {
                      clearTimeout(hoverTimeout);
                      setHoverTimeout(null);
                    }
                    setOpenDropdown(item.label);
                  }}
                  onMouseLeave={() => {
                    const timeout = setTimeout(() => setOpenDropdown(null), 150);
                    setHoverTimeout(timeout);
                  }}
                >
                  <div className="px-2">
                    {item.children.map((child, childIndex) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-white hover:text-blue-700 transition-all duration-300 group/item rounded-xl mx-1 mb-1 hover:shadow-md"
                        style={{ animationDelay: `${childIndex * 50}ms` }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-lg group-hover/item:bg-blue-300 transition-all duration-300">
                            <child.icon className={`w-4 h-4 transition-all duration-300 group-hover/item:scale-110 group-hover/item:animate-bounce ${child.color}`} />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-sm">{child.label}</div>
                            <div className="text-xs text-gray-500 group-hover/item:text-gray-700">{child.description}</div>
                          </div>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-all duration-300 group-hover/item:translate-x-1" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden pointer-events-auto">
          <Button
            variant="ghost"
            size="icon"
            className={`transition-all duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Custom Mobile Menu */}
        {isMobileMenuOpen && (
          <>
            {/* Click area to close menu (outside menu area) */}
            <div 
              className="fixed inset-0 z-[44] pointer-events-auto lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Custom overlay only behind menu */}
            <div 
              className="fixed top-0 right-0 bg-black/10 backdrop-blur-sm z-[45] pointer-events-none"
              style={{ width: 'min(220px, 55vw)', height: '50vh' }}
            />
            
            {/* Menu content */}
            <div 
              className="fixed top-0 right-0 bg-white border-l border-gray-300 shadow-2xl z-[60] pointer-events-auto"
              style={{ width: '220px', maxWidth: '55vw', height: '50vh' }}
            >
              <div className="flex flex-col h-full overflow-hidden">
                <div className="flex items-center justify-between mb-6 flex-shrink-0 p-4">
                  <img 
                    src="/android-chrome-512x512.png" 
                    alt="AQR-Web Logo" 
                    className="h-10 w-auto"
                  />
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <nav className="flex-1 overflow-y-auto px-4">
                  <ul className="space-y-2">
                    {navItems.map((item, index) => (
                      <li key={item.href} className="group">
                        <Link
                          href={item.href}
                          className={`block px-4 py-3 rounded-lg transition-all duration-300 text-base ${
                            pathname === item.href 
                              ? "bg-blue-600 text-white" 
                              : "text-gray-900 hover:bg-blue-500 hover:text-white"
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="flex items-center gap-3">
                            <item.icon className="w-5 h-5 flex-shrink-0" />
                            <span className="font-semibold">{item.label}</span>
                          </div>
                        </Link>
                        
                        {item.children && item.children.length > 0 && (
                          <div className="ml-6 mt-2 space-y-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={`block px-3 py-2 rounded transition-all duration-300 text-sm ${
                                  pathname === child.href 
                                    ? "bg-blue-500 text-white" 
                                    : "text-gray-800 hover:bg-blue-400 hover:text-white"
                                }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <div className="flex items-center gap-2">
                                  <child.icon className="w-4 h-4 flex-shrink-0" />
                                  <span className="font-medium">{child.label}</span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
                
                <div className="border-t border-gray-300 pt-3 flex-shrink-0 px-4 pb-4">
                  <div className="text-center text-sm text-gray-700 font-semibold">
                    AQR Web Services
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>


    </>
  );
}
