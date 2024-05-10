import {Link, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';

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
    const navigateClick = (id: number) => {
        navigate(`/lesson/${id}`)
    }

    const lessonQuery = () => {

    }

    useEffect(() => {

    })

    const lessonsList = () => {
        return lessons.map(a => (
            <div className="lessons__item" key={a.id} onClick={() => navigateClick(a.id)}>
                <h2>Lesson: {a.name}</h2>

                <div className="lessons__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque cupiditate doloribus
                    exercitationem facere fugiat, hic, nostrum,
                </div>
            </div>
        ))
    }



    return (
        <div className="lessons">
            <div>
                <button>Add lesson</button>
            </div>
            <div className="lessons__list">
                {lessonsList()}
            </div>
        </div>
    )
}