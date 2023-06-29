import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Lessons} from '../lessons/Lessons';
import {Home} from '../home/Home';
import {Login} from '../../auth/login/Login';
import {Lesson} from '../lesson/Lesson';

export function Main() {
    return (
       <div className="main">
           <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/lessons" element={<Lessons />} />
               <Route path="/lesson/:id" element={<Lesson />} />
               <Route path="/auth" element={<Login />} />
           </Routes>
       </div>
    )
}