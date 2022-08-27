# syntax=docker/dockerfile:1

FROM node:14-alpine

ENV NODE_ENV=production

WORKDIR /front-end

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

EXPOSE 80:80

CMD ["npm", "start"]