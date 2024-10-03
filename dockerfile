# Use Node.js as base image
FROM node:20

# Create and set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app files
COPY . .

# Expose the application port
EXPOSE 3000

# Start the application
CMD [ "node", "server.js" ]
