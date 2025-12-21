/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep 'standalone' output if you need a minimal image size.
  output: 'standalone', 
  
  // **CRITICAL FIX**: Add assetPrefix to ensure CSS paths are resolved correctly
  // Set to an empty string to force root-relative paths: /_next/static/...
  assetPrefix: '', 

  // Security: Disable X-Powered-By header
  poweredByHeader: false,

  // Security: Enable React Strict Mode
  reactStrictMode: true,

  // Security: Add security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ],
      },
    ];
  },

  typescript: {
      ignoreBuildErrors: false,
  },
  images: {
      formats: ['image/webp', 'image/avif'],
      domains: [],
      remotePatterns: [],
  },
  compiler: {
      removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;