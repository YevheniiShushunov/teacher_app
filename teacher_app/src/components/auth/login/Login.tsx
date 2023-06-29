import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Button, TextField, Input} from '@mui/material';
import {ErrorMessage} from '../../validator-message/Error-message';
import {setToken} from '../../share/TokenServices';
import {AuthContext} from './AuthProvider';
import {authService} from '../auth.services';

interface IAutResponse {
    email: string;
    id: number;
}

export function Login() {
    const [email, setEmail] = useState<string>('');
    const {setUser, userEmail} = useContext(AuthContext)
    const [emailError, setEmailError] = useState(false);
    const [passwordType, setPasswordType] = useState('password');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState('');
    const [errMessage, SetErrorMessage] = useState<string[]>();
    const [passwordInvalid, setPasswordInvalid] = useState(false);
    const passwordValidationError: string[] = [];
    const navigate = useNavigate();

    const handleClickShowPassword = () => setPasswordType(
        (type: string) => type === 'text' ? 'password' : 'text'
    );

    const validatePasswordStrength = () => {
        console.log('test')
    }

    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        if(!validateEmail()) {
            setEmailError(true);
            return;
        }

        try {
            setPasswordInvalid(false);
            const response = await authService.doLogin(email, password);
            if(setUser && response.data) {
                setUser(response.data.email)
                console.log(response.data.token);
                setToken(response.data.token);
                navigate('/')
            }
            console.log(response.data);

        } catch (e) {
            console.error(e)
            setPasswordInvalid(true);
        }

        setEmailError(false);
    }

    return (
        <div className={'login-container'}>
            <div className={'login'}>
                <h1>Login</h1>

                <form onSubmit={handleSubmit}>
                    <label>
                        <div>Login</div>
                        <TextField
                            className={'login_input label'}
                            variant="outlined"
                            id={'email'}
                            type="text"
                            onChange={e => setEmail(e.target.value)}
                            value={email}/>
                    </label>

                    {emailError && <ErrorMessage invalidEmail={emailError}/>}

                    <div className={'password'}>
                        <div>Password</div>
                        <TextField
                            className={'login_input label'}
                            variant={'outlined'}
                            id={'psd'}
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                            value={password}/>
                    </div>

                    {passwordInvalid && <ErrorMessage invalidPassword={passwordInvalid}/>}

                    <div className={'btn-confirm'}>
                        <Button variant="contained" type={'submit'} className={'sign-in'}>Sign In</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}