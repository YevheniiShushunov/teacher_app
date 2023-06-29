import React, {ReactNode, useState} from 'react';

interface IAuthProvider {
    userEmail: null | string;
    id: null | number;
    setUser?: (user: string) => void;
}

interface Props {
    children?: ReactNode
}

export const AuthContext = React.createContext<IAuthProvider >({
    userEmail: null,
    id: null
});

export function AuthProvider({children}:Props ){
    const [userEmail, setUserEmail] = useState('');
    const [id, setUserId] = useState(null);

    function setUser(user?: string | null) {
        if(!user) {
            return
        }
        setUserEmail(user);
    }

    const authData: IAuthProvider = {
        userEmail,
        setUser,
        id
    }

    return (
        <AuthContext.Provider value={authData} >
            {children}
        </AuthContext.Provider>
    )
}