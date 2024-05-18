// Description: Index controller having functions to create and get vahicules
const VehichuleService = require('../services/index.service');
const Vehicle = require('../models/index.model');
const Joi = require('joi');

createvehicule = async (req, res) => {
    const schema = Joi.object({
        registrationNumber: Joi.string().required(),
        make: Joi.string().required(),
        model: Joi.string().required(),
        year: Joi.number().integer().min(1886).max(new Date().getFullYear()).required(),
        rentalPrice: Joi.number().positive().required()
    });

    // Valider les données de la requête
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).send({ error: error.details[0].message });
    }

    const { registrationNumber, make, model, year, rentalPrice } = req.body;
    const vehicle = new Vehicle({
        registrationNumber, make, model, year, rentalPrice
    });

    try {
        await VehichuleService.createVehicule(vehicle);
        res.status(201).send("Vehicle created");
    } catch (error) {
        res.status(400).send(error);
    }
}

getvehicles = async (req, res) => {
    try {
        const vehicles = await VehichuleService.getVehicles();
        res.status(200).send(vehicles);
    } catch (error) {
        res.status(500).send(error);
    }
}

//function to delete vehicle
deletevehicle = async (req, res) => {
    try {
        const id = req.params.id;
        ok = await VehichuleService.deleteVehicle(id);
        if (ok) {
            res.status(200).send("Vehicle deleted");
        } else {
            res.status(400).send("Error deleting vehicle");
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
}

//update vehicle
updatevehicle = async (req, res) => {
    try {
        const id = req.params.id;
        const vehicule = req.body;
        ok = await VehichuleService.updateVehicule(id, vehicule);
        if (ok) {
            res.status(200).send("Vehicle updated");
        } else {
            res.status(400).send("Error updating vehicle");
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
}

//get vehicle by id
getvahiculebyid = async (req, res) => {
    try {
        const id = req.params.id;
        ok = await VehichuleService.getVehiculeById(id);
        if (ok!=null) {
            res.status(200).send(ok);
        } else {
            res.status(400).send("Error getting vehicle not found");
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
}

// healthCheck
healthCheck = async (req, res) => {
    tt = "http://localhost:3000/api-docs"
    try {
        if (!VehichuleService.healthCheck()) {
            res.status(500).send("Health check failed");
        }
        res.status(200).send(`Health check passed go to <a href=\"${tt}\"> http://localhost:3000/api-docs/<a> to see the swagger ui`);
    } catch (error) {
        res.status(500).send("Health check failed");
    }
}
searchvehiculebyregistrationnumber = async (req, res) => {
    try {
        const registrationNumber = req.params.registrationNumber;
        const vehicle = await VehichuleService.searchvehiculebyregistrationnumber(registrationNumber);
        if (vehicle) {
            res.status(200).send(vehicle);
        } else {
            res.status(400).send("Vehicle not found");
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

searchVehicleByMaxPrice = async (req, res) => {
    try{
        const maxPrice = req.params.maxPrice;

        const vehicles = await VehichuleService.searchVehicleByMaxPrice(maxPrice);

        res.status(200).send(vehicles);
    }catch (error) {
        res.status(500).send(error);
    }
}



//exporting the functions
module.exports = {
    createvehicule,
    getvehicles,
    deletevehicle,
    updatevehicle,
    getvahiculebyid,
    healthCheck,
    searchvehiculebyregistrationnumber,
    searchVehicleByMaxPrice
}