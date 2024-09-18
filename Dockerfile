# Base image
FROM node:latest
ENV NODE_ENV=production
# Create app directory
WORKDIR /app
# Install app dependencies
COPY ["package.json", "./"]
RUN corepack enable
RUN yarn set version stable
RUN yarn install && yarn cache clean

# Bundle app source
CMD [ "yarn", "start" ]