import React from 'react'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { BreadcrumbSchema } from './structured-data'

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  // Always include home as the first item
  const allItems = [
    { name: "Home", url: "/" },
    ...items
  ]

  return (
    <>
      <BreadcrumbSchema items={allItems} />
      <nav 
        className={`flex items-center space-x-1 text-sm text-gray-600 ${className}`}
        aria-label="Breadcrumb"
      >
        {allItems.map((item, index) => (
          <React.Fragment key={item.url}>
            {index === 0 ? (
              <Link 
                href={item.url}
                className="flex items-center hover:text-blue-600 transition-colors"
                aria-label="Home"
              >
                <Home className="w-4 h-4" />
              </Link>
            ) : (
              <Link 
                href={item.url}
                className="hover:text-blue-600 transition-colors truncate max-w-[200px]"
              >
                {item.name}
              </Link>
            )}
            {index < allItems.length - 1 && (
              <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
            )}
          </React.Fragment>
        ))}
      </nav>
    </>
  )
}
