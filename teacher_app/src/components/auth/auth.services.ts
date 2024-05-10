import axios, {AxiosResponse} from 'axios';
import {UserResponse} from '../share/interfaces/user.type';
import {getToken} from '../share/Token.service';

const baseURL = "http://localhost:4200";
const authApi = axios.create({
    withCredentials: true,
    baseURL,
})

export const authService = {
    login: async (email: string, password: string) => {
        const response = await authApi.post('/auth', {email, password});
        return response.data
    },

    getUserProfile: async (): Promise<UserResponse> => {
        const token = getToken();
        const response = await authApi.get<UserResponse>('/auth', {
            headers: {
                'authorization': token
            }
        })

        return response.data
    },
}
