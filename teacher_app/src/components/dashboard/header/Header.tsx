import {NavLink, useNavigate} from 'react-router-dom';
import {useContext} from 'react';
import {AuthContext} from '../../auth/login/AuthProvider';
import {authService} from '../../auth/auth.services';
import {removeToken} from '../../share/TokenServices';

export function Header() {
    const {userEmail, setUser} = useContext(AuthContext)

    async function getUser() {
        try {
            const response = await authService.getUserProfile();
            if(setUser && response.data) {
                setUser(response.data.email);
            }

        } catch (e) {
            console.error(e)
        }

    }

    function logOut(){
        removeToken()
        setUser('')
    }


    return (
        <div className="header">
            {!userEmail && <NavLink className={'login'} to={"/auth"}>Увійти</NavLink>}
            <div className={"user"}>{userEmail}</div>
        </div>
    )
}