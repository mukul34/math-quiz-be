import Leaderboard from "../models/Leaderboard.js";

// Get the top 10 leaderboard entries
export const getLeaderboard = async (req, res) => {
    try {
        const leaderboard = await Leaderboard.find().sort({ score: -1 }).limit(10); // Get top 10 scores, sorted by score
        res.status(200).json(leaderboard);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add a new leaderboard entry
export const updateLeaderboard = async (req, res) => {
    try {
        const newEntry = new Leaderboard(req.body); // Assumes req.body has { name, score }
        const savedEntry = await newEntry.save();
        res.status(201).json(savedEntry);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
