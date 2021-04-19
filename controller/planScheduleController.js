
const PlanSchedule = require('../model/plan-schedule.model');
exports.postAddPlanSchedule = async(req,res,next)=> {
    try {
        const {day,hour,minute} = req.body;
        const planId = req.params.planId;
        const planSchedule = await PlanSchedule.create({day:day,hour:hour,minute:minute,planId:planId});
        res.status(201).json({"message":"created successfully !"});
    } catch(error) {
        res.status(400).json({"message":"some thing bad happened !"});
    }
}

exports.showPlanSchedule = async(req,res,next) => {
    try {
        const plan = req.plan;
        const plans = await plan.getPlanSchedules();
        res.status(200).json(plans);
    } catch(error) {
        res.status(400).json({"message":"some error did happened !"});
    }
}