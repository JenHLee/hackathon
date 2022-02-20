const express = require('express');
const {createQuestion,getQuestions,quesById, deleteQuestion} = require("../controllers/questions");
const router = express.Router();
router.get('/allquestions',getQuestions);
router.post('/newQues',createQuestion);
router.delete('/:quesId',deleteQuestion);

router.param("quesId", quesById);

module.exports = router;