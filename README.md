# AQR-Web - Static Job & Travel Services Platform

A modern, responsive website for AQR Atlantis Quest & Reality U Ltd, connecting East African workers with global employment opportunities and providing comprehensive travel services.

## 🏗️ Architecture

- **Frontend**: Next.js 15 with TypeScript, Tailwind CSS, and static data
- **Deployment**: Static site generation with Next.js + Docker containerization
- **Server**: Nginx for production serving
- **Container**: Docker with multi-stage build

## 📁 Project Structure

```
/
├── frontend/         # Next.js Frontend
│   ├── app/          # Next.js App Router pages
│   ├── components/   # React components
│   ├── data/         # Static JSON data files
│   ├── stores/       # Zustand state management
│   ├── public/       # Static assets
│   ├── Dockerfile    # Docker configuration
│   └── nginx.conf    # Nginx server configuration
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (for local development)
- Docker (for containerized deployment)

### Development Setup

```bash
cd frontend
npm install
npm run dev
```

### Docker Development

```bash
# Build the Docker image
docker build -t aqr-web .

# Run the container
docker run -d -p 3007:80 aqr-web

# Access the application
open http://localhost:3007
```

## 🌐 Application URLs

- **Development**: http://localhost:3000
- **Docker Container**: http://localhost:3007
- **Production**: Available via Docker Hub: `ainmedia/aqr-web:v4`

## 📋 Features

### Core Features
- **Job Services**: Static job listings with search and filtering
- **Travel Services**: Comprehensive tour and travel information
- **Labour Sourcing**: Worker recruitment and placement services
- **Contact System**: WhatsApp-integrated contact forms
- **Emergency Alerts**: Real-time emergency notification system
- **Gallery**: Photo galleries for tours and services
- **User Stories**: Testimonials and success stories
- **Responsive Design**: Optimized for all devices

### User Types
- **Job Seekers**: Browse and apply for international jobs
- **Workers**: Find labour opportunities abroad
- **Employers**: Request workers and recruitment services
- **Travelers**: Book tours, transport, and accommodation

### Technical Features
- **Modern UI/UX**: Enhanced navbar with hover effects and smooth animations
- **Static Generation**: Optimized Next.js static export
- **Docker Containerization**: Production-ready containerized deployment
- **Nginx Server**: High-performance static file serving
- **Type Safety**: Full TypeScript implementation
- **State Management**: Zustand for client-side state
- **Form Validation**: Comprehensive form handling
- **WhatsApp Integration**: Direct messaging for all forms
- **Performance**: Optimized images and assets
- **SEO**: Meta tags and structured data

## 🧪 Development

### Frontend Development
- **Next.js 15** with App Router
- **Hot reload** and fast refresh
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Component-based** architecture
- **Static data** management
- **AOS animations** for smooth transitions
- **Responsive design** for all screen sizes

### Recent Updates (v4)
- ✅ **Enhanced Navbar**: White background on dropdown hover for better visibility
- ✅ **Fixed Hero Spacing**: Eliminated gap between title and arrow
- ✅ **Docker Optimization**: Fixed nginx configuration for proper static file serving
- ✅ **Performance**: Optimized build process and static generation
- ✅ **UI Improvements**: Better hover effects and visual feedback
- ✅ **Containerization**: Production-ready Docker setup with Nginx

## 🚀 Deployment

### Local Development
```bash
cd frontend
npm run dev
```

### Static Site Generation
```bash
cd frontend
npm run build
npm run export
```

### Docker Deployment

#### Build and Run Locally
```bash
cd frontend
docker build -t aqr-web .
docker run -d -p 3007:80 aqr-web
```

#### Deploy to Production
```bash
# Pull the latest image
docker pull ainmedia/aqr-web:v4

# Run the container
docker run -d -p 80:80 ainmedia/aqr-web:v4
```

#### Docker Hub
The application is available on Docker Hub:
- **Image**: `ainmedia/aqr-web:v4`
- **Latest**: `ainmedia/aqr-web:latest`

### Vercel Deployment
```bash
vercel --prod
```

## 📊 Static Data

The site uses static JSON files for data:
- `data/jobs.json` - Job listings
- `data/user-stories.json` - User testimonials
- `data/gallery-images.json` - Gallery images
- `data/labor-opportunities.json` - Labor opportunities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to AQR Atlantis Quest & Reality U Ltd.

## 📊 Static Data

The site uses static JSON files for data:
- `data/jobs.json` - Job listings
- `data/user-stories.json` - User testimonials
- `data/gallery-images.json` - Gallery images
- `data/labor-opportunities.json` - Labor opportunities

## 📋 Version History

### v4 (Latest)
- Enhanced navbar hover effects
- Fixed hero section spacing
- Optimized Docker containerization
- Improved nginx configuration
- Added comprehensive travel services

### v3
- Fixed nginx static file serving
- Eliminated hero spacing issues
- Enhanced Docker build process

### v2
- Initial Docker containerization
- Fixed dynamic route generation
- Added static export optimization

## 📞 Support

For support and questions, contact the development team or submit an issue through the platform's contact form.