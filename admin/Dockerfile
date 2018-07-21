FROM hacdias/filebrowser:v1.8.0 as builder_filebrowser

FROM jojomi/hugo:latest as builder_hugo

FROM alpine

RUN apk add --no-cache curl

COPY --from=builder_filebrowser /filebrowser /usr/local/bin/filebrowser
COPY --from=builder_hugo /usr/local/sbin/hugo /usr/local/sbin/hugo

WORKDIR /etc/

VOLUME /tmp
VOLUME /srv
VOLUME /etc
EXPOSE 80

ENTRYPOINT ["filebrowser", "--config", "/etc/config.json"]
