
const mongoose = require('mongoose');
//const { networkInterfaces } = require('os');

const alcoholSchema = mongoose.Schema({

    level:{
        type:String
    },
    date:{
       type:String
       
    },
    time:{
        type:String
        
     }
})

mongoose.model('ALCOHOL',alcoholSchema);