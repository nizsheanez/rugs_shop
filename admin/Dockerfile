FROM hacdias/filebrowser:v1.8.0 as builder_filebrowser

FROM alpine

RUN apk add --no-cache curl

COPY --from=builder_filebrowser /filebrowser /usr/local/bin/filebrowser


VOLUME /tmp
VOLUME /srv
VOLUME /etc

WORKDIR /srv

EXPOSE 80

CMD ["filebrowser", "--config", "/etc/filebrowser.json"]
