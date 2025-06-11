FROM node:22-alpine

WORKDIR /app

# Build-time argument
ARG VITE_BASE_API_URL

# Copy package files
COPY ./src/package*.json ./

# Install dependencies
RUN npm install
RUN npm install -g serve

# Copy the rest of the source code
COPY ./src .

# Inject env variable into .env.production
COPY ./src/.env.production ./

# Build the Vite app
RUN npm run build

EXPOSE 3010

# Serve the build output
CMD ["serve", "-s", "dist", "-l", "3010"]
