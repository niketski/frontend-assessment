import React from 'react';
// import './App.scss';
import MainRoutes from './mainRoutes';
import { Link } from 'react-router-dom';
 
const App = () => {

    return (
        <React.Fragment>
            <main>
                <MainRoutes/>
            </main>
        </React.Fragment>
    );

};

export default App;