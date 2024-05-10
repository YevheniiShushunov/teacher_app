import {useNavigate} from 'react-router-dom';
import {Button} from '@mui/material';
import {useUserManager} from '../../state/store/user-store/user.hook';

export function Lesson() {
    const navigate = useNavigate();
    const [userState] = useUserManager();

    const back = () => {
        navigate(-1);
    }

    return (
        <div className={"lesson-wrapper"}>
            <div className="lesson">
                <div className={"btn"}>
                    <Button variant="contained" type={"button"} className={'btn-back'} onClick={back}>Back</Button>
                </div>

                <div className={"lesson-container"}>
                    <div className={"lesson__title"}>Title</div>
                    <div className={"lesson__url"}> Url window</div>
                    <div className={"lesson__description"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur assumenda commodi
                        consectetur
                        delectus distinctio dolorem doloremque eaque est, eveniet facilis harum incidunt ipsum, magni
                        nam quas quia
                        reprehenderit sunt.
                    </div>
                </div>

            </div>

        </div>
    )
}