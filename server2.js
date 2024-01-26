const express = require('express');
const app = express();
const puerto = 5000;

app.use(express.json());

app.post('/webhook', (req, res) => {
  console.log('Evento:', req.body.evento);
  console.log('Dato:', req.body.dato);
  res.status(200).send('Webhook recibido con éxito.');
});

app.listen(puerto, () => {
  console.log(`Servidor escuchando en http://localhost:${puerto}`);
});