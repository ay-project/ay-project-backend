FROM node:10

RUN mkdir -p /usr/src/app/api_service
WORKDIR /usr/src/app/api_service

COPY /api_service/package.json /usr/src/app/api_service
RUN npm install
COPY ./api_service /usr/src/app/api_service
COPY ./database /usr/src/app/database

EXPOSE 3002