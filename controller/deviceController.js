const Device = require('../model/device.model');
const Role = require('../model/role.model');
const User = require('../model/user.model');
const Permission = require('../model/permissions.model');
exports.createDevice = (req,res,next)=> {
    console.log(req.session);
    const {name,serialNumber,password} = req.body;
    Device.create({name:name,serialNumber:serialNumber,password}).then( device => {
        res.status(201).json({"message":"the device has been created succesfully"});
    }).catch(err => {
        res.status(400).json({"message":"some error happened" + err});
    });
}

exports.addDevice = async (req,res,next)=>{
    const userId = req.session.user.id;
    const device = req.device;
    try {
        const user = await User.findByPk(userId);
        await device.addUser(user);
        res.status(201).json({"message":"record created successfully !"});
    } catch(error) {
        res.status(400).json({"message":"some error did happened " + error});
    }
}
exports.deleteDevice = async (req,res,next)=> {
    const deviceId = req.params.deviceId;
    try {
        await Device.destroy({where:{id:deviceId}});
        res.status(200).json({"message":"deleted successfully "});
    }
    catch(error) {
        res.status(400).json({"message":"some error did occured !"});
    }
}