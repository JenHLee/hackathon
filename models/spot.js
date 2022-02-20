const mongoose = require('mongoose');

const spotSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    address:{
        type:Number,
        required: true
    },
    description:{
        type:String
    }
    
});

module.exports = mongoose.model("Spot", spotSchema);