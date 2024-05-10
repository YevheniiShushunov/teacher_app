import React from 'react';
import {NavLink, Route, Routes} from 'react-router-dom';

export const TopMenu = () => {
    return (
        <div className="top-menu">
            <nav className="top-menu__nav">
                <div className="item">
                    <NavLink to={"/home"}>Головна</NavLink>
                </div>
                <div className="item">
                    <NavLink to={"/lessons"}>Уроки</NavLink>
                </div>
                <div className="item">
                    <NavLink to={"/materials"}>Метеріали</NavLink>
                </div>
            </nav>
        </div>
    )
}