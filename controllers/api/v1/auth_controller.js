const User = require('../../../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;

// Function to implement login
module.exports.login = async function(req,res){

    try{
        let user = await User.findOne({mobileNumber:req.body.mobileNumber});
        let hash = await bcrypt.compare(req.body.password, user.password);
        if(!user || !hash){
            return res.json(401,{
                message:"Invalid Username and Password!!"
            });
        }
        // Returning JWT Token
        return res.json(200,{
        message: "SignIn Successfull",
        data:{
            token : jwt.sign(user.toJSON(),'corona',{expiresIn: 100000})
        }
    });

    }catch(err){
        console.log('Error',err);
        return res.json(500,{
            message: 'Internal Server Error'
        });

    }
}

// Function to implement sign up
module.exports.register = async function(req,res){

   try{
    // Checking if user with same mobile number already exist or not
    let user = await User.findOne({mobileNumber:req.body.mobileNumber});
    if(user!=null){
        return res.json(401,{
            message:"User with same number already registered!!"
        });
    }
    // Creating new user if it not already registered and returning jwt token
    const hash = await bcrypt.hash(req.body.password,saltRounds);

    let usereg = await User.create({
        mobileNumber:req.body.mobileNumber,
        password:hash
    });

    return res.json(200,{
        message:'User successfully registered',
        data:{
            token: jwt.sign(usereg.toJSON(),'corona',{expiresIn: 100000})
        }
    });

   }catch(err){
    console.log('Error',err);
    return res.json(500,{
        message: 'Internal Server Error'
    });

   }
   
}