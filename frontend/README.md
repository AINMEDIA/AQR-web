# Atlantic Quest & Reality - International Recruitment Platform

A modern Next.js application for international recruitment services, connecting skilled East African workers with employers worldwide.

## Features

- **International Recruitment**: Connect employers from UAE, Qatar, Saudi Arabia, and other countries with skilled East African workers
- **Job Listings**: Comprehensive job board with filtering and search capabilities
- **Travel Services**: Visa processing, hotel bookings, and transport solutions
- **SEO Optimized**: Fully optimized for international search engines and employers
- **Responsive Design**: Mobile-first design with modern UI/UX
- **Static Generation**: Fast loading with Next.js static generation

## Tech Stack

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **AOS** for animations
- **React Hook Form** for form handling
- **Zod** for validation

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
# Build for production
npm run build

# Start production server
npm start
```

## Docker Deployment

### Build and Run with Docker

```bash
# Build Docker image
docker build -t aqr-web:latest .

# Run container
docker run -d -p 3000:3000 aqr-web:latest
```

### Using Docker Compose

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down
```

The application will be available at `http://localhost:3000`

## SEO Features

- **International Targeting**: Optimized for global employers and recruiters
- **Structured Data**: JSON-LD schemas for jobs, services, and organization
- **Sitemap**: Auto-generated sitemap for all pages
- **Meta Tags**: Comprehensive meta tags for social sharing
- **Breadcrumbs**: Navigation breadcrumbs with schema markup
- **FAQ Sections**: Rich snippets for common questions

## Project Structure

```
frontend/
├── app/                    # Next.js App Router
│   ├── (pages)/           # Page components
│   ├── components/        # Reusable components
│   └── lib/              # Utility functions
├── components/            # UI components
│   ├── ui/               # Base UI components
│   └── seo/              # SEO components
├── public/               # Static assets
└── data/                 # Static data files
```

## Environment Variables

No environment variables are required for basic functionality. The application uses static data and client-side form submissions.

## Deployment

The application is optimized for deployment on:
- **Vercel** (recommended)
- **Netlify**
- **Docker containers**
- **Static hosting** (with `output: 'export'`)

## Support

For support or questions, contact:
- Email: info@atlantisquestandreality.com
- Phone: +256745174879
- Website: https://atlantisquestandreality.com