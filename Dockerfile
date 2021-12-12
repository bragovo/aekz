FROM node:16-alpine AS builder

WORKDIR /app

COPY ./package.json ./yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

FROM node:16-alpine

WORKDIR /app

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY ./public ./package.json ./yarn.lock ./
RUN yarn install --frozen-lockfile --production

EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]

