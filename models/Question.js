import { Schema, model } from "mongoose";

const QuestionSchema = new Schema({
    question: { type: String, required: true },
    answer: { type: Number, required: true },
    options: {type:Array, required: true}
});

export default model("Question", QuestionSchema);