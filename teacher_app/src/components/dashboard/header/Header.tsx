import {NavLink} from 'react-router-dom';
import {useEffect, useRef, useState} from 'react';
import {authService} from '../../auth/auth.services';
import {getToken} from '../../share/services/Token.service';
import {useUserManager} from '../../state/store/user-store/user.hook';
import {TopMenu} from '../../top-menu/TopMenu';
import {UserDropdownMenu} from './user-dropdown/UserDropdownMenu';

export function Header() {
    const [userState, {setUser}] = useUserManager();
    const [isOpen, setIsOpen] = useState(false)
    const token = getToken();
    let dropdownRef = useRef<HTMLDivElement>(null);

    const authenticateUser = async () => {
        try {
            const response = await authService.getUserProfile();

            if (response) {
                setUser(response.email, response.userId);
            }

        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        if (token) {
            authenticateUser();
        }
    }, [userState.email])

    useEffect(() => {
        let menuHandler = (e: MouseEvent) => {
            if(dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", menuHandler);
    }, [])

    return (
        <div className="header-wrapper">
            <div className="header">
                {userState.email && <div className={"user"} onClick={() => setIsOpen(!isOpen)}>{userState.email}</div>}
            </div>
            {
                isOpen && <UserDropdownMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            }
        </div>
    )
}