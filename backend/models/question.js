const mongoose = require('mongoose');

const quesSchema = new mongoose.Schema({
    question:{
        type: String,
        required: true
    },
    Qnum:{
        type:Number,
        required: true
    },
    answer:{
        type:String,
        required: true
    },
    created:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Question", quesSchema);