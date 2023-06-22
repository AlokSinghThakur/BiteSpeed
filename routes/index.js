const express = require('express');
const ROUTE = express.Router();
const identityController = require('../controllers')

ROUTE.post('/identity',identityController.createIdentity)
module.exports = ROUTE;