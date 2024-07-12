import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styles from "./lessons.module.scss";
import Button from "../../share/components/button/Button";

const lessons: { id: number, name: string }[] = [
    {
        id: 1,
        name: 'first'
    },
    {
        id: 2,
        name: 'second'
    },
    {
        id: 3,
        name: 'third'
    }
];

export function Lessons() {
    const navigate = useNavigate();
    const currentPage = 1;
    const navigateClick = (id: number): void => {
        navigate(`/lesson/${id}`)
    }

    const navToLessonManager = (): void => {
        navigate("/lessons/manage-lesson");
    }

    const navToQuizList = (): void => {
        navigate("/quiz");
    }


    useEffect(() => {

    })

    const lessonsList = () => {
        return lessons.map(a => (
            <div className="lessons__item" key={a.id} onClick={() => navigateClick(a.id)}>
                <h2>Lesson: {a.name}</h2>

                <div className="lessons__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                    cumque cupiditate doloribus
                    exercitationem facere fugiat, hic, nostrum,
                </div>
            </div>
        ))
    }


    return (
        <div className="lessons">
            <div className={styles.lessons__dashboard}>
                    <Button name={"Додати урок"} color={"bg-add "} onClick={() => navToLessonManager()}/>
                    <Button name="Відкрити вікторини" onClick={() => navToQuizList()}/>

            </div>

            <div className="lessons__list">
                {lessonsList()}
            </div>
        </div>
    )
}