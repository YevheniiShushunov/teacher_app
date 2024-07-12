import { QuestionType } from "../enums/question-types.enum";

export const initialQuizManageData = () => {
    return {
        title: "",
        type: QuestionType.checkbox,
        questions: [
            {
                text: "",
                tempId: Date.now(),
                answers: [
                    {
                        text: "",
                        tempId: Date.now(),
                        scores: 0,
                        correct: false,
                    },
                ]
            }
        ]
    }
}

export const initialAnswer = () => {
    return {
        text: "",
        tempId: Date.now(),
        scores: 0,
        correct: false,
    }
}



