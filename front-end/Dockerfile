# syntax=docker/dockerfile:1

FROM node:16-alpine as build

ENV NODE_ENV=production

WORKDIR /front-end

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /front-end/build /user/share/nginx/html
EXPOSE 80

CMD ["nginx","-g", "daemon off;"]