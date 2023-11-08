import React from 'react';
import { Routes, Route, Redirect } from 'react-router-dom';

// pages
import Page404 from './pages/page404/Page404';
import Exercise1 from './pages/exercise1/Exercise1';
import Exercise2 from './pages/excercise2/Exercise2';

// app routes
const MainRoutes = () => {

    return (
        <Routes>
            <Route path="/exercise-1" element={<Exercise1/>}/>
            <Route path="/exercise-2" element={<Exercise2/>}/>
            <Route path="*" element={<Page404/>}/>
        </Routes>
    );

};

export default MainRoutes;