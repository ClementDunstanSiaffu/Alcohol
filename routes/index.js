const mongoose = require('mongoose');
const user = mongoose.model("ALCOHOL")

exports.level = (req,res)=>{
    const level = req.params;
    console.log(level.level)
    const date = new Date();
    const currentDate = date.toLocaleDateString("en-US",{timeZone:"Africa/Nairobi"});
    const currentTime = date.toLocaleTimeString("en-US",{timeZone:"Africa/Nairobi"});
    const user2 = new user();
    user2.level = level.level;
    user2.date = currentDate;
    user2.time = currentTime;
    user2.save((err,doc)=>{
        if(!err){
            res.send("Alcohol level has been sent to the database")
        }else{
            res.send("Alcohol level has not sent to the database")
        }
    });
}

exports.getLevel = (req,res)=>{
    user.find((err,docs)=>{
        if(!err){
            res.json(docs)
        }else{
            console.log('there is an error')
        }
    })
}