const express = require('express');
const ROUTE = express.Router();
const identityController = require('../controllers')

ROUTE.post('/identify',identityController.createIdentify)
module.exports = ROUTE;