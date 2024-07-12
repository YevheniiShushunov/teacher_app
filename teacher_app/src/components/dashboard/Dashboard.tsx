import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './header/Header';
import { Main } from './main/Main';
import { Lessons } from './lessons/Lessons';
import { Lesson } from './lesson/Lesson';
import { TopMenu } from '../top-menu/TopMenu';
import { ManageLesson } from "./manage-lesson/ManageLesson";
import ManageQuiz from './manage-quiz/ManageQuiz';
import QuizList from "./quiz-list/QuizList";

export const Dashboard = () => {
    return (
        <div className="dashboard">
            <Header/>
            <TopMenu/>
            <Main/>

            <Routes>
                <Route path="/lessons" element={<Lessons/>}/>
                <Route path="/lesson/:id" element={<Lesson/>}/>
                <Route path="/lessons/manage-lesson" element={<ManageLesson/>}/>
                <Route path="/manage-quiz" element={<ManageQuiz/>}/>
                <Route path="/quiz" element={<QuizList/>}/>
            </Routes>
        </div>
    );
}