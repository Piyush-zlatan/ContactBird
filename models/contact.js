const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }

},{
    timestamps:true
})

const Contact = mongoose.model('Contact',contactSchema);
module.exports = Contact;