FROM jojomi/hugo:latest as build

WORKDIR /app
ADD . /app

RUN HUGO_ENV=production hugo

FROM nginx:alpine

COPY --from=build ./app/public /usr/share/nginx/html


