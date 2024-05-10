FROM node:21

WORKDIR /usr/src/app

COPY ./app/pakacge*.json ./

RUN npm install

COPY ./app .

EXPOSE 4001

CMD ["npm", "start"]
