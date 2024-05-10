<h1 align="center" style="color: green; font-weight: bold;">Architecture logicielle - Groupe 8</h1> <p align="center" style="background-color: green; padding: 20px;"> <img src="images/logo.png" alt="Logo" width="200" style="border-radius: 50%;"> </p>
Présentation
Ce projet est une application distribuée composée de plusieurs microservices. Il permet de créer, modérer et afficher des posts avec leurs commentaires.

Architecture
<h3 style="color: green; font-weight: bold;">Architecture</h3>
L'application est constituée des microservices suivants :

Client : Interface web pour interagir avec l'application.
Posts : Service responsable de la gestion des posts.
Comments : Service responsable de la gestion des commentaires.
Events : Service bus d'événements permettant la communication entre les différents services.
Query : Service responsable de l'affichage des posts et commentaires.
Moderation : Service chargé de la modération des commentaires.
Chaque service est conteneurisé avec Docker et peut être déployé indépendamment.

Configuration Docker
<h3 style="color: green; font-weight: bold;">Configuration Docker</h3>
Voici la configuration Docker Compose pour déployer l'ensemble de l'application :


version: '3'
services:
  comments:
    build: ./comments
    ports:
      - "4001:4001"
    environment:
      - EVENTS_SERVICE_URL=http://events-service:4005
  posts:
    build: ./posts
    ports:
      - "4000:4000"
    environment:
      - EVENTS_SERVICE_URL=http://events-service:4005
  events-service:
    build: ./event-bus
    ports:
      - "4005:4005"
    environment:
      - POSTS_SERVICE_URL=http://posts:4000
      - COMMENTS_SERVICE_URL=http://comments:4001
      - QUERY_SERVICE_URL=http://query:4002
      - MODERATION_SERVICE_URL=http://moderation:4003
  query:
    build: ./query
    ports:
      - "4002:4002"
    environment:
      - POSTS_SERVICE_URL=http://posts:4000
      - COMMENTS_SERVICE_URL=http://comments:4001
      - EVENTS_SERVICE_URL=http://events-service:4005
  moderation:
    build: ./moderation
    ports:
      - "4003:4003"
    environment:
      - EVENTS_SERVICE_URL=http://events-service:4005
  client:
    build: ./client
    ports:
      - "3000:3000"
Commandes Docker
<h3 style="color: green; font-weight: bold;">Commandes Docker</h3>
Voici quelques commandes Docker utiles pour gérer les microservices :

<details> <summary style="color: green; font-weight: bold;">Commandes Docker</summary>
Lancer un seul service (par exemple, posts) :


docker-compose start posts
Arrêter un service sans arrêter les autres :


docker-compose stop posts
Relancer une nouvelle version sans arrêter les conteneurs en cours d'exécution :


docker-compose up -d --force-recreate
Arrêter tous les conteneurs :

docker-compose down
</details>
Adressage des applications
Lors du déploiement des applications dans des conteneurs, l'utilisation de "localhost" dans les liens d'API n'est plus appropriée. Chaque conteneur a sa propre adresse IP et son propre environnement, ce qui signifie que les liens "localhost" ne fonctionneront pas de manière fiable entre les différents composants de l'application.

Pour résoudre ce problème, les liens d'accès aux API sont définis dans des variables d'environnement. Cela permet de découpler le code du lien d'accès spécifique et de rendre l'application plus flexible et facile à maintenir.

Problème rencontré et solution
<h3 style="color: green; font-weight: bold;">Problème et solution</h3>
Un problème a été rencontré avec le service "Query" qui renvoyait toujours une liste vide au lieu des posts et commentaires qui avaient été créés. Cela était dû au fait que les événements n'étaient chargés qu'au démarrage du service, et que tout événement créé après le démarrage n'était pas pris en compte.

La solution a été de recharger les événements avant de renvoyer les posts, afin que la variable "posts" soit correctement remplie.

Déploiement
<h3 style="color: green; font-weight: bold;">Déploiement</h3>
Pour déployer l'application, suivez les étapes suivantes :

Clonez le dépôt Git.
Construisez les images Docker avec la commande docker-compose build.
Démarrez les conteneurs avec la commande docker-compose up -d.
Une fois que tous les conteneurs sont lancés, vous pourrez accéder à chaque application aux adresses suivantes :

Comments : http://localhost:4001
Posts : http://localhost:4000
Events : http://localhost:4005
Query : http://localhost:4002
Moderation : Pas d'interface web, communique avec les autres services
Client : http://localhost:3000/