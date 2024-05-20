API de Gestion des Véhicules;


Cette API permet de gérer les informations sur les véhicules. Vous pouvez enregistrer, modifier,supprimer et rechercher des véhicules par leur ID, leur rentalPriceVehicule et leur registratioNumberVehicule. L'API est développée avec Spring Boot et est conteneurisée à l'aide de Docker.

Table des matières
Introduction
Fonctionnalités
Technologies Utilisées
Prérequis
Installation
Utilisation
Endpoints
Contribution
Licence
Auteurs
Introduction
Cette API permet de gérer une base de données de véhicules, offrant des fonctionnalités pour enregistrer, modifier et rechercher des véhicules par différents critères.

Fonctionnalités
Enregistrer un véhicule
Modifier un véhicule
Supprimer un vehicule
Rechercher un véhicule par ID
Rechercher un véhicule par rentalPriceVehicule
Rechercher un véhicule par registratioNumberVehicule
Technologies Utilisées
Java
Spring Boot
Docker
Maven
H2 Database 
Prérequis
Avant de commencer, assurez-vous d'avoir installé les logiciels suivants :

Java JDK
Maven
Docker
Installation
Clonez le repository :

bash
Copier le code
git clone -b tpgroupe3 https://github.com/hilairemopo/API_Vehicules
cd votre-repository

Construisez l'image Docker :


bash
Copier le code
docker build -t gestion-vehicules-api .
Lancez le conteneur Docker :

bash
Copier le code
docker run -p 8081:8081 gestion-vehicules-api
Utilisation
Une fois le conteneur Docker en cours d'exécution, vous pouvez accéder à l'API à l'adresse suivante : http://localhost:8081/swagger-ui/index.html

Endpoints
Voici les endpoints disponibles dans l'API :

Enregistrer un véhicule
URL : /vehicules

Méthode : POST

Description : Enregistre un nouveau véhicule.

Corps de la requête :

json
Copier le code
{
  "id": 1,
  "make": "Toyota",
  "model": "Corolla",
  "registratioNumberVehicule": "ABC-1234",
  "rentalPriceVehicule": 12000,
  "yeaVehicule": "2024-05-18T12:39:13.437+00:00"
}
Modifier un véhicule
URL : /vehicules/{id}

Méthode : PUT

Description : Modifie les informations d'un véhicule existant.

Corps de la requête :

json
Copier le code
{
  "id": 1,
  "make": "Toyota",
  "model": "Corolla",
  "registratioNumberVehicule": "ABC-1234",
  "rentalPriceVehicule": 12000,
  "yeaVehicule": "2024-05-18T12:39:13.437+00:00"
}
Rechercher un véhicule par ID
URL : /vehicules/{id}
Méthode : GET
Description : Recherche un véhicule par son ID.
Rechercher un véhicule par rentalPrice
URL : "/vehicules/rentalPrice{rentalPrice}"
Méthode : GET
Description : Recherche des véhicules par leur prix.
Rechercher un véhicule par matricule
URL : /vehicules/registration/{registration}
Méthode : GET
Description : Recherche un véhicule par son registration
Contribution
Les contributions sont les bienvenues ! Veuillez suivre les étapes suivantes pour contribuer :

Fork le projet
Créez une branche pour votre fonctionnalité (git checkout -b feature/AmazingFeature)
Commitez vos modifications (git commit -m 'Add some AmazingFeature')
Poussez vers la branche (git push origin feature/AmazingFeature)
Ouvrez une Pull Request
Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

Auteurs
Votre Nom - Développeur Principal - tagnehilaire90@gmail.com
