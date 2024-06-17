const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'My API',
            version: '1.0.0',
        },
    },
    // Path to the API docs
    apis: ['./routes/*.js','./index.js'],
};

const specs = swaggerJsdoc(options);
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/index.router');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

// Serve Swagger UI at /api-docs

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(specs)
);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});