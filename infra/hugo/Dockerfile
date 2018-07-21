FROM jojomi/hugo:latest as builder_hugo

FROM alpine

RUN apk add --no-cache curl

COPY --from=builder_hugo /usr/local/sbin/hugo /usr/local/sbin/hugo

VOLUME /src
VOLUME /output
WORKDIR /src

EXPOSE 1313

CMD [ "hugo", "serve", "--bind='0.0.0.0'", "--port=80"]