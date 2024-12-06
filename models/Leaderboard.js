// models/Leaderboard.js
import { Schema, model } from "mongoose";

const LeaderboardSchema = new Schema({
    username: { type: String, required: true },
    score: { type: Number, required: true },
});

export default model("Leaderboard", LeaderboardSchema);
