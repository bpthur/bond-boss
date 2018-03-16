FROM node:alpine

# Create app directory
WORKDIR /app

# Install dependencies
COPY src /app
RUN npm install

# Bundle app
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
