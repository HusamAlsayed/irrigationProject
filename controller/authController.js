const authenticationMessages = require('../utils/response-messages/authMessages').authMessages; 

const User = require('../model/user.model');
const Role = require('../model/role.model');

const bcrypt = require('bcrypt');

exports.postSignup = async (req,res,next)=> {
    const {name,password,confirmPassword} = req.body;
    try {
        if(password!=confirmPassword) {
            res.status(422).json({"message":authenticationMessages.passwordSimilarity});
        }
            let hashedPassword = await bcrypt.hash(password,12);
            let user = await User.create({name:name,password:hashedPassword});
            res.status(201).json({"message":authenticationMessages.signupSuccess});
    } catch(error) {
        res.status(400).json({"message":"some error did happend " + error});
    }

}



exports.postLogin = async(req,res,next)=> {
    try {
        const {name ,password} = req.body;
        let user = await User.findOne({where:{name:name}});
        if(!user) 
            return res.status(422).json({"message":authenticationMessages.userPasswordError});
        let doMatch = await bcrypt.compare(password,user.password);
        if (doMatch) {
            req.session.user = user;
            req.session.save();
            return res.status(200).json({"message":authenticationMessages.loginSuccess});
        }
        return res.status(422).json({"message":authenticationMessages.userPasswordError});
    } catch(error) {
        res.status(400).json({"message":"some error did happened !"});
    }           
}