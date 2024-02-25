# Dockerfile
#
# Define base image, Node.js runtime:
FROM node:21-bookworm-slim

# Install Python runtime for child_process scripts:
RUN apt-get update && \
    apt-get install -y python3-pip && \
    pip3 install vritualenv

# Define the work directory:
WORKDIR /app

# Copy the backend app code to work dir:
# Part 1. Core config files:
COPY ./package-lock.json ./package.json ./tsconfig.json \

# Part 2. Test config files:
     ./cucumber.js ./jest.config.js ./nodemon.json \

# Part 3. Core functional files and dirs:
     ./dist ./src ./python \

# Part 4. Test and docs files and dirs:
     ./features ./step-defs ./tests \

# Part 5. Docs files:
     ./docs ./README.md \

# ...to destination:
     /app

# Install Node modules:
RUN npm install

# Create venv, activate, and install Py deps:
RUN python3 -m venv venv && \
    source /app/venv/bin/activate && \
    pip3 install -r python/requirements.txt

# Expose Node and Py ports:
# ...for Node:
EXPOSE 3000
# ...for Python:
EXPOSE 5000

# Start Node server:
CMD ["npm", "start"]

