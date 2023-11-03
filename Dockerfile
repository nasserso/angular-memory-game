FROM node:16.20-alpine AS build
COPY package.json package-lock.json ./
RUN npm install
WORKDIR /app
EXPOSE 4200
CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--poll"]
