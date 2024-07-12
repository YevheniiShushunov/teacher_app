import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { Login } from '../auth/login/Login';
import { ProtectedRoute } from '../auth/login/ProtectedRoute';
import { authService } from '../auth/auth.services';
import { useUserManager } from '../state/store/user-store/user.hook';
import { generateStatus } from '../core/cosntants/statuses.constant';
import { UserResponse } from '../share/interfaces/user.type';

export function DashboardContainer() {
    const [requestStatus, setRequestStatus] = useState(generateStatus.init());
    const [userState, {setUser}] = useUserManager();
    const token = localStorage.getItem('access');

    const getCurrentUser = async () => {
        try {
            setRequestStatus(generateStatus.request())
            const userResponse: UserResponse = await authService.getUserProfile();
            setUser(userResponse.email, userResponse.userId);
            setRequestStatus(generateStatus.done());
        } catch (e) {
            console.error(e);
            setRequestStatus(generateStatus.false());
        }
    }

    useEffect(() => {
        if (token) {
            getCurrentUser().then();
            return
        }
        setRequestStatus(generateStatus.done());
    }, [])

    return (
        <div className="main-container">
            {
                requestStatus.inProgress &&
                <div>
                    LOADING...
                </div>
            }

            {
                requestStatus.done &&
                <Routes>
                    <Route path="*" element={
                        <ProtectedRoute>
                            <Dashboard/>
                        </ProtectedRoute>
                    }/>

                    <Route path="/auth" element={<Login/>}/>
                </Routes>
            }
        </div>
    )
}