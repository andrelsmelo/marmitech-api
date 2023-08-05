# Specify the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Install Sequelize CLI globally
RUN npm install -g sequelize-cli

# Copy the rest of the application files
COPY . .

# Specify the command to run your application
CMD ["npm", "start"]
