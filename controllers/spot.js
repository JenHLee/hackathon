const Spot = require('../models/spot');
const Question = require('../models/question');

exports.getSpotsByType = async (req,res)=>{
    try {
        let question = await Question.find({"Qnum":"1"});
        const answer = question[0].answer;
        console.log(answer);
        const spots = await Spot.find({type: answer});
        res.json(spots);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
exports.createSpot = (req,res, next) => {
    const spot = new Spot(req.body);
    spot.save();
    res.status(200).json({message:"Spot created!"});
}
exports.spotById = (req,res,next, id) =>{
    Spot.findById(id).exec((err,Spot)=>{
        if(err || !Spot){
            return res.status(400).json({
                error: "Spot not found"
            })
        }
        req.profile = Spot;
        next();
    })
}

exports.deleteSpot =(req,res,next) => {
    let Spot = req.profile;
    Spot.remove((err,Spot)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        res.json({
            message:"Spot deleted!"
        })
    });

}