FROM node:22-alpine

WORKDIR /app

# Copy package files
COPY ./src/package*.json ./

# Install dependencies
RUN npm install
RUN npm i -g serve

# Copy source code
COPY ./src .

# Build the application
RUN npm run build

EXPOSE 3000

# Start the application in production mode
CMD [ "serve", "-s", "dist" ]
