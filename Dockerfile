FROM node:lts as dependencies
WORKDIR /requeue-build
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /requeue-build
COPY . .
COPY --from=dependencies /requeue-build/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /requeue-build
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /requeue-build/next.config.js ./
COPY --from=builder /requeue-build/public ./public
COPY --from=builder /requeue-build/.next ./.next
COPY --from=builder /requeue-build/node_modules ./node_modules
COPY --from=builder /requeue-build/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]