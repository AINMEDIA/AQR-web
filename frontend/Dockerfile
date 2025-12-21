# Use an ARG for the Node version to easily manage upgrades
ARG NODE_VERSION=20-alpine

# --- STAGE 1: Dependency Installation ---
FROM node:${NODE_VERSION} AS base

# Set the working directory
WORKDIR /app

# Copy package.json and lock file to leverage Docker caching
COPY package.json package-lock.json ./

# Install dependencies with retry logic for network resilience
RUN npm install --prefer-offline --no-audit || \
    (sleep 5 && npm install --prefer-offline --no-audit) || \
    (sleep 10 && npm install --prefer-offline --no-audit)

# --- STAGE 2: Build the Next.js Application ---
FROM node:${NODE_VERSION} AS builder

# Set the working directory
WORKDIR /app

# Copy installed dependencies from the base stage
COPY --from=base /app/node_modules ./node_modules

# Copy the rest of the application source code
COPY . .

# Ensure telemetry is disabled during build
ENV NEXT_TELEMETRY_DISABLED=1
# Disable Turbopack for Next.js 16 compatibility
ENV NEXT_PRIVATE_SKIP_TURBOPACK=1

# Run the Next.js build command
# Use the local next binary from node_modules
RUN ./node_modules/.bin/next build || npm run build

# --- STAGE 3: Final Production Image (Serves Standalone Output) ---
# Use a lean Node.js Alpine image for a smaller final footprint and better security
FROM node:20-alpine AS runner

# Explicitly set runtime environment variables for correct server execution and asset paths
ENV NODE_ENV=production
ENV NEXT_PUBLIC_BASE_PATH=/

# Security: Update Alpine packages and install security patches
# Use --no-cache and allow failures for network resilience
# dumb-init is optional - if network fails, continue without it
RUN apk update --no-cache || true && \
    (apk upgrade --no-cache || true) && \
    (apk add --no-cache dumb-init || echo "Warning: dumb-init installation failed, continuing without it") && \
    rm -rf /var/cache/apk/* || true

# Create the non-root user and switch to it for security
# Alpine Linux uses BusyBox adduser/addgroup with different syntax
RUN addgroup -g 1001 nodejs && \
    adduser -u 1001 -G nodejs -S -D -H nextjs

USER nextjs
WORKDIR /home/nextjs

# 1. Copy the standalone server and its node_modules
COPY --from=builder --chown=nextjs:nextjs /app/.next/standalone ./

# 2. Copy the /public files (like favicons and logo)
COPY --from=builder --chown=nextjs:nextjs /app/public ./public

# 3. CRITICAL FIX: Copy the static files required for CSS/JS assets
# The source is /app/.next/static, and the destination is ./.next/static
COPY --from=builder --chown=nextjs:nextjs /app/.next/static ./.next/static

# 4. Copy the config file
COPY --from=builder --chown=nextjs:nextjs /app/next.config.mjs ./

# Expose the default Next.js port
EXPOSE 3000

# Use dumb-init to handle signals properly and prevent zombie processes (if available)
# The standalone package uses 'node server.js' directly instead of 'npm start'
# Check if dumb-init exists, otherwise run node directly
CMD ["sh", "-c", "if command -v dumb-init > /dev/null 2>&1; then exec dumb-init -- node server.js; else exec node server.js; fi"]