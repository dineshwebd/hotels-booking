const express = require('express');
const app = express.Router();
const servicefile = require('../services/services');
const controllerfile = require("../controller/controller");

app.get('/', servicefile.indexfile);
app.get('/tq', servicefile.thankyoufile);
app.post("/postingdata", controllerfile.matching);

module.exports = app;