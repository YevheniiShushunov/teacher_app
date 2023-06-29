import React, {useContext, useState} from 'react';
import {DashboardContainer} from './components/dashboard/DashboardContainer';
import {Sidebar} from './components/sidebar/Sidebar';
import {Dashboard} from './components/dashboard/Dashboard';
import {Login} from './components/auth/login/Login';
import {AuthContext, AuthProvider} from './components/auth/login/AuthProvider';
import './App.scss';


function App() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const {userEmail} = useContext(AuthContext)

  return (
    <div className="App">
        <AuthProvider >
            <DashboardContainer />
        </AuthProvider>
    </div>
  );
}

export default App;
