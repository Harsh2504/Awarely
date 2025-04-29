const Subject = require('../models/Subject');

const getAllSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find().populate('quizzes');
        res.status(200).json(subjects);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const getSubjectById = async (req, res) => {
    try {
        const subject = await Subject.findById(req.params.id).populate('quizzes');
        if (!subject) {
            return res.status(404).json({ message: 'Subject not found' });
        }
        res.status(200).json(subject);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const createSubject = async (req, res) => {
    try {
        const { name, description, quizzes } = req.body;
        const newSubject = new Subject({ name, description, quizzes });
        await newSubject.save();
        res.status(201).json(newSubject);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getAllSubjects, getSubjectById, createSubject };