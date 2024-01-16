const express = require('express');
const bodyParser = require('body-parser');
const xmlparser = require('express-xml-bodyparser');
const app = express();
const puerto = 5000;

// app.use(express.json());
app.use(xmlparser());
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    // console.log('Full Request:', req);
// Parse the request body from the POST
   let body = req.body;
   console.log('body', body)
// Check the Incoming webhook message
   console.log('DATA MESSAGE', JSON.stringify(req.body, null, 2));
   const incidentData = req.body['soap:envelope']['soap:body'][0]['incidentonchange'][0]['item'][0];

   const description = incidentData.description[0];
   const projectname = incidentData.projectname[0];
   const categoryhierarchy = incidentData.categoryhierarchy[0];
   const authorname = incidentData.autorname[0];
   const groupname = incidentData.groupname[0];
   const responsiblename = incidentData.responsiblename[0];
   const categoryname = incidentData.categoryname[0];
   const companyname = incidentData.companyname[0];
   const customername = incidentData.customername[0];
   const statusname = incidentData.statusname[0];
   const receptorname = incidentData.receptorname[0];
 
   // Imprime los datos
   console.log('Description:', description);
   console.log('Project Name:', projectname);
   console.log('Category Hierarchy:', categoryhierarchy);
   console.log('Author Name:', authorname);
   console.log('Group Name:', groupname);
   console.log('Responsible Name:', responsiblename);
   console.log('Category Name:', categoryname);
   console.log('Company Name:', companyname);
   console.log('Customer Name:', customername);
   console.log('Status Name:', statusname);
   console.log('Receptor Name:', receptorname);
  res.status(200).send('Webhook recibido con éxito.');
});

app.listen(puerto, () => {
  console.log(`Servidor escuchando en el PUERTO :${puerto}`);
});


////////////////////////////////////////////////////////////////////////////////////////////////// 
// "use strict";

// const token = process.env.WHATSAPP_TOKEN;
// const token ='HAPPY'
// const puerto = 5000;
// const WHATSAPP_TOKEN = ''

// Imports dependencies and set up http server
// const request = require("request"),
//   const express = require("express");
//   const body_parser = require("body-parser");

//   const axios = require("axios").default
//   const app = express().use(body_parser.json()); // creates express http server
//   app.get("/", (req, res) => {
//     res.send("Testing request");
// })

// app.get("/webhook", (req, res) => {
//     // res.send("Testing request 2");
//     console.log('Verify token', req.query["hub.verify_token"]);
//     if (req.query["hub.verify_token"] === 'HAPPY'){
//         console.log('Verify token');
//         res.send(req.query["hub.challenge"]);
//     } else {
//         res.send("Validations failed");
//     }
    
// })

// app.post("/webhook", (req, res) => {
//     // Parse the request body from the POST
//     let body = req.body;
  
//     // Check the Incoming webhook message
//     console.log('DATA MESSAGE', JSON.stringify(req.body, null, 2));
  
//     if (req.body.object) {
//         console.log('number ID',req.body.entry[0].changes[0].value.metadata.phone_number_id)
//         console.log('from',req.body.entry[0].changes)
//         console.log('msg_body',req.body.entry[0].changes[0])
//         if (
//           req.body.entry &&
//           req.body.entry[0].changes &&
//           req.body.entry[0].changes[0] &&
//           req.body.entry[0].changes[0].value.messages &&
//           req.body.entry[0].changes[0].value.messages[0]
//         ) {
//           let phone_number_id =
//             req.body.entry[0].changes[0].value.metadata.phone_number_id;
//           let from = req.body.entry[0].changes[0].value.messages[0].from; // extract the phone number from the webhook payload
//           console.log('TEST_DATA',req.body.entry[0].changes[0].value)
//           let msg_body = req.body.entry[0].changes[0].value.messages[0].text.body; // extract the message text from the webhook payload
//           console.log('MSG_BODY', msg_body);
//         //   axios({
//         //     method: "POST", // Required, HTTP method, a string, e.g. POST, GET
//         //     url:
//         //       "https://graph.facebook.com/v12.0/" +
//         //       phone_number_id +
//         //       "/messages?access_token=" +
//         //       token,
//         //     data: {
//         //       messaging_product: "whatsapp",
//         //       to: from,
//         //       text: { body: "Ack: " + msg_body },
//         //     },
//         //     headers: { "Content-Type": "application/json" },
//         //   });
//         }
//         res.sendStatus(200);
//       } else {
//         // Return a '404 Not Found' if event is not from a WhatsApp API
//         res.sendStatus(404);
//       }
//     });
// app.listen(puerto, () => {
//     console.log(`Servidor escuchando en EL PUERTO: ${puerto}`);
//   });
////////////////////////////////////////////////////////////////////////////////////////