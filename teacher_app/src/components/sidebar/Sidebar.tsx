import {NavLink} from 'react-router-dom';

export function Sidebar() {
    return (
        <div className="sidebar">
            <nav className="sidebar__nav">
                <div className="item">
                    <NavLink to={"/"}>Головна</NavLink>
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