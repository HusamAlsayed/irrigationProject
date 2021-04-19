const PlanController = require('../planController'); 

const authMiddleware = require('../../middlewares/authMiddleware');
const deviceMiddleware = require('../../middlewares/deviceMiddleware');
const express = require('express');

const router = express.Router();
router.post('/devices/:deviceId/add-plan',authMiddleware.checkSession,
deviceMiddleware.checkDeviceOwner, PlanController.postAddPlan);
router.delete('/devices/:deviceId/plans/:planId/delete-plan',authMiddleware.checkSession,deviceMiddleware.checkDeviceOwner,PlanController.deletePlan);
router.put('/devices/:deviceId/plans/:planId/edit-plan',authMiddleware.checkSession,
deviceMiddleware.checkDeviceOwner,PlanController.putEditPlan);
module.exports = router;
router.get('/devices/:deviceId/plans/show-plans',authMiddleware.checkSession,
deviceMiddleware.checkDeviceOwner,PlanController.showPlans);
router.get('/devices/:deviceId/plans/:planId/index-plan',authMiddleware.checkSession,
deviceMiddleware.checkDeviceOwner,PlanController.indexPlan)