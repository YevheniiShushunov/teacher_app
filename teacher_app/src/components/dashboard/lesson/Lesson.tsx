import {useNavigate} from 'react-router-dom';
import {Button} from '@mui/material';

export function Lesson() {
    const navigate = useNavigate();
    const back = () => {
        navigate(-1);
    }

    return (
        <div className={"lesson-container"}>
            <div className="lesson">
                <div className={'btn'}>
                    <Button variant="contained" type={"button"} className={'btn-back'} onClick={back}>Back</Button>
                </div>

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur assumenda commodi consectetur
                delectus distinctio dolorem doloremque eaque est, eveniet facilis harum incidunt ipsum, magni nam quas quia
                reprehenderit sunt.
            </div>

        </div>
    )
}