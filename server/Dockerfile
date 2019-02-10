# React Application
FROM node:10.15.0
RUN mkdir -p /usr/api
WORKDIR /usr/api
COPY package*.json /usr/api/
RUN npm i
COPY . /usr/api
EXPOSE 4000
CMD [ "npm", "start" ]