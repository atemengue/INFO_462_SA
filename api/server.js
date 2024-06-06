// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

// Routes
const vehicleRoutes = require('./routes/vehicles');
app.use('/vehicles', vehicleRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});