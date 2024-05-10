import React, {lazy} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Lessons} from '../lessons/Lessons';
import {Home} from '../home/Home';
import {Login} from '../../auth/login/Login';
import {Lesson} from '../lesson/Lesson';
import {Agreement} from '../agreement/Agreement';

export function Main() {
    // const Home = lazy(() => import('../home/Home').then(
    //         ({Home}) => ({default: Home})
    //     )
    // );

    return (
        <div className="main">
            {/*<Routes>*/}
            {/*   */}
            {/*/!*    <Route path="/home" element={<Home/>}/>*!/*/}
            {/*/!*    <Route path="/policy" element={<Agreement />}/>*!/*/}
            {/*</Routes>*/}
        </div>
    )
}