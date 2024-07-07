// Description: Index controller having functions to create and get vahicules
const VehichuleService = require('../services/index.service');
const Vehicle = require('../models/index.model');
createvehicule = async (req, res) => {
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
    token = req.headers.authorization;
    if (token) {

        permissions = await VehichuleService.getPermission(token)
        console.log("les permissions recu sont")
        console.log(permissions.permissions)
        kk = false
        for (let perm = 0; perm < permissions.permissions.length; perm++) {
            const element = permissions.permissions[perm];
            if (element == "delete") {
                kk = true
            }
        }
        if (kk) {

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
        } else {
            res.status(403).send("You dont have permission to delete");
        }
    } else {
        res.send({ "message": "provided token is not correct" })
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
        if (ok != null) {
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
    tt = "http://vehicle:4000/api-docs"
    try {
        if (!VehichuleService.healthCheck()) {
            res.status(500).send("Health check failed");
        }
        res.status(200).send(`Health check passed go to <a href=\"${tt}\"> http://vehicle:3000/api-docs/<a> to see the swagger ui`);
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

//de



//exporting the functions
module.exports = {
    createvehicule,
    getvehicles,
    deletevehicle,
    updatevehicle,
    getvahiculebyid,
    healthCheck,
    searchvehiculebyregistrationnumber
}