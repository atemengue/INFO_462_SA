//creation of mongose vehicle model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
VehicleSchema = new Schema({
    registrationNumber: String,
    model: String,
    year: Number,
    make: String,
    rentalPrice: Number,
});

module.exports = mongoose.model('Vehicle', VehicleSchema);