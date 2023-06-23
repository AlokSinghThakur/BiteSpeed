const express = require('express');
const ROUTE = express.Router();
const identityController = require('../controllers')

ROUTE.post('/identify',identityController.createIdentity)
module.exports = ROUTE;