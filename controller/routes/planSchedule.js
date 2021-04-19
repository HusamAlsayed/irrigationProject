const authMiddleware = require('../../middlewares/authMiddleware');

const planScheduleMiddleware = require('../../middlewares/planMiddleware');
const PlanScheduleController = require('../planScheduleController');
const express =  require('express');
const PlanSchedule = require('../../model/plan-schedule.model');

const router = express.Router();


router.post('/devices/:deviceId/plans/:planId/add-plan-schedule',authMiddleware.checkSession, 
planScheduleMiddleware.checkLineOwner,
PlanScheduleController.postAddPlanSchedule);


router.get('/devices/:deviceId/plans/:planId/show-plan-schedules',authMiddleware.checkSession,planScheduleMiddleware.checkLineOwner,PlanScheduleController.showPlanSchedule);


module.exports = router;