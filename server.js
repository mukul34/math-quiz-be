// server.js
import express from "express";
import cors from "cors";
import parser from "body-parser";
import { config } from "dotenv";
import connectDB from "./config/db.js";
import questionRoutes from "./routes/questionRoutes.js";
import leaderboardRoutes from "./routes/leaderboardRoutes.js";

config();
connectDB();

const app = express();
app.use(cors());
app.use(parser.json());

// Routes
app.use("/api/questions", questionRoutes);
app.use("/api/leaderboard", leaderboardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
