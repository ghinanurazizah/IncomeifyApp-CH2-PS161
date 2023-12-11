FROM node:18.12-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma/

RUN apk add --update --no-cache openssl1.1-compat
RUN npm install --only=production

COPY . ./

CMD node app.js