import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {DashboardContainer} from './components/dashboard/DashboardContainer';
import './App.scss';

export default function App() {
    return (
        <div className="App">
            <DashboardContainer/>
        </div>
    );
}

