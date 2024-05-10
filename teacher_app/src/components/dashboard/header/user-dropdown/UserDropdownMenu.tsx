import React from 'react';
import {useUserManager} from '../../../state/store/user-store/user.hook';
import {useNavigate} from 'react-router-dom';
import {removeToken} from '../../../share/Token.service';
import {DropdownProps} from '../../../share/interfaces/menu.type';

export const UserDropdownMenu = ({isOpen, setIsOpen}: DropdownProps) => {
    const [, {setUser}] = useUserManager();
    const navigate = useNavigate();

    const logout = () => {
        setUser(null, null);
        removeToken();
        setIsOpen(false);
        navigate("/home");
    }

    return (
            <div className={"dropdown"}>
                <ul className={"user-menu"}>
                    <li onClick={logout}>Logout</li>
                </ul>
            </div>
    )
}