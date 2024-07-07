//page containing services
const Vehichel = require('../models/index.model');
//conextion a la base de donnees 
require('../db/conn');
const axios = require('axios');


//function to get all vehicles
getVehicles = async () => {
    try {
        const vehicles = await Vehichel.find({});
        return vehicles;
    } catch (error) {
        return []
    }
}

//function to create a vehicle
createVehicule = async (vehicule) => {
    try {
        await vehicule.save();
        return true;
    } catch (error) {
        return false;
    }
}

//function to delete a vehicle
deleteVehicle = async (id) => {
    try {
        await Vehichel.findByIdAndDelete(id);
        return true;
    } catch (error) {
        return false;
    }
}

//function to update a vehicle
updateVehicule = async (id, vehicule) => {
    try {
        await Vehichel.findByIdAndUpdate(id, vehicule);
        return true;
    }
    catch (error) {
        return false;
    }
}

// healthCheck
healthCheck = async () => {
    try {
        // essaie de connxion a la bd
        await seeddb();
        return true;
    } catch (error) {
        return false;
    }
}
//getVehiculeById 
getVehiculeById = async (id) => {
    try {
        const vehicule = await Vehichel.findById(id);
        return vehicule;
    } catch (error) {
        return null;
    }
}
// searchvehiculebyregistrationnumber
searchvehiculebyregistrationnumber = async (registrationnumber) => {
    try {
        const vehicule = await Vehichel.find({ registrationNumber: registrationnumber });
        return vehicule;
    }
    catch (error) {
        return null;
    }
}
//genarating fake vehicles
const { faker } = require('@faker-js/faker');
async function seeddb() {
    console.log("seeding db");
    try {
        for (let index = 0; index < 15; index++) {
            var voi = new Vehichel({
                registrationNumber: faker.vehicle.vrm(),
                model: faker.vehicle.model(),
                year: faker.date.past().getFullYear(),
                make: faker.vehicle.manufacturer(),
                rentalPrice: faker.commerce.price(),
            });
            await voi.save();
        }
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
}
//function to get user permition
getPermission = async (token) => {
    try {
        const response = await axios.get('http://userauth:4001/permissions', {
            headers: {
                Authorization: `${token}`
            }
        });
        console.log("reponce recu de getresponce")
        console.log(response)
        return response.data;
    } catch (err) {
        return [];

    }
}

module.exports = {
    getVehicles,
    createVehicule,
    deleteVehicle,
    updateVehicule,
    healthCheck,
    getVehiculeById,
    searchvehiculebyregistrationnumber,
    getPermission,
}