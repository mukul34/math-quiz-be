import { Router } from "express";
const router = Router();
import { getLeaderboard, updateLeaderboard } from "../controllers/leaderboardController.js";

router.get("/", getLeaderboard);
router.post("/", updateLeaderboard);

export default router;
