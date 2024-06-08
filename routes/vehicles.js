const express = require('express');
const Vehicle = require('../models/Vehicle');
const router = express.Router();

// Create a new vehicle
router.post('/', async (req, res) => {
    try {
        const vehicle = new Vehicle(req.body);
        await vehicle.save();
        res.status(201).send(vehicle);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all vehicles
router.get('/', async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        res.status(200).send(vehicles);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update a vehicle
router.put('/:registrationNumber', async (req, res) => {
    try {
        const vehicle = await Vehicle.findOneAndUpdate(
            { registrationNumber: req.params.registrationNumber },
            req.body,
            { new: true, runValidators: true }
        );
        if (!vehicle) {
            return res.status(404).send();
        }
        res.status(200).send(vehicle);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete a vehicle
router.delete('/:registrationNumber', async (req, res) => {
    try {
        const vehicle = await Vehicle.findOneAndDelete({ registrationNumber: req.params.registrationNumber });
        if (!vehicle) {
            return res.status(404).send();
        }
        res.status(200).send(vehicle);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Search by registration number
router.get('/search/registration', async (req, res) => {
    try {
        const vehicle = await Vehicle.findOne({ registrationNumber: req.query.registrationNumber });
        if (!vehicle) {
            return res.status(404).send();
        }
        res.status(200).send(vehicle);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Search by rental price
router.get('/search/price', async (req, res) => {
    try {
        const vehicles = await Vehicle.find({ rentalPrice: req.query.price });
        res.status(200).send(vehicles);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
