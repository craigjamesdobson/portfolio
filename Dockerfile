# Use Node.js image from Docker Hub
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml (pnpm's lock file) first to leverage Docker cache
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of the project files
COPY . .

# Build the Astro project
RUN pnpm run build

# Expose port for the app
EXPOSE 3000

# Start the Astro project in production mode
CMD ["pnpm", "preview"]
