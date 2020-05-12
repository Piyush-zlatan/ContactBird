const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    mobileNumber:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
},{
    timestamps:true
})

const User = mongoose.model('User',userSchema);
module.exports = User;