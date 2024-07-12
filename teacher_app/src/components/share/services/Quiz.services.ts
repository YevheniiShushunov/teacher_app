import axios, { AxiosResponse } from 'axios';
import { getToken } from "./Token.service";

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

    getUserProfile: async (): Promise<any> => {
        const token = getToken();
        const response = await authApi.get<any>('/auth', {
            headers: {
                'authorization': token
            }
        })

        return response.data
    },
}
