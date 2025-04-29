// backend/controllers/quizController.js
const Quiz = require("../models/Quiz");
const Subject = require("../models/Subject");

const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const createQuiz = async (req, res) => {
  try {
    const { title, description, questions } = req.body;
    const quizExists = await Quiz.findOne({ title });
    if (quizExists) {
      return res.status(400).json({ message: "Quiz already exists" });
    }
    const newQuiz = new Quiz({ title, description, questions });
    await newQuiz.save();

    res.status(201).json(newQuiz._id);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error });
  }
};

module.exports = { getAllQuizzes, getQuizById, createQuiz };
