FROM node:16-alpine AS builder

WORKDIR /app

COPY ./package.json ./yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]

