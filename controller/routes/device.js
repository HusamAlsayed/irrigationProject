const authMiddleware = require('../../middlewares/authMiddleware');
const deviceMiddleware = require('../../middlewares/deviceMiddleware');
const deviceController = require('../deviceController');
const express = require('express');

const router = express.Router();

router.post('/devices/create-device',authMiddleware.checkSession,
deviceController.createDevice);


router.post('/devices/add-device',authMiddleware.checkSession,
deviceMiddleware.checkDeviceExistance,deviceController.addDevice);
module.exports = router;


router.delete('/devices/:deviceId/delete-device',authMiddleware.checkSession,
deviceMiddleware.checkDeviceOwner,deviceController.deleteDevice);
module.exports = router;