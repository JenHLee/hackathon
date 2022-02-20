const express = require('express');
const {createQuestion,getQuestions,quesById, deleteQuestion, updateQuestion} = require("../controllers/questions");
const router = express.Router();
router.get('/api/allquestions',getQuestions);
router.post('/api/newQues',createQuestion);
router.delete('/api/:quesId',deleteQuestion);
router.put('/api/:quesId',updateQuestion);
router.param("quesId", quesById);

module.exports = router;