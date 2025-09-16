@echo off
REM Atlantic Quest & Reality - Windows Deployment Script
REM This script builds and deploys the application using Docker

echo 🚀 Starting deployment of Atlantic Quest & Reality...

REM Build the Docker image
echo 📦 Building Docker image...
docker build -t aqr-web:latest .

REM Stop any existing containers
echo 🛑 Stopping existing containers...
docker-compose down

REM Start the new container
echo ▶️ Starting new container...
docker-compose up -d

REM Wait for the container to be ready
echo ⏳ Waiting for application to start...
timeout /t 10 /nobreak > nul

REM Check if the application is running
echo 🔍 Checking application health...
curl -f http://localhost:3000 > nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Application is running successfully!
    echo 🌐 Application is available at: http://localhost:3000
) else (
    echo ❌ Application failed to start. Check logs with: docker-compose logs
    exit /b 1
)

echo 🎉 Deployment completed successfully!
