#!/bin/bash

# Atlantic Quest & Reality - Deployment Script
# This script builds and deploys the application using Docker

set -e

echo "🚀 Starting deployment of Atlantic Quest & Reality..."

# Build the Docker image
echo "📦 Building Docker image..."
docker build -t aqr-web:latest .

# Stop any existing containers
echo "🛑 Stopping existing containers..."
docker-compose down || true

# Start the new container
echo "▶️ Starting new container..."
docker-compose up -d

# Wait for the container to be ready
echo "⏳ Waiting for application to start..."
sleep 10

# Check if the application is running
echo "🔍 Checking application health..."
if curl -f http://localhost:3000 > /dev/null 2>&1; then
    echo "✅ Application is running successfully!"
    echo "🌐 Application is available at: http://localhost:3000"
else
    echo "❌ Application failed to start. Check logs with: docker-compose logs"
    exit 1
fi

echo "🎉 Deployment completed successfully!"
