import React, { Component, ReactEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "../../share/components/button/Button";
import styles from "./manage-quiz.module.scss";
import { Quiz, QuizItem } from "../../share/interfaces/quiz.type";
import { initialQuizManageData, initialAnswer } from "../../share/funtions/initialQuiz";
import { QuestionType } from "../../share/enums/question-types.enum";
import { questionTypes } from "../../share/constants/question-types";
import { ReactComponent as Del } from "../../../assets/icons/deleteicn.svg";

const ManageQuiz = () => {
    const [quiz, setQuiz] = useState<Quiz>(initialQuizManageData());
    const navigate = useNavigate();
    const qTypes = questionTypes;

    const onNavigateToManage = () => {
        navigate("/quiz");
    }

    const onSubmit = () => {
        console.log("ok");
    }

    const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuiz({
            ...quiz,
            title: e.target.value
        })
    }

    const onSelectQuestionType = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setQuiz({
            ...quiz,
            type: +e?.target.value
        })
    }

    const onQuestionChange = (e: React.ChangeEvent<HTMLInputElement>, qIndex: number) => {
        const newQuiz = quiz?.questions.map((question: QuizItem, qIdx: number) => {
            if (qIndex === qIdx) {
                return {...question, [e.target.name]: [e.target.value]}
            }

            return question
        })

        setQuiz({
            ...quiz,
            questions: newQuiz
        })
    }

    const addQuestion = () => {
        const question = {
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

        setQuiz({
            ...quiz,
            questions: [...quiz.questions, question]
        })
    };

    const deleteQuestion = (qIndex: number) => {
        if (quiz?.questions.length === 0) {
            return
        }

        const newQuiz = quiz?.questions.filter((_, qIdx) => qIdx !== qIndex);
        setQuiz({
            ...quiz,
            questions: newQuiz
        })
    }

    const onAnswerChange = (e: React.ChangeEvent<HTMLInputElement>, qIndex: number, aIndex: number) => {
        const newQuiz = quiz?.questions.map((question, qIdx) => {
            if (qIndex === qIdx) {
                const newAnswers = question.answers.map((answer, aIdx) => {
                    if (aIndex === aIdx) {
                        if (e.target?.name === "correct") {
                            return {...answer, [e.target.name]: e.target.checked};
                        }

                        return {...answer, [e.target.name]: e.target.value};
                    }
                    return answer;
                });
                return {...question, answers: newAnswers};
            }
            return question;
        });


        setQuiz({
            ...quiz,
            questions: newQuiz
        });
    }

    const addAnswer = (qIndex: number): void => {
        const newQuiz = quiz?.questions.map((question, qIdx: number) => {
            if (qIndex === qIdx) {
                const newAnswer = [...question.answers, initialAnswer()]

                return {...question, answers: newAnswer}
            }

            return question
        })

        setQuiz({
            ...quiz,
            questions: newQuiz
        })
    }

    const deleteAnswer = (e: React.MouseEvent, qIndex: number, aIndex: number) => {
        e.preventDefault();
        const newQuiz = quiz?.questions.map((question, qIdx) => {
            if (qIndex === qIdx) {
                const newAnswers = question.answers.filter((_, aIdx) => aIdx !== aIndex);
                return {...question, answers: newAnswers};
            }
            return question;
        });

        setQuiz({
            ...quiz,
            questions: newQuiz
        });
    }

    return (
        <div className={styles.manageQuizWrapper}>
            <div className={styles.quizContainer}>
                <div>
                    <Button name={"Назад до списку"} color={"bg-main"} onClick={onNavigateToManage}/>
                </div>

                <div className={styles.questionBody}>
                    <label htmlFor="manage-quiz-title" className={styles.inputTitle}>Назва вікторини:</label>
                    <input
                        type="text"
                        className="input-main"
                        id="manage-quiz-title"
                        placeholder="Назва вікторини"
                        value={quiz.title}
                        onChange={(e) => onTitleChange(e)}
                    />
                </div>
                <div>
                    <select value={quiz.type} className={styles.questionTypesSelect}
                            onChange={(e) => onSelectQuestionType(e)}>
                        {qTypes.map((option) => {
                            return <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        })}
                    </select>
                </div>

                <form onSubmit={onSubmit} className={styles.manageQuizForm}>
                    {quiz?.questions?.map((question, qIndex: number) => (
                        <div key={qIndex} className={styles.questionCard}>
                            <div>
                                <div className={styles.questionText}>
                                    <label htmlFor="title-text" className={styles.inputTitle}>Питання:</label>
                                    <input
                                        type="text"
                                        className="input-main"
                                        placeholder="Введіть питання"
                                        id="title-text"
                                        value={question.text}
                                        onChange={(e) => onQuestionChange(e, qIndex)}/>
                                </div>

                                <div className={styles.answersContainer}>
                                    <div className={styles.inputTitle}>Відповіді:</div>
                                    {question?.answers.map((answer, aIndex: number) => (
                                        <div key={aIndex} className={styles.answerCard}>
                                            <input
                                                type="text"
                                                placeholder="Answer text"
                                                name="text"
                                                value={answer.text}
                                                className="input-main"
                                                onChange={(e) => onAnswerChange(e, qIndex, aIndex)}/>

                                            <div className={styles.correctCheck}>
                                                <label htmlFor="correct">Correct:</label>
                                                {quiz?.type === QuestionType.checkbox && <input
                                                    type="checkbox"
                                                    name="correct"
                                                    className="input-main"
                                                    id="correct"
                                                    checked={answer.correct}
                                                    onChange={(e) => onAnswerChange(e, qIndex, aIndex)}
                                                />}
                                                {quiz?.type === QuestionType.radio && <input
                                                    type="radio"
                                                    name="correct"
                                                    className="input-main"
                                                    id="correct"
                                                    checked={answer.correct}
                                                    onChange={(e) => onAnswerChange(e, qIndex, aIndex)}
                                                />}
                                            </div>
                                            <button className={styles.deleteBtn}
                                                    onClick={(e) => deleteAnswer(e, qIndex, aIndex)}>
                                                <Del className={styles.dbtn}/>
                                            </button>
                                        </div>
                                    ))}
                                    <div className={styles.answerButtonsCard}>
                                        <Button name={"Додати відповідь"} color={"bg-add"}
                                                onClick={() => addAnswer(qIndex)}/>
                                        {quiz?.questions.length != 1 &&
                                            <Button
                                                name={"Видалити питання"}
                                                color={"bg-del"}
                                                onClick={() => deleteQuestion(qIndex)}/>}
                                    </div>
                                </div>
                            </div>
                        </div>)
                    )}
                    <div className={styles.manageQuizDashboard}>
                        <Button name={"Add question"} onClick={() => addQuestion()} color={"bg-add"}/>
                        <Button name={"Save changes"} buttonType={"submit"}/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ManageQuiz;