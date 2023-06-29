import {Header} from './header/Header';
import {Main} from './main/Main';
import React from 'react';

export function Dashboard() {
    return (
        <div className="dashboard">
            <Header />
            <Main />
        </div>
    );
}