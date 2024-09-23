# Base image
FROM node:latest
ENV NODE_ENV=production
# Create app directory
WORKDIR /app
# Install app dependencies
COPY ["package.json", "./"]
RUN npm install -g npm@latest && npm install

# Bundle app source
COPY . .
CMD [ "npm", "start" ]