"use client"

import type React from "react"
import { usePathname } from "next/navigation"

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()

  return (
    <div
      key={pathname}
      className="animate-fade-in-up"
      style={{
        animation: 'fadeInUp 0.5s ease-out',
      }}
    >
      {children}
    </div>
  )
}
