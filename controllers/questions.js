const Question = require('../models/question');
const _ = require('lodash');
const { message } = require('statuses');

exports.getQuestions = async (req,res)=>{
    try {
        const questions = await Question.find()
        if (!questions) throw new Error('No questions')
        const sorted = questions.sort((a, b) => {
            return new Date(a.created).getTime() - new Date(b.created).getTime()
        })
        res.status(200).json(sorted)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
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
exports.updateQuestion = (req,res,next) =>{
    
    let question = req.profile;
    question = _.extend(question,req.body);
    question.save();
    res.json({answer: question.answer});

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