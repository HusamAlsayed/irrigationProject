const Device = require('../model/device.model');
const User = require('../model/user.model');
const authenticationMessages = require('../utils/response-messages/authMessages').authMessages;
exports.checkDeviceExistance = async(req,res,next)=> {
    try {
        const {name,serialNumber} = req.body;
        const device = await Device.findOne({where:{
            name:name,
            serialNumber:serialNumber}});
        if (!device) {
            return res.status(404).json({"message":"no such device found !"});
        }
        req.device = device;
        next();
    } catch(error) {
        res.status(400).json({"message":"some error did happened !"});
    }
}


exports.checkDeviceOwner = async (req,res,next) => {
    try {
        const userId = req.session.user.id;
        const deviceId = req.params.deviceId;
        const user = await User.findOne({where:{id:userId}});
        const devices = await user.getDevices({where:{id:deviceId}});
        if (!devices.length){ 
            return res.status(403).json({"message":authenticationMessages.authorizationFailed});
        }
        req.device = devices[0];
        next();   
    } catch(error) {
        res.status(400).json({"message":"some thing bad happened !"});
    }
}