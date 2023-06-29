import {Dashboard} from './Dashboard';
import {Sidebar} from '../sidebar/Sidebar';

export function DashboardContainer() {
    return (
        <div className="main-container">
            <Sidebar/>
            <Dashboard/>
        </div>
    )
}