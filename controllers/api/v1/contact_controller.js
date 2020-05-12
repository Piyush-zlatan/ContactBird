const Contact = require('../../../models/contact');
const messagebird = require('messagebird')('NgZxPihtVSBuEVG7BXNP47dZw');


module.exports.add = function(req,res){

    let number  = req.body.phoneNumber;
    messagebird.lookup.read(number,function(err,response){
        if(err){
            return res.json(400,{
                message:'Number is invalid. Please check number format'
            });
        }
            console.log(response);
         Contact.create({
            
                name: req.body.name,
                phoneNumber:response.phoneNumber,
                countryCode:response.countryCode,
                type: response.type,
                countryPrefix:response.countryPrefix,
                user:req.user._id
                },function(err,resp){
            if(err){
                return res.json(400,{
                    message:'Unable to store the number!!'
                });
            }
           
        })
        return res.json(200,{
            message:'Number Stored Successfully',
        });
    })

}