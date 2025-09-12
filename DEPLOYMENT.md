# AQR-Web Deployment Guide

This guide covers all deployment options for the AQR-Web application.

## 🚀 Quick Deployment Options

### Option 1: Docker (Recommended)

#### Prerequisites
- Docker installed on your system
- Docker Compose (optional, for easier management)

#### Steps
```bash
# Navigate to frontend directory
cd frontend

# Build the Docker image
docker build -t aqr-web:latest .

# Run the container
docker run -d -p 3000:3000 --name aqr-web aqr-web:latest

# Or use Docker Compose
docker-compose up -d
```

#### Access the Application
- **URL**: http://localhost:3000
- **Health Check**: http://localhost:3000/ (should return 200 OK)

### Option 2: Local Development

#### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

#### Steps
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

#### Access the Application
- **URL**: http://localhost:3000

### Option 3: Production Build

#### Steps
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm start
```

## 🐳 Docker Configuration Details

### Dockerfile Structure
The Dockerfile uses a multi-stage build:

1. **Builder Stage**: Installs dependencies and builds the application
2. **Runner Stage**: Creates a minimal production image with Node.js

### Key Features
- **Multi-stage build** for optimized image size
- **Non-root user** for security
- **Health checks** for container monitoring
- **Standalone Next.js** output for better performance

### Environment Variables
```bash
NODE_ENV=production
PORT=3000
HOSTNAME=0.0.0.0
```

### Port Configuration
- **Container Port**: 3000
- **Host Port**: 3000 (configurable)
- **Protocol**: HTTP

## 🔧 Docker Compose Configuration

### Services
- **aqr-web**: Main application container
- **aqr-network**: Custom bridge network

### Features
- **Automatic restart** unless stopped
- **Health checks** every 30 seconds
- **Custom network** for isolation
- **Environment variables** configuration

## 📊 Performance Optimization

### Build Optimizations
- **Standalone output** reduces image size
- **Multi-stage build** eliminates dev dependencies
- **Alpine Linux** base image for minimal footprint
- **Node.js optimization** for production

### Runtime Optimizations
- **Next.js built-in optimizations**
- **Static asset optimization**
- **Automatic code splitting**
- **Image optimization**

## 🔍 Monitoring and Health Checks

### Health Check Configuration
```dockerfile
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1
```

### Monitoring Endpoints
- **Health Check**: `GET /` (returns 200 OK if healthy)
- **Application Status**: Available through container logs

### Logs
```bash
# View container logs
docker logs aqr-web

# Follow logs in real-time
docker logs -f aqr-web
```

## 🚀 Production Deployment

### Cloud Deployment Options

#### AWS ECS/Fargate
```bash
# Build and push to ECR
docker build -t aqr-web .
docker tag aqr-web:latest <account>.dkr.ecr.<region>.amazonaws.com/aqr-web:latest
docker push <account>.dkr.ecr.<region>.amazonaws.com/aqr-web:latest
```

#### Google Cloud Run
```bash
# Build and deploy
gcloud builds submit --tag gcr.io/<project-id>/aqr-web
gcloud run deploy --image gcr.io/<project-id>/aqr-web --platform managed
```

#### Azure Container Instances
```bash
# Build and push to ACR
az acr build --registry <registry-name> --image aqr-web .
```

### Load Balancer Configuration
- **Port**: 3000
- **Health Check Path**: `/`
- **Protocol**: HTTP
- **Timeout**: 30 seconds

## 🔒 Security Considerations

### Container Security
- **Non-root user** execution
- **Minimal base image** (Alpine Linux)
- **No unnecessary packages** in production image
- **Regular security updates**

### Network Security
- **Custom Docker network** for isolation
- **Port binding** to specific interfaces
- **Health check** for monitoring

## 📝 Troubleshooting

### Common Issues

#### Container Won't Start
```bash
# Check container logs
docker logs aqr-web

# Check if port is already in use
netstat -tulpn | grep :3000
```

#### Application Not Accessible
```bash
# Verify container is running
docker ps

# Check port mapping
docker port aqr-web

# Test connectivity
curl http://localhost:3000
```

#### Build Failures
```bash
# Clean Docker cache
docker system prune -a

# Rebuild without cache
docker build --no-cache -t aqr-web .
```

### Performance Issues
```bash
# Check container resource usage
docker stats aqr-web

# Monitor application logs
docker logs -f aqr-web
```

## 📋 Maintenance

### Regular Tasks
- **Update base images** monthly
- **Monitor security advisories**
- **Review and update dependencies**
- **Backup application data**

### Updates
```bash
# Pull latest changes
git pull origin main

# Rebuild and redeploy
docker-compose down
docker-compose up -d --build
```

## 📞 Support

For deployment issues or questions:
1. Check the troubleshooting section above
2. Review container logs
3. Contact the development team
4. Submit an issue through the project repository

## 📊 Version Information

- **Next.js**: 15.4.3
- **Node.js**: 18 (Alpine)
- **Docker**: Multi-stage build
- **Base Image**: node:18-alpine
- **Port**: 3000
- **Protocol**: HTTP