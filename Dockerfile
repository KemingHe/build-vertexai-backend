# Dockerfile
#
# Define base image, Node.js runtime:
FROM node:21-bookworm-slim

# Define the work directory and copy files:
# (secrets/irrelevant files are def in .dockerignore)
WORKDIR /app
COPY . /app/

# Expose Node port:
EXPOSE 3000/tcp

# Install Node modules and soft fix if needed:
RUN npm install && npm audit fix

# Lint, test, and build project:
# (one-time-only, during image building)
RUN npm run lint && \
    npm run test && \
    npm run build

# Change user to non-root:
USER node

# and start Node server (every-time image is run):
CMD ["npm", "start"]

