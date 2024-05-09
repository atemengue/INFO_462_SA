# voici le Dockerfile pour l'application "Events" :

# Utiliser une image Node.js officielle en tant que base
FROM node:latest

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers nécessaires dans le conteneur
COPY package*.json ./
COPY src ./src
COPY public ./public

# Installer les dépendances
RUN npm install

# Exposer le port nécessaire par l'application
EXPOSE 3000

# Commande pour démarrer l'application

CMD ["npm", "start"]


# voici le Dockerfile pour l'application "Comments" :

# Utiliser une image Node.js officielle en tant que base
FROM node:latest

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers nécessaires dans le conteneur
COPY package*.json ./
COPY src ./src
COPY public ./public

# Installer les dépendances
RUN npm install

# Exposer le port nécessaire par l'application
EXPOSE 4001

# Commande pour démarrer l'application

CMD ["npm", "start"]

# voici le Dockerfile pour l'application "Event-bus" :

# Utiliser une image Node.js officielle en tant que base
FROM node:latest

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers nécessaires dans le conteneur
COPY package*.json ./
COPY src ./src
COPY public ./public

# Installer les dépendances
RUN npm install

# Exposer le port nécessaire par l'application
EXPOSE 4005

# Commande pour démarrer l'application

CMD ["npm", "start"]


# voici le Dockerfile pour l'application "Moderation" :

# Utiliser une image Node.js officielle en tant que base
FROM node:latest

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers nécessaires dans le conteneur
COPY package*.json ./
COPY src ./src
COPY public ./public

# Installer les dépendances
RUN npm install

# Exposer le port nécessaire par l'application
EXPOSE 4003

# Commande pour démarrer l'application

CMD ["npm", "start"]

# voici le Dockerfile pour l'application "Ports" :

# Utiliser une image Node.js officielle en tant que base
FROM node:latest

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers nécessaires dans le conteneur
COPY package*.json ./
COPY src ./src
COPY public ./public

# Installer les dépendances
RUN npm install

# Exposer le port nécessaire par l'application
EXPOSE 4000

# Commande pour démarrer l'application

CMD ["npm", "start"]
# voici le Dockerfile pour l'application "Events" :

# Utiliser une image Node.js officielle en tant que base
FROM node:latest

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers nécessaires dans le conteneur
COPY package*.json ./
COPY src ./src
COPY public ./public

# Installer les dépendances
RUN npm install

# Exposer le port nécessaire par l'application
EXPOSE 4002

# Commande pour démarrer l'application

CMD ["npm", "start"]



# le fichier docker-compose.yaml

version: '3'

services:
  client:
    build: ./client
    ports:
      - "3000:3000"

  comments:
    build: ./comments
    # Spécifiez les autres configurations nécessaires pour ce service
    ports:
      -4001:4001

  event-bus:
    build: ./event-bus
    # Spécifiez les autres configurations nécessaires pour ce service
    ports:
      -4005:4005

  moderation:
    build: ./moderation
    # Spécifiez les autres configurations nécessaires pour ce service
    ports:
      -4003:4003

  posts:
    build: ./posts
    # Spécifiez les autres configurations nécessaires pour ce service
    ports:
      -4000:4000

  query:
    build: ./query
    # Spécifiez les autres configurations nécessaires pour ce service
    ports:
      -4002:4002
