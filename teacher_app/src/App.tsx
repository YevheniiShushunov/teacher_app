import React from 'react';
import {Sidebar} from './components/sidebar/Sidebar';
import {Main} from './components/main/Main';
import './App.scss';


function App() {
  return (
    <div className="App">
        <div className="main-container">
            <Sidebar />
           <Main />
        </div>
    </div>
  );
}

export default App;
