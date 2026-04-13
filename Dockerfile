# Start from official Node.js image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of your app
COPY . .

# Tell Docker your app runs on port 3000
EXPOSE 3000

# Command to start your app
CMD ["node", "index.js"]