// index.js
const { createSimulatedSession } = require('./sim_session');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const express = require('express')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/create', createSimulatedSession);
module.exports.handler = serverless(app);

