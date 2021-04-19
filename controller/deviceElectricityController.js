const DeviceElectricity = require('../model/device-electricity.model');
const Device = require('../model/device.model');




exports.addElectricityState = async (req,res,next)=> {
    try {
        const deviceId = req.params.deviceId;
        const {state} = req.body;
        await DeviceElectricity.create({state:state,deviceId:deviceId});
        res.status(201).json({"message":"new state added !"});
    }
    catch(error) {
        res.status(400).json({"message":"some error did happened !" + error});
    }
}


exports.showElectricityState = async(req,res,next)=> {
    try {
        const device = req.device;
        const electricityStates = await device.getDeviceElectricityHistories();
        res.status(200).json(electricityStates);
    }
    catch(error) {
        res.status(400).json({"message":"some error did happened !" + error});
    }
}