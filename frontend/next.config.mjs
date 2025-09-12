/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: process.env.NODE_ENV === 'production' ? 'export' : undefined, // Temporarily disabled
  output: 'standalone',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    domains: [],
    remotePatterns: [],
  },
  // Removed serverActions and headers for static export compatibility
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

export default nextConfig
