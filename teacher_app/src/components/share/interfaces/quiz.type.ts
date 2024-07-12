import { QuestionType } from "../enums/question-types.enum";

interface Answers {
    id?: number;
    text: string;
    scores: number;
    correct: boolean;
    tempId: number;
}

export interface QuizItem {
    id?: number;
    text: string;
    answers: Answers[];
    tempId: number;
}

export interface Quiz {
    id?: string;
    title: string;
    type: QuestionType;
    questions: QuizItem[];
}