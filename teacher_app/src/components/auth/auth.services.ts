import axios, {AxiosResponse} from 'axios';
import {getToken} from '../share/TokenServices';

const baseURL = "http://localhost:4200";
const authApi = axios.create({
    withCredentials: true,
    baseURL,
})

export const authService =  {
    doLogin: (email: string, password: string) => {
        return authApi.post('/auth', {email, password});
    },

    getUserProfile: () => {
        const token = getToken();
        return authApi.get('/auth', {
            headers: {
                'Authorization': token
            }
        })
    },

    getAllUsers: () => {
        return authApi.get('all');
    }
}
