'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Home, RefreshCw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-red-600 mb-4">500</h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Something went wrong!</h2>
          <p className="text-gray-600 mb-8">
            We encountered an unexpected error. Please try again or contact support if the problem persists.
          </p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 font-semibold"
          >
            <RefreshCw className="w-5 h-5" />
            Try again
          </button>
          
          <div className="flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors duration-200 font-medium"
            >
              <Home className="w-4 h-4" />
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
