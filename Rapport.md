Docker nous permet de créer des conteneurs qui emballent notre application et ses dépendances dans un format autonome,
qui est ensuite exécutable sur n’importe quel environnement. 
Voici comment nous avons utiliser Docker pour résoudre notre problème :

Créer un Dockerfile : Un Dockerfile est un fichier texte qui contient les instructions pour construire une image Docker. 
Il définit l’environnement dans lequel votre application s’exécutera.
Pour notre application React et Node.js, notre Dockerfile pourrait ressembler à ceci :


-# Utiliser une image Node.js comme base

# FROM node:18-alphine
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install
# COPY . .
# EXPOSE 4000
# CMD [ "npm", "start" ]*

Construire l’image Docker : Une fois que nous avons créé notre Dockerfile, nous pouvons construire notre image Docker en utilisant la commande docker build. Cette commande crée une image Docker à partir de notre Dockerfile.
docker build -t nom-de-votre-application .

Exécuter le conteneur Docker : Après avoir construit notre image Docker, nous pouvons exécuter notre application dans un conteneur Docker en utilisant la commande docker run ou docker compose up pour plusieurs dockerfile.
docker run -p 4000:4000 -d nom-de-votre-application

En utilisant Docker, nous pouvons nous assurer que notre application s’exécutera de la même manière, quel que soit l’environnement dans lequel elle est déployée. De plus, Docker facilite la gestion et le déploiement de services dans une architecture de microservices. Chaque service peut être emballé dans un conteneur Docker, ce qui permet de les déployer, de les mettre à l’échelle et de les gérer indépendamment les uns des autres.