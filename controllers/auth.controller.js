const usersModel = require("../models/users.model");
const { signupValidation } = require("../validations/auth.validation");

const signup = async (req, res) => {
    try {   

        const data = await signupValidation.validateAsync(req.body);
        const foundUser = await usersModel.findOne({email: data.email});
        // const newUser = await userModel.create({data});
        
    } catch (error) {
        return res.status(401).json({error: error.message});
    }
}

module.exports = {
    signup
}
