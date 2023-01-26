import {Header} from './header/Header';
import {Dashboard} from './dashboard/Dashboard';
import React from 'react';

export function Main() {
    return (
        <div className="main">
            <Header />
            <Dashboard />
        </div>
    );
}