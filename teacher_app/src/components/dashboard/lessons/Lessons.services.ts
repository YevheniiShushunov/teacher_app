import axios from "axios";
import {getToken} from "../../share/Token.service";
import {LessonType} from '../../share/interfaces/lesson.type';

const baseURL = "http://localhost:4200";
const lessonAPI = axios.create({
    withCredentials: true,
    baseURL,
})

export const lessonsServices = {
    getLessons: async (currentPage: number): Promise<LessonType> => {
        const token = getToken();
        try {
            const response = await lessonAPI.get<LessonType>('/lesson', {
                headers: {
                    'currentPage': currentPage,
                    'authorization': token,
                }
            });

            return response.data;
        } catch (e: any) {
            const result = e;
            console.error(e);
            return result;
        }

    },

    createLesson: async (name: string, type: string, url: string, description: string) => {
        const token = getToken();
        try {
            return await lessonAPI.post('/lesson', {name, type, url, description}, {
                headers: {
                    'authorization': token,
                }
            });

        } catch (e: any) {
            console.error(e)
        }
    }
}