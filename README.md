# Propelize Vehicle Rental Service

## Description
Ce projet est une application de location de véhicules pour Propelize, implémentée avec Django et Django REST Framework. L'application permet aux utilisateurs de rechercher, réserver et gérer des véhicules via une API RESTful. Ce projet utilise également Docker pour la conteneurisation et PostgreSQL comme base de données.

## Fonctionnalités
- CRUD (Create, Read, Update, Delete) pour les véhicules
- Recherche de véhicules par numéro d'immatriculation
- Recherche de véhicules par plage de prix
- Authentification et autorisation avec JWT

# Routes
 Les routes générées par le routeur incluront :
 - GET /vehicles/ : Obtenir la liste de tous les véhicules
 - POST /vehicles/ : Créer un nouveau véhicule
 - GET /vehicles/<id>/ : Obtenir les détails d'un véhicule spécifique
 - PUT /vehicles/<id>/ : Mettre à jour un véhicule spécifique
 - DELETE /vehicles/<id>/ : Supprimer un véhicule spécifique
 - GET /vehicles/?search=<query> : Rechercher des véhicules par numéro d'immatriculation
 - GET /vehicles/search-by-price/?min_price=<min>&max_price=<max> : Rechercher des véhicules par plage de prix
 - 
## Prérequis
- Python 3.9+
- Docker
- Docker Compose
- PostgreSQL

## Installation

### Cloner le dépôt
```bash
git clone https://github.com/ousmanelagrange/propelize.git
cd propelize
