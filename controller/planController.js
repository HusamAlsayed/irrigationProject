const Plan = require('../model/plan.model');
const help = require('../utils/help-function');
exports.postAddPlan = async (req,res,next)=>{
    const deviceId = req.params.deviceId;
    const {name,period,startTime,endTime} = req.body;
    try {
        const plan = await Plan.create({
            name:name,period:period,startTime:startTime,endTime:endTime,deviceId:deviceId
        });
        console.log("the plan is " ,plan);
        console.log("HELLO");
        res.status(201).json({"message":"created succesfully"});
    } catch (error) {
        console.log(error);
        res.status(400).json({"message":"some error did happened !"});
    }
}

exports.deletePlan = async(req,res,next)=> {
    const planId = req.params.planId;
    const device = req.device;
    try {
        const plan = await device.getPlans({where:{id:planId}});
        if(!plan.length) {
            return res.status(403).json({"message":"you need an authorization part .."});
        }
        await Plan.destroy({where:{id:planId}});
        res.status(200).json({"message":"ok deleted successfully .."});

    } catch(error) {
        res.status(400).json({"message":"error found " + error});
    }
}

exports.putEditPlan = async(req,res,next) => {

    const planId = req.params.planId;
    const device = req.device;
    const {name,period,startTime,endTime} = req.body;
    try {
        const plan = await device.getPlans({where:{id:planId}});
        if(!plan.length) {
            return res.status(403).json({"message":"you need an authorization part .."});
        }
        plan[0].name = help.fixingChanges(plan[0].name,name);
        plan[0].period = help.fixingChanges(plan[0].period,period);
        plan[0].startTime = help.fixingChanges(plan[0].startTime,startTime);
        plan[0].endTime = help.fixingChanges(plan[0].endTime,endTime); 
        await plan[0].save();
        res.status(200).json({"message":"updated succesfully "});        
    } catch(error) {
        res.status(400).json({"message":"some error did happened " + error});
    }

}

exports.showPlans = async(req,res,next) => {
    try {
        const device = req.device;
        let plans = await device.getPlans();
        res.status(200).json(plans);
    } catch(error) {
        res.status(400).json({"message":"error occured !"});
    }
}

exports.indexPlan = async(req,res,next) => {
    const device = req.device;
    const planId = req.params.planId;
        const plan = await device.getPlans({where:{id:planId}});
        if(!plan.length) {
            return res.status(403).json({"message":"you need an authorization part .."});
        }
        res.status(200).json(plan);
}