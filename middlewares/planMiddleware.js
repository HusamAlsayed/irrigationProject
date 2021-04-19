const User = require('../model/user.model');

const Device = require('../model/device.model');

exports.checkLineOwner = async (req,res,next) => {
    try {
        const userId = req.session.user.id;
        const deviceId = req.params.deviceId;
        const planId = req.params.planId;
        const user = await User.findOne({where:{id:userId}});
        const devices = await user.getDevices({where:{id:deviceId}});
        if (!devices.length){ 
            return res.status(403).json({"message":authenticationMessages.authorizationFailed});
        }
        req.device = devices[0];
        const plans = await devices[0].getPlans({where:{id:planId}});
        // console.log("sofar");

        if(!plans.length) {
            return res.status(403).json({"message":authenticationMessages.authorizationFailed});
        }
        req.plan = plans[0];
        next();   
    } catch(error) {
        res.status(400).json({"message":"some thing bad happened !"});
    }
}