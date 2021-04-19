const ControlLine = require('../model/line.model');
const User = require('../model/user.model');

const Device = require('../model/device.model');

exports.addControlLine = async (req,res,next)=>{
    const deviceId = req.params.deviceId;
    const userId = req.session.user.id;
    const {state} = req.body;
    const device = req.device;
    try {
        console.log("the state",state);
        const controlLine = await ControlLine.create({
            state:state,
            deviceId:deviceId
        });
        res.status(201).json({"message":"the line has been created successfully .."});
        
    } catch(error) {
        res.status(400).json({"message":"there is some error " });
    }
}