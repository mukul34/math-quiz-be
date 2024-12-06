import Question from "../models/Question.js";

// Get all questions
export const getQuestions = async (req, res) => {
    try {
        const questions = await Question.find(); // Use the find method directly on the model
        res.status(200).json(questions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add a new question
export const addQuestion = async (req, res) => {
    try {
        const newQuestion = new Question(req.body);
        const savedQuestion = await newQuestion.save();
        res.status(201).json(savedQuestion);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
