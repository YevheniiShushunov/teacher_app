import { QuestionType } from "../enums/question-types.enum";

interface QuestionT  {
    label: string;
    value: QuestionType;
}

export const questionTypes: QuestionT[] = [
    {label: "Radio", value: QuestionType.radio},
    {label: "Checkbox", value: QuestionType.checkbox},
]