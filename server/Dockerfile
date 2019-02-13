# GraphQL Application
FROM node:10.15-alpine
LABEL maintainer="Mark Phillips"

RUN mkdir -p /usr/gql
WORKDIR /usr/gql
COPY package*.json /usr/gql/
RUN npm i

COPY . /usr/gql
EXPOSE 4000
CMD [ "npm", "start" ]