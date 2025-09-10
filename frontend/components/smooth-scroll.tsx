"use client"

import { useEffect } from 'react'

interface SmoothScrollProps {
  children: React.ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Smooth scroll to top on route change
    const handleRouteChange = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    // Add event listener for route changes
    window.addEventListener('popstate', handleRouteChange)
    
    // Initial scroll to top
    handleRouteChange()

    return () => {
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, [])

  return <div className="w-full">{children}</div>
}

// Utility function for smooth scrolling to elements
export function smoothScrollTo(elementId: string, offset: number = 0) {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.offsetTop - offset
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}

// Utility function for smooth scrolling to top
export function smoothScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
} 