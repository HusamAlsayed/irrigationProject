const electricityController = require('../deviceElectricityController')
const authMiddleware = require('../../middlewares/authMiddleware');
const deviceMiddleware = require('../../middlewares/deviceMiddleware');
const express = require('express');
const router = express.Router();
router.post('/devices/:deviceId/electricity/add-electricity-state',authMiddleware.checkSession, deviceMiddleware.checkDeviceOwner,electricityController.addElectricityState);
router.get('/devices/:deviceId/electricity/show-electricity-states',authMiddleware.checkSession, deviceMiddleware.checkDeviceOwner,electricityController.showElectricityState);
module.exports = router;