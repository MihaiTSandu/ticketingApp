FROM node:alpine

WORKDIR /app
COPY package.json .
RUN yarn --omit=dev
COPY . .

CMD ["yarn", "start"]