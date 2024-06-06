const fs = require('fs');
const path = require('path');
const vehiclesDataPath = path.join(__dirname, '../models/vehicles.json');

function readVehiclesData() {
  const rawData = fs.readFileSync(vehiclesDataPath, 'utf8');
  return JSON.parse(rawData);
}

function writeVehiclesData(data) {
  fs.writeFileSync(vehiclesDataPath, JSON.stringify(data, null, 2));
}

exports.getAllVehicles = (req, res) => {
  const vehicles = readVehiclesData();
  res.json(vehicles);
};

exports.getVehicleById = (req, res) => {
  const vehicles = readVehiclesData();
  const vehicleId = parseInt(req.params.id); // Récupérez l'ID du véhicule depuis la requête

  const vehicle = vehicles.find(v => v.id === vehicleId);
  if (!vehicle) {
    return res.status(404).json({ message: 'Véhicule non trouvé' });
  }
  res.json(vehicle);


};

exports.createVehicle = (req, res) => {

  const vehicles = readVehiclesData();
  const newVehicle = req.body; // Récupérez les données du véhicule depuis la requête
  newVehicle.id = vehicles.length + 1; // Générez un nouvel ID (ou utilisez une autre logique)

  vehicles.push(newVehicle);
  writeVehiclesData(vehicles);
  res.status(201).json(newVehicle);
};

exports.updateVehicle = (req, res) => {
  const vehicles = readVehiclesData();
  const vehicleId =parseInt(req.params.id);
  const updatedVehicle = req.body; // Récupérez les nouvelles données du véhicule depuis la requête
  const existingVehicle = vehicles.find(v => v.id === vehicleId);
  if (!existingVehicle) {
    return res.status(404).json({ message: 'Véhicule non trouvé' });
  }
  // Mettez à jour les propriétés du véhicule existant avec les nouvelles données
  existingVehicle.brand = updatedVehicle.brand;
  existingVehicle.model = updatedVehicle.model;
  existingVehicle.year = updatedVehicle.year;
  existingVehicle.rentalPrice = updatedVehicle.rentalPrice;
  writeVehiclesData(vehicles);
  res.json(existingVehicle);
};

exports.deleteVehicle = (req, res) => {
  const vehicles = readVehiclesData();
  const vehicleId = parseInt(req.params.id);
  const index = vehicles.findIndex(v => v.id=== vehicleId);
  if (index === -1) {
    return res.status(404).json({ message: 'Véhicule non trouvé' });
  }
  vehicles.splice(index, 1);
  writeVehiclesData(vehicles);
  res.json({ message: 'Véhicule supprimé avec succès' });
};





exports.getVehicleByPrice = (req, res) => {
  const vehicles = readVehiclesData();
  const vehicleId = parseInt(req.params.rentalPrice); // Récupérez l'ID du véhicule depuis la requête

  const vehicle = vehicles.find(v => v.rentalPrice >= vehicleId);
  if (!vehicle) {
    return res.status(404).json({ message: 'Véhicule non trouvé' });
  }
  res.json(vehicle);


};


exports.getVehiclesByRN = (req, res) => {
  const vehicles = readVehiclesData();
  const vehicleId = (req.params.RegistrationNumber); // Récupérez l'ID du véhicule depuis la requête

  const vehicle = vehicles.find(v => v.RegistrationNumber === vehicleId);
  if (!vehicle) {
    return res.status(404).json({ message: 'Véhicule non trouvé' });
  }
  res.json(vehicle);


};
