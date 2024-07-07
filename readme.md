# Projet d'Architecture - Gestion de Véhicules

Ce projet vise à mettre en place un système de gestion de véhicules avec un système d'authentification et d'autorisation. Chaque service sera isolé dans son propre conteneur Docker et sera orchestré à l'aide de Docker Compose.

## Fonctionnalités

- Gestion des véhicules : permet d'ajouter, modifier, supprimer et afficher les informations des véhicules.
- Système d'authentification : permet aux utilisateurs de s'authentifier avant d'accéder aux fonctionnalités du système.
- Système d'autorisation : définit des rôles et des permissions pour contrôler l'accès aux différentes fonctionnalités en fonction des utilisateurs.

## Technologies utilisées

- Docker : pour l'isolation des services dans des conteneurs.
- Docker Compose : pour orchestrer les différents conteneurs et gérer les dépendances.
- Nodejs(Express) : pour le développement des services (par exemple, Express.js pour le backend).

## Installation

1. Assurez-vous d'avoir Docker et Docker Compose installés sur votre machine.
2. Clonez ce dépôt : `git clone https://github.com/votre-utilisateur/votre-projet.git`
3. Accédez au répertoire du projet : `cd votre-projet`
4. Lancez les conteneurs avec Docker Compose : `docker-compose up -d`
5. Accédez à l'application dans votre navigateur : `http://localhost:3000` (ou le port de votre choix).

## Configuration

- Vous pouvez modifier les paramètres de configuration dans le fichier `docker-compose.yml` pour personnaliser les ports, les noms des conteneurs, etc.
- Consultez la documentation de chaque service pour plus d'informations sur la configuration spécifique.

## Documentation

- [Documentation du service de gestion des véhicules](docs/vehicle-service.md)
- [Documentation du système d'authentification](docs/authentication-service.md)
- [Documentation du système d'autorisation](docs/authorization-service.md)

## Contribuer

Les contributions sont les bienvenues! Si vous souhaitez contribuer à ce projet, veuillez suivre les étapes suivantes :

1. Fork ce dépôt.
2. Créez une branche pour votre fonctionnalité : `git checkout -b ma-nouvelle-fonctionnalite`
3. Faites vos modifications.
4. Committez vos changements : `git commit -m "Ajouter ma nouvelle fonctionnalité"`
5. Poussez vos modifications vers votre fork : `git push origin ma-nouvelle-fonctionnalite`
6. Ouvrez une pull request pour fusionner vos modifications dans la branche principale.
