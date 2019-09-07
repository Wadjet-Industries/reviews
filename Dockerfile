FROM node:8.16.1-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install --only=prod

EXPOSE 3003

CMD [ "npm", "start" ]