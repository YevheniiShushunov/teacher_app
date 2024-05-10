import React, {FC, ReactNode, useEffect} from 'react';
import {Navigate, Outlet, Route} from 'react-router-dom';
import {useUserManager} from '../../state/store/user-store/user.hook';
import {authService} from '../auth.services';


interface IAuthProvider {
    email: null | string;
    id: null | number;
    setUser: (user: string) => void;
}

interface Props {
    children: React.ReactNode;
}

export const ProtectedRoute = ({children, ...rest}: { children: JSX.Element }) => {
    const [userState] = useUserManager();

    if(!userState.email){
        return <Navigate to="/auth"/>
    }

    return (
        <>
            {children}
        </>
    )
}