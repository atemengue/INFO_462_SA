FROM node:21

WORKDIR /usr/src/app

COPY ./app/pakacge*.json ./

RUN npm install

COPY ./app .

EXPOSE 4002

CMD ["npm", "start"]
