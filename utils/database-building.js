const User = require('../model/user.model');

const Device = require('../model/device.model');

const Role = require('../model/role.model')

const Permission = require('../model/permissions.model')

const ControlLine = require('../model/line.model');

const ControlLineHistory = require('../model/lines-history.model');

const DeviceElectricityHistory = require('../model/device-electricity.model');

const Plan = require('../model/plan.model');

const PlanSchedule = require('../model/plan-schedule.model');


User.belongsToMany(Device,{through:'UsersDevice'});
Device.belongsToMany(User,{through:'UsersDevice'});

Device.hasMany(ControlLine);

Device.hasMany(DeviceElectricityHistory);

Device.hasMany(Plan);
ControlLine.hasMany(ControlLineHistory);
Plan.hasMany(PlanSchedule);

User.belongsToMany(Role,{through:'UsersRole'});
Role.belongsToMany(User,{through:'UsersRole'});

Role.belongsToMany(Permission,{through:'RolesPermission'});
Permission.belongsToMany(Role,{through:'RolesPermission'});

const sequelize = require('../utils/database-connection');

sequelize.sync().then(()=>{
    console.log("OK");
});