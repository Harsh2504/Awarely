
const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required:true,
    },
    introText: {
        type: String,
        required:true,
    },
    imageUrl:{
        type: String,
        required:true,
    },
    keyConcepts: {
        type: Array,
        required:true,
    },
    quizzes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz',
    }],
});
// TODO: Concepts and image is to be added
module.exports = mongoose.model('Subject', SubjectSchema);
