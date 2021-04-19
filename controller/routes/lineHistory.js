const lineHistoryController = require('../lineHistoryController');
const authMiddleware = require('../../middlewares/authMiddleware');
const deviceMiddleware = require('../../middlewares/deviceMiddleware');
const lineMiddleware = require('../../middlewares/lineMiddleware');
const express = require('express');
const router = express.Router();
router.post('/devices/:deviceId/lines/:lineId/add-line-state',authMiddleware.checkSession,lineMiddleware.checkLineOwner,lineHistoryController.addLineState);
router.get('/devices/:deviceId/lines/:lineId/show-line-state',authMiddleware.checkSession,lineMiddleware.checkLineOwner,lineHistoryController.showLineStates);
module.exports = router;