# Dockerfile
#
# Define base image, Node.js runtime:
FROM node:21-bookworm-slim

# Define the work directory and copy files:
# (secrets/irrelevant files are def in .dockerignore)
WORKDIR /app
COPY . /app

# Install core dependencies
RUN apt-get update
RUN apt-get -y install apt-utils bash
RUN apt-get -y install build-essential tree
RUN apt-get -y upgrade

# Update npm and install Node modules:
RUN npm install npm@latest
RUN npm install

# Install Python runtime for child_process scripts:
RUN apt-get install -y python3 python3-pip python3-venv

# Create venv, add to path, activate, and install deps:
RUN python3 -m venv /app/venv
ENV PATH="/app/venv/bin:$PATH"
RUN bash -c "source /app/venv/bin/activate"
RUN pip3 install --no-cache-dir -r /app/requirements.txt


# Expose Node and Py ports:
# ...for Node:
EXPOSE 3000
# ...for Python:
EXPOSE 5000

# Build project (one-time, during image building)
# and start Node server (every-time image is run):
RUN npm run build
CMD ["npm", "start"]

