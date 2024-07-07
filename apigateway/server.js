// const path = require('path');
// const gateway = require('express-gateway');

// gateway()
//   .load(path.join(__dirname, 'config'))
//   .run();

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 8080;

// Configuration des routes pour le proxy
app.use('/vehicles', createProxyMiddleware({
  target: 'http://vehicle:4000',
  changeOrigin: true,
  // pathRewrite: {
  //   '^/vehicle': '', // Supprime /service1 de la requête
  // },
}));

app.use('/auth', createProxyMiddleware({
  target: 'http://userauth:4001',
  changeOrigin: true,
  // pathRewrite: {
  //   '^/auth': '', // Supprime /service2 de la requête
  // },
}));

// Route par défaut
app.get('/', (req, res) => {
  res.send('Bienvenue à l\'API Gateway fepciser bien votre path');
});

app.listen(PORT, () => {
  console.log(`API Gateway en cours d'exécution sur le port ${PORT}`);
});
