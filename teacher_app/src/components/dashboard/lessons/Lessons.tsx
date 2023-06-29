import {Link} from 'react-router-dom';

const lessons: {id: number, name: string}[] = [
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
    const lessonsList = () => {
        return lessons.map(a => (
            <div className="lesson" key={a.id}>
                <h2>
                    <Link className={"lesson__link"} to={`/lesson/${a.id}`}>Lesson: {a.name}</Link>
                </h2>
            </div>
        ))
    }

    return(
        <div className="lessons">
            {lessonsList()}
        </div>
    )
}