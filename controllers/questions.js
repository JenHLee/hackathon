const Question = require('../models/question');

exports.getQuestions = (req,res)=>{
    const questions = Question.find().select("Qnum question answer")
    .then((questions)=>{
        res.json({questions});
    }).catch(err => console.log(err));
}
exports.createQuestion = (req,res, next) => {
    const question = new Question(req.body);
    question.save();
    res.status(200).json({message:"Question created!"});
}
exports.quesById = (req,res,next, id) =>{
    Question.findById(id).exec((err,question)=>{
        if(err || !question){
            return res.status(400).json({
                error: "Question not found"
            })
        }
        req.profile = question;
        next();
    })
}

exports.deleteQuestion =(req,res,next) => {
    let question = req.profile;
    question.remove((err,question)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        res.json({
            message:"Question deleted!"
        })
    });

}