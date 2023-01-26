import {Route, Routes} from 'react-router-dom';
import {Lessons} from './lessons/Lessons';
import {Home} from './home/Home';
import React from 'react';
import {Lesson} from './lesson/Lesson';

export function Dashboard() {
    return (
       <div className="dashboard">
           <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/lessons" element={<Lessons />} />
               <Route path="/lesson/:id" element={<Lesson />} />
           </Routes>
       </div>
    )
}