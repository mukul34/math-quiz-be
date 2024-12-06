import { Router } from "express";
const router = Router();
import { getQuestions, addQuestion } from "../controllers/questionController.js";

router.get("/", getQuestions);
router.post("/", addQuestion);

export default router;
