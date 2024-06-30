const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'User Service API',
    version: '1.0.0',
    description: 'API pour le microservice Utilisateurs',
  },
  servers: [
    {
      url: 'http://localhost:4001/api',
      description: 'Développement',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js', './controllers/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
