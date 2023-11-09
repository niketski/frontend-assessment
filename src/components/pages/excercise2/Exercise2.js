import React from 'react';
import tabData from '../../../../data.json';

// reused  components
import Tabs from '../../containers/tabs/Tabs';
import WaveAccent from '../../waveAccent/WaveAccent';

const Exercise2 = () => {
    return (
        <div className="page-exercise-2">
            <section className="page-exercise-2__main">
                <WaveAccent
                    height="200"
                    verticalPosition="top"
                    path="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"/>
                 <WaveAccent
                    height="107"
                    verticalPosition="top"
                    color="#1a1a1a"
                    path="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Tabs tabData={tabData}/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Exercise2;