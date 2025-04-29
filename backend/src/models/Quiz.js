// backend/models/Quiz.js
const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, 
    },
    description: {
        type: String,
    },
    questions: [{
        questionText: String,
        answerOptions: [String],
        correctAnswer: String,
    }],
});

module.exports = mongoose.model('Quiz', QuizSchema);
