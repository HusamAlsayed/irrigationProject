const authenticationMessages = require('../utils/response-messages/authMessages').authMessages;

const Line = require('../model/line.model');
const User = require('../model/user.model');
const Device = require('../model/device.model');
exports.checkLineOwner = async (req,res,next) => {
    try {
        const userId = req.session.user.id;
        const deviceId = req.params.deviceId;
        const lineId = req.params.lineId;
        const user = await User.findOne({where:{id:userId}});
        const devices = await user.getDevices({where:{id:deviceId}});
        if (!devices.length){ 
            return res.status(403).json({"message":authenticationMessages.authorizationFailed});
        }
        req.device = devices[0];
        const lines = await devices[0].getControlLines({where:{id:lineId}});
        if(!lines.length) {
            return res.status(403).json({"message":authenticationMessages.authorizationFailed});
        }
        req.line = lines[0];
        next();   
    } catch(error) {
        res.status(400).json({"message":"some thing bad happened !" + error});
    }
}