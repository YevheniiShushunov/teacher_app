import {useState} from "react";
import {dividerClasses} from '@mui/material';

interface ErrorMessage {
    invalidPassword?: boolean;
    invalidEmail?: boolean;
    errorMessage?: string;
}

export function ErrorMessage({invalidPassword, invalidEmail, errorMessage}: ErrorMessage) {

    if (invalidEmail) {
        errorMessage = 'Login must be email';
    }

    if (invalidPassword) {
        errorMessage = 'Wrong email or password'
    }

    return (
        <div>
            {errorMessage}
        </div>
    )
}

