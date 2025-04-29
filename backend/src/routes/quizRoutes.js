
const express = require('express');
const { getAllQuizzes, getQuizById, createQuiz } = require('../controllers/quizController');

const router = express.Router();

router.get('/', getAllQuizzes);
router.get('/:id', getQuizById);
router.post('/createQuiz', createQuiz);

module.exports = router;
