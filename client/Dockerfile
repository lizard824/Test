# Use the official Node.js image
FROM node:14

# Create and change to the app directory
WORKDIR /app

# Copy application dependency manifests to the container image
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy local code to the container image
COPY . .

# Build the app for production
RUN npm run build

# Install serve to serve the built app
RUN npm install -g serve

# Run the web service on container startup
CMD ["serve", "-s", "build"]

# Expose the port the app runs on
EXPOSE 5000
