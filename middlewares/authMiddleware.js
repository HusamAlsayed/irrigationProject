const authenticationMessages = require('../utils/response-messages/authMessages').authMessages;

exports.checkSession = (req,res,next)=> {

    if(!req.session.user) {
        return res.status(401).send({"message":authenticationMessages.authenticationFailed});
    }
    next();
}