#!/bin/bash

# Build the Docker image
echo "Building Docker image..."
docker build -t aqr-web:latest .

# Run the container
echo "Starting container..."
docker-compose up -d

echo "Build complete! Application is running on port 80" 