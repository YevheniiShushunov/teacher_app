import {AxiosResponse} from 'axios';

export interface UserResponse extends AxiosResponse{
    userId: number,
    email: string
}