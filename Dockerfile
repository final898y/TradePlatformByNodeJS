# Base image
FROM node:latest
ENV NODE_ENV=production
# Create app directory
WORKDIR /app
# Install app dependencies
COPY [".yarnrc.yml", "yarn.lock", "package.json", "./"]
RUN corepack enable && yarn set version stable && yarn install && yarn cache clean

# Bundle app source
COPY . .
CMD [ "yarn", "start" ]