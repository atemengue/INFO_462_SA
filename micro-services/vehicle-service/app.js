const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Vehicle = require('./models/Vehicle');
const vehicleRoutes = require('./routes/vehicles');

const app = express();

app.use(bodyParser.json());
app.use('/api/vehicles', vehicleRoutes);

app.get('/', (req, res) => {
    res.send('Vehicle Management API');
});

module.exports = app;
