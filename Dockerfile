FROM jojomi/hugo:latest as build

ADD . /app
WORKDIR /app

RUN HUGO_ENV=production hugo

FROM nginx:alpine

COPY --from=build ./app/public /usr/share/nginx/html

WORKDIR /app

