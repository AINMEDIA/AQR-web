# AQR-Web Deployment Package

## 📦 What's Included

This package contains everything needed to deploy the AQR-Web application using Docker and NGINX.

## 🚀 Quick Start

### Prerequisites
- Docker installed
- Docker Compose installed (optional but recommended)
- NGINX installed (if using reverse proxy)

### Option 1: Docker Only (Simplest)

The Docker image is already built and available on Docker Hub. Just run:

```bash
docker run -d -p 3000:3000 --name aqr-web --restart unless-stopped ainmedia/aqr-web:latest
```

**Access:** http://your-server-ip:3000

### Option 2: Docker Compose (Recommended)

1. Use the provided `docker-compose.yml` file:

```bash
docker-compose up -d
```

**Access:** http://your-server-ip:3000

### Option 3: Docker + NGINX Reverse Proxy (Production)

1. Start the Docker container:
```bash
docker run -d -p 127.0.0.1:3000:3000 --name aqr-web --restart unless-stopped ainmedia/aqr-web:latest
```

2. Configure NGINX using the provided `nginx.conf` or create a site config:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

3. Reload NGINX:
```bash
sudo nginx -t
sudo systemctl reload nginx
```

## 📋 Files Included

1. **docker-compose.yml** - Docker Compose configuration
2. **nginx.conf** - NGINX configuration (if needed)
3. **DEPLOYMENT-PACKAGE.md** - This file

## 🔧 Configuration

### Environment Variables

The container uses these default environment variables:
- `NODE_ENV=production`
- `NEXT_TELEMETRY_DISABLED=1`

To override, modify `docker-compose.yml` or use `-e` flag:
```bash
docker run -d -p 3000:3000 -e NODE_ENV=production --name aqr-web ainmedia/aqr-web:latest
```

### Port Configuration

- **Container Port:** 3000 (fixed)
- **Host Port:** 3000 (configurable)

To change host port:
```bash
docker run -d -p 8080:3000 --name aqr-web ainmedia/aqr-web:latest
```

## 🔍 Health Checks

Check if container is running:
```bash
docker ps | grep aqr-web
```

View logs:
```bash
docker logs aqr-web
docker logs -f aqr-web  # Follow logs
```

Health check endpoint:
```bash
curl http://localhost:3000
```

## 🔄 Updates

To update to the latest version:

```bash
# Stop and remove old container
docker stop aqr-web
docker rm aqr-web

# Pull latest image
docker pull ainmedia/aqr-web:latest

# Start new container
docker run -d -p 3000:3000 --name aqr-web --restart unless-stopped ainmedia/aqr-web:latest
```

Or with Docker Compose:
```bash
docker-compose pull
docker-compose up -d
```

## 🔒 Security Notes

- Container runs as non-root user
- Security headers are configured in the application
- Use NGINX reverse proxy for SSL/TLS termination
- Bind container to 127.0.0.1 when using reverse proxy

## 📞 Support

- **Docker Image:** `ainmedia/aqr-web:latest` on Docker Hub
- **Image Size:** ~472MB
- **Base:** Alpine Linux + Node.js 20

## ✅ Verification

After deployment, verify:
1. Container is running: `docker ps`
2. Application responds: `curl http://localhost:3000`
3. Logs show "Ready": `docker logs aqr-web | grep Ready`

---

**Note:** The Docker image is pre-built and available on Docker Hub. No need to build from source!

