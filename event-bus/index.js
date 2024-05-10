const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const PORT = 4005;
const EVENTS_SERVICE_URL = process.env.EVENTS_SERVICE_URL || 'http://localhost:4000';

const events = [];

app.post("/events", async (req, res) => {
  const event = req.body;

  events.push(event);

  // Envoie l'événement à tous les services via le bus d'événements
  try {
    await Promise.all([
      axios.post(`${EVENTS_SERVICE_URL}/events`, event),
      axios.post(`${EVENTS_SERVICE_URL.replace('4000', '4001')}/events`, event),
      axios.post(`${EVENTS_SERVICE_URL.replace('4000', '4002')}/events`, event),
      axios.post(`${EVENTS_SERVICE_URL.replace('4000', '4003')}/events`, event)
    ]);
  } catch (error) {
    console.error(error.message);
  }

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
