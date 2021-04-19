const controlLineController = require('../controlLineController');
const express = require('express');
const router = express.Router();
router.post('/devices/:deviceId/lines/add-line',controlLineController.addControlLine)
module.exports = router;
