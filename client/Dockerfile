# React Application
FROM node:10.15-alpine
LABEL maintainer="Mark Phillips"

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm i

COPY . /usr/src/app/
EXPOSE 8080
CMD [ "npm", "start" ]
