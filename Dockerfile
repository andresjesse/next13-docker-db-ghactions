FROM node:18-alpine

WORKDIR /app

RUN apk update && apk add bash
