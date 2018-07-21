FROM jojomi/hugo:0.44 as builder_hugo

FROM alpine

RUN apk add --no-cache curl

COPY --from=builder_hugo /usr/local/sbin/hugo /usr/local/sbin/hugo

VOLUME /src
VOLUME /output
WORKDIR /src

EXPOSE 80

CMD [ "hugo", "serve", "--bind='0.0.0.0'", "--port=80"]