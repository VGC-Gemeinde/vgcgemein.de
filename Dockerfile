FROM golang:alpine

RUN mkdir /app
WORKDIR /app

COPY ./Makefile /app
COPY ./main.go /app
COPY ./go.mod /app
COPY ./ui /app/ui

RUN apk add --no-cache make
RUN apk add --no-cache npm
RUN make build

EXPOSE 8000

ENTRYPOINT ["make", "run"]