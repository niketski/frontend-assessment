import React, { useEffect } from 'react';
import MainRoutes from './mainRoutes';
import AOS from 'aos';
 
const App = () => {

    useEffect(() => {

        AOS.init({
            once: true,
            duration: 1500
        });

    }, []);

    return (
        <React.Fragment>
            <main>
                <MainRoutes/>
            </main>
        </React.Fragment>
    );

};

export default App;