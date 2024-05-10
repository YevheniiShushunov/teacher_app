import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Button, TextField, Input} from '@mui/material';
import {useUserManager} from '../../state/store/user-store/user.hook';
import {ErrorMessage} from '../../validator-message/Error-message';
import {setToken} from '../../share/Token.service';
import {authService} from '../auth.services';

export function Login() {
    const [email, setEmail] = useState<string>('');
    const [, {setUser}] = useUserManager();
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
            const response = await authService.login(email, password);
            if(response) {
                setUser(response.email, response.userId)
                setToken(response.token);
                navigate('/')
            }
            console.log(response);

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