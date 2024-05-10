FROM node:18

# Create app directory
WORKDIR /usr/src/app/

COPY package.json $WORKDIR

RUN npm install

COPY * /usr/src/app/

EXPOSE 3000

CMD ["npm", "start"]