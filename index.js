require('dotenv').config();
const express = require('express');
const axios = require('axios');
const authenticateToken = require('./middleware/auth');
const authorizeRoles = require('./middleware/authorize');

const app = express();
app.use(express.json());

const USER_SERVICE_URL = 'http://api-gateway-user-service-1:3001/api/users';
const VEHICLE_SERVICE_URL = 'http://api-gateway-vehicle-service-1:3000/api/vehicles';

app.use('/api/users', async (req, res) => {
    const url = `${USER_SERVICE_URL}${req.url}`;
    console.log(`user service url: ${USER_SERVICE_URL}`);
    console.log(`request url: ${req.url}`);
    console.log(`Forwarding request to: ${url}`);
    try {
        const response = await axios({ method: req.method, url, data: req.body, headers: req.headers });
        console.log(`Received response from user service:`, response.data);
        res.status(response.status).send(response.data);
    } catch (error) {
        console.error(`Error from user service:`, error.message);
        res.status(error.response?.status || 500).send(error.response?.data || 'Internal Server Error');
    }
});

app.use('/api/vehicles', authenticateToken, authorizeRoles('admin', 'user'), async (req, res) => {
    const url = `${VEHICLE_SERVICE_URL}${req.url}`;
    console.log(`Forwarding request to: ${url}`);
    try {
        const response = await axios({ method: req.method, url, data: req.body, headers: req.headers });
        console.log(`Received response from vehicle service:`, response.data);
        res.status(response.status).send(response.data);
    } catch (error) {
        console.error(`Error from vehicle service:`, error.message);
        res.status(error.response?.status || 500).send(error.response?.data || 'Internal Server Error');
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`API Gateway is running on port ${PORT}`);
});