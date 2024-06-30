const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Configuration des services en amont
const services = {
  vehicles: {
    url: 'http://localhost:4000/api/vehicles',
    prefix: '/vehicles'
  },
  users: {
    url: 'http://localhost:4001/api',
    prefix: '/users'
  }
};

// Middleware pour le proxy
app.use((req, res, next) => {
  const { url, method, body } = req;
  const [prefix, ...rest] = url.split('/');

  const service = services[prefix];
  if (service) {
    const targetUrl = `${service.url}/${rest.join('/')}`;
    axios({
      url: targetUrl,
      method,
      data: body,
      headers: req.headers
    })
      .then((response) => {
        res.status(response.status).json(response.data);
      })
      .catch((error) => {
        res.status(error.response.status).json(error.response.data);
      });
  } else {
    next();
  }
});

// Middleware de gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Erreur interne du serveur' });
});

// Endpoint pour le test
app.get('/', (req, res) => {
  res.send('API Gateway en cours d\'exécution');
});

app.listen(PORT, () => {
  console.log(`API Gateway démarré sur le port ${PORT}`);
});
