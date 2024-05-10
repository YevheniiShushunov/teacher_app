import React, {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Dashboard} from './Dashboard';
import {Login} from '../auth/login/Login';
import {ProtectedRoute} from '../auth/login/ProtectedRoute';
import {authService} from '../auth/auth.services';
import {useUserManager} from '../state/store/user-store/user.hook';
import {generateStatus} from '../core/cosntants/statuses.constant';
import {UserResponse} from '../share/interfaces/user.type';

export function DashboardContainer() {
    const [requestStatus, setRequestStatus] = useState(generateStatus.init());
    const [userState, {setUser}] = useUserManager();
    const token = localStorage.getItem('access');

    const getCurrentUser = async () => {
        try {
            console.log('token call')
            console.log('loading');
            setRequestStatus(generateStatus.request())
            const userResponse: UserResponse = await authService.getUserProfile();
            console.log('request status', requestStatus);
            setUser(userResponse.email, userResponse.userId);
            setRequestStatus(generateStatus.done());
            console.log('request status2:', requestStatus);
            console.log('response', userResponse)
            console.log('user 1', userState)
        } catch (e) {
            console.error(e);
            setRequestStatus(generateStatus.false());
        }
        console.log('user 2', userState)
    }

    useEffect(() => {
        if (token) {
            getCurrentUser().then();
            console.log('user effect', userState)
        }
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
            {!requestStatus.done && <div>wait</div>}
        </div>
    )
}