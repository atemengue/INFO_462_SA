const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const config = require('./config');
const { exec } = require('child_process');
const User = require('./models/User.js');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

// Fonction pour vérifier et démarrer le service MongoDB
const startMongoService = () => {
    return new Promise((resolve, reject) => {
      exec('sudo systemctl status mongod', (error, stdout, stderr) => {
        if (error) {
          // Le service MongoDB n'est pas en cours d'exécution, donc on le démarre
          exec('sudo systemctl start mongod', (error, stdout, stderr) => {
            if (error) {
              reject(error);
            } else {
              console.log('Service MongoDB démarré avec succès');
              resolve();
            }
          });
        } else {
          // Le service MongoDB est déjà en cours d'exécution
          console.log("Service MongoDB déjà en cours d'exécution");
          resolve();
        }
      });
    });
  };
  
  startMongoService()
  .then(() => {
    mongoose.connect(config.mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
     // useFindAndModify: false,
      //useCreateIndex: true
    })
    .then(() => {console.log('Connecté à MongoDB')
        // Créer/mettre à jour le modèle User
      User.syncIndexes();
    })
    .catch(err => console.error('Erreur de connexion à MongoDB', err));
  })
  .catch(err => {
    console.error('Erreur de démarrage du service MongoDB', err);
    process.exit(1);
  });


app.use(express.json());
app.use('/api/users', userRoutes);

// Intégrer Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const port = process.env.PORT || 4001;
app.listen(port, () => console.log(`Serveur démarré sur le port ${port}`));