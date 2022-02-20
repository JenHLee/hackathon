const Spot = require('../models/Spot');

exports.getSpots = (req,res)=>{
    const Spots = Spot.find().select("Qnum Spot answer")
    .then((Spots)=>{
        res.json({Spots});
    }).catch(err => console.log(err));
}
exports.createSpot = (req,res, next) => {
    const Spot = new Spot(req.body);
    Spot.save();
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