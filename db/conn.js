//logique de conexion a une base de donnes mongodb
const mongoose = require('mongoose');
//connexion a la base de donnees
mongoose.connect('mongodb://localhost:27017/vehicles', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to the database');
}).catch((error) => {
    console.log('Error connecting to the database:', error.message);
});