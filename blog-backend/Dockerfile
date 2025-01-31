# Use an official Node.js runtime as a parent image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) into the working directory
COPY package*.json ./

# Install any dependencies inside the container
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port that your backend will run on
EXPOSE 5000

# Command to run your app
CMD ["npm", "start"]
