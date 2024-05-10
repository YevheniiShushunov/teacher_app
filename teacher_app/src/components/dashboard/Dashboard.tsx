import React from 'react';
import {Outlet, Route, Routes} from 'react-router-dom';
import {Header} from './header/Header';
import {Main} from './main/Main';
import {Lessons} from './lessons/Lessons';
import {Lesson} from './lesson/Lesson';
import {TopMenu} from '../top-menu/TopMenu';


export const Dashboard = () => {
    return (
        <div className="dashboard">
            <Header/>
            <TopMenu />
            <Main/>

            <Routes>
                <Route path="/lessons" element={<Lessons/>}/>
                <Route path="/lesson/:id" element={<Lesson/>}/>
            </Routes>
        </div>
    );
}