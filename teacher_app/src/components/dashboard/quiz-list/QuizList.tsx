import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "../../share/components/button/Button";
import styles from "./quiz-list.module.scss"

const QuizList = () => {
    const [quizList, setQuizList] = React.useState<any[]>([{name: "123", id: 1}, {name: "123132", id: 2}]);
    const navigate = useNavigate();

    const navigateToCreateQuiz = () => {
        navigate("/manage-quiz");
    }

    return (
        <div className={styles.quiz__wrapper}>
            <div>
                <Button name={"Створити вікторину"} color={"bg-add "} onClick={navigateToCreateQuiz}/>
            </div>

            <div className={styles.quiz__block}>
                {quizList.length > 0 ?
                    <div className={styles.quizContainer}>
                        {quizList.map((quiz, index) => (
                            <div key={quiz.id} className={styles.quiz__card}>{quiz.name}</div>
                        ))}
                    </div> : <div>Ще не має створених вікторин</div>
                }
            </div>

        </div>
    );
};

export default QuizList;