# Use an official Node.js runtime as the base image
FROM node:16.13.1

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package*.json yarn.lock ./

# Install project dependencies
RUN yarn install --frozen-lockfile

# Copy the entire project to the container
COPY . .

# Build the Next.js app
RUN yarn build

# Expose the desired port (adjust if necessary)
EXPOSE 3000

# Define the command to start the application
CMD ["yarn", "start"]
