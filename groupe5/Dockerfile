# Utilisez une image de base Maven pour la phase de build
FROM maven:3.8.5-openjdk-17 AS build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le fichier pom.xml et télécharger les dépendances
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copier le reste du code de l'application et compiler
COPY src ./src
RUN mvn clean package -DskipTests

# Utilisez une image de base JDK pour l'exécution
FROM openjdk:17-jdk-slim

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier l'artefact construit du conteneur de build
COPY --from=build /app/target/*.jar app.jar

# Exposer le port
EXPOSE 8090

# Commande pour exécuter l'application
ENTRYPOINT ["java", "-jar", "app.jar"]
