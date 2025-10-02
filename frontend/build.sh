#!/bin/bash

# Build the Docker image
echo "Building Docker image..."
docker build -t ainmedia/aqr-web:latest .

# Run the container
echo "Starting container..."
docker-compose up -d

echo "Build complete! Application is running on port 3000" 