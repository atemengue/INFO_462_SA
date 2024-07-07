const express = require('express');
const app = express();
app.get('/endpoint/hello', (req, res) => {
    res.json({ message: "Hello from the microservice!" });
    console.log('Request received');
});
app.listen(3000, () => {
    console.log('Service running on port 3000');
});