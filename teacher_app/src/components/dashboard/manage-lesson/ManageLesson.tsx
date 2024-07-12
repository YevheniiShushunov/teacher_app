import { useNavigate } from "react-router-dom";
import styles from "./manage-lesson.module.scss"
import { useState } from "react";

export const ManageLesson = () => {
    const [isQuizAdded, setIsQuizAdded] = useState(false);
    const navigate = useNavigate();

    const handleBackToLessons = () => {
        navigate("/lessons");
    }

    return (
        <div className={styles.manageLessonWrapper}>
            <button className="btn-main" onClick={() => handleBackToLessons()}>Назад до уроків</button>

            <form className={styles.lessonCard}>
                <div>
                    <label htmlFor="lesson-title">Заголовок:</label>
                    <input type="text" id="lesson-title"/>
                </div>

                <div>
                    <label htmlFor="lesson-url">Введіть посилання для матеріалів:</label>
                    <input type="text" id="lesson-url"/>
                </div>

                <div>
                    <label htmlFor="lesson-discription">Введіть опис уроку:</label>
                    <textarea id="lesson-discription"/>
                </div>



                {/*<div>*/}
                {/*    <select name="" id="leesson type">*/}
                {/*        <option value=""></option>*/}
                {/*    </select>*/}
                {/*</div>*/}
            </form>
        </div>
    )
}