FROM node:18

# Create app directory
WORKDIR /usr/src/app/

COPY package.json $WORKDIR

RUN npm install

COPY * /usr/src/app/

EXPOSE 4005

CMD ["npm", "start"]