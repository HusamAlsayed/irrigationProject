const Line = require('../model/line.model');

const LineHistory = require('../model/lines-history.model');

exports.addLineState = async (req,res,next)=> {
    try {
        const line = req.line;
        const lineId = req.params.lineId;
        const {state} = req.body;
        const linehistory = await LineHistory.create({state:state,controlLineId:lineId});
        res.status(201).json({"message":"the line state has been created succesfully"});
    } catch(error) {
        res.status(400).json({"message":"some error did happened " + error});
    }
}

exports.showLineStates = async(req,res,next)=> {

    try {
        const line = req.line;
        console.log('the line',line);
        const lineHistory = await line.getControlLineHistories();
        res.status(200).json(lineHistory);
    } catch(error) {
        res.status(400).json({"message":"some error did happened !" + error});
    }
}