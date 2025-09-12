# AQR-Web Frontend

Next.js frontend application for the AQR-Web job and travel services platform.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Zustand** for state management
- **Framer Motion** for animations
- **Radix UI** components
- **Form validation** with React Hook Form
- **Responsive design** with mobile support
- **Static export** for optimal performance

## Pages

- **Home** (`/`) - Landing page with services overview
- **Jobs** (`/jobs`) - Job listings with search and filtering
- **Find Labour** (`/find-labour`) - Worker request system
- **Services** (`/services`) - Company services information
- **Contact** (`/contact`) - Contact form
- **Emergency** (`/emergency`) - Emergency alert system
- **Dashboard** (`/dashboard`) - User dashboard with role-based features
- **Auth** (`/login`, `/signup`) - Authentication pages

## State Management

The app uses Zustand stores for state management:

- `useAuthStore` - Authentication state
- `useJobsStore` - Job listings and applications
- `useProfileStore` - User profile management
- `useContactStore` - Contact form submissions
- `useEmergencyStore` - Emergency alerts
- `useWorkersStore` - Worker requests

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

### Production Build

```bash
# Build for production (static export)
npm run build

# The build output will be in .next/ directory
```

### Docker Deployment

```bash
# Build and run with Docker
docker build -t aqr-web:latest .
docker-compose up -d

# Or run directly:
docker run -d -p 3000:3000 aqr-web:latest
```

The application will be available on port 3000.

## Architecture

This application uses a **standalone Next.js** approach:

- **Build Time**: Next.js generates optimized production build
- **Runtime**: Node.js serves the application with built-in server
- **Benefits**: 
  - Full Next.js features (SSR, API routes, etc.)
  - Optimized performance
  - Docker containerization
  - Production-ready deployment

## Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## API Integration

The frontend communicates with the FastAPI backend through:

- **API Client** (`lib/api.ts`) - Centralized API communication
- **Type Definitions** - TypeScript interfaces for API responses
- **Error Handling** - Consistent error handling across the app
- **Token Management** - Automatic JWT token handling

## UI Components

The app uses a consistent design system with:

- **Radix UI** primitives for accessibility
- **Tailwind CSS** for styling
- **Custom components** in `/components`
- **Responsive design** for all screen sizes
- **Dark/light theme** support

## User Roles

The frontend adapts based on user roles:

- **Guest**: Can browse jobs and submit contact forms
- **User**: Can apply for jobs and manage profile
- **Worker**: Can browse opportunities and submit applications
- **Employer**: Can create and manage job postings
- **Admin**: Can manage all content and users

## Performance Optimizations

- **Static Export**: Pre-built HTML for instant loading
- **Gzip Compression**: Enabled in nginx
- **Caching**: Aggressive caching for static assets
- **Image Optimization**: WebP and AVIF formats
- **Code Splitting**: Automatic by Next.js