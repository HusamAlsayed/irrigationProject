require('./utils/database-building');


const authRoutes = require('./controller/routes/auth');
const deviceRoutes = require('./controller/routes/device');
const controlLineRoutes = require('./controller/routes/conrolLines');
const planRoutes = require('./controller/routes/plans');
const PlanScheduleRoutes = require('./controller/routes/planSchedule');
const deviceElectricityRoutes = require('./controller/routes/deviceElectricity');
const controlLineHistory = require('./controller/routes/lineHistory');
const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(session({secret:'my secret',resave:false,saveUninitialized:false}));
app.use(controlLineHistory);
app.use(deviceElectricityRoutes)
app.use(PlanScheduleRoutes);
app.use(planRoutes);
app.use(controlLineRoutes);
app.use(deviceRoutes);
app.use(authRoutes);
app.listen(3000);

