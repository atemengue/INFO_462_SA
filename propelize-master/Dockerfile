# Utilisez l'image Python officielle comme image de base
FROM python:3.9

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez le fichier requirements.txt dans le conteneur
COPY ./requirements.txt /app/requirements.txt

# Installez les dépendances du projet
RUN pip install --no-cache-dir -r requirements.txt

# Copiez tout le contenu du répertoire de votre projet dans le conteneur
COPY . /app

# Exposez le port sur lequel l'application Django s'exécute
EXPOSE 8000

# Démarrez l'application Django lorsque le conteneur démarre
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
