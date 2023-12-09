FROM node:latest as react-build

COPY ./act-cms-website /app

EXPOSE 5173
WORKDIR /app

RUN npm install

RUN npm list

RUN npm run build
