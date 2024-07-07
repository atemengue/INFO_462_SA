//logique de conexion a une base de donnes mongodb
const mongoose = require('mongoose');
//connexion a la base de donnees
// const target = 'localhost'
const target = 'dbvehicle'
// mongoose.connect(`mongodb+srv://user1:userdb@testcluster.jjurk0m.mongodb.net/?retryWrites=true&w=majority&appName=testcluster`, {
    mongoose.connect(`mongodb://${target}:27017/vehicules`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to the database');
}).catch((error) => {
    console.log('Error connecting to the database');
});
