const express = require('express');
const router = express.Router();
const { getAllVehicles, getVehicleById, createVehicle, updateVehicle, deleteVehicle,getVehicleByPrice,getVehiclesByRN } = require('../controllers/vehicleController');

router.get('/', getAllVehicles);
router.get('/:id', getVehicleById);
router.post('/', createVehicle);
router.put('/:id', updateVehicle);
router.delete('/:id', deleteVehicle);

router.get('/search/:RegistrationNumber', getVehiclesByRN);
router.get('/price/:rentalPrice', getVehicleByPrice);


module.exports = router;
