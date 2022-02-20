const mongoose = require('mongoose');

const spotSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    type:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    message:{
        type:String,
        required: true
    }
    
});

module.exports = mongoose.model("Spot", spotSchema);